#!/usr/bin/env bash
# =============================================================================
# Pacoticket Site — Script de Instalação / Deploy
# =============================================================================
# Pré-requisitos no Swarm:
#   - Traefik rodando com rede overlay 'network_swarm_public'
#   - PostgreSQL acessível pelo Swarm
#   - Docker com Swarm ativo
#
# Uso:
#   chmod +x scripts/install.sh
#   ./scripts/install.sh              # Setup completo (primeira vez)
#   ./scripts/install.sh --update     # Re-build + re-deploy da imagem
#   ./scripts/install.sh --dev        # Ambiente de desenvolvimento local
#   ./scripts/install.sh --migrate    # Rodar migrations/seed no container ativo
# =============================================================================

set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

log()   { echo -e "${GREEN}[✓]${NC} $*"; }
info()  { echo -e "${BLUE}[→]${NC} $*"; }
warn()  { echo -e "${YELLOW}[!]${NC} $*"; }
error() { echo -e "${RED}[✗]${NC} $*"; exit 1; }
step()  { echo -e "\n${BOLD}${BLUE}══ $* ══${NC}\n"; }

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

ENV_FILE="scripts/.deploy.env"

# =============================================================================
# MODO DEV
# =============================================================================
if [[ "${1:-}" == "--dev" ]]; then
  step "Ambiente de desenvolvimento local"

  command -v node >/dev/null || error "Node.js não encontrado. Instale v20+ em https://nodejs.org"

  if [[ ! -f ".env.local" ]]; then
    cp .env.example .env.local
    warn ".env.local criado. Edite com seus valores antes de continuar."
    warn "Campos obrigatórios: DATABASE_URL, NEXTAUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD"
    read -p "Pressione ENTER após editar o arquivo..."
  fi

  npm install
  npx prisma generate
  npx prisma db push
  npm run db:seed
  log "Pronto! Iniciando..."
  npm run dev
  exit 0
fi

# =============================================================================
# MODO MIGRATE
# =============================================================================
if [[ "${1:-}" == "--migrate" ]]; then
  step "Rodando migrations e seed"
  CONTAINER=$(docker ps --filter name=pacoticket_web --format '{{.ID}}' | head -1)
  [[ -z "$CONTAINER" ]] && error "Container pacoticket_web não encontrado."
  docker exec "$CONTAINER" sh -c "npx prisma db push --skip-generate && npx tsx prisma/seed.ts"
  log "Migrations concluídas."
  exit 0
fi

# =============================================================================
# MODO UPDATE
# =============================================================================
if [[ "${1:-}" == "--update" ]]; then
  step "Re-deploy da aplicação"
  [[ ! -f "$ENV_FILE" ]] && error "$ENV_FILE não encontrado. Rode ./scripts/install.sh primeiro."
  source "$ENV_FILE"

  info "Build da nova imagem..."
  docker build -t "${IMAGE_NAME}:latest" .

  if [[ "${USE_REGISTRY:-false}" == "true" ]]; then
    info "Push para o registry..."
    docker push "${IMAGE_NAME}:latest"
  fi

  info "Atualizando serviço no Swarm..."
  docker service update \
    --image "${IMAGE_NAME}:latest" \
    --with-registry-auth \
    --force \
    pacoticket_pacoticket_web

  log "Update concluído."
  exit 0
fi

# =============================================================================
# MODO FULL
# =============================================================================

