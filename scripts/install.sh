#!/usr/bin/env bash
# =============================================================================
# Pacoticket Site — Script de Instalação / Deploy
# =============================================================================
# Pré-requisitos no Swarm:
#   - Traefik já rodando com rede overlay 'traefik-public'
#   - PostgreSQL já rodando acessível pelo Swarm
#   - Docker com Swarm ativo
#
# Uso:
#   chmod +x scripts/install.sh
#   ./scripts/install.sh              # Setup completo (primeira vez)
#   ./scripts/install.sh --update     # Re-build + re-deploy da imagem
#   ./scripts/install.sh --dev        # Ambiente de desenvolvimento local
#   ./scripts/install.sh --migrate    # Rodar apenas migrations/seed
# =============================================================================

set -euo pipefail

# ── Cores ────────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

log()   { echo -e "${GREEN}[✓]${NC} $*"; }
info()  { echo -e "${BLUE}[→]${NC} $*"; }
warn()  { echo -e "${YELLOW}[!]${NC} $*"; }
error() { echo -e "${RED}[✗]${NC} $*"; exit 1; }
step()  { echo -e "\n${BOLD}${BLUE}══ $* ══${NC}\n"; }

# ── Diretório do projeto ──────────────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

ENV_FILE="scripts/.deploy.env"

# =============================================================================
# MODO DEV — setup local sem Docker
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
  log "Pronto! Iniciando servidor de desenvolvimento..."
  npm run dev
  exit 0
fi

# =============================================================================
# MODO MIGRATE — apenas migrations/seed no container em execução
# =============================================================================
if [[ "${1:-}" == "--migrate" ]]; then
  step "Rodando migrations e seed"
  CONTAINER=$(docker ps --filter name=pacoticket_web --format '{{.ID}}' | head -1)
  [[ -z "$CONTAINER" ]] && error "Container pacoticket_web não encontrado. O stack está rodando?"
  docker exec "$CONTAINER" sh -c "npx prisma db push && npx tsx prisma/seed.ts"
  log "Migrations concluídas."
  exit 0
fi

# =============================================================================
# MODO UPDATE — re-build e re-deploy
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
    pacoticket_web

  log "Update concluído. Aguarde a reinicialização do serviço."
  exit 0
fi

# =============================================================================
# MODO FULL — setup completo do zero
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

# ── Verificar Docker Swarm ───────────────────────────────────────────────────
docker info 2>/dev/null | grep -q "Swarm: active" || \
  error "Docker Swarm não está ativo. Rode: docker swarm init"

# ── Verificar rede traefik-public ────────────────────────────────────────────
docker network ls | grep -q "traefik-public" || \
  error "Rede 'traefik-public' não encontrada. Crie com: docker network create --driver overlay --attachable traefik-public"

# =============================================================================
# PASSO 1 — Coletar configurações
# =============================================================================
step "Configuração"

echo -e "${BOLD}Rede e domínio${NC}"
read -p "  Domínio do site (ex: pacoticket.com.br): " DOMAIN
[[ -z "$DOMAIN" ]] && error "Domínio obrigatório."

echo ""
echo -e "${BOLD}Banco de dados (PostgreSQL já existente no Swarm)${NC}"
read -p "  Host do Postgres (ex: postgres ou 10.0.0.1): " PG_HOST
PG_HOST="${PG_HOST:-postgres}"
read -p "  Porta (padrão 5432): " PG_PORT
PG_PORT="${PG_PORT:-5432}"
read -p "  Nome do banco: " PG_DB
PG_DB="${PG_DB:-pacoticket_site}"
read -p "  Usuário: " PG_USER
PG_USER="${PG_USER:-pacoticket}"
read -sp "  Senha: " PG_PASSWORD; echo
[[ -z "$PG_PASSWORD" ]] && error "Senha do banco obrigatória."

DATABASE_URL="postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}"

echo ""
echo -e "${BOLD}Admin do site${NC}"
read -p "  E-mail do admin: " ADMIN_EMAIL
[[ -z "$ADMIN_EMAIL" ]] && error "E-mail do admin obrigatório."
read -sp "  Senha do admin: " ADMIN_PASSWORD; echo
[[ -z "$ADMIN_PASSWORD" ]] && error "Senha do admin obrigatória."

echo ""
echo -e "${BOLD}Imagem Docker${NC}"
read -p "  Nome da imagem (ex: ghcr.io/usuario/pacoticket-site ou pacoticket-site): " IMAGE_NAME
IMAGE_NAME="${IMAGE_NAME:-pacoticket-site}"

USE_REGISTRY="false"
if [[ "$IMAGE_NAME" == *"/"* && "$IMAGE_NAME" == *"."* ]]; then
  USE_REGISTRY="true"
  info "Imagem com registry detectada. O push será feito automaticamente."
fi

echo ""
echo -e "${BOLD}Opcional — Cloudflare R2 (upload de imagens)${NC}"
echo "  Deixe em branco para pular. O admin aceitará URLs externas normalmente."
read -p "  R2_ACCOUNT_ID: " R2_ACCOUNT_ID
read -p "  R2_ACCESS_KEY_ID: " R2_ACCESS_KEY_ID
if [[ -n "$R2_ACCESS_KEY_ID" ]]; then
  read -sp "  R2_SECRET_ACCESS_KEY: " R2_SECRET_ACCESS_KEY; echo
  read -p "  R2_BUCKET_NAME: " R2_BUCKET_NAME
  read -p "  R2_PUBLIC_URL (ex: https://pub-xxx.r2.dev): " R2_PUBLIC_URL
fi

echo ""
echo -e "${BOLD}Opcional — Analytics${NC}"
read -p "  NEXTAUTH_URL (padrão https://${DOMAIN}): " NEXTAUTH_URL
NEXTAUTH_URL="${NEXTAUTH_URL:-https://${DOMAIN}}"

# Gerar NextAuth secret
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# ── Resumo ───────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}Resumo da configuração:${NC}"
echo "  Domínio:    $DOMAIN"
echo "  Banco:      $DATABASE_URL"
echo "  Admin:      $ADMIN_EMAIL"
echo "  Imagem:     $IMAGE_NAME:latest"
echo "  Registry:   $USE_REGISTRY"
[[ -n "${R2_ACCOUNT_ID:-}" ]] && echo "  R2:         configurado"
echo ""
read -p "Continuar? (s/N): " CONFIRM
[[ "$CONFIRM" != "s" && "$CONFIRM" != "S" ]] && { warn "Cancelado."; exit 0; }

# =============================================================================
# PASSO 2 — Criar banco de dados (se não existir)
# =============================================================================
step "Verificando banco de dados"

if docker service ls 2>/dev/null | grep -q "postgres\|postgresql"; then
  info "Serviço PostgreSQL detectado no Swarm."
  # Tentar criar o banco caso não exista
  PG_SERVICE=$(docker service ls --format '{{.Name}}' | grep -i "postgres" | head -1)
  if [[ -n "$PG_SERVICE" ]]; then
    PG_CONTAINER=$(docker ps --filter "name=${PG_SERVICE}" --format '{{.ID}}' | head -1)
    if [[ -n "$PG_CONTAINER" ]]; then
      info "Criando banco '$PG_DB' (se não existir)..."
      docker exec "$PG_CONTAINER" psql -U "${PG_USER:-postgres}" \
        -c "CREATE DATABASE ${PG_DB};" 2>/dev/null && \
        log "Banco '${PG_DB}' criado." || \
        info "Banco '${PG_DB}' já existe ou não foi possível criar automaticamente."
    fi
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

info "Construindo $IMAGE_NAME:latest ..."
docker build -t "${IMAGE_NAME}:latest" .
log "Imagem construída."

if [[ "$USE_REGISTRY" == "true" ]]; then
  info "Fazendo push para o registry..."
  docker push "${IMAGE_NAME}:latest"
  log "Imagem publicada no registry."
fi

# =============================================================================
# PASSO 4 — Gerar docker-stack.yml com as variáveis preenchidas
# =============================================================================
step "Gerando configuração do stack"

# Exportar variáveis para envsubst
export DOMAIN IMAGE_NAME DATABASE_URL NEXTAUTH_SECRET NEXTAUTH_URL
export ADMIN_EMAIL ADMIN_PASSWORD
export R2_ACCOUNT_ID="${R2_ACCOUNT_ID:-}"
export R2_ACCESS_KEY_ID="${R2_ACCESS_KEY_ID:-}"
export R2_SECRET_ACCESS_KEY="${R2_SECRET_ACCESS_KEY:-}"
export R2_BUCKET_NAME="${R2_BUCKET_NAME:-}"
export R2_PUBLIC_URL="${R2_PUBLIC_URL:-}"