echo -e "${BOLD}"
cat <<'BANNER'
  ____                    _   _      _        _
 |  _ \ __ _  ___ ___   | |_(_) ___| | _____| |_
 | |_) / _` |/ __/ _ \  | __| |/ __| |/ / _ \ __|
 |  __/ (_| | (_| (_) | | |_| | (__|   <  __/ |_
 |_|   \__,_|\___\___/   \__|_|\___|_|\_\___|\__|
 Site Institucional — Setup Completo
BANNER
echo -e "${NC}"

# ── Verificar Swarm ──────────────────────────────────────────────────────────
docker info 2>/dev/null | grep -q "Swarm: active" || \
  error "Docker Swarm não está ativo. Rode: docker swarm init"

# ── Verificar rede ───────────────────────────────────────────────────────────
docker network ls | grep -q "network_swarm_public" || \
  error "Rede 'network_swarm_public' não encontrada. Verifique se o Traefik está rodando."

# =============================================================================
# PASSO 1 — Configurações
# =============================================================================
step "Configuração"

echo -e "${BOLD}Domínio${NC}"
read -p "  Domínio do site (ex: pacoticket.com.br): " DOMAIN
[[ -z "$DOMAIN" ]] && error "Domínio obrigatório."

echo ""
echo -e "${BOLD}Swarm${NC}"
read -p "  Hostname do nó manager (ex: manager-jedy): " MANAGER_HOSTNAME
[[ -z "$MANAGER_HOSTNAME" ]] && error "Hostname do manager obrigatório."

echo ""
echo -e "${BOLD}Banco de dados (PostgreSQL já existente)${NC}"
read -p "  Host do Postgres (ex: postgres ou IP): " PG_HOST
PG_HOST="${PG_HOST:-postgres}"
read -p "  Porta [5432]: " PG_PORT
PG_PORT="${PG_PORT:-5432}"
read -p "  Nome do banco [pacoticket_site]: " PG_DB
PG_DB="${PG_DB:-pacoticket_site}"
read -p "  Usuário [pacoticket]: " PG_USER
PG_USER="${PG_USER:-pacoticket}"
read -sp "  Senha: " PG_PASSWORD; echo
[[ -z "$PG_PASSWORD" ]] && error "Senha do banco obrigatória."

DATABASE_URL="postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}"

echo ""
echo -e "${BOLD}Admin do site${NC}"
read -p "  E-mail: " ADMIN_EMAIL
[[ -z "$ADMIN_EMAIL" ]] && error "E-mail obrigatório."
read -sp "  Senha: " ADMIN_PASSWORD; echo
[[ -z "$ADMIN_PASSWORD" ]] && error "Senha obrigatória."

echo ""
echo -e "${BOLD}Imagem Docker${NC}"
read -p "  Nome da imagem [pacoticket-site]: " IMAGE_NAME
IMAGE_NAME="${IMAGE_NAME:-pacoticket-site}"

USE_REGISTRY="false"
if [[ "$IMAGE_NAME" == *"."*"/"* ]]; then
  USE_REGISTRY="true"
  info "Registry remoto detectado. Push será feito automaticamente."
fi

echo ""
echo -e "${BOLD}Cloudflare R2 (upload de imagens — opcional, ENTER para pular)${NC}"
read -p "  R2_ACCOUNT_ID: " R2_ACCOUNT_ID
if [[ -n "${R2_ACCOUNT_ID:-}" ]]; then
  read -p "  R2_ACCESS_KEY_ID: " R2_ACCESS_KEY_ID
  read -sp "  R2_SECRET_ACCESS_KEY: " R2_SECRET_ACCESS_KEY; echo
  read -p "  R2_BUCKET_NAME: " R2_BUCKET_NAME
  read -p "  R2_PUBLIC_URL (ex: https://pub-xxx.r2.dev): " R2_PUBLIC_URL
fi

NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL="https://${DOMAIN}"

# ── Resumo ───────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}Resumo:${NC}"
echo "  Domínio:     $DOMAIN"
echo "  Manager:     $MANAGER_HOSTNAME"
echo "  Banco:       $DATABASE_URL"
echo "  Admin:       $ADMIN_EMAIL"
echo "  Imagem:      ${IMAGE_NAME}:latest"
[[ -n "${R2_ACCOUNT_ID:-}" ]] && echo "  R2:          configurado"
echo ""
read -p "Continuar? (s/N): " CONFIRM
[[ "$CONFIRM" != "s" && "$CONFIRM" != "S" ]] && { warn "Cancelado."; exit 0; }

# =============================================================================
# PASSO 2 — Criar banco (se possível)
# =============================================================================
step "Verificando banco de dados"

PG_SERVICE=$(docker service ls --format '{{.Name}}' 2>/dev/null | grep -i "postgres" | head -1 || true)
if [[ -n "$PG_SERVICE" ]]; then
  PG_CONTAINER=$(docker ps --filter "name=${PG_SERVICE}" --format '{{.ID}}' | head -1 || true)
  if [[ -n "$PG_CONTAINER" ]]; then
    info "Criando banco '${PG_DB}' (se não existir)..."
    docker exec "$PG_CONTAINER" psql -U "${PG_USER}" \
      -c "CREATE DATABASE ${PG_DB};" 2>/dev/null \
      && log "Banco '${PG_DB}' criado." \
      || info "Banco '${PG_DB}' já existe."
  fi
else
  warn "Serviço PostgreSQL não detectado automaticamente."
  warn "Certifique-se de que o banco '${PG_DB}' existe antes de continuar."
  read -p "O banco já existe? (s/N): " DB_EXISTS
  [[ "$DB_EXISTS" != "s" && "$DB_EXISTS" != "S" ]] && \
    error "Crie o banco primeiro: CREATE DATABASE ${PG_DB};"
fi

# =============================================================================
# PASSO 3 — Build da imagem
# =============================================================================
step "Build da imagem Docker"

info "Construindo ${IMAGE_NAME}:latest ..."
docker build -t "${IMAGE_NAME}:latest" .
log "Imagem construída."

if [[ "$USE_REGISTRY" == "true" ]]; then
  info "Push para o registry..."
  docker push "${IMAGE_NAME}:latest"
  log "Imagem publicada."
fi

# =============================================================================
# PASSO 4 — Deploy do stack
# =============================================================================
step "Deployando stack no Swarm"

export IMAGE_NAME DOMAIN MANAGER_HOSTNAME
export DATABASE_URL NEXTAUTH_SECRET NEXTAUTH_URL
export ADMIN_EMAIL ADMIN_PASSWORD
export R2_ACCOUNT_ID="${R2_ACCOUNT_ID:-}"
export R2_ACCESS_KEY_ID="${R2_ACCESS_KEY_ID:-}"
export R2_SECRET_ACCESS_KEY="${R2_SECRET_ACCESS_KEY:-}"
export R2_BUCKET_NAME="${R2_BUCKET_NAME:-}"
export R2_PUBLIC_URL="${R2_PUBLIC_URL:-}"

docker stack deploy \
  -c docker-stack.yml \
  pacoticket \
  --with-registry-auth

log "Stack deployado."

# ── Aguardar web ─────────────────────────────────────────────────────────────
info "Aguardando aplicação inicializar..."
for i in $(seq 1 24); do
  STATE=$(docker service ls --filter name=pacoticket_pacoticket_web \
    --format '{{.Replicas}}' 2>/dev/null || echo "0/1")
  echo "  [${i}/24] $STATE"
  [[ "$STATE" == "1/1" ]] && { log "Aplicação rodando."; break; }
  sleep 5
done

# =============================================================================
# PASSO 5 — Migrations
# =============================================================================
step "Aguardando migrations"

info "Aguardando serviço migrate concluir..."
sleep 20

info "Log do migrate:"
docker service logs pacoticket_pacoticket_migrate 2>&1 | tail -8 || true

# Fallback: rodar no container web se o migrate falhou
WEB_CONTAINER=$(docker ps --filter name=pacoticket_pacoticket_web \
  --format '{{.ID}}' | head -1 || true)
if [[ -n "$WEB_CONTAINER" ]]; then
  info "Verificando migrations via container web..."
  docker exec "$WEB_CONTAINER" sh -c \
    "npx prisma db push --skip-generate && npx tsx prisma/seed.ts" \
    && log "Migrations OK." \
    || warn "Erro nas migrations. Rode: ./scripts/install.sh --migrate"
fi

# =============================================================================
# PASSO 6 — Salvar configuração
# =============================================================================
step "Salvando configuração"

mkdir -p scripts
cat > "$ENV_FILE" <<ENVFILE
IMAGE_NAME="${IMAGE_NAME}"
DOMAIN="${DOMAIN}"
MANAGER_HOSTNAME="${MANAGER_HOSTNAME}"
USE_REGISTRY="${USE_REGISTRY}"
ENVFILE

cat > scripts/.secrets.txt <<SECRETS
NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
DATABASE_URL=${DATABASE_URL}
ADMIN_EMAIL=${ADMIN_EMAIL}
ADMIN_PASSWORD=${ADMIN_PASSWORD}
SECRETS
chmod 600 scripts/.secrets.txt

# Garantir que não vão para o git
for ENTRY in "scripts/.deploy.env" "scripts/.secrets.txt"; do
  grep -qF "$ENTRY" .gitignore 2>/dev/null || echo "$ENTRY" >> .gitignore
done

log "Configuração salva em $ENV_FILE"
warn "Segredos em scripts/.secrets.txt — guarde-os e delete do servidor!"

# =============================================================================
# Resumo final
# =============================================================================
step "Instalação concluída!"

echo -e "${GREEN}${BOLD}  ✓ Pacoticket está no ar!${NC}"
echo ""
echo -e "${BOLD}URLs:${NC}"
echo "  Site:  https://${DOMAIN}"
echo "  Admin: https://${DOMAIN}/admin  →  ${ADMIN_EMAIL}"
echo ""
echo -e "${BOLD}Comandos úteis:${NC}"
echo "  docker service ls                                  # listar serviços"
echo "  docker service logs pacoticket_pacoticket_web -f  # logs da app"
echo "  docker service logs pacoticket_pacoticket_migrate # logs do migrate"
echo "  ./scripts/install.sh --update                     # re-deploy após mudanças"
echo "  ./scripts/install.sh --migrate                    # rodar migrations"
echo "  ./scripts/install.sh --dev                        # dev local"
echo ""