# =============================================================================
# PASSO 5 — Deploy do stack
# =============================================================================
step "Deployando stack"

docker stack deploy \
  -c docker-stack.yml \
  pacoticket \
  --with-registry-auth

log "Stack deployado."

# ── Aguardar serviço web subir ───────────────────────────────────────────────
info "Aguardando aplicação inicializar (pode levar ~1 minuto)..."
for i in $(seq 1 24); do
  STATE=$(docker service ls --filter name=pacoticket_web --format '{{.Replicas}}' 2>/dev/null || echo "0/0")
  if [[ "$STATE" == "1/1" ]]; then
    log "Aplicação está rodando ($STATE)."
    break
  fi
  sleep 5
  echo -n "  [${i}/24] $STATE "
  echo ""
done

# =============================================================================
# PASSO 6 — Migrations e seed
# =============================================================================
step "Rodando migrations e seed"

info "Aguardando o serviço migrate executar..."
sleep 20

MIGRATE_LOG=$(docker service logs pacoticket_migrate 2>&1 | tail -5)
info "Últimas linhas do log de migrate:"
echo "$MIGRATE_LOG"

# Se o migrate não rodou via stack, rodar manualmente
WEB_CONTAINER=$(docker ps --filter name=pacoticket_web --format '{{.ID}}' | head -1)
if [[ -n "$WEB_CONTAINER" ]]; then
  info "Rodando migrations diretamente no container..."
  docker exec "$WEB_CONTAINER" sh -c "npx prisma db push --skip-generate && npx tsx prisma/seed.ts" && \
    log "Migrations e seed concluídos." || \
    warn "Erro nas migrations. Verifique os logs e rode: ./scripts/install.sh --migrate"
fi

# =============================================================================
# PASSO 7 — Salvar configuração
# =============================================================================
step "Salvando configuração para updates futuros"

mkdir -p scripts
cat > "$ENV_FILE" <<ENVFILE
# Gerado por install.sh — NÃO commitar (já está no .gitignore)
IMAGE_NAME="${IMAGE_NAME}"
DOMAIN="${DOMAIN}"
USE_REGISTRY="${USE_REGISTRY}"
ENVFILE

# Garantir que não seja commitado
grep -q ".deploy.env" .gitignore 2>/dev/null || echo "scripts/.deploy.env" >> .gitignore
grep -q ".secrets.txt"  .gitignore 2>/dev/null || echo "scripts/.secrets.txt"  >> .gitignore

# Salvar segredos gerados em arquivo separado
cat > scripts/.secrets.txt <<SECRETS
# GUARDE EM LOCAL SEGURO E DELETE APÓS ANOTAR
NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
DATABASE_URL=${DATABASE_URL}
ADMIN_EMAIL=${ADMIN_EMAIL}
ADMIN_PASSWORD=${ADMIN_PASSWORD}
SECRETS
chmod 600 scripts/.secrets.txt

log "Configuração salva em $ENV_FILE"
warn "Segredos salvos em scripts/.secrets.txt — guarde-os e delete do servidor!"

# =============================================================================
# PASSO 8 — Resumo final
# =============================================================================
step "Instalação concluída!"

echo -e "${GREEN}${BOLD}"
echo "  ✓ Pacoticket Site está no ar!"
echo -e "${NC}"
echo -e "${BOLD}URLs:${NC}"
echo "  Site:  https://${DOMAIN}"
echo "  Admin: https://${DOMAIN}/admin"
echo "  Login: ${ADMIN_EMAIL}"
echo ""
echo -e "${BOLD}Comandos úteis:${NC}"
cat <<'CMDS'
  docker service ls                          # listar serviços
  docker service logs pacoticket_web -f      # logs da app em tempo real
  docker service logs pacoticket_migrate     # logs das migrations
  ./scripts/install.sh --update              # re-deploy após mudanças no código
  ./scripts/install.sh --migrate             # rodar migrations manualmente
  ./scripts/install.sh --dev                 # iniciar ambiente local
CMDS
echo ""
