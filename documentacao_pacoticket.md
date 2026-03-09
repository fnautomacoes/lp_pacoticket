# 📘 Documentação PacoTicket

> Documentação completa da plataforma PacoTicket — Central de Atendimento Omnichannel via WhatsApp.

> Fonte: https://help.pacoticket.com.br


---

## Índice

1. [Primeiros Passos](#primeiros-passos)
   - Visão Geral do Sistema
   - Adicionar a Primeira Conexão
   - Vincular uma Fila à Conexão
   - Definir Equipe e permissões
2. [Meu Perfil](#meu-perfil)
   - Status do Perfil
   - Editar Perfil ou Alterar Senha
   - Recuperar Senha
3. [Chats / Tickets](#chats--tickets)
   - Chats – Visão Geral
   - Tickets Abertos / Encerrados
   - Aguardando / Atendendo
   - Informações do Ticket
   - Informações do Contato
   - Novo Chat
   - Ações de Mensagem
   - Ações do Ticket
   - – Devolver a Fila
   - – Transferir Ticket
   - – Encerrar Ticket
   - Alertas Vermelhos no Chat
4. [Atendimento Otimizado](#atendimento-otimizado)
   - Mensagem de Ausência
   - Mensagem de Aniversário
   - Mensagem de Encerramento
   - Mustaches
   - Mover após (Aguardando)
   - Encerrar por Inatividade (Atendendo)
   - Avise-me
   - Siga-me
   - Avaliações
   - Carteira de Clientes
   - Rodízio de Atendimento
5. [Suite Tools](#suite-tools)
   - Como Instalar
   - Central de Plugins
   - Plugins
6. [Contatos](#contatos)
   - Visão Geral Contatos
   - Adicionar Contato
   - Editar Contato
   - Excluir Contato
   - Bloquear Contato
   - Pesquisar Contato
   - Iniciar Conversa com um Contato
   - Importar Contatos (planilha)
   - Importar Contatos (telefone)
   - Exportar Contatos
7. [Tarefas](#tarefas)
   - Visão Geral Tarefas
   - Adicionar Tarefa
   - Adicionar Tarefa ao Ticket
   - Editar Tarefa
   - Excluir Tarefa
   - Comentar Tarefa
   - Compartilhar Tarefa
   - Concluir Tarefa
8. [Agendamento](#agendamento)
9. [Tags](#tags)
   - Visão Geral Tags
   - Tipos de Tags
   - Tags de Atendimento
   - Tags de Encerramento
   - Tags de CRM
   - Adicionar Tag
   - Editar Tag
   - Excluir Tag
   - Kanban de Tags
   - Pixel Meta em Tags
   - Remarketing em Tags
10. [Respostas Rápidas](#respostas-rápidas)
   - Resposta Rápida Envio de Texto
   - Resposta Rápida Envio de Mídia
   - Resposta Rápida Envio de Contato
   - Resposta Rápida Envio de Localização
   - Resposta Rápida de Fluxo
   - Editar Resposta Rápida
   - Excluir Resposta Rápida
   - Ideias de Respostas Rápidas
11. [Campanhas](#campanhas)
   - Configurar Campanhas
   - Fontes de Contatos para Campanhas
   - Nova Campanha
   - Nova Campanha API Oficial
12. [Conexões](#conexões)
   - Visão Geral Conexões
   - WhatsApp API QRCode
   - WhatsApp API Oficial
   - Instagram
   - Telegram
   - Web Chat
13. [Filas & Chatbot](#filas--chatbot)
   - Visão Geral Filas & Chatbot
   - Categorias de Filas
14. [Equipe](#equipe)
   - Tipos de Perfil
15. [Inteligência Artificial](#inteligência-artificial)
   - * Pré-Requisitos IA
   - Transcrever Áudios
   - Análise de Atendimento
   - GPT Assistant
16. [FlowBuilder](#flowbuilder)
   - Visão Geral FlowBuilder
   - Categorias de Fluxos
   - Pontos de Entrada (Gatilho)
   - Blocos
17. [Webhooks](#webhooks)
   - Webhook x API
   - Webhook da Conexão
   - Webhook de Filas
   - Webhook Eventos
   - Webhook Triggers
   - Arquivos no Webhook
18. [APIs](#apis)
   - * Pré-Requisitos APIs
   - * Conteúdos sobre APIs
   - Mensagem
   - Mídias
   - Ticket
   - Contatos
   - Filas
   - Equipe
   - Tags
   - Tarefas
   - Extras
   - API Oficial
19. [Configurações](#configurações)
   - Armazenamento Remoto de Arquivos
20. [Integrações](#integrações)
   - Token da Conexão
   - Token OpenAI
   - Access Token Meta
   - n8n via Webhook
   - n8n via Flowbuilder
21. [Perguntas Frequentes](#perguntas-frequentes)
   - Como atualizar o cache
   - Como Migrar Conexões
22. [Problema / Solução](#problema--solução)
   - Aguardando mensagem. Essa ação pode levar alguns instantes.
   - API não funciona
   - Conexão desconectada
   - Conexão não lê o QR CODE
   - Mensagem não aparece no Aguardando
   - Ticket em Atendimento voltando para o Aguardando
   - Missing Body in Payload
23. [Aplicativo](#aplicativo)
   - Como Instalar o PWA
   - Notificações Push
24. [META](#meta)
   - Portfólio Empresarial (BM)
   - Conteúdos sobre API Oficial
25. [Contato para Suporte](#contato-para-suporte)

---

## Primeiros Passos

> 🔗 [https://help.pacoticket.com.br/principal/primeiros-passos/](https://help.pacoticket.com.br/principal/primeiros-passos/)

###  A Tríade - Conexão, Fila e Equipe**👋 Bem-vindo ao Pacoticket**Parabéns! Você acaba de dar o passo mais importante para profissionalizar o atendimento da sua empresa. Sabemos que encarar um painel novo cheio de botões pode parecer intimidante no início, mas não se preocupe:**nós desenhamos um passo a passo simples para tornar tudo mais fácil para você.******O objetivo desta seção não é ensinar tudo o que o sistema faz (afinal, são muitos detalhes), mas sim focar no**Essencial para começar**.**Nossa promessa:**Se você seguir os guias abaixo na ordem, em poucos minutos você terá seu WhatsApp conectado, seus departamentos criados e sua equipe pronta para atender. 🚀**O que vem por aí?**Preparamos uma jornada expressa dividida em 5 etapas curtas:**☑️ Visão Geral do Sistema:**Uma visão rápida para você entender a lógica de “Quem atende quem” e não cometer erros básicos de organização.**☑️ Conectando seu Canal:**O passo prático. Vamos integrar sua conexão de WhatsApp na plataforma.**☑️ Criando Departamentos (Filas):**Vamos organizar a casa. Você aprenderá a criar as “Filas” (Comercial, Suporte, Financeiro) para onde os clientes serão direcionados.**☑️ Montando a Equipe (Usuários):**A hora de trazer reforços. Vamos criar os logins dos seus atendentes e definir quais filas cada um pode acessar. 💡**Dica de Ouro:**Não pule etapas!  Está pronto para transformar seu atendimento? Clique no link abaixo para começar pelo**Visão Geral do Sistema**.



---

### Visão Geral do Sistema

> 🔗 [https://help.pacoticket.com.br/principal/primeiros-passos/visao-geral-do-sistema/](https://help.pacoticket.com.br/principal/primeiros-passos/visao-geral-do-sistema/)

🧩**A Visão Geral**é o guia essencial para entender como**Pacoticket**organiza o seu atendimento. Antes de começar a configurar, é fundamental entender a hierarquia das informações para não se perder. O sistema não é apenas um “WhatsApp Web melhorado”; ele é um Hub de Distribuição Inteligente desenhado sob 3 pilares fundamentais:**Conexões, Filas e Equipe**. Vamos agora: ☑️**Entender o Fluxo:**saber o caminho exato que a mensagem do cliente percorre até chegar na tela do seu atendente. ☑️**Planejar a Organização:**definir quais departamentos você precisa criar antes de cadastrar a equipe. ☑️**Evitar Erros de Configuração:**impedir situações onde o atendente faz login mas não vê nenhuma mensagem porque não foi colocado na “sala” certa. 💭 Pense na plataforma como um prédio comercial: existe uma portaria (Conexão), salas de espera (Filas) e os funcionários que atendem (Equipe). 
#####  Resumo Prático
 ➡️ Cliente envia uma mensagem: “Oi” ➡️ Sistema Recebe (Conexão) ➡️ Direciona para o Departamento (Fila) ➡️ Equipe atende (Usuário) 
###  As**Conexões**representam as contas do WhatsApp (ou outros canais de atendimento como Instagram, Telegram, Webchat, etc) que você conecta à nossa ferramenta. É por onde o cliente chega.**O que são?**São os canais de comunicação conectados ao sistema.**Como funcionam?**Cada canal (WhatsApp, Telegram, Webchat, etc) que você adicionar será tratado como uma conexão independente.**Exemplo prático:**Se sua empresa tem um número exclusivo para atendimento ao cliente e outro para vendas, você adiciona ambos como conexões separadas. 💡**Dica:**Nomeie as filas de forma clara para que a equipe identifique rapidamente para onde transferir o cliente. 
### Filas (As Salas de Espera)
 As**Filas**são como departamentos ou categorias para organizar seus atendimentos e conversas. Assim que o cliente passa pela porta, ele precisa ser direcionado para uma dessas “Salas”.**O que são?**São divisões criadas para separar os assuntos (Setores).**Como funcionam?**Cada conversa é atribuída a uma fila específica. Isso facilita o direcionamento para o departamento correto.**Exemplo prático:**Você pode criar uma fila chamada**“Suporte Técnico”**para questões técnicas e outra chamada**“Vendas”**para consultas comerciais. 💡**Dica:**Nomeie as filas de forma clara para que a equipe identifique rapidamente para onde transferir o cliente. 
### Equipe (Quem Atende)
 A**Equipe**é composta pelos usuários que terão acesso às conexões e filas. É aqui que você define quem pode ver e gerenciar cada tipo de atendimento.**O que é?**São os integrantes (humanos) da sua equipe que terão acesso às mensagens e atendimentos.**Como funciona?**Você pode atribuir permissões específicas para cada atendente, definindo quais filas eles podem visualizar.**Exemplo prático:**O time de vendas pode acessar apenas as conversas da fila**“Vendas”**, enquanto o técnico acessa apenas a fila**“Suporte Técnico”**. 💡**Dica:**Organize sua equipe com base nas responsabilidades e evite sobrecarregar os atendentes com filas que não fazem parte de suas atribuições. 
###**Hora de começar**Agora que você entendeu a estrutura, siga estritamente a ordem lógica dos nossos próximos guias para configurar sua conta.



---

### Adicionar a Primeira Conexão

> 🔗 [https://help.pacoticket.com.br/principal/primeiros-passos/adicionar-a-primeira-conexao/](https://help.pacoticket.com.br/principal/primeiros-passos/adicionar-a-primeira-conexao/)

🧩**Adicionar sua Primeira Conexão**para ser a porta de entrada da comunicação entre seu cliente e sua empresa. É através dessa “ponte” que o sistema conseguirá ler as mensagens que chegam e enviar suas respostas. ⚠️ Nunca utilize WhatsApp comum, sempre utilize uma conta do app**WhatsApp Business**. Abra o App no celular pelo menos 1 vez a cada 14 dias para não perder o vínculo da conexão. 
#####  Resumo Prático
 ➡️  Acesse o menu**Conexões**. ➡️  Clique no botão**+ Adicionar WhatsApp**. ➡️  Preencha os**campos**mínimos e clique no botão**Adicionar**. 
### Como Adicionar uma Conexão
 Acesse o menu: Conexões Adicionar WhatsApp**digite o título da sua conexão, usado para identificação na lista de conexões e também exibido nos tickets de seus atendimentos. 🔘**Padrão:**Determine se essa conexão será definida como padrão.**Regra de ouro:**é necessário sempre ter uma conexão marcada como Padrão.**⚠️⚠️⚠️**Como toda conexão é uma porta de entrada que direciona para uma Fila (sala de espera), precisaremos configurar uma Fila nessa conexão. Voltaremos para ajusta essa configuração após criamos uma fila no próximo passo. 
### Como ativar uma Conexão WhatsApp
 Ainda no menu: Conexões , na conexão desejada, clique em**QR CODE**e utilize o aplicativo WhatsApp no seu celular para escanear o código exibido (geralmente em**Configurações > Dispositivos Conectados**). 
### Próximo Passo
 ☑️ Vamos criar uma**Fila**– que será a nossa sala de espera – e vincular à conexão para que os atendimentos sejam direcionados. 
####  ❔ Dúvidas Comuns**Posso conectar WhatsApp Business ou Pessoal?**Recomendamos fortemente o uso do**WhatsApp Business**para garantir mais estabilidade na conexão.**Posso conectar mais de um número?**Sim, depende do seu plano contratado. Cada número será uma “Conexão” diferente na lista e pode ter filas e automações totalmente independentes.**O que fazer se o WhatsApp desconectar da plataforma?**Se o status ficar “Desconectado”, basta clicar no botão**QR Code**novamente e ler o código com o celular. 
###  ✖️ Erros Comuns**Usar WhatsApp Pessoal:**Gera instabilidade e quedas frequentes.**Solução:**Utilize sempre o app**WhatsApp Business**.**Não marcar como “Padrão”:**O sistema não saberá por onde enviar mensagens ativas.**Solução:**Garanta que a opção “Padrão” esteja marcada na criação.**Celular inativo por 14 dias:**A Meta desconecta o vínculo por segurança.**Solução:**Abra o app no celular físico pelo menos uma vez a cada duas semanas.



---

### Vincular uma Fila à Conexão

> 🔗 [https://help.pacoticket.com.br/principal/primeiros-passos/vincular-uma-fila-a-conexao/](https://help.pacoticket.com.br/principal/primeiros-passos/vincular-uma-fila-a-conexao/)

🧩 Agora que definimos a porta de entrada, precisamos garantir que o atendimento tenha para onde ir. Vamos preparar a**sala de espera**e vinculá-la à conexão. Para isso, vamos criar uma ou mais**Filas**. Elas funcionam como departamentos ou categorias para organizar suas conversas. Pense nas filas como os setores onde cada usuário terá acesso. 
#####  Resumo Prático
 ➡️  Acesse o menu**Filas & Chatbot**. ➡️  Clique no botão**Adicionar Fila**. ➡️  Preencha os**campos**mínimos e clique no botão**Adicionar**. 
### Como Adicionar uma Fila
 Acesse o menu: Filas & Chatbot Adicionar Fila Na nova janela você encontrará várias opções, incluindo algumas avançadas. Por agora, vamos focar apenas nas configurações essenciais. Os demais campos serão explicados em outras guias. Defina os seguintes campos: 🔘**Nome:**digite o título da fila, usado para identificação na lista de Filas e também exibido nos tickets de seus atendimentos. 🔘**Ordenação:**defina um número para determinar a ordem em que essa Fila será exibida na lista de Filas. 🔘**Cor:**selecione uma cor para rápida identificação visual na lista de filas e em seus tickets. 
### Vincular a Fila a uma Conexão
Com a Conexão e ao menos uma Fila já criadas, retorne ao menu Conexões editar**⚡**Na aba**Filas & Tempos**🔘**Filas:**Selecione uma Fila. —- ⚠️⚠️⚠️ Se um cliente mandar mensagem e o sistema não souber para qual fila mandar (por falta de configuração), esse ticket pode ficar invisível para os atendentes que têm permissão restrita. 
### Próximo Passo
 ☑️ Cadastrar sua**Equipe**de atendimento e definir quais filas eles terão permissão de atender. 
####  ❔ Dúvidas Comuns**O cliente sabe em qual fila está?**Não explicitamente. Ele apenas recebe o atendimento. A divisão de filas é uma organização**interna**para sua empresa.**Posso transferir um cliente de uma fila para outra?**Sim! Durante o atendimento, se o vendedor perceber que o cliente precisa de ajuda técnica, ele clica no botão de transferência e joga o ticket da fila “Vendas” para a fila “Suporte”. 
###  ✖️ Erros Comuns**Esquecer de vincular na Conexão:**O erro nº 1. A fila é criada, mas o sistema não sabe que ela pertence àquele WhatsApp.**Solução:**Após salvar a fila, volte no menu Conexões, edite o WhatsApp e adicione a fila na aba “Filas & Tempos”.**Tickets “Invisíveis”:**O cliente manda mensagem e ninguém vê.**Solução:**Isso ocorre se a conexão não tiver uma fila vinculada. O ticket fica “sem fila” e usuários restritos não o enxergam.



---

### Definir Equipe e permissões

> 🔗 [https://help.pacoticket.com.br/principal/primeiros-passos/definir-equipe-e-permissoes/](https://help.pacoticket.com.br/principal/primeiros-passos/definir-equipe-e-permissoes/)

🧩 Com a sala de espera pronta, precisamos agora de**pessoas**para receber os clientes. O maior diferencial do**Pacoticket**é permitir que várias pessoas atendam pelo mesmo número de WhatsApp ao mesmo tempo, mas cada uma na sua área. Nesta etapa, vamos cadastrar sua**Equipe**e associar para quais departamentos cada membro terá permissão de atender. 
#####  Resumo Prático
 ➡️  Acesse o menu**Equipe**. ➡️  Clique no botão**Adicionar Usuário**. ➡️  Preencha os**campos**mínimos e clique no botão**Adicionar**. 
### Como Adicionar um Usuário e selecionar as Filas que ele tem permissão de atender
 Acesse o menu: Equipe Adicionar Usuário Na nova janela você encontrará várias opções, incluindo algumas avançadas. Para este momento, vamos focar apenas nas configurações essenciais. Os demais campos serão explicados em outras guias. Defina os seguintes campos: 🔘**Nome:**digite o nome do usuário, usado para identificação na lista de Usuários, também exibido nos tickets de seus atendimentos e nas assinaturas de mensagens (quando habilitado). 🔘**Senha:**password do usuário para acessar o sistema. 🔘**Número:**digite o celular particular do usuário. Utilizar**somente números**e no formato (DDIDDDnúmero) O preenchimento deste campo não é obrigatório, mas o**número**pode ser utilizado para habilitar a recuperação de senha, ativar a funcionalidade de siga-me, entre outras opções que serão detalhadas em guias futuras. 🔘**E-mail:**digite o email que o usuário utilizará para acessar o sistema, em combinação com a senha. 🔘**Perfil****:**escolha o nível de permissões atribuído ao usuário:**User**: Usuário padrão, com acessos mais restritos.**Supervisor**: Usuário com permissões intermediárias.**Admin**: Usuário com acesso total e todas as permissões. Detalharemos cada tipo de perfil em guias futuras. 🔘**Filas****:**escolha uma ou mais Filas que o usuário terá permissão para visualizar e atender as mensagens. 
### Tudo Pronto!
 ☑️ Conexão criar (sua porta de entrada). ☑️ Filas (departamentos) definidos, e uma delas conectada à conexão. ☑️ Equipe formada com suas devidas permissões! A partir de agora, cada nova mensagem gera automaticamente um ticket, que será**direcionado ao departamento responsável**para que um atendente autorizado inicie o suporte. 
###  ✖️ Erros Comuns**Atendente com “Tela em Branco”:**O usuário loga mas não vê nenhum ticket.**Solução:**Edite o cadastro dele e marque as caixas das**Filas**que ele tem permissão para atender.**Erro no E-mail:**O funcionário não consegue logar.**Solução:**Confira a digitação do e-mail, pois ele é o login único e não pode ser alterado facilmente depois.**Formato do Telefone:**Usar traços ou parênteses.**Solução:**Digite apenas números no padrão DDI+DDD+Número (Ex: 5511999998888).




---


## Meu Perfil

> 🔗 [https://help.pacoticket.com.br/principal/meu-perfil/](https://help.pacoticket.com.br/principal/meu-perfil/)

###  Personalize do seu jeito!  O**Perfil**é o local ideal onde cada atendente (ou administrador) gerencia sua própria segurança, preferências e configurações dentro do**Pacoticket**. ☑️**Segurança:**alterar sua senha de login periodicamente. ☑️**Personalização:**configure seus dados pessoais, mensagens automáticas, status e integrações.



---

### Status do Perfil

> 🔗 [https://help.pacoticket.com.br/principal/meu-perfil/status-do-perfil/](https://help.pacoticket.com.br/principal/meu-perfil/status-do-perfil/)

🧩**O Status do Perfil**é a chave que diz ao sistema se você está disponível para trabalhar ou não. Ele funciona como o “bater ponto” digital. Quando você define seu status, você influencia diretamente a distribuição automática de tickets. Ideal para: ☑️**Pausas e Almoço:**ficar “Offline” para que o robô pare de jogar novos atendimentos na sua tela enquanto você come. ☑️**Fim de Expediente:**garantir que, ao sair da empresa, nenhum cliente fique esperando uma resposta sua na fila. ☑️**Foco Total:**ficar offline momentaneamente para resolver tickets complexos sem ser interrompido por novos chamados. 
#####  Resumo Prático
 ➡️  O**status do Perfil**está localizado no canto superior direito na plataforma e deve ser definido manualmente pelo usuário.**Existem 3 tipos de Status:**🟢 Online 🟡 Ausente 🔴 Offline O**Status do Perfil**permite criar configurações personalizadas para automatizar sua rotina. Por exemplo, ao selecionar**‘Ausente’**, você pode definir uma resposta automática para novas mensagens nos seus tickets e até ativar a função**Siga-Me**. Além disso, seu status influencia diretamente a distribuição de novas conversas no**Rodízio de Atendimento**. 
####  ❔ Dúvidas Comuns**Posso atender clientes mesmo estando Ausente ou Offline?**Sim. Estar Ausente ou Offline pode até impedir a chegada automática de novos tickets, mas não bloqueia seu acesso. Você pode continuar respondendo os chats que já estão abertos normalmente.**O sistema me coloca Offline automaticamente?**Não. Sempre mude para Offline manualmente antes de fechar o computador.**O sistema me coloca Offline automaticamente se fizer o logout?**Sim, se você utilizar o link “Sair” em seu Perfil, o sistema desloga o acesso, e coloca seu perfil em modo “Offline” automaticamente.



---

### Editar Perfil ou Alterar Senha

> 🔗 [https://help.pacoticket.com.br/principal/meu-perfil/editar-perfil-ou-alterar-senha/](https://help.pacoticket.com.br/principal/meu-perfil/editar-perfil-ou-alterar-senha/)

🧩 No**Perfil**você mantém suas informações de cadastro atualizadas, altera senha, configura mensagens automáticas e ativa funcionalidades. 
#####  Resumo Prático
 ➡️  Acesse o menu**Perfil**no ícone 👤 do canto superior direito da plataforma. ➡️  Edite as informações necessárias e clique em**Salvar**. 
### Como Editar seu Perfil
 Acesse o ícone 👤 no canto superior direito, depois clique em Perfil**seu**nome**(será utilizado também nas assinaturas). 🔘**Senha:**altere sua senha de acesso.**🔘**Número********:****seu**número**de whatsapp**pessoal**, no formato ddi+ddd+numero. Ex 5511999888777 Esse número pode ser utilizado para receber alertas do sistema, como avisos de novos atendimentos, siga-me, etc. 🔘**E-mail:**seu**email**(será utilizado como login na plataforma).**🔘 Mensagem de Despedida**: quando finalizar um atendimento com mensagem de encerramento. (é necessário ter uma Mensagem de Conclusão definida na Conexão para funcionar)**🔘 Mensagem de Ausência:**que será enviada ao receber uma mensagem de um cliente, e estiver com o status de perfil definido como “**Ausente**“. 🔘 Ativar ou Desativar o Siga-me.   🔲 Para finalizar, clique em**Salvar**. 
####  ❔ Dúvidas Comuns**Se alterar meu e-mail, minha senha muda?**Não, a senha continua a mesma. Mas seu Login (usuário) passará a ser o novo e-mail.**Posso mudar meu nível de permissão (Admin) por aqui?**Somente Admins podem alterar nível do Perfil ou mudar suas Filas permitidas.



---

### Recuperar Senha

> 🔗 [https://help.pacoticket.com.br/principal/meu-perfil/recuperar-senha/](https://help.pacoticket.com.br/principal/meu-perfil/recuperar-senha/)

🧩**Esqueceu sua senha?**Sem problemas, é possível recuperar sua senha na tela de login do sistema. 
#####  Resumo Prático
 ➡️ Acesse o link Recuperar Senha na tela de login.. ➡️ Digite seu e-mail cadastrado para receber um**token**de Recuperação de Senha. 
### Como recuperar sua senha
 🔲 Na tela de login clique em**Recuperar Senha.****na plataforma (o mesmo utilizado para fazer login) 🔘 Você receberá um**token**temporário em seu e-mail ou whatsapp.  🔘 Digite o**token**recebido no campo Token. 🔘 Digite sua**Nova Senha**, e repita no campo**Confirmar Senha**. 🔲 Clique em**Enviar**para registrar sua Nova Senha. 
####  ❔ Dúvidas Comuns**Não recebi o e-mail de recuperação, e agora?**Verifique a caixa de Spam ou seu WhatsApp. Se não estiver lá, entre em contato com nosso suporte.**Existe requisito de senha forte?**Não, porém é recomendado utilizar uma senha com no mínimo 6 caracteres, variando entre letras, números e caracteres especiais.




---


## Chats / Tickets

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/](https://help.pacoticket.com.br/principal/chats-tickets/)

###  Organizando seu Atendimento  O Chat do nosso sistema funciona por meio de tickets.**Um ticket é aberto toda vez que uma mensagem nova é recebida.**Esse ticket armazena informações importantes, como o**histórico**da conversa,**dados**do cliente e o**status**atual do atendimento. ☑️ Com a implementação de um sistema de tickets bem estruturado, sua equipe ganha em organização, produtividade e agilidade, oferecendo um atendimento mais rápido, eficiente e satisfatório. Isso reflete diretamente na percepção de valor dos clientes em relação ao seu serviço. 
### Como funciona o Sistema de Tickets
 O  sistema de tickets geralmente segue um fluxo simples e eficiente:**Criação do Ticket**: Quando uma mensagem nova é recebida, o sistema cria um ticket automaticamente e o classifica como “aguardando” até que seu atendimento seja atribuído à um atendente.**Classificação e Direcionamento**: Mensagens podem ser encaminhadas para filas específicas, de forma manual ou automática dependendo de regras predefinidas.**Atendimento Automatizado ou Humano**: Bots podem iniciar o atendimento, resolvendo dúvidas frequentes ou coletando informações básicas antes de transferir para um humano, se necessário.**Resolução e Encerramento**: Uma vez resolvido o problema ou respondida a solicitação, o ticket é fechado, mas permanece disponível no histórico para futuras consultas.**Análise de Desempenho**: O sistema gera relatórios sobre o atendimento, fornecendo insights sobre tempo de resposta, eficiência da equipe e satisfação do cliente.



---

### Chats – Visão Geral

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/chats-visao-geral/](https://help.pacoticket.com.br/principal/chats-tickets/chats-visao-geral/)

#### Clique na imagem para acessar a interatividade (pontos roxos) >>>



---

### Tickets Abertos / Encerrados

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/tickets-abertos-encerrados/](https://help.pacoticket.com.br/principal/chats-tickets/tickets-abertos-encerrados/)

**” ou  “**Tickets Encerrados/Resolvidos**“. Logo abaixo temos as seguintes opções:**➡️  NOVO**: inicie uma nova conversa, com um contato já existente ou novo contato.**➡️  TODOS**: visualize os tickets de todos atendentes, ou somente os tickets atribuídos a você (depende do tipo de Perfil do seu usuário)**➡️  FILAS**: filtre os tickets vinculadas a uma ou mais filas. Utilize o botão**LIMPAR**para excluir os checks em todas as filas, e o botão**PREENCHER**para incluir os checks em todas as filas. Depois selecione somente as que você precisar filtrar.



---

### Aguardando / Atendendo

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/aguardando-atendendo/](https://help.pacoticket.com.br/principal/chats-tickets/aguardando-atendendo/)

#####  Tickets abertos, sem atendente atribuído, aguardando um atendimento ou sendo atendido por automações. 
#####  Atendendo
 Tickets abertos com atendente atribuído. Embaixo dessas opções encontramos as conversas relacionadas.



---

### Informações do Ticket

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/informacoes-do-ticket/](https://help.pacoticket.com.br/principal/chats-tickets/informacoes-do-ticket/)

******➡️ Número do Ticket**, entre parênteses. Exemplo (18069)**➡️ Número do Protocolo**, precedido do símbolo #. Exemplo #24954**➡️ Tags**: são as tags marcadas para classificar o ticket 
### Ticket x Protocolo
 
##### (Ticket)
 Um**ticket**é uma conversa com um cliente dentro de uma conexão (WhatsApp, Facebook, etc.)   Ele não muda de número, mesmo que seja fechado e reaberto entre o mesmo cliente e conexão. Se a mesma pessoa usar outra plataforma, aí sim, será outro número de ticket.  
##### # Protocolo
 Um**protocolo**é o que acontece entre abrir e fechar um ticket. Cada vez que o ticket é reaberto, um novo protocolo é criado (mas atenção: o número do ticket continua sempre o mesmo).**Resumindo:**o ticket é a conversa, e o protocolo são os “capítulos” dessa conversa.



---

### Informações do Contato

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/informacoes-do-contato/](https://help.pacoticket.com.br/principal/chats-tickets/informacoes-do-contato/)

**. Você pode**Editar o Contato**nessa parte lateral, assim como adicionar**Observações**sobre a conversa. Essa seção lateral pode ser personalizada para cada conexão, através de um iframe externo que recebe os dados do ticket, tornando a experiência ainda mais exclusiva. 
### Iframe Externo de Contato
 Para adicionar um iframe lateral em uma conexão acesse Conexões editar Conexão No campo “**Iframe Externo – Integração / Contato**” digite a URL completa de sua página que será carregada na parte lateral via iframe. Nosso sistema envia dados do ticket**via GET**(por meio da URL), permitindo que seu iframe acesse e utilize essas informações para  personalizar a experiência do usuário. 
### Quais dados são enviados para o iframe de contato?
 Segue a lista dos dados do ticket que são enviados via GET ao seu iframe: contactNumber = número do contato contactName = nome do contato contactEmail = email do contato contactCPFCNPJ = doc do contato contactId = ID do contato ticketId = ID do ticket companyId = ID da empresa backendURL = backendURL de API userId = ID do atendente do ticket ticket_userName = Nome do atendente do ticket ticket_userLevel = Perfil do atendente do ticket ticket_connectionId = ID da conexão ticket_UUID = UUID do ticket user_LoggedIn = ID do usuário logado user_LoggedName = Nome do usuário logado user_LoggedLevel = Perfil do usuário logado 
### Como pegar os dados GET enviados usando Javascript
 // Função para obter os parâmetros da URL function getURLParameter(name) { // Cria uma expressão regular para encontrar o parâmetro na URL var regex = new RegExp('[?&]' + name + '=([^&]*)'); var results = regex.exec(window.location.href); // Se o parâmetro for encontrado, retorna o valor decodificado return results ? decodeURIComponent(results[1]) : null; } // Obtenção dos dados enviados via GET const contactNumber = getURLParameter('contactNumber'); const contactName = getURLParameter('contactName'); const contactEmail = getURLParameter('contactEmail'); const contactCPFCNPJ = getURLParameter('contactCPFCNPJ'); const contactId = getURLParameter('contactId'); const ticketId = getURLParameter('ticketId'); const companyId = getURLParameter('companyId'); const backendURL = getURLParameter('backendURL'); const userId = getURLParameter('userId'); const ticket_userName = getURLParameter('ticket_userName'); const ticket_userLevel = getURLParameter('ticket_userLevel'); const ticket_connectionId = getURLParameter('ticket_connectionId'); const ticket_UUID = getURLParameter('ticket_UUID'); const user_LoggedIn = getURLParameter('user_LoggedIn'); const user_LoggedName = getURLParameter('user_LoggedName'); const user_LoggedLevel = getURLParameter('user_LoggedLevel'); // Exibe os dados no console ou usa conforme necessário console.log("contactNumber:", contactNumber); console.log("contactName:", contactName); console.log("contactEmail:", contactEmail); console.log("contactCPFCNPJ:", contactCPFCNPJ); console.log("contactId:", contactId); console.log("ticketId:", ticketId); console.log("companyId:", companyId); console.log("backendURL:", backendURL); console.log("userId:", userId); console.log("ticket_userName:", ticket_userName); console.log("ticket_userLevel:", ticket_userLevel); console.log("ticket_connectionId:", ticket_connectionId); console.log("ticket_UUID:", ticket_UUID); console.log("user_LoggedIn:", user_LoggedIn); console.log("user_LoggedName:", user_LoggedName); console.log("user_LoggedLevel:", user_LoggedLevel); // Agora você pode usar esses dados em seu iframe. 
### Como pegar os dados GET enviados usando PHP



---

### Novo Chat

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/novo-chat/](https://help.pacoticket.com.br/principal/chats-tickets/novo-chat/)

💬 Para iniciar um**novo Chat/Ticket**clique no botão**NOVO.**Na nova janela, pesquise o contato por**nome ou telefone**.  Caso ele não esteja cadastrado no sistema, a opção**Adicionar**aparecerá. Após selecionar o contato, escolha a**Fila**e**Conexão**desejada para iniciar uma conversa. 
#####  Para cadastrar telefones de WhatsApp dentro do sistema utilize o padrão:**Código do País + DDD + Telefone**(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos



---

### Ações de Mensagem

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/acoes-de-mensagem/](https://help.pacoticket.com.br/principal/chats-tickets/acoes-de-mensagem/)

**temos as opções de:**Emoji, Envio de Arquivo, Assinar, Comunicação Interna**Logo abaixo o campo de**Envio de Texto**e o botão para**Envio de Áudio**. 
### Emoji**nas conversas. 
### Envio de Arquivo**PDF, imagens e outros.**Dica**: é possível arrastar um ou mais arquivos em cima do ícone de**(+)**para realizar o envio de forma mais rápida. Após o upload você pode opcionalmente adicionar legendas. 
###**antes de toda mensagem. Ao ativar essa opção, o campo de chat ficará na cor**Amarela**para indicar que a assinatura está ativada na mensagem.**Atenção**: O ícone de habilitar ou desabilitar Assinaturas pode não estar visível conforme configurações do administrador. 
### Comunicação Interna (Whisper)**, visualizada somente dentro da plataforma. O cliente**não**receberá essa mensagem. Ao ativar a comunicação interna, o campo de mensagem ficará**azul**para indicar que o texto será enviado internamente. 
###**Para enviar “Respostas Rápidas” digite / e na sequência a primeira letra do nome de uma das respostas rápidas cadastradas.**. Para quebra de linhas, utilize o atalho**SHIFT + ENTER**### Envio de Áudio****” e outra para “**Enviar**” o áudio.



---

### Ações do Ticket

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/acoes-do-ticket/](https://help.pacoticket.com.br/principal/chats-tickets/acoes-do-ticket/)

**, tendo como principais opções: ✖️**Encerrar / Resolver Ticket**, para finalizar um atendimento. ↩️**Devolver a Fila**, para transferir o ticket ao aguardando.**🔁 Transferir Ticket**, para transferir o atendimento à outra pessoa.



---

### – Devolver a Fila

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/devolver-a-fila/](https://help.pacoticket.com.br/principal/chats-tickets/devolver-a-fila/)

Para**devolver um atendimento ao aguardando**clique em**Devolver a Fila ↩️**, nos itens de “Ações do Ticket” no canto superior direito do chat. O ticket será enviado ao status de**Aguardando**, mantendo a**fila**atual.



---

### – Transferir Ticket

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/transferir-ticket/](https://help.pacoticket.com.br/principal/chats-tickets/transferir-ticket/)

Para**transferir um atendimento**clique em**Transferir Ticket 🔁**, nos itens de “Ações do Ticket” no canto superior direito do chat. Na nova janela, pesquise o**atendente**que vai assumir o atendimento e depois defina o setor/**fila**.  Para finalizar, clique no botão**Transferir**.



---

### – Encerrar Ticket

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/encerrar-ticket/](https://help.pacoticket.com.br/principal/chats-tickets/encerrar-ticket/)

Para**encerrar um atendimento**clique em**Resolver Ticket (✖️)**, nos itens de “Ações do Ticket” no canto superior direito do chat. Na nova janela, escolha: “**Resolver Sem Mensagem de Encerramento**” ou “**Resolver Com Mensagem de Encerramento**“. (que enviará uma mensagem automática de encerramento). 
####  – em Perfil Mensagem de Despedida 💬 define a mensagem de encerramento somente para esse usuário. 
#### Na Conexão
 – em Conexões Editar Mensagem de Conclusão 💬 define a mensagem de encerramento para todos os usuários dessa conexão. 
#####  Atenção
 Caso a mensagem de encerramento esteja configurada tanto no**Perfil**quanto na**Conexão**, ao encerrar um atendimento o sistema irá enviar a mensagem definida no**Perfil**.



---

### Alertas Vermelhos no Chat

> 🔗 [https://help.pacoticket.com.br/principal/chats-tickets/alertas-vermelhos-no-chat/](https://help.pacoticket.com.br/principal/chats-tickets/alertas-vermelhos-no-chat/)

🧩 Recados com**fundo vermelho dentro do chat**são avisos do sistema para orientar o atendente sobre algum erro. Muitos desses alertas são em inglês pois vem direto da Meta ou outras integrações. Veja abaixo uma lista de retornos de erro, seus significados e possíveis soluções: 
#####  🚨 Missing Phone in Payload ou Could not parse Phone
 O sistema está tentando enviar alguma**mensagem automática**para o WhatsApp particular do atendente operador, porém o**número**digitado no Perfil está**vazio**, incompleto ou com espaços extras. ☑️ Em Perfil no campo**Número**digite o número do whatsapp no formato internacional, usando apenas números testando com 8 ou 9 dígitos. 
#####  🚨 Missing Body in Payload
 O sistema está tentando enviar alguma**mensagem automática**, porém essa mensagem está com o**campo de texto vazio**, ou seja, sem texto definido. ☑️ A**solução**é desativar o contexto / condição da automação de envio de mensagem, ou então preencher a mensagem com um texto. Segue uma lista de condições e campos de mensagens que você deve observar: ➡️  Em Configurações >**Mensagem de Saudação do Operador**marcada como**Sim**, e**Texto de Saudação**vazio. 
#####  🚨 "#1 Error sending message to LID: failed to encrypt message: can't encrypt message for device: no signal session established with xxxxxxxxxxx"
 O sistema tentou enviar uma mensagem, mas**não**encontrou a “chave de criptografia” da sua conexão WhatsApp nessa conversa. ☑️ Você pode tentar solucionar em Conexões 3 pontinhos Reiniciar Conexões Se não resolver será necessário**Reler o QR Code**dessa conexão. 
#####  🚨 Erro ao montar mensagem: if a ButtonReply is present, other button types are not allowed
 Você tentou enviar uma mensagem que contém**Botões de Resposta Rápida**(ButtonReply ou Quick Reply – aqueles que o usuário clica para responder texto) junto com outro tipo de botão (como Botão de Link, Botão de Telefone ou Lista) no mesmo balão. ☑️ Botões do tipo Quick Reply não aceitam envio junto com outros botões – utilize somente Quick Reply nessa chamada API. 
#####  🚨 Message Undeliverable.
 Este é um erro genérico de**falha na entrega**. Significa que a mensagem saiu do servidor, chegou na Meta, mas**não pôde ser entregue**ao dispositivo do cliente final. Aqui o problema está no**destinatário**. As causas mais comuns (90% dos casos) são:**Bloqueio:**O cliente bloqueou o seu número/empresa no WhatsApp.**Número Inválido:**O número não possui uma conta de WhatsApp ativa no momento. 
#####  🚨 Re-engagement message Message failed to send because more than 24 hours have passed since the customer last replied to this number.
 Janela de Atendimento ao Cliente está**fechada**. ☑️ Você pode enviar uma**Mensagem Template**nesse cenário, mas a janela abrirá somente quando o cliente enviar uma mensagem. 
#####  🚨 Unsupported post request. Object with ID 'xxxxxxxxxx' does not exist, cannot be loaded due to missing permissions, or does not support this operation. Please read the Graph API documentation at developers.facebook.com/docs/graph-api
 Provavelmente aconteceu uma**perda de conexão**com o token de acesso da Meta.**☑️ Reconectar**sua Conexão na plataforma normalmente revalida esse token e volta a funcionar. 
#####  🚨 (#131008) Required parameter is missing
 Você**deixou**de enviar um campo que é obrigatório para que a mensagem seja processada.**☑️**Verifique se preencheu todas as**Variáveis**definidas na Mensagem Template aprovada pela Meta. 
#####  🚨 (#132000) Number of parameters does not match the expected number of params
 A**quantidade**de variáveis que você enviou não é igual à quantidade que o Template exige.**☑️**Verifique se a quantidade de**Variáveis**enviadas corresponde a quantidade definida na Mensagem Template aprovada pela Meta. 
#####  🚨 (#132012) Parameter format does not match format in the created template
 Há um conflito entre o**tipo de dado**que a Mensagem Template espera e o que você enviou.**☑️**Certifique-se de que os componentes (HEADER, BODY) e seus parâmetros (image, text, currency, etc.) correspondem exatamente à configuração do modelo aprovado na Meta. 
#####  🚨 Media upload error Downloading media from weblink failed with http code 403, status message Forbidden
 Você tentou enviar uma**Mensagem Template**que contém uma imagem ou arquivo no cabeçalho (Header). O sistema precisa baixar essa mídia de um link público que você forneceu, mas o servidor onde a imagem está hospedada**bloqueou**o acesso para baixar o arquivo.**☑️ Teste Anônimo:**Copie o link e tente abrir em uma**Guia Anônima**do navegador. Se der erro ou pedir login, é esse o problema.**☑️ Permissões de Cloud:**Se a imagem está em um bucket (S3, Google Cloud, Firebase), altere a permissão do arquivo para**“Public Read”**(Leitura Pública).**☑️ Links Temporários:**Se você usa links assinados (que expiram), verifique se ele não expirou antes do envio.




---


## Atendimento Otimizado

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/](https://help.pacoticket.com.br/principal/atendimento-otimizado/)

###  Cliente satisfeito volta sempre!  Nosso principal objetivo é**otimizar o atendimento**do seu negócio, aprimorando a eficiência e a qualidade, e, assim, proporcionar uma experiência ainda mais satisfatória para seus clientes. Para isso, você pode aproveitar toda a tecnologia e os processos estruturados de nossa ferramenta para**agilizar**,**personalizar**e**automatizar**seus atendimentos.



---

### Mensagem de Ausência

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-ausencia/](https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-ausencia/)

🧩  A**Mensagem de Ausência**é uma resposta automática a ser enviada para o seu cliente enquanto você estiver ausente. Ofereça uma experiência profissional realizando uma: ☑️**Gestão de Expectativas**: cliente pode ser informado sobre a ausência, além de um possível tempo de espera, ou até mesmo um link para uma base de conhecimento. 
#####  Resumo Prático
 ➡️  Altere seu**Status**para ausente. ➡️  Em**Perfil**, configure sua**Mensagem de Ausência**. ➡️  A mensagem é enviada sempre que estiver**ausente**, e**receber uma mensagem**de um cliente onde você é o**atendente**. 
### Alterar Status do Perfil
 No canto superior direito da plataforma, altere seu status para**Ausente**.  
###**. No campo**Mensagem de Ausência**defina uma mensagem a ser enviada a cada interação do cliente com um ticket que esse perfil seja o atendente.



---

### Mensagem de Aniversário

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-aniversario/](https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-aniversario/)

🧩  A**Mensagem de Aniversário**é uma mensagem personalizada a ser enviada ao seu cliente as**10h da manhã**no dia do seu aniversário. Excelente oportunidade para: ☑️**Fidelização**: fortalecendo o relacionamento e o vínculo emocional com a marca. ☑️**Engajamento**: abre um novo canal de comunicação, que pode ser usado para incluir ofertas ou descontos, incentivando uma nova compra 
#####  Resumo Prático
 ➡️  Preencha a**data de aniversário**ao editar um contato. ➡️  Em**Configurações**, configure sua**Mensagem de Aniversário**. ➡️  A mensagem é enviada no dia do aniversário do contato às**10h da manhã**. 
### Como cadastrar a data da aniversário do Contato
 Ao**Editar um Contato**, no**campo Aniversário**defina a data da nascimento do mesmo. É necessário preencher dia, mês, ano e horário. 
###  Em Configurações Mensagem de Aniversário você pode configurar uma mensagem personalizada, que será enviada às**10h da manhã**na**data de Aniversário**registrada no cadastro do Contato.



---

### Mensagem de Encerramento

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-encerramento/](https://help.pacoticket.com.br/principal/atendimento-otimizado/mensagem-de-encerramento/)

🧩  A**Mensagem de Encerramento**pode ser enviada ao finalizar um atendimento. Garantindo: ☑️**Padronização**: de atendimento entre todos de sua equipe. ☑️**Agilidade**: ao enviar uma mensagem automática padrão sem a necessidade de digitá-la diversas vezes. 
#####  Resumo Prático
 ➡️  Ao finalizar um atendimento escolha Resolver**Com**Mensagem de Encerramento.****➡️  Configure a mensagem em**Conexões > Mensagem de Conclusão**ou em**Perfil > Mensagem de Despedida**. ➡️  A mensagem configurada no**Perfil tem prioridade**em relação a da conexão (mas as duas precisam estar preenchidas) 
### Como configurar a Mensagem de Encerramento
 A mensagem de encerramento pode ser configurada de 2 maneiras: 
#### Na Conexão
 – em Conexões Editar Mensagem de Conclusão 💬 define a mensagem de encerramento para todos os usuários dessa conexão. 
#### No Perfil
 – em Perfil Mensagem de Despedida 💬 define a mensagem de encerramento somente para esse usuário. ⚠️ tem prioridade sobre a**Mensagem de Conclusão**da Conexão. ⚠️ para funcionar precisa ter uma**Mensagem de Conclusão**cadastrada na Conexão. 
#####  Atenção
 Caso a mensagem de encerramento esteja configurada tanto no**Perfil**quanto na**Conexão**, ao encerrar um atendimento o sistema irá enviar a mensagem definida no**Perfil**. 
### Como utilizar a Mensagem de Encerramento
 Ao encerrar um atendimento, o sistema questiona se deseja: “**Resolver Sem Mensagem de Encerramento**” ou “**Resolver Com Mensagem de Encerramento**“. (escolha essa opção)



---

### Mustaches

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/mustaches/](https://help.pacoticket.com.br/principal/atendimento-otimizado/mustaches/)

🧩  Os**Mustaches**(na área de programação) são**variáveis do sistema**, uma forma simples e prática de trabalhar com dados dinâmicos. Eles aparecem em templates como {{...}} (duas chaves abertas e fechadas) e servem para marcar onde textos serão inseridos automaticamente.   
### Como os Mustaches funcionam
 De uma forma bem simples, ao utilizar um {{mustache}} em algum local que permite texto, o sistema irá substituir por sua variável correspondente. Por exemplo, ao utilizar**{{firstName}}**em suas mensagens, ela será substituída pelo “**Primeiro Nome do lead**” cadastrado no sistema. {{ms}}, {{firstName}}. Tudo bem? Antes de começar, anote o seu protocolo {{protocol}}. Meu nome é {{user}}. Como posso ajudar?**Será substituído por algo do tipo:**Boa tarde, Júlia. Tudo bem? Antes de começar, anote o seu protocolo #161672176 Meu nome é Rodolfo. Como posso ajudar? .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prático"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; } Veja abaixo uma lista de**mustaches**para você utilizar em suas mensagens e automações. 
##### Mustaches de Conversa (lead, atendente, ticket)
 - ID do contato {{contact_id}} - Nome do contato {{name}} - Primeiro nome do contato {{firstName}} - Número de telefone do contato {{number}} - Nome da fila / setor / departamento {{queue}} - Nome do atendente desse ticket {{user}} - Número do ticket do contato {{ticket_id}} - Número de protocolo atribuído e rastreável {{protocol}} - Número de protocolo aleatório {{protocol_random}} - Nome da conexão {{connection}} - Nome da empresa {{name_company}} 
##### Mustaches de Texto
 - Saudação (Bom dia, boa tarde, boa noite, boa madrugada) {{ms}} - Data e Hora completo {{data_hora}} - Data {{date}} - Hora {{hour}} - Quebra de linha {{breakline}} 
##### Mustache de Conexão
 - Domínio da API (URL do Backend sem https://) {{backendURL}} - Token da Conexão {{connection_token}}



---

### Mover após (Aguardando)

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/mover-apos/](https://help.pacoticket.com.br/principal/atendimento-otimizado/mover-apos/)

🧩**Mover Após**muda a**fila/setor**de um contato que esteja há um determinado tempo no**Aguardando**. Ideal para: ☑️**Resgate Humano**: direciona um ticket para uma fila onde um atendente humano possa dar continuidade à uma automação não finalizada.  
#####  Resumo Prático
 ➡️  Em**conexões**, configure os campos**Após**e**Mover**para ativar essa função. ➡️  Move para outra**fila**as conversas que estão no**Aguardando**em um determinado**tempo**. 
### Como configurar o Mover por Inatividade
 No menu conexões Editar Conexão ⏳ Abaixo do campo Filas, no campo**Após**defina o**tempo**que o sistema deve esperar para mover a conversa para outra fila – definida no campo**Mover**logo abaixo.



---

### Encerrar por Inatividade (Atendendo)

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/encerrar-por-inatividade/](https://help.pacoticket.com.br/principal/atendimento-otimizado/encerrar-por-inatividade/)

🧩  Programar o sistema para**encerrar automaticamente**uma conversa em**Atendimento**em caso de**inatividade (sem resposta do cliente)**após um determinado tempo. Ideal para: ☑️**Organizacão do atendimento**: fechando os tickets que não deram continuidade à conversa, sua área de atendimento ficar mais organizada.  
#####  Resumo Prático
 ➡️  Em**conexões**, configure os campos**Inatividade**para ativar essa função. ➡️  Encerra conversas em**Atendimento**em caso de inatividade. ➡️  Funciona apenas quando a última mensagem é do**atendente**. 
### Como configurar o Encerramento por Inatividade
 No menu conexões Editar Conexão ⏳ No campo**Inatividade**e**no Inatividade Sem Fila**defina o**tempo**que o sistema deve esperar para encerrar uma conversa em atendimento após a última mensagem do atendente. 💬 Você pode também definir uma mensagem a ser enviada após esse encerramento no campo “**Mensagem de Encerramento após Inatividade**“.



---

### Avise-me

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/avise-me/](https://help.pacoticket.com.br/principal/atendimento-otimizado/avise-me/)

🧩  O**Avise-me**notifica todos os atendentes de um setor específico, nos seus respectivos Whatsapp particulares, sempre que uma nova conversa entra na fila em**Aguardando**. Com o Avisa-me sua equipe ganha: ☑️**Agilidade**: a equipe é notificada no exato momento que o cliente entra na fila. ☑️**Visibilidade Total**: garante que todos operadores saibam que há um novo atendimento pendente. 
#####  Resumo Prático
 ➡️  Em seu**Perfil**digite seu**número**WhatsApp em formato internacional, respeitando a presença ou ausência do nono dígito. ➡️  Configure a**Mensagem de Notificação Externa**no menu**Configurações**. ➡️  Habilite**Notificar Operador no WhatsApp**ao editar a**Fila**desejada. 
### Como ATIVAR o AVISA-ME
 Acesse o seu Perfil – ícone 👤 no canto superior direito, depois Perfil Preencha o campo**Número**com seu WhatsApp particular no formato internacional.**” configure a mensagem que sua equipe receberá quando uma conversa chegar à fila / setor.**“**(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos



---

### Siga-me

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/siga-me/](https://help.pacoticket.com.br/principal/atendimento-otimizado/siga-me/)

🧩  O**Siga-me**encaminha mensagens da plataforma diretamente para o seu WhatsApp particular,**desde que você seja o atendente responsável pela conversa**. Com o Siga-me ativado: ☑️**Receba Mensagens**: O Sistema envia as mensagens do cliente (que estão em seu atendimento) para o seu WhatsApp particular. ☑️**Responda de onde Estiver**: Você responde pelo seu WhatsApp e o cliente recebe a mensagem através do número WhatsApp da plataforma. 
#####  Resumo Prático
 ➡️  Habilite o**Siga-me**em seu**Perfil**. ➡️  Ainda em seu**Perfil**digite seu**número**WhatsApp em formato internacional, respeitando a presença ou ausência do nono dígito. ➡️**Responda**as mensagens pelo seu WhatsApp usando**!! seguido pelo número do ticket e sua mensagem**(exemplo: !!31 olá tudo bem?). ➡️**Não**deixe o seu próprio número particular em atendimento na plataforma para evitar de receber suas próprias respostas. 
###**com seu WhatsApp particular no formato internacional. Em**Ativar Siga-Me:**escolha a opção**SIM****(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos 
### Como responder as mensagens do SIGA-ME
 Para responder uma mensagem do SIGA-ME, envie uma mensagem para o número WhatsApp da plataforma utilizando o padrão:**!!**seguido do**ID do ticket,**e na sequência a**mensagem**desejada. Exemplo:**!!31**Como posso ajudar? 
#####  Atenção
 Evite deixar o seu WhatsApp particular como um contato em**ATENDIMENTO**pela plataforma, para evitar de**receber**do SIGA-ME as mensagens que você está enviado para ele. 
### Demonstração do Siga-me
 Veja um exemplo do**SIGA-ME**na prática.



---

### Avaliações

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/avaliacoes/](https://help.pacoticket.com.br/principal/atendimento-otimizado/avaliacoes/)

**Avaliações**de clientes permitem o gestor  mensurar a qualidade do atendimento, produtos ou serviços de seu negócio. Você pode implementar uma solicitação de**avaliação**ao seu cliente no final de um atendimento. Podendo inclusive criar mais de um modelo de avaliação, para enviar o respectivo conforme cada tipo de atendimento.**Passos para configurar uma Avaliação****➡️**Criar uma Avaliação**➡️**Definir Mensagem de pós Avaliação**➡️**Configurações: -> enviar avaliações -> obrigatório avaliar? -> avaliação externa? -> tempo de espera 
## Criar uma Avaliação
 No menu Avaliações Clique em Adicionar ➡️ Defina um**nome para sua avaliação**(apenas para sua referência) ➡️ Defina a**Mensagem de Avaliação**. Ex: “Como você avalia nosso atendimento?” ➡️ Em**Enviar como Lista de Opções**, escolha se as opções serão enviadas como lista ou como texto.**➡️ NPS Interno (Operador)**– Em breve**➡️ Opções de Avaliação**clique em “+ Adicionar Opção” para criar as opções de respostas à sua avaliação. 
##  No menu Conexões Ao editar uma conexão, defina sua mensagem de pós avaliação no campo “**Mensagem de Avaliação**“. Essa mensagem será enviada após a escolha de um**número**na avaliação. 
## Configurar Avaliação
 No menu Configurações 
###**“. Para utilizar esse novo botão é obrigatório escolher**um menu de avaliação**(que deve ser previamente cadastrado no menu principal Avaliações ) 
###  Com essa função ativa, ao encerrar um atendimento o atendente terá apenas como opção o botão “**Resolver e Enviar Avaliação**“. Ou seja, para encerrar o atendimento é obrigatório utilizar esse botão combinado com a escolha de**um menu de avaliação**(que deve ser previamente cadastrado no menu principal Avaliações ) 
###  Que utilizar uma pesquisa externa para medir seus atendimentos?**” e no campo**URL da Avaliação Externa**digite seu link completo, podendo inclusive utilizar**mustaches**, que são variáveis do sistema, para levar a informação do ticket para seu sistema de avaliação próprio. ➡️ Exemplo: https://avaliachat.com.br/{{ticket_id}}/{{number}} Será enviado ao cliente algo como: https://avaliachat.com.br/23453/5511999998888 
#####  ⚠️ Atenção
 Mesmo sendo uma avaliação externa, para encerrar o atendimento, o sistema também obrigará escolher um menu de avaliação (que deve ser previamente cadastrado no menu principal Avaliações ) O sistema irá ignorar a avaliação interna, e enviar a sua URL. 
### Tempo de Espera para Receber Avaliação
 Defina seu tempo de espera para receber uma avaliação. Após o envio de uma avaliação interna, a**primeira resposta**que o cliente enviar  não irá aparecer na plataforma caso esteja dentro do tempo definido nessa opção. Garantindo que o atendente não tenha acesso direto a resposta da avaliação. Para ver a avaliação, o Admin deve acessar o menu Pesquisar



---

### Carteira de Clientes

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/carteira-de-clientes/](https://help.pacoticket.com.br/principal/atendimento-otimizado/carteira-de-clientes/)

🧩  A**Carteira de Cliente**permite que contatos específicos sejam designados como exclusivos de um determinado atendente. Esse atendente passa a ser o  “Proprietário do Lead”, tendo com isso: ☑️**Exclusividade**: Nenhum outro atendente (exceto admins ou supervisores) poderá iniciar um atendimento com esse contato. ☑️**Atendimento direto**: o contato não passará mais pelo**Aguardando**(e suas automações), iniciando um ticket direto no**Atendendo**do proprietário do lead. ☑️**Transferências normais**: o Atendente poderá transferir o atendimento normalmente, não resultando em transferência de propriedade do contato. 
#####  Resumo Prático
 ➡️  Habilite**Carteira de Cliente**em**Configurações**. ➡️  Crie uma**Fila**exclusiva para carteira do atendente. ➡️  Vincule a fila no**Perfil**do atendente (“**Filas**” e “**Fila Individual da Carteira**“). ➡️  Ao editar um**contato**defina o atendente**Proprietário do Lead**. 
### Como configurar uma Carteira de Cliente

#### ⚡ Passo 01
 Habilite a**Carteira de Clientes**no menu Configurações Defina também quem pode**alterar a Propriedade do Lead**: se somente Admins ou se o perfil de Usuário também pode alterar. Por fim, defina se um atendente pode ou não**iniciar chats**com Leads/Contatos sem carteira definida. 
####  Em Filas & Chatbot crie uma**Fila**exclusiva para cada atendente que deseja ter sua carteira de clientes. Sugestão de nome para essa fila:**Carteira do [nome do atendente]**#### ⚡ Passo 03
 No Perfil do atendente (ou Equipe Editar ) adicione essa Fila exclusiva tanto no campo**Filas**quanto no campo**Fila Individual Exclusiva da Carteira**. ⚠️ Essa fila não poderá estar vinculada a nenhum outro atendente, e nem mesmo vinculada a uma conexão. 
###  Ao editar um contato, altere o campo**Proprietário do Lead (Carteira)**



---

### Rodízio de Atendimento

> 🔗 [https://help.pacoticket.com.br/principal/atendimento-otimizado/rodizio-de-atendimento/](https://help.pacoticket.com.br/principal/atendimento-otimizado/rodizio-de-atendimento/)

O**sistema de atendimento randomizado**divide os atendimentos de maneira mais equilibrada entre os atendentes de sua equipe. Assim, todos tem a chance de atender os clientes de forma justa e eficiente, sem sobrecarregar ninguém. 
###  Como configurar o Rodízio de Atendentes
 
#####  Para habilitar o rodízio de atendimento é preciso de 2 filas:**✅ Fila de Atendimento Randomizado**Fila onde a conversa será direcionada após a randomização. (Os atendentes devem ter acesso)**✅ Fila de Rodízio**Fila responsável por distribuir o atendimento. (Os atendentes**não**devem ter acesso) 
### Fila de Atendimento Randomizado
Primeiro vamos criar a fila de Atendimento Randomizado, que é a fila onde os atendentes que participarão do rodízio devem estar associados para que o sistema faça a randomização entre eles. Acesse Filas & Chatbot Adicionar Fila**como uma das filas que esse usuário tem acesso. 
#####  No menu Configurações Modo de Randomização de Atendimento Defina se a randomização será realizada somente entre os usuários**online**no momento, ou os**offline**também participam. 
### No terceiro passo, vamos criar a fila de**Rodízio**necessária para as configurações do atendimento randomizado. 
##### ⚠️ IMPORTANTE: Nenhum atendente deve ter acesso a essa fila
 Acesse novamente Filas & Chatbot Adicionar Fila**“Defina o “**Tempo de Escala**“: que o sistema deve esperar antes de realizar o rodízio.“**Mover**“: para fila de**Atendimento Randomizado**(previamente criada) onde todos os atendentes que participarão do rodízio devem estar cadastrados.
#####  

##### 📌 Pronto!
 
### Como Iniciar um Rodízio de Atendentes
 Para iniciar um atendimento randomizado, a conversa deve chegar à Fila de**Rodízio**, que irá randomizar o atendimento entre os atendentes com acesso à Fila de**Atendimento Randomizado**. 
#####  Notifique o Atendente
 Ao ser randomizada, a conversa é direcionada para uma atendente, já no status**Atendendo**.   ➡️  Você pode**Notificar o Atendente**em seu whatsapp pessoal quando ele receber um atendimento randomizado.   Para isso, acesse Filas & Chatbot Editar Fila Atendimento Randomizado Marque a opção**Notificar Operador no WhatsApp**#####  

##### ⚠️ IMPORTANTE: O atendente será notificado no celular cadastrado em Equipe (esse celular deve seguir o padrão ddi ddd numero)




---


## Suite Tools

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/](https://help.pacoticket.com.br/principal/suite-tools/)

###  O copiloto perfeito para seus atendimentos  🧩**O Suite Tools**é o seu “Copiloto” de atendimento, que adiciona ferramentas extras (Plugins) diretamente na tela de chat do seu sistema. Em vez de o atendente precisar abrir várias abas no navegador para formatar números, consultar CEPs, gerar links de pagamento ou acessar sistemas externos, o Suite Tools carrega tudo isso em um painel lateral, perfeitamente integrado à conversa atual. ☑️**Produtividade:**Tenha ferramentas úteis na mesma tela do chat, evitando a troca constante de abas e a perda de foco. ☑️**Personalização:**Instale e organize apenas os plugins que fazem sentido para a rotina da sua equipe. ☑️**Integração Externa:**Conecta o atendimento a serviços e utilitários via API de forma visual e transparente.



---

### Como Instalar

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/como-instalar/](https://help.pacoticket.com.br/principal/suite-tools/como-instalar/)

🧩 Para instalar o**Suite Tools**precisamos criar uma “ponte de integração” entre o Suite e a sua Conexão de WhatsApp (o número conectado). 
#####  Resumo Prático
 ➡️ Acesse o menu Suite >**Suite Tools**. ➡️ Clique em**Integrar Conexão**, preencha o Token e a URL da API e Salve. Clique no ícone de**Chave Verde**para copiar a URL IFRAME de Integração. ➡️ Na plataforma, vá no menu**Conexões**, edite o WhatsApp desejado e cole a URL no campo “**Iframe Externo**“. 
### Como Integrar as Tools em uma Conexão

##### ⚡ Passo 01: Adicionar Nova Integração de Conexão
 Acesse o menu Suite Suite Tools Integrar Conexão Ao abrir a janela de configuração, preencha os dados técnicos para criar a ponte entre o sistema e o plugin: 🔘**Nome:**um nome de referência para identificar essa integração. Sugestão: Use o prefiro Tools seguido do mesmo nome da conexão (ex: “Tools – WhatsApp Vendas”). 🔘**Backend URL:**a URL de  backend para API -> https://api.pacoticket.com.br 🔘**Token da sua Conexão:**digite o mesmo token da Conexão que deseja adicionar as Tools. Ele precisa ser idêntico para funcionar. 🔲 Para salvar, clique em**Salvar**. 
##### ⚡ Passo 02: Copiar URL IFrame da Integração de Conexão
 Clique no botão da “Chave Verde” de sua Integração, e copie a URL IFrame da Integração de Conexão. 
#####**cole a URL que você acabou de copiar. Retorne para Suite Suite Tools e confirme os status de:**Token Validado**e**Iframe Conectado.**###**🔲**Clique no botão**+ Plugins**para abrir a**Central de Plugins**, onde você pode configurar o layout do seu menu e escolher os plugins desejados para auxiliar no atendimento dessa conexão. 
####  ❔ Dúvidas Comuns**Onde os plugins aparecem?**Eles aparecem em uma aba lateral direita dentro da tela de “Chats / Atendimentos” quando você abre uma conversa.**Posso usar a mesma Integração em vários números?**Não. Como o “Token” é único por conexão, você deve criar uma “Integração de Conexão” diferente para cada conexão/canal que tiver. Você pode usar o importador para configurar rapidamente.**O que acontece se eu mudar o Token da conexão?**As Tools vão parar de funcionar. Você precisará editar a Integração e atualizar o campo “Token” com o novo código.



---

### Central de Plugins

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/central-de-plugins/](https://help.pacoticket.com.br/principal/suite-tools/central-de-plugins/)

🧩**A Central de Plugins**é a área de design onde você constrói o menu lateral do seu atendimento. É aqui que você decide quais ferramentas o seu atendente vai ver e em qual ordem elas vão aparecer na tela de chat. O objetivo é transformar a tela de atendimento em um cockpit personalizado, organizando os plugins em abas (categorias) para que a tela não fique poluída. ☑️**Organização:**Agrupe ferramentas por tema (ex: Aba “Financeiro”, Aba “Vendas”). ☑️**Personalização:**Defina ícones e nomes para cada botão. ☑️**Produtividade:**Coloque as ferramentas mais usadas no topo para acesso rápido. 
#####  Resumo Prático
 ➡️ Acesse sua Integração no**Suite Tools**e clique no botão**+ Plugins**. ➡️ Clique em**+ Tab**para criar as colunas (cabeçalhos) do seu menu. ➡️ Dentro de cada Tab, clique em**+ Plugin**para adicionar as ferramentas (linhas). ➡️  Arraste e solte**Tabs**e**Plugins**para posicionar conforme desejar. 
###  ⚡ Em sua Integração do**Suite Tools**, clique em**+ Plugins**para entrar no modo de edição visual.**(Colunas) e**Plugins**(Linhas). 
#### ⚡**CRIANDO TABS (COLUNAS)**As Tabs são as categorias superiores do menu. 🔲**+ Tab:**para adicionar uma nova coluna. 🔘**Ícone**Selecione um símbolo visual para representar a aba. 
#### ⚡**ADICIONANDO PLUGINS (LINHAS)**Os Plugins são as ferramentas reais que funcionam dentro das Tabs. 🔲**+ Plugin:**localizado no rodapé de cada coluna / tab. 🔘**Tipo de Plugin:**escolha qual ferramenta deseja instalar (ex: “Consultar CPF”, “Reescrita IA”, entre outros). ◽**Lado esquerdo:**“configurações base” do plugin como nome, texto do botão, retorno e permissões. ◽**Lado direito:**configurações personalizadas de cada tipo do plugin selecionado. 
#### ⚡**ORGANIZAÇÃO VISUAL**◽**Arrastar Tabs:**clique no cabeçalho da coluna e arraste para os lados para mudar a ordem das abas. ◽**Arrastar Plugins:**clique em um plugin e arraste para cima, para baixo ou para outra aba. ◽**Excluir:**Use o ícone de “x”  para remover uma tab ou plugin indesejado. 
###  Confira sua montagem dentro de um ticket no menu de Chat.**☑️  Abas (Tabs):**Aparecem como ícones no topo do menu lateral. O atendente clica para alternar entre categorias.**☑️  Plugins :**Aparecem listadas abaixo da aba selecionada.  
####**Existe limite de plugins?**Não há um limite técnico, mas recomendamos não ultrapassar 6 plugins por aba para evitar que o atendente precise rolar a tela (scroll) excessivamente.**Posso renomear um plugin nativo?**Sim, personalize como desejar, tanto o nome quanto o texto do botão (se houver).**A alteração é em tempo real?**Sim. Assim que você finaliza a edição na Central de Plugins, a mudança reflete para os atendentes ao atualizar.



---

### Plugins

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/](https://help.pacoticket.com.br/principal/suite-tools/plugins/)


---

#### * Configurações Base

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/configuracoes-base/](https://help.pacoticket.com.br/principal/suite-tools/plugins/configuracoes-base/)

🧩  Alguns Plugins podem ter configurações específicas para a sua função, mas todos os plugins tem suas**Configurações Base**– que são ajustes de**layout, processamento e permissões**. Esses ajustes bases ficam localizados no canto esquerdo ao cadastrar / editar um plugin. 
## ⚡ Configurações de Layout

##### ☑️ Layout do Plugin
 –**Fechado**: o menu do plugin inicia fechado, podendo expandir ao clicar. –**Aberto**: o menu do plugin inicia aberto, podendo encolher ao clicar. –**Sem Menu**: o plugin fica sem menu clicável, inicia aberto como se fizesse parte do todo. 
##### ☑️ Nome
 Nome do menu que será exibido para o atendente caso escolha a opção “Layout do Plugin” como Fechado ou Aberto. 
## ⚡ Configurações de Processamento

##### ☑️  Ver Conteúdo
 –**Ao clicar no botão**: necessário clicar no botão para carregar e exibir o conteúdo do Plugin. –**Automático ao visualizar**: o conteúdo do Plugin é carregado e exibido automaticamente. 
##### ☑️  Texto do Botão
 Personalize o texto do botão nesse Plugin. 
##### ☑️  Retorno no Whisper
 Retornar informações na**mensagem interna**após o uso desse Plugin. 
## ⚡ Configurações de Visibilidade e Acesso

##### ☑️  Perfil
 Selecione os**tipos de Perfil**do atendente que podem visualizar esse plugin. Ao selecionar “**Todos os Perfis**” o plugin ficará visível para todos os colaboradores (que tenham permissões individuais). Selecione a opção “**Limitar por Perfil**” para limitar, um a um, o tipo de perfil que pode visualizar o plugin. 
##### ☑️  Atendentes
 Selecione os**atendentes**que podem visualizar esse plugin. Ao selecionar “**Todos os Atendentes**” o plugin ficará visível para todos os colaboradores (que pertençam ao Perfil selecionado anteriormente). Novos atendentes criados no sistema futuramente ganharão acesso automático. Selecione a opção “**Limitar por Atendente**” para limitar, um a um, quem pode visualizar o plugin. 
##### ☑️  Filas
 Selecione as**filas**que o atendimento precisa pertencer para que o atendente possa visualizar esse plugin. Ao selecionar “**Todas as Filas**” o plugin ficará visível para todos os departamentos. Novas filas criadas no sistema futuramente terão acesso automático. Selecione a opção “**Limitar por Fila**” para limitar, uma a uma, em quais filas o plugin é visualizado.



---

#### Contato

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/contato-2/](https://help.pacoticket.com.br/principal/suite-tools/plugins/contato-2/)

🧩  O plugin de**Contato**é o principal plugin do seu CRM, com informações essenciais para ajudar em um excelente atendimento. ☑️**Painel completo**sobre os dados do contato e do ticket (atendente, departamento, tags, informações extras,  variáveis do flow e muito mais). ☑️**Visualiza uma página externa**colocando um**iframe**complementar com outras funcionalidades. ☑️**Sincronize os dados**do contato com outros sistemas, através da integração via**webhook**a cada atualização feita (botão Editar Contato).  do Plugin como**layout**,**processamento**e**permissões**. 
### Configurações Específicas do Plugin Contato
 🔘**Campos Personalizados**: digite separando por vírgulas, os campos personalizados que você deseja adicionar aos contatos de seu CRM. Por exemplo: Altura,Peso,Idade. 🔘**Url Webhook**: url do webhook que será ativado ao atualizar os dados desse contato, enviando as informações do ticket. Toda vez que**Editar**o Contato desse ticket, através do Plugin, o sistema**enviará**via POST todas as informações**novas**desse contato. Isso possibilita sincronizar com suas ferramentas externas, como um comercial, financeiro ou um pipeline por exemplo. 🔘**URL Iframe**: insira um iframe logo abaixo de todas as informações do plugin. Ideal para adicionar páginas externas que contenham informações extras sobre o contato, ou até mesmo botões de seu software comercial pra iniciar ações por aqui e refletir lá. 🔘**Altura em px**: define a altura, em pixel, do iframe citado no campo anterior. Se ficar vazio, ocupa a altura toda.



---

#### Contato

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/contato/](https://help.pacoticket.com.br/principal/suite-tools/plugins/contato/)

🧩  O plugin de**Contato**é o principal plugin do seu CRM, com informações essenciais para ajudar em um excelente atendimento. ☑️**Painel completo**sobre os dados do contato e do ticket (atendente, departamento, tags, informações extras,  variáveis do flow e muito mais). ☑️**Visualiza uma página externa**colocando um**iframe**complementar com outras funcionalidades. ☑️**Sincronize os dados**do contato com outros sistemas, através da integração via**webhook**a cada atualização feita.**Todas Veja aqui as Configurações Base de Plugins 
### Configurações específicas do Plugin Contato
 🔘**URL Iframe**: insira um iframe logo abaixo de todas as informações do plugin. Ideal para adicionar páginas externas que contenham informações extras sobre o contato, ou até mesmo botões de seu software comercial pra iniciar ações por aqui e refletir lá. 🔘**Altura em px**: define a altura, em pixel, do iframe citado no campo anterior. Se ficar vazio, ocupa a altura toda. 🔘**Url Webhook**: url do webhook que será ativado ao atualizar os dados desse contato, enviando as informações do ticket. Toda vez que**Editar**o Contato desse ticket, através do Plugin, o sistema**enviará**via POST todas as informações**novas**desse contato. Isso possibilita sincronizar com suas ferramentas externas, como um comercial, financeiro ou um pipeline por exemplo.



---

#### Protocolos

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/protocolos/](https://help.pacoticket.com.br/principal/suite-tools/plugins/protocolos/)


---

#### Mensagem

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem/](https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem/)


---

#### Mensagem Interna

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem-interna/](https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem-interna/)


---

#### Mensagem Rápida

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem-rapida/](https://help.pacoticket.com.br/principal/suite-tools/plugins/mensagem-rapida/)


---

#### Reescrever um Texto

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/reescrever-um-texto/](https://help.pacoticket.com.br/principal/suite-tools/plugins/reescrever-um-texto/)


---

#### Validar WhatsApp

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/validar-whatsapp/](https://help.pacoticket.com.br/principal/suite-tools/plugins/validar-whatsapp/)


---

#### Ler QR Code

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/ler-qr-code/](https://help.pacoticket.com.br/principal/suite-tools/plugins/ler-qr-code/)


---

#### Enviar Status de Texto

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/enviar-status-de-texto/](https://help.pacoticket.com.br/principal/suite-tools/plugins/enviar-status-de-texto/)


---

#### Buscar CEP

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cep/](https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cep/)


---

#### Buscar CPF

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cpf/](https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cpf/)


---

#### Buscar CNPJ

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cnpj/](https://help.pacoticket.com.br/principal/suite-tools/plugins/buscar-cnpj/)


---

#### Botão Copia e Cola

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-copia-e-cola/](https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-copia-e-cola/)


---

#### Botão URL

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-url/](https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-url/)


---

#### Botão Quick Reply

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-quick-reply/](https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-quick-reply/)


---

#### Botão Ligação

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-ligacao/](https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-ligacao/)


---

#### Botão Pix

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-pix/](https://help.pacoticket.com.br/principal/suite-tools/plugins/botao-pix/)


---

#### Form Builder

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/form-builder/](https://help.pacoticket.com.br/principal/suite-tools/plugins/form-builder/)


---

#### FlowBuilder Starter

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/flowbuilder-starter/](https://help.pacoticket.com.br/principal/suite-tools/plugins/flowbuilder-starter/)


---

#### Iframe Externo

> 🔗 [https://help.pacoticket.com.br/principal/suite-tools/plugins/iframe-externo/](https://help.pacoticket.com.br/principal/suite-tools/plugins/iframe-externo/)



---


## Contatos

> 🔗 [https://help.pacoticket.com.br/principal/contatos/](https://help.pacoticket.com.br/principal/contatos/)

###  A sua Agenda de Negócios  No menu: Contatos você tem uma lista com todos os contatos de sua empresa. Nessa lista é possível**pesquisar**por contato,**adicionar**,**visualizar**,**editar**ou**excluir**seus dados, e até mesmo**iniciar uma conversa**clicando diretamente no símbolo do WhatsApp. 
#####  Para cadastrar telefones de WhatsApp dentro do sistema utilize o padrão:**Código do País + DDD + Telefone**(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos



---

### Visão Geral Contatos

> 🔗 [https://help.pacoticket.com.br/principal/contatos/visao-geral-contatos/](https://help.pacoticket.com.br/principal/contatos/visao-geral-contatos/)

🧩**Visão Geral da Gestão de Contatos**é o seu painel de gestão de clientes de sua empresa. 
### ⚡**Cabeçalho de Controle:**no topo direito da tela, você encontra as ferramentas de navegação: 🔘**Pesquisar:**campo de texto para pesquisar um contato. 🔲**Importar / Exportar:**botão para importar ou exportar uma listas de contatos. (Esse botão pode ou não aparecer conforme definido em Configurações ). 🔲**Adicionar Contato:**botão para adicionar um contato em sua empresa. 
### PARTE CENTRAL
 ⚡**Dashboard:**painel de métricas. ◽**Hoje / Esta Semana / Este Mês:**mostra quantos**novos**contatos entraram na base nesses períodos. ◽**Total:**quantidade total de contatos de sua empresa. ⚡**Lista de Contatos:**cada linha representa um contato cadastrado no sistema, sendo composta por: ◽**Foto ou Letras Iniciais:**imagem representativa do contato. ◽**Nome:**o nome do cliente (puxado do perfil dele ou editado por você). ◽**Número:**telefone do contato no formato internacional (55…). ◽**Carteira:**mostra se esse cliente “pertence” a um atendente específico. (Esse recurso pode ou não aparecer conforme definido em Configurações ). ◽**E-mail:**e-mail do contato. ◽**Última Interação:**data e hora da última mensagem trocada. Ótimo para identificar clientes inativos. ◽**Status:**status atual do contato. 🔲**Ícone Painel:**botão para visualizar um Resumo do Contato. 🔲**Ícone WhatsApp:**botão para abrir uma janela de conversa direta com esse cliente. 🔲**Ícone Lápis:**botão para editar um Contato. 🔲**Ícone Lixeira:**botão para excluir um Contato (e também seus tickets, protocolos e histórico de conversa). 
####  ❔ Dúvidas Comuns**O sistema salva contatos automaticamente?**Sim! Sempre que alguém novo manda um “Oi” para o seu WhatsApp conectado, o sistema cria automaticamente uma ficha para ele nesta lista.**Posso excluir vários de uma vez?**A exclusão é individual para evitar acidentes. Para excluir TODOS os contatos utilize a API de Excluir Contatos.



---

### Adicionar Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/adicionar-contato/](https://help.pacoticket.com.br/principal/contatos/adicionar-contato/)

Para**adicionar**um contato, acesse o menu Contatos Adicionar Contato**de WhatsApp, que deve ser preenchido: somente com números (sem espaço, letra ou símbolos)e no formato DDI DDD NUMERO (Ex: 551199998888) No final do cadastro você pode optar por “Desabilitar chatbot para esse contato”. Caso você utilize nosso chatbot de filas em sua automação, ao marcar essa opção o chatbot não irá atender esse contato. 
#####  Para cadastrar telefones de WhatsApp dentro do sistema utilize o padrão:**Código do País + DDD + Telefone**(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos 
#####  em Chats
 Você também pode adicionar um contato diretamente na tela de Chat, ao clicar no botão**NOVO**para iniciar um**Ticket**, digite o número WhatsApp do contato. Caso ele não esteja cadastrado no sistema, a opção**Adicionar**aparecerá.



---

### Editar Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/editar-contato/](https://help.pacoticket.com.br/principal/contatos/editar-contato/)

Para**editar**um contato, acesse o menu Contatos Ícone Lápis 
#####  Não é permitido alterar o número de telefone do contato. Outro local que é possível alterar um contato é diretamente no chat. Ao clicar no nome do contato, uma coluna aparecerá na direita, com as informações do contato e o botão “**Editar Contato**“ 
#####  Para cadastrar telefones de WhatsApp dentro do sistema utilize o padrão:**Código do País + DDD + Telefone**(somente número, sem traço, espaço ou caracteres especiais) ex: 5511999888777 ↗️ para DDDs**acima**de 30 número whatsapp com 8 dígitos ↘️ para DDDs**abaixo**de 30 número whatsapp com 9 dígitos



---

### Excluir Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/excluir-contato/](https://help.pacoticket.com.br/principal/contatos/excluir-contato/)

Para**excluir**um contato, acesse o menu Contatos Ícone Lixeira 
#####  Ao excluir um contato, todos os seus atendimentos também serão removidos.



---

### Bloquear Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/bloquear-contato/](https://help.pacoticket.com.br/principal/contatos/bloquear-contato/)

Em nosso sistema é possível**bloquear um contato**para ignorar as mensagens recebidas por esse número. Isso não vai impedir da mensagem chegar no celular – para isso, bloqueie o número pelo próprio celular. Mas vai impedir que a mensagem chegue em nosso sistema e não atrapalhe o seu atendimento. 
### Como Bloquear um Contato
 Para bloquear um contato acesse Conexões editar Ignorar Números . Digite um ou mais números (no formato ddi+ddd+numero, somente com números, sem espaços e separados por vírgula). 
##### 📌  Pronto, esses números não terão as mensagens recebidas dentro de nossa plataforma.



---

### Pesquisar Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/pesquisar-contato/](https://help.pacoticket.com.br/principal/contatos/pesquisar-contato/)

Para**pesquisar**um contato, acesse o menu Contatos Pesquisar



---

### Iniciar Conversa com um Contato

> 🔗 [https://help.pacoticket.com.br/principal/contatos/iniciar-conversa-com-um-contato/](https://help.pacoticket.com.br/principal/contatos/iniciar-conversa-com-um-contato/)

Para**iniciar uma conversa**com um contato, acesse o menu Contatos Ícone WhatsApp**defina uma**Fila**e uma**Conexão**para iniciar.**,**Conexão**e**atendente**. 
#####  Você também pode iniciar uma nova conversa diretamente na tela de Chat, ao clicar no botão**NOVO**para iniciar um**Ticket**, digite o número WhatsApp do contato. Caso ele não esteja cadastrado no sistema, a opção**Adicionar**aparecerá.



---

### Importar Contatos (planilha)

> 🔗 [https://help.pacoticket.com.br/principal/contatos/importar-contatos-planilha/](https://help.pacoticket.com.br/principal/contatos/importar-contatos-planilha/)

Ao**importar,**você pode adicionar ou atualizar vários contatos de uma só vez. Acesse o menu Contatos Importar / Exportar Importar Arquivo 
#####  ➡️  O procedimento de importação de planilha para**Adicionar Novos Contatos**é diferente de**Atualizar Contatos**(veja abaixo) 
### Como Importar Novos Contatos
 É possível**importar novos**contatos com os seguintes campos: ▫️Número, ▫️Nome, ▫️Email, ▫️CPF/CNPJ, ▫️Gênero, ▫️Estado, ▫️Cidade, ▫️Referência, ▫️Aniversário, ▫️Endereço. 
##### 📌 Atenção à formataçãos dos campos de :**Número**: somente com números (sem espaço, letra ou símbolos) e no formato DDI DDD NUMERO (Ex: 551199998888)**Aniversário**: colocar a data de nascimento no formato ANO-MES-DIA(letra T)HORA:MINUTO  Ex: 1982-11-20T10:30
### Modelo Planilha de Importação
 Baixe nossa planilha para garantir que seu arquivo de importação esteja no formato correto.  Clique para Download  Ajuda 
### Como Atualizar Contatos (usando planilha)
 Nosso sistema permite**atualizar**contatos em massa alterando os campos ▫️Nome, ▫️Email, ▫️CPF/CNPJ, ▫️Gênero, ▫️Estado, ▫️Cidade, ▫️Referência, ▫️Aniversário, ▫️Endereço. 
##### 📌 Além desses, você pode atualizar também:
 ▫️Carteira, ▫️Tag, ▫️TicketStatus 
#####  ⚠️ Atenção
 Para atualizar contatos é preciso adicionar a coluna “**Atualizar**” na planilha de importação, colocando um número que serve como referência aos campos que serão atualizados. (veja tabela abaixo) Valor do campoSerá Atualizado:1**Nome**2**Nome**e**E-mail**3**Carteira**(definir o ID do atendente)4**Tag**(definir o ID da tag e o ID da Conexão na coluna WhatsApp)5**Campos extras**como ▫️CPF/CNPJ, ▫️Gênero, ▫️Estado, ▫️Cidade, ▫️Referência, ▫️Aniversário, ▫️Endereço,



---

### Importar Contatos (telefone)

> 🔗 [https://help.pacoticket.com.br/principal/contatos/importar-contatos-telefone/](https://help.pacoticket.com.br/principal/contatos/importar-contatos-telefone/)

É possível**importar**contatos diretamente da agenda de seu  telefone 📱. 
#####  💬 Fale com a nossa equipe antes
 Precisamos habilitar a configuração: “**Permitir Importação de Contatos Automática**“ 
#####  ⚠️ Atenção
 Esse é um processo que consome uma grande quantidade de recursos da ferramenta. Recomendamos que seja feito fora do horário de pico! Após 10 minutos que nossa equipe habilitar essa funcionalidade, acesse o menu Conexões e defina como PADRÃO a conexão desejada para importar os contatos do telefone.Realize novamente a leitura do QR CODE (clique em excluir Sessão. Evite excluir a conexão). Aguarde mais 10 minutos.Acesse o menu Contatos Importar / Exportar Agenda do Telefone 
#####  Para evitar lentidão na plataforma: ao finalizar, comunique nossa equipe para que possamos desabilitar a configuração de “**Permitir Importação de Contatos Automática**“



---

### Exportar Contatos

> 🔗 [https://help.pacoticket.com.br/principal/contatos/exportar-contatos/](https://help.pacoticket.com.br/principal/contatos/exportar-contatos/)

Para**exportar**contatos acesse o menu Contatos Importar / Exportar**” e/ou por “**Filas / Setores**“, podendo inclusive adicionar mais de um filtro de cada tipo. 
#####  Para exportar “**todos**” os contatos, deixe os campos de filtro vazio. Nosso sistema irá exportar uma planilha “**.csv**” com ▫️Nome, ▫️Email, ▫️Número, ▫️Tags e ▫️Filas desses contatos.




---


## Tarefas

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/](https://help.pacoticket.com.br/principal/tarefas/)

###  Organizando a sua Produtividade  🧩 A lista de**Tarefas**é uma ferramenta de gestão integrada que permite organizar suas pendências e acompanhar o progresso das atividades da equipe sem sair do**Pacoticket**. Perfeito para: ☑️**Organização Pessoal:**centralize suas tarefas em um único lugar. ☑️**Gestão de Prioridades:**classifique demandas por urgência (Alta, Média ou Baixa) para focar no que é mais importante. ☑️**Produtividade:**visão geral do progresso e das estatísticas de conclusão.



---

### Visão Geral Tarefas

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/visao-geral-tarefas/](https://help.pacoticket.com.br/principal/tarefas/visao-geral-tarefas/)

🧩**Visão Geral de Tarefas**é o painel de controle operacional onde você gerencia suas pendências, acompanha prazos e monitora a produtividade da equipe. Esta tela unifica a criação, a busca e a análise de desempenho em uma única interface.  
### ⚡**Cabeçalho de Controle:**no topo direito da tela, você encontra as ferramentas de navegação: 🔘**Buscar tarefas:**campo de texto para digitar o nome da tarefa. 🔘**Visualização:**alterne entre visualização em “Grade”, “Lista” ou “Calendário”. 🔲**+ NOVA TAREFA:**botão para iniciar o cadastro de uma nova tarefa.****⚡**Dashboard:**painel de métricas.**◽ Total de Tarefas (ícone “clipboard” azul):**soma de todas as tarefas visíveis.**◽ Concluídas (ícone “check” verde):**quantidade de tarefas já finalizadas.**◽ Pendentes (ícone “relógio” laranja):**quantidade de tarefas em aberto.**◽ Alta Prioridade (ícone “exclamação” vermelho):**quantidade de tarefas com Prioridade Alta.**◽ Média Prioridade (ícone “exclamação” laranja):**quantidade de tarefas com prioridade Média.**◽ Baixa Prioridade(ícone “exclamação” verde):**quantidade de tarefas com prioridade Baixa. 
### PARTE CENTRAL**⚡ Filtros:**permite refinar o que é exibido na tela. Ao aplicar um filtro aqui,**todos**os números do Dashboard são recalculados.**🔘 Status:**segmenta por status “Todas”, “Pendentes”, “Concluídas”.**🔘 Prioridade:**segmenta a lista por prioridade “Alta”, “Média” ou “Baixa”.**🔘 Ordernar por:**“Data de Vencimento”, “Prioridade” ou “Título por ordem Alfabética”.**🔘 Usuário:**segmenta por usuário (seja  responsável, atribuído ou compartilhado).   ⚡**Lista de Tarefas:**cada box representa uma tarefa cadastrada no sistema, sendo composta por: ◽**Nome:**rótulo cadastrado para essa tarefa. ◽**Etiqueta Prioridade:**indica a prioridade dessa tarefa, sendo Alta = vermelha, Média = laranja, Baixa = verde. ◽**Ícone Conclusão:**círculo vazio indica tarefa pendente, círculo com check verde indica tarefa concluída. ◽**Data de Vencimento:**data limite esperada para finalizar a tarefa. ◽**Horário:**tempo inicial e final da tarefa. ◽**Lembrete:**notificação de lembrete alguns minutos antes do início da tarefa. ◽**Repetir:**frequência recorrente que essa tarefa deve se repetir. ◽**Responsável:**usuário a quem essa tarefa está atribuída. ◽**Ticket****ID:**número ID do ticket dessa tarefa. ◽**Criado por:**usuário a que cadastrou essa tarefa. 
##### ➡️  rodapé
 🔲**Ícone Mensagem:**botão para adicionar comentários na tarefa. 🔲**Ícone Compartilhar:**botão para compartilhar a tarefa com outros usuários. 🔲**Ícone Lápis:**botão para editar uma tarefa. 🔲**Ícone Lixeira:**botão para excluir uma tarefa.



---

### Adicionar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/adicionar-tarefa/](https://help.pacoticket.com.br/principal/tarefas/adicionar-tarefa/)

🧩**Adicionar Tarefa**é o processo de registrar novas demandas ou lembretes no sistema, garantindo que nenhuma atividade importante seja esquecida. ☑️**Registro Rápido:**salve ideias e pendências no momento em que elas surgem. ☑️**Planejamento:**defina prioridades e prazos para evitar atrasos nas entregas. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Clique no botão**+ Nova Tarefa**. ➡️  Preencha os**campos**e clique no botão**Adicionar Tarefa**. 
### Como adicionar uma Tarefa
 Acesse o menu Tarefas e preencha o formulário:**digite o nome da tarefa de forma clara.  🔘**Descrição:**o campo descrição é opcional, mas útil para detalhar instruções.**🔘 Data de Vencimento:**selecione o dia limite para a conclusão da atividade.**🔘 Prioridade:**Selecione entre**Baixa**,**Média**ou**Alta**. Isso criará uma etiqueta colorida (TAG) na lista de tarefas, facilitando a identificação visual do que é urgente. 🔲 Para finalizar, clique em**Adicionar Tarefa**.  
####  ❔ Dúvidas Comuns**Não consigo clicar em “Adicionar Tarefa”:**verifique se o campo**Título**está preenchido, pois ele é obrigatório.**A tarefa não apareceu na lista:**verifique se há algum**Filtro**de status ativo (ex: “Concluídas”) ou de prioridade que esteja ocultando a nova tarefa. Limpe os filtros para visualizar todas.**Posso editar a tarefa depois de criada?**Sim, basta clicar no ícone de lápis (✏️) na lista de tarefas.**É possível desmarcar uma tarefa como Concluída?**Sim, basta clicar no ícone de check (✅) na lista de tarefas.



---

### Adicionar Tarefa ao Ticket

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/adicionar-tarefa-ao-ticket/](https://help.pacoticket.com.br/principal/tarefas/adicionar-tarefa-ao-ticket/)

🧩**Adicionar Tarefa ao Ticket**agiliza o fluxo de trabalho permitindo criar demandas sem sair da tela de atendimento, mantendo o foco no cliente enquanto organiza os próximos passos.  ☑️**Contexto Automático:**a tarefa já nasce vinculada ao cliente / conversa atual. ☑️**Delegação Imediata:**atribua a responsabilidade da tarefa para outro atendente diretamente na criação. 
#####  Resumo Prático
 ➡️  Abra o**Ticket (conversa)**do cliente desejado. ➡️  Na parte de Ações do Ticket clique no ícone (📝)**Nova Tarefa**. ➡️  Preencha os**campos**e clique no botão**Criar Tarefa**. 
### Como adicionar uma Tarefa ao Ticket
 Acesse o menu Chat selecione um ticket ícone Nova Tarefa e preencha o formulário:**digite o nome da tarefa de forma clara.  🔘**Descrição:**o campo descrição é opcional, mas útil para detalhar instruções.**🔘 Prioridade:**Selecione entre**Baixa**,**Média**ou**Alta**. Isso criará uma etiqueta colorida (TAG) na lista de tarefas, facilitando a identificação visual do que é urgente.**🔘 Data de Vencimento:**selecione o dia limite para a conclusão da atividade.**🔘 Atribuir para:**Selecione o**Atendente**que será o responsável pela execução dessa tarefa. 🔲 Para finalizar, clique em**Criar Tarefa**.  
####**O cliente visualiza que criei uma tarefa?**Não, a criação de tarefas é um processo interno e invisível para o cliente.**A tarefa some se o atendimento for finalizado?**Não, a tarefa permanece registrada e vinculada ao histórico do cliente, podendo ser consultada mesmo após o ticket ser encerrado (Resolvido).



---

### Editar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/editar-tarefa/](https://help.pacoticket.com.br/principal/tarefas/editar-tarefa/)

🧩**Editar Tarefa**permite atualizar as informações de uma demanda já cadastrada, garantindo que os prazos e prioridades estejam sempre alinhados com a realidade do projeto. ☑️**Correção de Dados:**ajuste títulos, descrições ou datas que foram inseridos incorretamente no momento do cadastro. ☑️**Repriorização:**altere o nível de urgência (Prioridade) conforme a demanda do dia a dia muda. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Clique no ícone**lápis**(✏️)  da Tarefa. ➡️  Edite os**campos**desejados e clique no botão**Salvar**. 
### Como editar uma Tarefa
 Acesse o menu Tarefas ícone Lápis da tarefa**digite o nome da tarefa de forma clara.  🔘**Descrição:**o campo descrição é opcional, mas útil para detalhar instruções.**🔘 Data de Vencimento:**selecione o dia limite para a conclusão da atividade.**🔘 Prioridade:**Selecione entre**Baixa**,**Média**ou**Alta**. Isso criará uma etiqueta colorida (TAG) na lista de tarefas, facilitando a identificação visual do que é urgente. 🔲 Para finalizar, clique em**Salvar**.  
####  ❔ Dúvidas Comuns**Posso editar uma tarefa já concluída?**Sim, você pode editar os dados mesmo que ela esteja riscada (concluída), mas isso não altera o status de conclusão dela automaticamente.**Todos podem editar qualquer tarefa?**Você pode editar tarefas que criou ou tarefas atribuídas a você.



---

### Excluir Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/excluir-tarefa/](https://help.pacoticket.com.br/principal/tarefas/excluir-tarefa/)

🧩**Excluir Tarefa**é o processo de remover permanentemente uma demanda da lista, utilizado para manter a organização e evitar o acúmulo de informações desnecessárias. ☑️**Limpeza:**remova tarefas duplicadas ou criadas por engano para manter a visualização limpa. ☑️**Cancelamento:**descarte atividades que foram descontinuadas e não precisam mais ser monitoradas ou concluídas. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Na lista de Tarefas, clique no ícone de**lixeira 🗑️**de uma tarefa específica. ➡️  Confirme a**exclusão**da tarefa. 
### Como excluir uma Tarefa
 Acesse o menu Tarefas ícone Lixeira da tarefa**.  ⚠️**Atenção**: essa ação não poderá ser desfeita. 
####  ❔ Dúvidas Comuns**Excluí uma tarefa sem querer, tem como recuperar?**Não, a exclusão de tarefas é uma ação irreversível. Se apagou por engano, será necessário criar a tarefa novamente.**Quem pode excluir uma tarefa?**Os atendentes que tem acesso a ela.**A tarefa excluída conta nas estatísticas?**Não, ao excluir uma tarefa, ela é removida dos contadores do painel.



---

### Comentar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/comentar-tarefa/](https://help.pacoticket.com.br/principal/tarefas/comentar-tarefa/)

🧩**Comentar Tarefa**permite adicionar observações, atualizações de status ou feedbacks diretamente em uma demanda específica. ☑️**Centralização:**mantenha todas as discussões sobre a atividade no mesmo lugar, evitando que informações se percam em chats paralelos. ☑️**Histórico:**registre o andamento e as decisões tomadas durante a execução da tarefa para consultas futuras. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Na lista de Tarefas, clique no ícone**comentários**(💬) de uma tarefa específica. ➡️  Veja o histórico da conversa (se houve) e comente se desejar. 
### Como comentar uma Tarefa
 Acesse o menu Tarefas ícone Mensagem da tarefa****digite sua observação, feedback ou atualização sobre o progresso da tarefa.  🔲 Clique no botão**Adicionar Comentário**.  
####  ❔ Dúvidas Comuns**Quem pode ver meus comentários?**Todos os usuários que têm acesso à tarefa (criador, responsável e usuários compartilhados) podem visualizar e responder aos comentários.**Posso apagar um comentário?**Pode apagar os seus próprios comentários. Administradores conseguem apagar qualquer comentário.



---

### Compartilhar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/compartilhar-tarefa/](https://help.pacoticket.com.br/principal/tarefas/compartilhar-tarefa/)

🧩**Compartilhar Tarefa**permite expandir o acesso e a visibilidade de uma tarefa para outros membros da equipe, além do criador e/ou responsável. ☑️**Trabalho em Equipe:**envolva outros colaboradores em uma atividade específica sem precisar dar acesso a todas as suas tarefas. ☑️**Visibilidade:**mantenha gestores ou partes interessadas informados sobre o andamento de uma entrega importante. ☑️**Autonomia:**ao ter a tarefa compartilhada, o usuário poderá**editar, comentar, compartilhar, excluir**e**finalizar**a tarefa como se fosse o criador dela. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Na lista de Tarefas, clique no ícone**compartilhar**de uma tarefa específica. ➡️  Selecione os**atendentes**que você deseja compartilhar a tarefa e clique no botão**Compartilhar**. 
### Como compartilhar uma Tarefa
 Acesse o menu Tarefas ícone Compartilhar da tarefa**selecione um ou mais atendentes que você deseja compartilhar essa tarefa.  🔲 Clique no botão**Compartilhar**.  
####  ❔ Dúvidas Comuns**Quem tem acesso à tarefa?**Por padrão, apenas o usuário que criou a tarefa e o usuário atribuído a ela têm acesso. Ao usar o compartilhar, você estende esse acesso aos usuários selecionados.**O usuário compartilhado pode editar a tarefa?**Sim, ao receber o acesso compartilhado, o usuário pode interagir com a tarefa (editar, comentar, compartilhar, excluir e finalizar).**Posso remover o acesso de alguém?**Sim, basta acessar a lista de compartilhamento novamente e desmarcar o usuário desejado.



---

### Concluir Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/tarefas/concluir-tarefa/](https://help.pacoticket.com.br/principal/tarefas/concluir-tarefa/)

🧩**Concluir Tarefa**serve para marcar uma atividade como concluída, sinalizando para a equipe e para o sistema que aquela demanda foi entregue.  ☑️**Organização:**mantenha o foco apenas nas pendências, permitindo filtrar e ocultar o que já foi resolvido. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tarefas**. ➡️  Na lista de Tarefas, clique no ícone**concluir**(✅) de uma tarefa específica. ➡️  O título da tarefa ficará riscado. 
### Como concluir uma Tarefa
 Acesse o menu Tarefas ícone Concluir da tarefa**clique no check (✅) para marcar uma tarefa como concluída .  Imediatamente o título da tarefa aparecerá riscado e o painel será atualizado! 
####  ❔ Dúvidas Comuns**Finalizei por engano, como desfazer?**Clique novamente no ícone de**Concluir**(✅). A tarefa deixará de estar riscada e voltará para o status de pendente.**A tarefa sumiu após finalizar:**Verifique os**Filtros**. Se o filtro estiver configurado para mostrar apenas “Pendentes”, as tarefas concluídas ficarão ocultas. Mude o filtro para “Todas” ou “Concluídas”.**Quem pode finalizar?**Qualquer usuário com acesso à tarefa (Criador, Responsável ou Compartilhado) tem permissão para alterar o status de conclusão.




---


## Agendamento

> 🔗 [https://help.pacoticket.com.br/principal/agendamento/](https://help.pacoticket.com.br/principal/agendamento/)

###  Pensando no Futuro  Em breve




---


## Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/](https://help.pacoticket.com.br/principal/tags/)

###  Categorizando com estilo  🧩**Tags**são etiquetas personalizáveis que permitem categorizar, segmentar e automatizar o atendimento dentro do**Pacoticket**. Elas funcionam como “carimbos” digitais para identificar clientes, conversas e etapas do funil de vendas.  ☑️**Organização Visual:**identifique rapidamente o status ou o perfil do cliente através de cores e nomes. ☑️**Segmentação Inteligente:**classifique contatos para gerar relatórios precisos ou para disparar automações futuras. ☑️**Controle de Fluxo:**defina etapas claras de trabalho (ex: “Em Aberto”, “Aguardando Pagamento”, “Suporte N1”) para estruturar a rotina da equipe.



---

### Visão Geral Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/visao-geral-tags/](https://help.pacoticket.com.br/principal/tags/visao-geral-tags/)

🧩**Visão Geral das Tags**é o painel de controle central onde todas as etiquetas do seu sistema são listadas. 
### ⚡**Cabeçalho de Controle:**no topo direito da tela, você encontra as ferramentas de navegação: 🔘**Buscar tags:**campo de texto para digitar o nome da etiqueta. 🔘**Filtrar por tipo:**menu suspenso que permite visualizar apenas tags de uma categoria específica: AtendimentoEncerramentoCRMCom Pixel METARemarketing   🔲**+ NOVA TAG:**botão para iniciar o cadastro de uma nova etiqueta. 
### PARTE CENTRAL
 ⚡**Lista de Tags:**cada box representa uma etiqueta cadastrada no sistema, sendo composta por: 
##### ⬅️  do lado esquerdo 
 ◽**Ícone colorido:**indica a cor escolhida para essa tag. ◽**Nome:**rótulo cadastrado para essa tag. ◽**Etiqueta Tipo de Tag:**podendo ser Atendimento (Azul), Encerramento (Laranja) ou CRM (verde). ◽**Etiqueta Kanban:**(verde com ícone “check” cinza) – indica que a tag possui Kanban habilitado. ◽**Etiqueta Pixel META:**(azul com ícone “logo Facebook” cinza) – indica que a tag possui integração com um Pixel Meta. ◽**Etiqueta Remarketing:**(roxo com ícone “looping” cinza) – indica que a tag possui automação de fluxo. 
##### ➡️  do lado direito
 ◽**ID:**número ID da tag, utilizado para automações. ◽**Prioridade:**ordenação da TAG no quadro Kanban. ◽**Tickets:**quantidade de tickets possuem essa tag vinculada. 🔲**Ícone Pessoas:**botão para ver todos os tickets associados à tag. 🔲**Ícone Lápis:**botão para editar uma tag. 🔲**Ícone Lixeira:**botão para excluirx uma tag.



---

### Tipos de Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/tipos-de-tags/](https://help.pacoticket.com.br/principal/tags/tipos-de-tags/)

🧩**Tipos de Tag**definem em qual**momento**e para qual**finalidade**uma etiqueta será utilizada dentro do**Pacoticket**. ☑️**Organização de Fluxo (Atendimento):**controle visualmente em qual etapa do funil está a conversa. ☑️**Relatórios de Motivo (Encerramento):**registre exatamente o porquê daquele contato ter ocorrido para gerar estatísticas. ☑️**Gestão de Vendas (CRM):**classifique as oportunidades dentro do seu Pipeline de Vendas (ex: Produto, Origem, Temperatura). ☑️**Qualificação de Perfil (Contato):**identifique quem é o cliente (ex: VIP, Inadimplente), independente de haver uma negociação ou conversa aberta. (ainda não disponível na plataforma) 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou Editar uma tag, no seção “Configurações Avançadas”, defina o**Tipo de Tag**: Atendimento, Encerramento ou CRM. 
### Entendendo os Tipos de Tags
⚡**Tag de Atendimento (Vínculo: Ticket)**São tags vinculadas à**conversa atual**(Ticket).**Função:**indicar o status de trabalho daquele atendimento específico.**Exemplos:**“Aguardando Pagamento”, “Em Análise”, “Suporte N1”.   ⚡**Tag de Encerramento (Vínculo: Protocolo)**São tags vinculadas ao**assunto**do atendimento (Protocolo).**Função:**indicar o motivo ou a resolução do contato ao finalizar o protocolo.**Exemplos:**“Venda Realizada”, “Dúvida Sanada”, “Improdutivo”.   ⚡**Tag de CRM (Vínculo: Oportunidade)**São tags estratégicas, vinculadas ao**card de negociação**no Pipeline.**Função:**classificar a venda em andamento.**Exemplos:**“Produto A”, “Lead do Google”, “Esfriando”, “Alta Prioridade”.   ⚡**Tag de Contato (Vínculo: Pessoa)**São tags permanentes, vinculadas ao**perfil do cliente**.**Função:**qualificar a pessoa ou empresa. Essa etiqueta é fixa no cadastro.**Exemplos:**“Cliente VIP”, “Revendedor”, “Parceiro”, “Bloqueado”. 
### Como definir o Tipo de Tag
 Acesse o menu Tags adicionar ou editar Tag****🔘**Tipo de Tag**:**escolha entre Atendimento, Encerramento ou CRM.  
####  ❔ Dúvidas Comuns**Qual a diferença entre Tag de Atendimento, Encerramento e CRM?**Tag de Atendimento é sobre o ticket (conversa), Tag de Encerramento é sobre o protocolo (assunto), Tag CRM é sobre o contato (perfil)**Onde vejo as tags de Encerramento?**elas ficam visíveis no Menu “Pesquisar”, nos detalhes dos atendimentos finalizados e nos relatórios.**Posso usar a mesma tag para tudo?**Não. O sistema separa os tipos para garantir que seus relatórios e suas visualizações não fiquem misturados.



---

### Tags de Atendimento

> 🔗 [https://help.pacoticket.com.br/principal/tags/tags-de-atendimento/](https://help.pacoticket.com.br/principal/tags/tags-de-atendimento/)

🧩**Tag de Atendimento**é a etiqueta utilizada para classificar o status de um**Ticket**(conversa) e serve para indicar em qual etapa do fluxo aquele atendimento se encontra. ☑️**Fluxo de Trabalho:**organize visualmente o progresso das conversas (ex: “Aguardando Financeiro”, “Em Suporte”, “Pendente”). ☑️**Gestão Visual (Kanban):**transforme essas tags em colunas no quadro de gestão, permitindo arrastar os cards dos clientes entre as etapas. 
#####  ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou editar uma tag, na seção “Configurações Avançadas”, defina o**Tipo de Tag**: Atendimento. ➡️  Habilite o**Kanban**nessa tag, e sua**Ordenação**para melhor organização. 
### Como definir uma Tag do Tipo Atendimento
 Acesse o menu Tags adicionar ou editar Tag**🔘**Tipo de Tag:**selecione a opção**Atendimento**. Isso garante que a tag apareça na lista de conversas e nas opções do Kanban. 🔘**Kanban:******Selecione**Habilitado**se quiser que esta tag vire uma coluna no seu quadro visual.Selecione**Desabilitado**se quiser que ela seja apenas uma etiqueta informativa colorida no ticket do cliente. 🔘**Ordenação:**defina a prioridade numérica (0, 1, 2…). No Kanban, números menores aparecem primeiro (da esquerda para a direita). 
### Como marcar uma Tag do Tipo Atendimento
 No menu Chats , na janela de ticket logo abaixo do nome do contato, defina quantas tags de Atendimento desejar para esse ticket. 
####**Posso ter uma Tag de Atendimento que não está no Kanban?**Sim. Basta deixar o campo Kanban como “Desabilitado”. Ela servirá como uma etiqueta visual colorida no chat, mas não criará uma coluna nova.**Como movo um cliente de uma tag para outra?**Se o Kanban estiver ativo, basta arrastar o card. Se não, você pode alterar a tag manualmente dentro da janela de conversa (chat). 
###**Diferença de Ticket e Protocolo**##### (Ticket)
 Um**ticket**é uma conversa com um cliente dentro de uma conexão (WhatsApp, Facebook, etc.)   Ele não muda de número, mesmo que seja fechado e reaberto entre o mesmo cliente e conexão. Se a mesma pessoa usar outra plataforma, aí sim, será outro número de ticket.  
##### # Protocolo
 Um**protocolo**é o que acontece entre abrir e fechar um ticket. Cada vez que o ticket é reaberto, um novo protocolo é criado (mas atenção: o número do ticket continua sempre o mesmo).**Resumindo:**o ticket é a conversa, e o protocolo são os “capítulos” dessa conversa.



---

### Tags de Encerramento

> 🔗 [https://help.pacoticket.com.br/principal/tags/tags-de-encerramento/](https://help.pacoticket.com.br/principal/tags/tags-de-encerramento/)

🧩**Tag de Encerramento**é a etiqueta utilizada exclusivamente no momento de finalizar um protocolo do ticket. Ela fica vinculada ao**Protocolo**(assunto) e serve para categorizar qual foi o motivo ou o resultado final daquele contato. ☑️**Métricas de Gestão:**gere relatórios precisos sobre os motivos de contato (ex: 30% Dúvidas, 20% Vendas, 50% Suporte). ☑️**Análise de Qualidade:**identifique gargalos ou problemas recorrentes descrevendo corretamente cada conversa encerrada. 
#####  ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou editar uma tag, na seção “Configurações Avançadas”, defina o**Tipo de Tag**: Encerramento. 
### Como definir uma Tag do Tipo Encerramento
 Acesse o menu Tags adicionar ou editar Tag**🔘**Tipo de Tag:**selecione a opção**Encerramento**. ⚠️ Tags configuradas como “Encerramento”**não**aparecem no Kanban e nem no ticket. 
### Como Habilitar uma Tag de Encerramento
 Para habilitar a tag de encerramento, acesse Filas e Chatbot editar uma Fila e ative a opção “**NPS Obrigatório**“. 
### Como marcar uma Tag de Encerramento
 Ao encerrar um ticket dessa fila, a opção: “Selecione a razão de encerramento” aparecerá para escolha de uma tag de encerramento. 
####**A Tag de Encerramento é obrigatória?**O sistema permite configurar quais filas são obrigatórias o uso de tags de encerramento.**Posso selecionar mais de uma tag ao encerrar?**Não, somente uma tag de encerramento por protocolo fechado. 
###**Diferença de Ticket e Protocolo**##### (Ticket)
 Um**ticket**é uma conversa com um cliente dentro de uma conexão (WhatsApp, Facebook, etc.)   Ele não muda de número, mesmo que seja fechado e reaberto entre o mesmo cliente e conexão. Se a mesma pessoa usar outra plataforma, aí sim, será outro número de ticket.  
##### # Protocolo
 Um**protocolo**é o que acontece entre abrir e fechar um ticket. Cada vez que o ticket é reaberto, um novo protocolo é criado (mas atenção: o número do ticket continua sempre o mesmo).**Resumindo:**o ticket é a conversa, e o protocolo são os “capítulos” dessa conversa.



---

### Tags de CRM

> 🔗 [https://help.pacoticket.com.br/principal/tags/tags-de-crm/](https://help.pacoticket.com.br/principal/tags/tags-de-crm/)

🧩**Tags de CRM**são etiquetas utilizadas para classificar e segmentar as negociações as**Oportunidades**(cards de negociação dentro do seu Pipeline de Vendas).  ☑️**Identificação de Produto:**saiba rapidamente qual produto ou serviço está sendo negociado naquele card (ex: “Plano Anual”, “Consultoria”, “Mentoria”). ☑️**Rastreamento de Origem:**identifique de onde veio aquela oportunidade específica (ex: “Google Ads”, “Indicação”, “Evento”). ☑️**Priorização de Venda:**marque negociações que exigem atenção especial dentro de uma etapa (ex: “Esfriando”, “Alta Temperatura”, “Fechamento Imediato”). 
#####  ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou editar uma tag, na seção “Configurações Avançadas”, defina o**Tipo de Tag**: CRM. 
### Como definir uma Tag do Tipo CRM
 Acesse o menu Tags adicionar ou editar Tag**🔘**Tipo de Tag:**selecione a opção**CRM**. 
### Como marcar uma Tag de CRM
 Em  Chats ou em CRM Oportunidades defina quantas tags desejar ao adicionar/editar uma**Oportunidade**. 
####**Essa tag aparece no chat?**Não. Ela fica restrita ao card da oportunidade dentro do módulo de CRM, servindo para a equipe de vendas se organizar.**Posso filtrar o funil por tags?**Sim.



---

### Adicionar Tag

> 🔗 [https://help.pacoticket.com.br/principal/tags/adicionar-tag/](https://help.pacoticket.com.br/principal/tags/adicionar-tag/)

🧩**Adicionar Nova Tag**é o procedimento para cadastrar uma nova etiqueta no sistema, permitindo que sua equipe use para classificar tickets, protocolos e oportunidades.  ☑️**Expansão:**crie novos identificadores conforme sua operação cresce (ex: uma nova campanha de marketing ou um novo produto). ☑️**Ajuste de Processo:**insira novas etapas no seu fluxo de trabalho. 
#####  ➡️ Acesse o menu**Tags**. ➡️ Clique no botão**+ Nova Tag**no canto superior direito. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como adicionar uma Tag
 Acesse o menu Tags + Nova Tag****“Informações Básicas”:**🔘**Nome:**digite o título da etiqueta / tag. 🔘**Cor:**selecione uma cor para rápida identificação visual.**“Configurações Avançadas”:**🔘**Tipo de Tag:**selecione a categoria correta:**– Atendimento:**para classificar o chat.**– Encerramento:**para motivos de finalização.**– CRM:**para oportunidades no pipeline de vendas. 🔘**Kanban:**selecione**Habilitado**se quiser que esta tag se torne uma coluna no seu quadro de gestão visual (opção válida apenas para tags do tipo Atendimento). 🔘**Ordenação:**defina a prioridade de exibição. No Kanban, números menores aparecem primeiro (da esquerda para a direita). 🔲 Para finalizar, clique em**Adicionar**. 
####  ❔ Dúvidas Comuns**Posso criar duas tags com o mesmo nome?**O sistema recomenda nomes únicos para evitar confusão nos relatórios, mas você pode usar cores diferentes para diferenciá-las visualmente.**A tag nova aparece para todos os usuários?**Sim, assim que salva, a tag fica disponível para todos os atendentes que têm permissão de visualizar tags.



---

### Editar Tag

> 🔗 [https://help.pacoticket.com.br/principal/tags/editar-tag/](https://help.pacoticket.com.br/principal/tags/editar-tag/)

🧩**Editar Tag**permite atualizar as informações de uma etiqueta já existente. ☑️**Correção e Ajustes:**corrija erros de digitação no nome ou altere a cor para melhorar a visibilidade no painel. ☑️**Reestruturação de Processos:**mude o comportamento de uma tag (ex: ativar o modo Kanban) sem precisar excluir e criar uma nova do zero. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Clique no ícone**lápis**(✏️)  da Tag. ➡️  Edite os**campos**desejados e clique no botão**Salvar**. 
### Como editar uma Tag
 Acesse o menu Tags ícone Lápis da tag****“Informações Básicas”:**🔘**Nome:**renomeie a tag. Atenção: ao mudar o nome, a alteração reflete automaticamente em todos os clientes ou tickets que já possuem essa etiqueta. 🔘**Cor:**escolha uma nova cor para destacar ou diferenciar a tag.**“Configurações Avançadas”:**🔘**Tipo de Tag:**altere a categoria da tag (**Atendimento**,**Encerramento**,**CRM**). Cuidado: mudar o tipo altera onde a tag aparece. Se mudar de “Atendimento” para “Encerramento”, ela sumirá do Kanban e aparecerá apenas na finalização. 🔘**Kanban:**habilite ou desabilite a visualização em colunas (apenas para tags do tipo Atendimento). 🔘**Ordenação:**ajuste o número para mudar a posição da tag na lista ou a ordem da coluna no Kanban. 🔲 Para finalizar, clique em**Salvar**. 
####  ❔ Dúvidas Comuns**Se editar o nome, perco o histórico?**não. O sistema atualiza o nome visualmente em todos os registros passados e presentes, mantendo o vínculo histórico intacto.**Mudei a cor mas não atualizou na hora:**às vezes é necessário atualizar a página (F5) para que a nova cor seja aplicada em todos os cards do Kanban.



---

### Excluir Tag

> 🔗 [https://help.pacoticket.com.br/principal/tags/excluir-tag/](https://help.pacoticket.com.br/principal/tags/excluir-tag/)

🧩**Excluir Tag**é o procedimento para remover definitivamente uma etiqueta do sistema.  ☑️**Limpeza de Base:**remova tags antigas de campanhas passadas ou processos que não existem mais. ☑️**Correção de Erros:**apague etiquetas criadas duplicadas ou com configurações incorretas que não podem ser ajustadas. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Na lista de Tags, clique no ícone de**lixeira 🗑️**de uma tag específica. ➡️  Confirme a**exclusão**da tag. 
### Como excluir uma Tag
 Acesse o menu Tags ícone Lixeira da tag**.  ⚠️**Atenção**: essa ação não poderá ser desfeita. 
####  ❔ Dúvidas Comuns**A exclusão é reversível?**não. Uma vez excluída, a tag deixa de existir. Se precisar dela novamente, terá que criar uma nova (que terá um ID diferente no banco de dados).**Ao excluir uma tag, o que acontece com os elementos que tinham essa tag?**A tag é removida automaticamente do seu vínculo. O elemento permanece intacto, mas a classificação visual desaparece.**Desassociar tag do seu elemento é o mesmo que excluir uma tag?**Não, desassociar significa deixar de ter vinculo com o elemento, mas isso não significa que a tag seja excluída de todo o sistema.



---

### Kanban de Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/kanban-de-tags/](https://help.pacoticket.com.br/principal/tags/kanban-de-tags/)

🧩**Kanban de Tags**é a funcionalidade que transforma suas**tags de atendimento**em um quadro visual de colunas. Isso permite organizar seu fluxo de trabalho como um funil, movendo os clientes entre as etapas apenas arrastando os cards. ☑️**Gestão Visual:**abandone as listas intermináveis e visualize todo o seu atendimento em um único quadro, sabendo exatamente onde cada cliente está (ex: 5 em “Triagem”, 3 em “Negociação”). ☑️**Agilidade Operacional:**mova o cliente de etapa (altere a tag) simplesmente arrastando o card de uma coluna para outra, sem precisar abrir menus de edição. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou editar uma tag, no seção “Configurações Avançadas”, defina o**Tipo de Tag**: Atendimento. ➡️  Selecione Habilitado no campo**Kanban**. ➡️  Defina sua**Ordenação**no quadro visual. 
### Como definir uma Tag no Kanban
 Acesse o menu Tags adicionar ou editar Tag**certifique-se de que está selecionado como**Atendimento**. (Tags de Encerramento, CRM ou Contato não aparecem no Kanban de atendimento). 🔘**Kanban:**selecione**Habilitado**. Isso ativa a visualização de coluna para esta etiqueta. 🔘**Ordenação:**digite um número para definir a posição da coluna. Colunas com número**0**aparecem na extrema esquerda. Números maiores (**1, 2, 3**) ficam sequencialmente à direita. 🔲 Clique em**Salvar**. 
####  ❔ Dúvidas Comuns**Minha tag sumiu do Kanban:**verifique se ela não foi alterada acidentalmente para o tipo diferente de  “Atendimento” ou se o campo “Kanban” foi desabilitado.**Como mudo a ordem das colunas?**Basta alterar o número no campo “Ordenação” dentro da edição de cada tag. Se duas tags tiverem o mesmo número, a ordem pode ser alfabética ou de criação.**Posso ter uma tag de atendimento que não está no Kanban?**Sim. Se você deixar o campo Kanban como “Desabilitado”, a tag servirá apenas como uma etiqueta colorida no ticket, não fazendo parte do Kanban.



---

### Pixel Meta em Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/pixel-meta-em-tags/](https://help.pacoticket.com.br/principal/tags/pixel-meta-em-tags/)

🧩  A integração com**Pixel META em Tags**permite que o**Pacoticket**envie eventos automáticos para o Facebook Ads sempre que uma tag específica for marcada. Isso funciona via API de Conversões (CAPI). O**Pixel da Meta**é um pequeno código de**monitoramento**que deve ser inserido em algum local (website, nossa plataforma, etc), com o objetivo de enviar informações para a Meta sempre que um**evento**acontece, mapeando ações que ajudam a otimizar sua campanhas de publicidade (anúncios). Com o Pixel Meta você consegue: ☑️**Otimização de Anúncios:**informe ao Facebook exatamente quando um lead virou “Cliente” ou “Agendou Visita”, ajudando o algoritmo a encontrar mais pessoas com esse perfil. ☑️**Remarketing Preciso:**crie públicos personalizados de pessoas que chegaram até determinada etapa do funil (ex: tag “Interesse Enviado”) para mostrar anúncios específicos para elas. ☑️**Mensuração de ROI:**rastreie vendas e conversões que aconteceram dentro do atendimento no WhatsApp, cruzando os dados com suas campanhas de anúncios. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou Editar uma tag, na aba “Pixel Meta”, defina o**Pixel ID, Access Token, Nome do Evento, Custom Data (se houver) e Source**. ➡️  Ao associar o**Pixel Meta**, quando essa tag for marcada em algum local, nossa plataforma envia o evento à Meta.****### Como funciona o Pixel da Meta em Tags
 Em nossa plataforma, o**Pixel da Meta**pode ser inserido em uma tag, que vai funcionar como um**Gatilho de Evento de Conversão**. Quando essa tag for marcada, o**Pacoticket**imediatamente envia um sinal (o Evento) à Meta.  
#### ⚡ Exemplo Prático
 
###  Acesse o menu Tags adicionar ou editar Tag aba Pixel META**, preencha os campos com os dados fornecidos pelo Facebook Business Manager:**“Configuração Pixel META”**🔘**Access Token:**cole o token de acesso da API de Conversões. (tutorial aqui) 🔘**Pixel ID:**insira o ID (identificador) do seu pixel. (tutorial aqui) 🔘**Nome do Evento:**deve ser digitado exatamente igual a documentação da Meta:**Leads**,**CompleteRegistration**,**AddToWishlist**,**AddToCart**,**Purchase**, por exemplo. (documentação completa em  https://developers.facebook.com/docs/meta-pixel/reference) 🔘**Custom Data:**consulte a documentação para saber os campos opcionais e obrigatórios. No evento Purchase é obrigatório “currency” e “value”. Veja um exemplo: { "value": 115.00, "currency": "BRL" } 🔘**Source:**indica o local que o evento está sendo enviando.  Webiste, server, crm ou nesse caso poderia colocar o nome da nossa plataforma Pacoticket. 🔲 Para finalizar, clique em**Salvar**. 🎯 A partir de agora, sempre que essa tag for vinculada (manual ou automaticamente), o evento será enviado para o Facebook. 
####  ❔ Dúvidas Comuns**O evento é disparado se já havia a tag antes?**Não. O disparo ocorre no momento da “ação” de adicionar a tag ao contato ou ticket. Clientes que já possuíam a tag antes da configuração não enviam o evento retroativamente.**Preciso configurar em todas as tags?**Recomendamos configurar apenas em tags estratégicas que representam uma mudança de etapa importante no funil (ex: “Venda Realizada”, “Lead Qualificado”).**Onde pego o Access Token?**No Gerenciador de Eventos do Facebook.



---

### Remarketing em Tags

> 🔗 [https://help.pacoticket.com.br/principal/tags/remarketing-em-tags/](https://help.pacoticket.com.br/principal/tags/remarketing-em-tags/)

🧩**Remarketing em Tag (Automação)**permite agendar o disparo automático de um fluxo de mensagens sempre que uma tag for vinculada. É ideal para fazer cobranças, lembretes, follow-ups ou recuperação de vendas sem ação manual.  ☑️**Recuperação de Vendas:**configure o sistema para enviar uma mensagem “E aí, ficou alguma dúvida?” automaticamente 30 minutos após o cliente parar de responder (basta adicionar uma tag como “10min” ou “Aguardando”). ☑️**Follow-up Programado:**envie materiais complementares ou pesquisas de satisfação horas ou dias após o encerramento do atendimento. ☑️**Respeito aos Horários:**defina janelas de envio para garantir que sua automação não mande mensagens de remarketing de madrugada ou em finais de semana indesejados. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**. ➡️  Ao adicionar ou Editar uma tag, na aba “Remarketing”, defina o**Fluxo de Automação, quando e as restrições**de envio. 
### Como configurar uma automação de Remarketing de Tag
 Acesse o menu Tags ícone Lápis da tag aba Remarketing**Na aba**REMARKETING****“Automação e Remarketing”:**🔘**Fluxos de Automação:**selecione qual fluxo será disparado. Pré-requisito: o fluxo já deve ter sido criado anteriormente no menu de FlowBuilder. 🔘**Quando?:**defina o tempo de espera (delay) entre a marcação da tag e o disparo da mensagem. Exemplo: “A partir de 10 minutos” significa que o sistema contará 10 minutos após você colocar a tag antes de enviar o fluxo. 🔘**Pausar Automaticamente / Reiniciar:**(Janela de Envio) Defina um intervalo de horário permitido para o envio. Exemplo: Pausar às 22:00 e Reiniciar às 08:00. Se o tempo do disparo cair às 23h, o sistema segura a mensagem e só envia às 08h do dia seguinte. 🔘**Enviar em Finais de Semana e Feriados:********Habilitado:**envia a mensagem em qualquer dia.**Desabilitado:**se o disparo cair num sábado ou domingo, o sistema aguarda até o próximo dia útil.   🔲 Para finalizar, clique em**Salvar**. 
####  ❔ Dúvidas Comuns**Se remover a tag antes do tempo, o fluxo é enviado?**Não. Se você adicionar a tag “10min” e removê-la após 5 minutos, o gatilho é cancelado e o fluxo não é ativado.**Isso funciona para tags marcadas manualmente ou por automação?**Funciona para qualquer marcação, seja manualmente pelo atendente ou automaticamente por outro processo do sistema.**Posso ter vários remarketings ao mesmo tempo?**Sim. Um mesmo cliente pode ter a tag “Boleto Pendente” (que dispara em 1 dia) e a tag “Cliente VIP” (que dispara em 1 mês). Os cronômetros rodam em paralelo.**O fluxo substitui o atendimento atual?**Sim. Se o cliente estiver conversando com um atendente e o remarketing disparar, o robô pode “atropelar” a conversa. Porém o status da conversa continua em “Atendimento”.**Por que alguns blocos não funcionam no fluxo do Remarketing de Tag?**Alguns blocos só funcionam com a conversa em “Aguardando”. Se o Remarketing de Tag for acionado durante um**“Atendimento”**, esses blocos podem travar a automação. Você pode utilizar o bloco “Trocar de Fluxo” em seu fluxo atual, para que a conversa seja direcionada para o “Aguardando”, onde os blocos funcionam corretamente.**Atenção**: tenha em mente que a conversa sairá do atendimento de sua equipe.




---


## Respostas Rápidas

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/](https://help.pacoticket.com.br/principal/respostas-rapidas/)

###  Agilidade e Padronização**Respostas rápidas**são mensagens pré-definidas que podem ser enviadas com poucos cliques durante um atendimento, permitindo que o atendente responda de forma ágil e padronizada. Elas são especialmente úteis em ambientes de alta demanda, onde a rapidez na resposta é essencial para a satisfação do cliente. No menu: Respostas Rápidas você tem uma lista com todas as respostas rápidas de sua empresa. Nessa lista é possível**pesquisar**por respostas rápidas,**adicionar**,**visualizar**,**editar**ou**excluir**seus dados.



---

### Resposta Rápida Envio de Texto

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-texto/](https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-texto/)

### Adicionar Resposta Rápida para envio de Texto
 Para adicionar uma resposta rápida para envio de**texto**acesse o menu Resposta Rápida Adicionar ➡️  Preencha um nome de**Atalho**para utilizar essa Resposta Rápida. ➡️  Defina a**Mensagem**que será enviada ao utilizar a Resposta Rápida. Você pode utilizar algumas**Variáveis**para serem substituídas pela informação correspondente. Por exemplo: “**Olá {{firstName}}”**será substituído por “**Olá Rodrigo”**(que seria o primeiro nome desse contato). 
#####  ➡️  Por último, se o seu perfil for Admin, você pode definir se essa Resposta Rápida será**Global**ou exclusiva para seu uso.   Se**ativada**a opção Global, todos os atendentes poderão utilizar essa resposta rápida. Se**desativada**somente poderá ser usada por quem a cadastrou. 
### Como usar uma Resposta Rápida
 Para utilizar uma Resposta Rápida, em um chat digite a tecla**/**seguida da primeira letra do nome definido no**Atalho.**Uma lista suspensa aparecerá para que você selecione a resposta rápida desejada. Uma dica valiosa é definir o nome do seu atalho sempre precedido de**/**Exemplo:**/saudação**Dessa forma, quando estiver no chat digite // para listar todos os atalhos que você cadastrou tendo o / como “primeira letra”.



---

### Resposta Rápida Envio de Mídia

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-midia/](https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-midia/)

### Adicionar Resposta Rápida para envio de Mídia
 Para adicionar uma resposta rápida para envio de**mídia/arquivo**acesse o menu Resposta Rápida Adicionar ➡️  Preencha um nome de**Atalho**para utilizar essa Resposta Rápida. ➡️  No campo**Mensagem**(para envio de arquivo), coloque o mesmo nome definido em “atalho” só que**entre [ ]**. Por exemplo:**atalho**: catalogo roupa**mensagem**: [catalogo roupa]   ou então:**atalho**: /catalogo roupa**mensagem**: [/catalogo roupa] 
#####  ➡️  Se o seu perfil for Admin, você pode definir se essa Resposta Rápida será**Global**ou exclusiva para seu uso.   Se**ativada**a opção Global, todos os atendentes poderão utilizar essa resposta rápida. Se**desativada**somente poderá ser usada por quem a cadastrou. 
### Anexando um Arquivo
 ➡️  Agora clique no botão**Anexar**e escolha o seu arquivo.  ⚠️**Não utilize nome de arquivos que contenham espaços, caracteres especiais ou que tenha o nome muito extenso!**#####  Legenda (Caption)
 Seu arquivo pode ser enviado junto com uma legenda (caption) com até 4096 caracteres.   Após anexar o arquivo, o campo**Caption**aparecerá para preencher uma mensagem (opcional).   🔉 Para enviar arquivo de áudio utilize apenas .mp3   Arquivos de**áudio NÃO suportam Captions**. Assim, temos as seguintes regras: ➡️  Áudio SEM caption = exibe como gravado na hora ➡️  Áudio COM caption = exibe como encaminhado 
### Como usar uma Resposta Rápida
 Para utilizar uma Resposta Rápida, em um chat digite a tecla**/**seguida da primeira letra do nome definido no**Atalho.**Uma lista suspensa aparecerá para que você selecione a resposta rápida desejada. Uma dica valiosa é definir o nome do seu atalho sempre precedido de**/**Exemplo:**/catalogo roupa**Dessa forma, quando estiver no chat digite // para listar todos os atalhos que você cadastrou tendo o / como “primeira letra”.



---

### Resposta Rápida Envio de Contato

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-contato/](https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-contato/)

### Adicionar Resposta Rápida para envio de Contato
 Para adicionar uma resposta rápida para envio de**contato**acesse o menu Resposta Rápida Adicionar 
#####  ⚠️ Atenção
 Compartilhe**apenas**Contatos que estão cadastrado na**agenda do celular**desse WhatsApp, para evitar risco de bloqueio de conta. ➡️  Preencha um nome de**Atalho**para utilizar essa Resposta Rápida. ➡️  Defina a**Mensagem**seguindo o padrão abaixo para que seja enviado um Cartão de Contato: Nome do Contato 5511999999999**#####  Global (somente Admins podem definir)
 ➡️  Por último, se o seu perfil for Admin, você pode definir se essa Resposta Rápida será**Global**ou exclusiva para seu uso.   Se**ativada**a opção Global, todos os atendentes poderão utilizar essa resposta rápida. Se**desativada**somente poderá ser usada por quem a cadastrou. 
### Como usar uma Resposta Rápida
 Para utilizar uma Resposta Rápida, em um chat digite a tecla**/**seguida da primeira letra do nome definido no**Atalho.**Uma lista suspensa aparecerá para que você selecione a resposta rápida desejada. Uma dica valiosa é definir o nome do seu atalho sempre precedido de**/**Exemplo:**/rodrigo financeiro**Dessa forma, quando estiver no chat digite // para listar todos os atalhos que você cadastrou tendo o / como “primeira letra”.



---

### Resposta Rápida Envio de Localização

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-localizacao/](https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-envio-de-localizacao/)

### Adicionar Resposta Rápida para envio de Localização
 Para adicionar uma resposta rápida para envio de**localização**acesse o menu Resposta Rápida Adicionar ➡️  Preencha um nome de**Atalho**para utilizar essa Resposta Rápida. ➡️  Defina a**Mensagem**seguindo o padrão abaixo para que seja enviado uma localização: Uma mensagem qualquer aqui degreesLatitude: -22.950762, degreesLongitude: -43.2135083,18z**Obtenha a Latitude e Longitude da url do local no Google Maps: https://www.google.com/maps/place/Cristo+Redentor/ @-22.950762,-43.2135083,18z/data=!4m10!1m2… 
#####  Global (somente Admins podem definir)
 ➡️  Por último, se o seu perfil for Admin, você pode definir se essa Resposta Rápida será**Global**ou exclusiva para seu uso.   Se**ativada**a opção Global, todos os atendentes poderão utilizar essa resposta rápida. Se**desativada**somente poderá ser usada por quem a cadastrou. 
### Como usar uma Resposta Rápida
 Para utilizar uma Resposta Rápida, em um chat digite a tecla**/**seguida da primeira letra do nome definido no**Atalho.**Uma lista suspensa aparecerá para que você selecione a resposta rápida desejada. Uma dica valiosa é definir o nome do seu atalho sempre precedido de**/**Exemplo:**/localização**Dessa forma, quando estiver no chat digite // para listar todos os atalhos que você cadastrou tendo o / como “primeira letra”.



---

### Resposta Rápida de Fluxo

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-de-fluxo/](https://help.pacoticket.com.br/principal/respostas-rapidas/resposta-rapida-de-fluxo/)

### Adicionar Resposta Rápida para envio de Fluxo
 ⚠️  Esse tipo de Resposta Rápida só pode ser cadastrada por Administradores. Para adicionar uma resposta rápida para envio de**fluxo de automação**acesse o menu Resposta Rápida Adicionar ➡️  Preencha um nome de**Atalho**para utilizar essa Resposta Rápida. ➡️  No campo**Mensagem**(para envio de fluxo), coloque o mesmo nome definido em “atalho” só que**entre [ ]**. Por exemplo:**atalho**: fluxo apresentação**mensagem**: [fluxo apresentação]   ou então:**atalho**: /fluxo apresentação**mensagem**: [/fluxo apresentação] 
#####  ➡️  Você pode definir se essa Resposta Rápida será**Global**ou exclusiva para seu uso. Se**ativada**a opção Global, todos os atendentes poderão utilizar essa resposta rápida. Se**desativada**somente poderá ser usada por quem a cadastrou. ✅ ➡️  Por último, defina qual**Fluxo de Automação**será iniciado ao utilizar essa resposta rápida. 
#####  Fluxo de Resposta Rápida
 O fluxo de Reposta Rápida precisa seguir alguns conceitos para funcionar corretamente.   ➡️  Alguns blocos não funcionam no fluxo de resposta rápida. São eles: “Menu”, “Pergunta”, “Http Request”   ➡️  O fluxo deve ser finalizado com um bloco Finalizador como qualquer outro fluxo. O bloco**Encerrar Fluxo [Resposta Rápida]**, finaliza o fluxo de resposta rápida sem encerrar o ticket. 
### Como usar uma Resposta Rápida
 Para utilizar uma Resposta Rápida, em um chat digite a tecla**/**seguida da primeira letra do nome definido no**Atalho.**Uma lista suspensa aparecerá para que você selecione a resposta rápida desejada. Uma dica valiosa é definir o nome do seu atalho sempre precedido de**/**Exemplo:**/fluxo apresentação**Dessa forma, quando estiver no chat digite // para listar todos os atalhos que você cadastrou tendo o / como “primeira letra”.



---

### Editar Resposta Rápida

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/editar-resposta-rapida/](https://help.pacoticket.com.br/principal/respostas-rapidas/editar-resposta-rapida/)

Para**editar**uma resposta rápida, acesse o menu Resposta Rápida Ícone Lapis



---

### Excluir Resposta Rápida

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/excluir-resposta-rapida/](https://help.pacoticket.com.br/principal/respostas-rapidas/excluir-resposta-rapida/)

Para**excluir**uma resposta rápida, acesse o menu Resposta Rápida Ícone Lixeira



---

### Ideias de Respostas Rápidas

> 🔗 [https://help.pacoticket.com.br/principal/respostas-rapidas/ideias-de-respostas-rapidas/](https://help.pacoticket.com.br/principal/respostas-rapidas/ideias-de-respostas-rapidas/)

**Área****Atalho****Mensagem**##### Vendas
/saudacaovendasOlá! 👋 Seja bem-vindo(a) ao setor comercial da [Nome da Empresa]. Posso te apresentar nossos produtos/serviços?Vendas/catalogoConfira nosso catálogo completo neste link: [link do catálogo].Vendas/orcamentoPara gerar um orçamento, preciso que me informe: produto/serviço desejado, quantidade e local de entrega.Vendas/promoEstamos com uma promoção especial 🎉 Acesse aqui: [link da oferta].Vendas/descontoVocê ganhou um cupom exclusivo de 10% OFF: DESCONTO10.Vendas/informacoesPosso te enviar mais detalhes técnicos sobre o produto/serviço. Deseja receber por aqui ou por e-mail?Vendas/demonstracaoAgende uma demonstração gratuita através deste link: [link da agenda].Vendas/planosTrabalhamos com diferentes planos de contratação. Confira: [link dos planos].Vendas/condicoesOferecemos condições especiais para pagamentos à vista ou em grandes volumes.Vendas/beneficiosNossos diferenciais incluem suporte dedicado, agilidade e garantia de qualidade.Vendas/casesTemos vários cases de sucesso de clientes satisfeitos. Veja aqui: [link].Vendas/contratoApós a sua decisão, enviaremos o contrato digital para assinatura eletrônica.
##### Suporte
/saudacaosuporteOlá! Obrigado por entrar em contato com o suporte. Como posso te ajudar hoje?Suporte/aguardeUm momento, por favor 🙏 Estou verificando as informações para te responder da melhor forma.Suporte/filaNo momento estamos com um volume alto de atendimentos, mas logo daremos continuidade ao seu caso.Suporte/tutorialAqui está o link para o passo a passo completo: [link da base de conhecimento].Suporte/resetPor favor, tente limpar o cache do navegador e acessar novamente.Suporte/problemaPoderia descrever com mais detalhes o problema que está enfrentando?Suporte/screenshotSe possível, envie um print da tela para entendermos melhor a situação.Suporte/versaoVocê poderia confirmar qual versão do sistema/app está utilizando?Suporte/testeFaça um teste e me confirme se o erro continua, por favor.Suporte/chamadoAbrimos um chamado interno e nossa equipe técnica já está cuidando.Suporte/escalonarEncaminhei sua solicitação para o setor responsável, que dará continuidade ao suporte.Suporte/avaliacaoApós o atendimento, pediremos que avalie nossa qualidade. Sua opinião é muito importante!
##### Financeiro
/saudacaofinanceiroOlá! Você está falando com o setor financeiro da [Nome da Empresa]. Como podemos ajudar?Financeiro/boletoO boleto pode ser emitido diretamente pelo seu painel: [link do painel].Financeiro/pagamentoAceitamos cartão de crédito, PIX e boleto bancário.Financeiro/pixPara pagar via PIX, use a chave: contato@empresa.com.Financeiro/comprovantePoderia, por favor, enviar o comprovante de pagamento para darmos continuidade?Financeiro/faturaSua fatura já está disponível em seu painel de cliente.Financeiro/vencimentoO vencimento da sua fatura é no dia [data].Financeiro/2viaAqui está a 2ª via do boleto: [link].Financeiro/notaSua nota fiscal eletrônica já foi emitida e enviada para o e-mail cadastrado.Financeiro/parcelamentoOferecemos parcelamento em até 12x no cartão de crédito.Financeiro/confirmacaoO pagamento foi confirmado. Obrigado pela agilidade!Financeiro/ajudaCaso precise de suporte detalhado, nosso setor financeiro está à disposição pelo e-mail: financeiro@empresa.com.
##### Logística
/prazoO prazo de entrega é de 5 a 7 dias úteis após a confirmação do pagamento.Logística/rastreamentoVocê pode acompanhar seu pedido através deste link: [link do rastreio].Logística/entregasNossas entregas são feitas de segunda a sexta, das 9h às 18h.Logística/enderecoPoderia confirmar o endereço completo de entrega, por favor?Logística/statusSeu pedido já está em separação e será enviado em breve.Logística/transporteTrabalhamos com as transportadoras [nomes].Logística/coletaPodemos agendar uma coleta no local. Informe o endereço, por favor.Logística/retiradaTambém oferecemos a opção de retirada em loja.Logística/entregaexpressaTemos entrega expressa disponível para algumas regiões.Logística/confirmacaoenvioSeu pedido foi enviado! 🎉 Logo você receberá o código de rastreamento.Logística/trocaSe houver algum problema, seguimos nossa política de troca e devolução: [link].Logística/politicaentregasConfira nossa política de entregas aqui: [link].
##### Geral
/saudacaoOlá! 👋 Seja bem-vindo(a). Como posso te ajudar hoje?Geral/obrigadoAgradecemos por falar com a gente. Estamos à disposição para ajudar no que for preciso.Geral/horarioNosso horário de atendimento é de segunda a sexta, das 8h às 18h.Geral/dadosPara continuar o atendimento, poderia me informar seu nome completo e CPF/CNPJ?Geral/despedidaFoi um prazer ajudar você! Caso precise de algo mais, estamos à disposição. 😊Geral/saudacaoformalBom dia/boa tarde, [Nome]! Como posso lhe ajudar hoje?Geral/informacaoPosso confirmar essa informação em instantes.Geral/tempoO tempo médio de resposta é de até 5 minutos.Geral/outrosetorVou transferir sua solicitação para o setor responsável.Geral/canalAlém deste chat, você também pode nos contatar pelo e-mail: contato@empresa.com.Geral/avisoferiadoInformamos que estaremos fechados no feriado de [data].Geral/feedbackSua opinião é essencial para melhorarmos nosso atendimento. Gostaria de deixar um feedback?Geral/atebreveAté breve! Ficamos à disposição sempre que precisar.




---


## Campanhas

> 🔗 [https://help.pacoticket.com.br/principal/campanhas/](https://help.pacoticket.com.br/principal/campanhas/)

###  Envio em Massa, mensagem no particular  O módulo de**Campanhas**permite que você envie mensagens em massa para listas de contatos, com total controle de automação, agendamento e acompanhamento. Ele é ideal para ações de**marketing**,**notificações**,**lembretes**e**comunicações personalizadas**com seus clientes.  
#####  Atenção!
 Existe risco da META bloquear o seu chip ao utilizar envio em massa. Entre os principais motivos estão: denuncia de SPAM, envio de mensagem em massa, negócio fora dos termos de uso da META.



---

### Configurar Campanhas

> 🔗 [https://help.pacoticket.com.br/principal/campanhas/configurar-campanhas/](https://help.pacoticket.com.br/principal/campanhas/configurar-campanhas/)

O envio de mensagens das**campanhas**acontece de forma a simular o envio humano de uma mensagem particular, ou seja, uma mensagem por vez. Para isso devemos configurar os**Intervalos**desses envios, para que pareça estar sendo enviado por um humano e não de modo automático, minimizando um pouco as chances de bloqueio do chip, que são cada vez mais realidade do dia a dia.**Lembre-se:**existem diversos motivos pelo qual a META pode bloquear o seu chip, entre os principais são: denuncia de SPAM, envio de mensagem em massa, negócio fora dos termos de uso da META. 
### Configurações de Campanhas
 Um**intervalo/lote**acontece a cada**2 minutos**.**, o sistema vai iniciar o envio de um lote a cada 2 minutos e será enviado 5 mensagens respeitando os delays (atrasos) configurados.**Delay Mínimo**: tempo mínimo entre uma mensagem e outra dentro desse lote.**Delay Máximo**: tempo máximo entre uma mensagem e outra dentro desse lote. 
#####  Sugestão de Configuração
 Depende do seu prazo de envio e risco quanto a disparo em massa, mas uma sugestão cautelosa seria:   Delay Mínimo: 60 segundos 2 Mensagens por lote Delay Máximo: 100 segundos   Nesse exemplo, a segunda mensagem será enviada após 60 segundos do envio da primeira, mas antes de 100 segundos.



---

### Fontes de Contatos para Campanhas

> 🔗 [https://help.pacoticket.com.br/principal/campanhas/fontes-de-contatos-para-campanhas/](https://help.pacoticket.com.br/principal/campanhas/fontes-de-contatos-para-campanhas/)

Para realizar um disparo de campanha de mensagem em massa, você precisa de uma fonte de contatos destinatários. Veja abaixo os diferentes tipos de fontes que você pode utilizar nas campanhas. ⚠️  Você pode escolher apenas uma por campanha. 
#### Tag
 Envia mensagem em massa para todos os contatos vinculados à uma tag. 
#### Grupos
 Envia mensagem no privado de cada contato pertencente ao grupo.  
#### Aniversário
 Envia mensagem para todos os contatos que fazem aniversário em um determinado mês. 
#### Lista de Contato
 Por fim, uma lista de contato que você pode subir previamente no menu Criar Listas , ou até mesmo repetir uma lista de contatos de campanhas anteriores. 
#####  Atenção!
 A**Lista de Contato**para campanhas não tem relação com os Contatos já cadastrados na empresa. 
### Como Criar uma Lista de Contato
 Acesse o menu Criar Listas e clique no botão**NOVA LISTA**. Defina um nome para a lista. Em Ações, clique no ícone com 2 pessoas, e então no botão**IMPORTAR**para adicionar um excel com uma lista de contatos, ou no botão**NOVO**para adicionar um contato único. ⚠️  A lista pode ter o máximo de 500 contatos Baixe nossa planilha de Campanha para garantir que seu arquivo de importação esteja no formato correto.  Clique para Download  Ajuda



---

### Nova Campanha

> 🔗 [https://help.pacoticket.com.br/principal/campanhas/nova-campanha/](https://help.pacoticket.com.br/principal/campanhas/nova-campanha/)

Para criar uma Campanha acesse o menu Campanha e o botão**NOVA CAMPANHA**. 
### 
#### ⚡ PASSO 01
 Configurações básicas: ➡️**Nome:**escolha um nome para essa campanha. ➡️**Caracteres Ocultos:**envio de caracteres ocultos (no Android) para ajudar a diferenciar as mensagens repetidas perante os robôs da Meta. ➡️**Usar Proxy:**opção avançada para roteamento de tráfego do envio por um IP intermediário. Normalmente setado como**Não**. 
#### ⚡ PASSO 02
 Defina uma fonte de contatos destinatários escolhendo apenas uma opção entre:**➡️  Lista de Contato:**que você adicionou no menu Criar Lista ou campanhas anteriores. (**Atenção**: essa lista não tem relação com o menu principal Contatos ).**➡️  Tags:**conversas que possuem uma tag específica.**➡️  Grupos:**participantes de um grupo específico (a mensagem será enviada no privado para cada participante).**➡️  Aniversário:**contatos que fazem aniversário em um mês específico. 
#### ⚡ PASSO 03
 Agendando o tempo de envio das mensagens.**➡️  Agendamento:**data e horário que a campanha iniciará os disparos.**➡️  Pausar automaticamente:**horário que os disparos devem ser interrompidos no dia atual. Deixe vazio para continuar sem interrupção.**➡️  Reiniciar Automaticamente:**caso tenha definido um horário para interromper, defina agora um horário para a campanha reiniciar após essa interrupção.  
#### ⚡ PASSO 04
 Ajustando o atendimento ao cliente.**➡️  Abrir Ticket:**escolha se o ticket da conversa deve permanecer aberto (status Aguardando) após o envio da campanha. Se optar por não abrir ticket, o mesmo será fechado após o envio da campanha, mesmo que ele já esteja em atendimento.**➡️  Fila:**defina uma fila para o ticket permanecer caso você opte por abrir Ticket.**➡️  Mensagem de Descadastramento:**digite uma mensagem de rodapé explicando ao contato como ele pode se descadastrar de sua campanha.**➡️  Conexão:**escolha uma ou mais conexão que será a remetente desses envios. Se escolhido mais de uma, o sistema irá alternar as conexões remetentes nos envios das mensagens. 
#### ⚡ PASSO 05
 Opte por um tipo de conversa para enviar ao cliente. Escolha entre enviar um fluxo completo para cada contato, ou uma mensagem simples pelo editor de campanha.**CAMPANHA VIA FLUXO**Mensagens configuradas no editor de fluxo, podendo conter uma sequência de texto, imagens, áudios ou vídeos.**➡️  Fluxo de Bot:**inicia a automação de uma fila vinculada à plataforma Typebot.**➡️  Fluxos de Automação:**inicia a automação de um fluxo do**Flowbuilder Nativo**.**CAMPANHA VIA MENSAGEM SIMPLES**Mensagens configuradas no próprio editor de Campanha.**➡️  Defina 5 variações da mesma mensagem:**que serão enviadas aleatoriamente para cada disparo, na intenção de evitar o envio de mensagens repetidas na campanha. Nesse tipo de mensagem podemos configurar ainda: ➡️**Gatilho:**defina se o sistema deve enviar uma mensagem gatilho antes, e somente continuar o envio da mensagem principal caso o contato responda a mensagem gatilho.  ➡️**Caption:**se as mensagens serão visualizadas como Legenda em caso de**ANEXAR ARQUIVO**no editor de campanha.



---

### Nova Campanha API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/campanhas/nova-campanha-api-oficial/](https://help.pacoticket.com.br/principal/campanhas/nova-campanha-api-oficial/)

Para criar uma Campanha pela API Oficial acesse o menu Campanha e o botão**NOVA CAMPANHA**. 
### 
#### ⚡ PASSO 01
 Configurações básicas: ➡️**Nome:**escolha um nome para essa campanha. ➡️**Gatilho:**não utilize na API Oficial. ➡️**Caracteres Ocultos:**não utilize na API Oficial. ➡️**Usar Proxy:**opção avançada para roteamento de tráfego do envio por um IP intermediário. Normalmente setado como**Não**. 
#### ⚡ PASSO 02
 Defina uma fonte de contatos destinatários escolhendo apenas uma opção entre:**➡️  Lista de Contato:**que você adicionou no menu Criar Lista ou campanhas anteriores.**Obs 1**: essa lista não tem relação com o menu principal Contatos ).**Obs 2**: para enviar templates com variáveis é preciso escolher essa fonte de contato (veja no final como preencher).**➡️  Tags:**conversas que possuem uma tag específica.**➡️  Grupos:**participantes de um grupo específico (a mensagem será enviada no privado para cada participante).**➡️  Aniversário:**contatos que fazem aniversário em um mês específico. 
#### ⚡ PASSO 03
 Agendando o tempo de envio das mensagens.**➡️  Agendamento:**data e horário que a campanha iniciará os disparos.**➡️  Pausar automaticamente:**horário que os disparos devem ser interrompidos no dia atual. Deixe vazio para continuar sem interrupção.**➡️  Reiniciar Automaticamente:**caso tenha definido um horário para interromper, defina agora um horário para a campanha reiniciar após essa interrupção.  
#### ⚡ PASSO 04
 Ajustando o atendimento ao cliente.**➡️  Abrir Ticket:**escolha se o ticket da conversa deve permanecer aberto (status Aguardando) após o envio da campanha. Se optar por não abrir ticket, o mesmo será fechado após o envio da campanha, mesmo que ele já esteja em atendimento.**➡️  Fila:**defina uma fila para o ticket permanecer caso você opte por abrir Ticket. Se optar por utilizar Fluxo de Automação, a Fila deve estar vinculada ao Fluxo.**➡️  Mensagem de Descadastramento:**não utilize na API Oficial.**➡️  Conexão:**escolha apenas uma conexão. Não utilize multiconexões quando for API Oficial. 
#### ⚡ PASSO 05
 Escolha um template pré-cadastrado em sua conta business da META.**TEMPLATE SEM VARIÁVEL**Apenas selecione o template desejado.**➡️  Fluxos de Automação:**inicia a automação de um fluxo do**Flowbuilder Nativo**após a resposta do contato. (**Importante:**definir no campo Fila, uma fila vinculada ao mesmo Fluxo de Automação selecionado aqui).**TEMPLATE COM VARIÁVEL**Para enviar um template**com variáveis**é preciso que a fonte de contato seja exclusivamente uma**Lista de Contato**enviada no menu Criar Listas . No planilha você deve preencher:**nome**: nome do contato.**numero**: telefone no formato internacional, somente números.**e-mail**: email do contato se desejar.**extra1**: url da imagem do cabeçalho da mensagem template.**extra2**: o valor desejado para a variável {{1}} de sua mensagem template.**extra3**: o valor desejado para a variável {{2}} de sua mensagem template.**extra4**: o valor desejado para a variável {{3}} de sua mensagem template.**extra5**: o valor desejado para a variável {{4}} de sua mensagem template.**extra6**: texto do 1º botão.**extra7**: texto do 2º botão.**extra8**: texto do 3º botão.




---


## Conexões

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/](https://help.pacoticket.com.br/principal/conexoes/)

###  Multi Canais de Atendimento  🧩**O menu Conexões**é o coração da sua operação, onde você “pluga” os seus canais de comunicação para dentro da plataforma. Sem uma conexão ativa, o sistema não tem por onde enviar ou receber mensagens.  ☑️**Centralização:**Vincule múltiplos canais e responda todos eles em um único painel. ☑️**Monitoramento:**Acompanhe em tempo real o status de cada conexão (se está conectado, desconectado ou aguardando leitura de QR Code/Token).



---

### Visão Geral Conexões

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/visao-geral-conexoes/](https://help.pacoticket.com.br/principal/conexoes/visao-geral-conexoes/)

###  ➡️**Migrar Ticket para outra Conexão**Transfere os tickets de uma Conexão (mesmo excluída) para outra Conexão. ➡️**Adicionar WhatsApp**Adicionar uma nova conexão WhatsApp (depende do plano contratado). ➡️**Adicionar Contas Omnichannel**Adicionar uma conexão Omnichannel (depende do plano contratado). ➡️**Reiniciar Conexões**Reinicia todas as Conexões rapidamente. Útil para quando o sistema apresenta alguma lentidão ou falha na conexão. 
### Lista de Conexões
 Em cada Conexão podemos ter os seguintes botões: ➡️**QR Code / Novo QR Code**Habilita um QR Code para conectar um WhatsApp. ➡️**Tentar Novamente**Tenta conectar novamente uma conexão. ➡️**Desconectar**Desconecta a conexão. ➡️**Excluir Sessão**Desabilita a Conexão, sem excluir. Parecido com o botão Desconectar, mas aqui é feito também uma limpeza de caches do sistema. ➡️**Fechar Todos os Tickets**Fecha todos os tickets dessa conexão, seja em**Aguardando**ou em**Atendimento**. ➡️**Fechar Tickets Pendentes**Fecha todos os tickets que estejam no**Aguardando**. ➡️**Ícone Lápis**Editar Conexão. ➡️**Ícone Lixo**Excluir Conexão. 
### Adicionar ou Editar Conexão
 Ao “**Adicionar WhatsApp**” ou clicar no ícone lápis de cada conexão temos:**🔘 Nome**Rótulo referência para sua conexão.**🔘 Padrão**Definir conexão como Padrão.**🔘 Bloquear Echo**Em caso de recebimento de mensagens em duplicidade habilite essa funcionalidade.**🔘 Arquivo de Capa**Define uma imagem a ser enviada no início da conversa (no sistema legado de ChatBot).**🔘 Mensagem de Saudação**Define uma mensagem inicial para a conexão (no sistema legado de ChatBot).**🔘 Mensagem de Conclusão**Define uma mensagem a ser enviada após fechar um ticket dessa conexão, escolhendo a opção “Resolver COM Mensagem de Encerramento”.**🔘 Mensagem de Fora do Expediente**Define uma mensagem a ser enviada caso a empresa esteja fora de expediente. (no sistema legado de ChatBot. Dependente também do menu “Configurações > Opções > Gerenciamento de Expediente > por Fila” e dos horários definidos em cada Fila).**🔘 Mensagem de Avaliação**Define a mensagem que será enviada após o contato realizar uma avaliação do atendimento.**🔘 Inatividade e Inatividade Sem Fila**Encerra o ticket em caso de Inatividade por um determinado tempo (quando em Atendimento e após a última mensagem ser do atendente).**🔘 Mensagem de encerramento após inatividade**Define a mensagem a ser enviada caso o ticket seja encerrado por inatividade.**🔘 Token**Defina um token dessa conexão para ser utilizado em chamadas APIs.**🔘 Webhook**URL que será enviado dados  webhook da conexão.**🔘 Ignorar Números**O sistema ignora mensagens recebidas desses números. Utilize números de WhatsApp em formato internacional e separados por vírgula.**🔘 Iframe Externo – Integração / Contato**URL que será puxada via iframe ao clicar em exibir dados de um contato em um ticket.**🔘 Filas**Fila Inicial ao abrir um novo ticket na Conexão. – Defina apenas uma Fila para utilizar o FlowBuilder. – Defina duas ou mais Fila ao mesmo tempo para utilizar o ChatBot (sistema legado).**🔘 Após**Configure um tempo no qual uma mensagem que esteja no**Aguardando**, será movida para outra fila.**🔘 Mover**Escolha a fila que o ticket será movido, quando em aguardando após determinado tempo. 🔘 Confirmação de Leitura Habilita a confirmação de leitura de mensagens. (essa funcionalidade exige muito processamento do servidor).



---

### WhatsApp API QRCode

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/)

Centralize todo o atendimento do seu**WhatsApp**em nossa plataforma, permitindo que múltiplos usuários acessem o mesmo número – evitando a necessidade de um número para cada pessoa de sua equipe. O**WhatsApp API QRCode**funciona de modo parecido com o**WhasApp Web**. Você conecta o seu dispositivo dentro de nossa plataforma através da leitura do**QRCode**e pode utilizar as principais funções do WhatsApp somada a todas as ferramentas de nosso sistema para organizar, automatizar e otimizar o seu atendimento.



---

#### Como adicionar um WhatsApp

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/api-qrcode-como-adicionar-um-whatsapp/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/api-qrcode-como-adicionar-um-whatsapp/)

Para habilitar um**WhatsApp na API QRcode**acesse o menu: Conexões. Crie uma Conexão no botão**Adicionar WhatsApp**. Para ativar sua conexão clique em**QR CODE**e utilize o aplicativo WhatsApp no seu celular (geralmente em**Configurações > Dispositivos Conectados**) para escanear o código gerado .



---

#### Tipos de Mensagem

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/tipos-de-mensagem/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-qrcode/tipos-de-mensagem/)

Segue abaixo uma lista de ações do que pode ser feito em nossa plataforma com o WhatsApp API QRCode: Receber Enviar Responder Encaminhar Texto ✔️ ✔️ ✔️ ✔️ Emoji ✔️ ✔️ ✔️ ✔️ Áudio ✔️ ✔️ ✔️ ✔️ Imagens ✔️ ✔️ ✔️ ✔️ PrintScreen ✔️ ✔️ ✔️ ✔️ Arquivos ✔️ ✔️ ✔️ ✔️ Whisper ❌ ✔️ ❌ ❌ Reações ✔️ ✔️ ❌ ❌ Msg Editada ✔️ ✔️ ✔️ ❌ Msg Apagada ✔️ ✔️ ❌ ❌



---

### WhatsApp API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/)

🧩**A API Oficial do WhatsApp Business (WABA)**é a solução profissional definitiva oferecida pela Meta (Facebook) para empresas. Nosso sistema permite a utilização do WhatsApp API Oficial (WABA).



---

#### Como adicionar uma API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/api-oficial-como-adicionar-um-whatsapp/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/api-oficial-como-adicionar-um-whatsapp/)

Para habilitar um**WhatsApp API Oficial**em nossa plataforma é necessário conversar com nosso suporte, pois frequentemente a META altera um pouco o processo. No geral, precisamos ativar o seu número em um conta BM da META e depois habilitar em nossa plataforma. Fale com a gente!



---

#### Gestão de Templates

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/gestao-de-templates/](https://help.pacoticket.com.br/principal/conexoes/whatsapp-api-oficial/gestao-de-templates/)

🧩**A Gestão de Templates**é o seu painel de controle para criar, editar e monitorar as mensagens templates do WhatsApp API. A grande vantagem da nossa plataforma é a**Centralização**: nós integramos o painel da Meta dentro do nosso sistema. Você não precisa ficar trocando de abas ou fazendo login no Facebook Business Suite. Você cria, submete para análise e vê o resultado (Aprovado/Reprovado) tudo por aqui. ☑️**Agilidade:**Criar uma nova promoção ou aviso sem sair da plataforma. ☑️**Correção Rápida:**Editar um template que foi rejeitado e reenviar na hora. ☑️**Monitoramento:**Ver em tempo real quais mensagens já estão prontas para uso. 
#####  Resumo Prático
 ➡️  Acesse o menu**Conexões**. ➡️  Na conexão desejada clique no botão**Gestão de Templates**. ➡️  Visualize os templates cadastrados e seus status, altere ou adicione novos templates.



---

### Instagram

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/instagram/](https://help.pacoticket.com.br/principal/conexoes/instagram/)

Você pode centralizar todo o atendimento do seu**Instagram**dentro da nossa plataforma, tornando a comunicação com seus clientes ainda mais prática e eficiente. Gerencie**mensagens, directs, comentários**de posts ou stories em um único lugar. 
#####  Solicite uma conexão do Instagram com nosso suporte!



---

#### Direct

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/instagram/direct/](https://help.pacoticket.com.br/principal/conexoes/instagram/direct/)

Envie e receba**mensagens, emojis, áudios e vídeos**do direct do Instagram de seu cliente utilizando nossa plataforma. Você também pode utilizar**fluxos**para iniciar um atendimento automatizado nessa conexão.



---

#### Comentários

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/instagram/comentarios/](https://help.pacoticket.com.br/principal/conexoes/instagram/comentarios/)

### Comentários nos Stories
 Os**comentários**recebidos em seus**Stories**chegam direto no ticket do seu cliente. Nosso sistema exibe o**Story de Origem**e abaixo a**mensagem**enviada. 
###  Os**comentários**recebidos em seus**Posts**chegam direto no ticket do seu cliente. Nosso sistema exibe o**Post de Origem**e abaixo a**mensagem**enviada. 
###  Em nosso sistema, você consegue**responder um comentário de post**como se tivesse clicado em “Responder” no comentário do Instagram. Para isso, dentro de nossa plataforma, no “Comentário na Postagem” utilize a opção “Responder”. Assim, sua resposta aparecerá logo abaixo do comentário no post.



---

#### Automação &quot;Eu quero&quot;

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/instagram/automacao-eu-quero/](https://help.pacoticket.com.br/principal/conexoes/instagram/automacao-eu-quero/)

O Instagram não permite link em posts e por isso é muito comum o autor de um post escrever: link na bio.**⚠️ Chega de Link na Bio!**Vamos automatizar seu atendimento. 
#####  Veja como Funciona nossa Automação "Eu quero"
 🗣️ Em um de seus posts no Instagram, peça para o usuário digitar “Eu quero” (ou outra palavra-chave) para receber algo em troca.   💬 Quando o usuário digitar a palavra-chave, nosso sistema enviará uma**mensagem pré-definida**em resposta a esse comentário.   🔁 Em seguida, o sistema enviará um**direct**para o usuário com outra mensagem pré-definida, podendo iniciar um fluxo após a resposta dele. 
### Como Habilitar a Automação
 Para habilitar a**Automação “Eu quero”**você vai precisar: ➡️ Definir uma Fila exclusiva para utilizar nessa automação. ➡️ Nessa fila definir as palavras-chaves gatilhos, assim como as mensagens de resposta aos comentários. 
### Fila exclusiva para Comentários
 Vincule uma fila para comentários de automação em Conexões Editar Conexão do Instagram Fila para Comentários (INSTAGRAM) 
###  Em Filas e Chatbot , edite fila: Define uma ou mais**palavras-chave gatilho**, que o usuário deve digitar nos comentários para iniciar a automação.**⌨️ Formato:**as palavras ou frases devem ser separadas por vírgulas, sem espaços no começo ou no final de cada uma. 
###  Ainda ao editar essa fila: Em**Mensagem de Saudação**defina uma ou mais**resposta automática**que será enviada ao comentário que digitar uma das palavras-chave gatilhos.**⌨️ Formato:**as respostas devem ser separadas por vírgulas, entre [ ], sem espaços no começo ou no final de cada uma. 
### 
#####  Se a automação enviada no direct for um fluxo, nosso sistema somente enviará apenas a primeira mensagem, e, após a resposta do usuário, o restante da automação continuará.   Recomendamos utilizar o bloco de**Pergunta**na primeira mensagem (mesmo que não seja uma pergunta de fato). Pois isso faz o fluxo aguardar a resposta do usuário para seguir em frente.   É importante saber também que a automação funciona somente quando o lead está com seu atendimento fechado.



---

### Telegram

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/telegram/](https://help.pacoticket.com.br/principal/conexoes/telegram/)

Você pode centralizar todo o atendimento do seu**Telegram**dentro da nossa plataforma, tornando a comunicação com seus clientes ainda mais prática e eficiente.



---

### Web Chat

> 🔗 [https://help.pacoticket.com.br/principal/conexoes/web-chat/](https://help.pacoticket.com.br/principal/conexoes/web-chat/)

Instale um**Web Chat**dentro de seu site e gerencia todas as conversas diretamente em nossa plataforma. Você também pode utilizar**fluxos**para iniciar um atendimento automatizado nessa conexão. Para instalar basta colar um código nosso em seu site. 
#####  💬 Fale com a gente
 Solicite uma conexão de Web Chat com nosso suporte!




---


## Filas & Chatbot

> 🔗 [https://help.pacoticket.com.br/principal/filas-e-chatbot/](https://help.pacoticket.com.br/principal/filas-e-chatbot/)

###  Organize e Automatize  Nossa documentação é humanizada, pensada passo a passo para ajudar você a usar nosso sistema de uma forma a aproveitar ao máximo suas funcionalidades. Porém, algumas vezes o que a gente precisa é apenas de um**mapa**do que é cada uma dessas funcionalidades. Por isso criamos o**Guia Rápido!****Um aviso:**algumas funcionalidades podem não estar aparecendo em seu sistema conforme seu perfil, opções configurados e até mesmo menus legados. Se tiver algum dúvida entre em contato com nossa equipe.



---

### Visão Geral Filas & Chatbot

> 🔗 [https://help.pacoticket.com.br/principal/filas-e-chatbot/visao-geral-filas-e-chatbot/](https://help.pacoticket.com.br/principal/filas-e-chatbot/visao-geral-filas-e-chatbot/)

###  ➡️**Adicionar Fila**Adicionar uma nova fila (depende do plano contratado). 
### Lista de Filas
 Na listagem de Filas temos as seguintes informações rápidas: ➡️**ID**Número ID de cada fila. ➡️**Nome**Nome de cada fila para sua referência. ➡️**Ordem de Menu (BOT)**Ordem de menu no chatbot (legado após o desenvolvimento do Flowbuilder). ➡️**Cor**Cor de cada fila para sua referência. ➡️**Mensagem de Saudação**Mensagem de saudação da Fila. ➡️**Ícone Lápis**Editar Fila. ➡️**Ícone Lixo**Excluir Fila. 
### Adicionar ou Editar Fila
 Ao “**Adicionar Fila**” ou clicar no ícone lápis de cada fila temos: 
#### DADOS DA FILA
 ☑️**Nome**Rótulo referência para sua fila. ☑️**Ordenação do Bot**Ordem de menu no chatbot (legado após o Flowbuilder). ☑️**Cor**Cor visual da fila. ☑️**Rodízio de Atendentes**(Legado após o bloco de Rodízio do Flowbuilder). Se selecionada, ela vai utilizar o ☑️**Tempo de Escala**para transferir o ticket para a fila defina em ☑️**Mover**. ☑️**Notificar Operador no WhatsApp**Quando essa fila entrar em**Aguardando**atendimento, todos os atendentes vinculado a ela serão notificados em seus whatsapp particulares (definido em Perfil Número ). Essa mensagem pode ser personalizada em Configurações campo**Mensagem de Notificação Externa.**☑️**Chatbot Externo**Habilitar a função**Externo (API)**em Opções do Chatbot legado. ☑️**Ativar Transcrição de Áudio**Habilitar transcrição de áudio automática nessa fila.  ☑️**NPS Obrigatório**Habilitar a obrigatoriedade de definir uma**Tag de Encerramento**ao finalizar um ticket. ☑️**Arquivo de Capa**Enviar um arquivo ao iniciar a conversa (chatbot legado). ☑️**Mensagem de Saudação**Enviar mensagem inicial (chatbot legado). ☑️**Mensagem de Fora de Expediente**Mensagem de aviso de fora do horário de trabalho (chatbot legado). ☑️**Palavras-Chave e Gatilhos**Palavras (separadas por vírgula) que ao ser digitada pelo contato iniciam essa fila. (chatbot legado). ☑️**URL do Webhook**URL que será enviado dados  webhook da fila. ☑️**Fluxo de Automação**Fluxo do Flowbuilder que será iniciado nessa fila. ☑️**Opções**Chatbot (legado). 
#### HORÁRIOS DE ATENDIMENTO
 Defina os horários de atendimento da fila. É necessário habilitar essa funcionalidade em  Configurações Opções Gerenciamento de Expediente por Fila Para utilizar: ☑️  Defina a**Mensagem de Fora de Expediente**na Conexão, no modelo Chatbot (legado). ☑️  Ou via Flowbuilder utilize o bloco**Horário de Expediente**para rotear o fluxo conforme dentro ou fora do horário.  
#### INTEGRAÇÕES
 ☑️**Expiração do Fluxo (segundos)**Tempo em segundos para o fluxo expirar.  ☑️**Tempo de Delay (ms)**Tempo de Delay em milissegundo.  ☑️**Mensagem de Encerramento**Defina uma mensagem em caso de encerramento por expiração.**Typebot**☑️**URL do Typebot**Coloque a url do seu typebot. ☑️**Nome do Typebot**Nome do fluxo do typebot ☑️**Invalid message. Please, try again.**Mensagem retorno em caso de mensagem inválida.**Flowise**☑️**Flowise URL**URL do Flowise. ☑️**Flowise Key**Chave do Flowise.



---

### Categorias de Filas

> 🔗 [https://help.pacoticket.com.br/principal/filas-e-chatbot/categorias-de-filas/](https://help.pacoticket.com.br/principal/filas-e-chatbot/categorias-de-filas/)

🧩**As Categorias de Filas**funcionam como**etiquetas**organizacionais para as suas filas, permitindo que você**filtre**rapidamente por tema. 
#####  ➡️  Acesse o menu**Categorias de Filas**. ➡️  Clique no botão**+ Adicionar**. ➡️ Preencha os**campos**e clique no botão**Criar**. 
### Como adicionar uma Categoria de Fila
Acesse o menu Categorias de Filas + Adicionar**digite o nome da categoria . 🔘**Cor:**escolha uma cor para representar essa categoria. 🔲 Para finalizar, clique em**Criar**. 
### ⚡**Visão Geral Categoria de Filas**Na lista central, você visualiza as categorias criadas:**◽ Ícone colorido:**cor definida na criação. ◽**Nome:**rótulo cadastrado para essa categoria. ◽**Contador de Filas:**Mostra exatamente quantas filas estão utilizando esta etiqueta no momento. 🔲**Ícone Lápis:**botão para editar uma categoria. 🔲**Ícone Lixeira:**botão para excluirx uma categoria. 
###**Como usar o filtro de Categorias de Filas**Na tela principal de**Criação de Filas (Filas & Chatbot)**: ➡️****Ao criar ou editar uma Fila, você verá um campo chamado**Categoria**. Selecione a etiqueta que você acabou de criar. ➡️****Na listagem de filas, use o**Filtro**de Categoria no Topo. 
####  ❔ Dúvidas Comuns**Se eu excluir a categoria, eu perco as filas que estão nela?**Não. Como a categoria é apenas uma etiqueta de filtro, se você excluí-la, as filas continuarão intactos e soltos na sua tela principal, eles apenas voltarão ao status de “Sem Categoria”.**Posso colocar una fila em duas categorias ao mesmo tempo?**Não. Cada fila recebe apenas uma etiqueta de categoria principal por vez.




---


## Equipe

> 🔗 [https://help.pacoticket.com.br/principal/equipe/](https://help.pacoticket.com.br/principal/equipe/)

###  Colaboradores e Permissões



---

### Tipos de Perfil

> 🔗 [https://help.pacoticket.com.br/principal/equipe/tipos-de-perfil/](https://help.pacoticket.com.br/principal/equipe/tipos-de-perfil/)

MENUS Admin Supervisor User Dashboard ✔️ ✔️ ❌ Chat ✔️ ✔️ ✔️ Pesquisar ✔️ ✔️ ✔️ Kanban ✔️ ✔️ ✔️ Kanban Visão Geral ✔️ ✔️ ❌ Kanban Filas ✔️ ✔️ ❌ Oportunidades ✔️ ✔️ ❌ Pipeline ✔️ ✔️ ❌ Tags ✔️ ✔️ ✔️ Respostas Rápidas ✔️ ✔️ ✔️ Tarefas ✔️ ✔️ ✔️ Contatos ✔️ ✔️ ✔️ Agendamentos ✔️ ✔️ ✔️ Chat Interno ✔️ ✔️ ✔️ IFrame ✔️ ✔️ ✔️ Central de Ajuda ✔️ ✔️ ✔️ Campanhas ✔️ ❌ ❌ Criar Listas ✔️ ❌ ❌ Configurar Campanhas ✔️ ❌ ❌ Avaliações ✔️ ❌ ❌ Conexões ✔️ ❌ ❌ Filas & Chatbot ✔️ ❌ ❌ PROMPTS OPEN.AI ✔️ ❌ ❌ Flowbuilder Nativo ✔️ ❌ ❌ AI ✔️ ❌ ❌ Gerenciador de Arquivos ✔️ ❌ ❌ Equipe ✔️ ❌ ❌ API ✔️ ❌ ❌ Webhooks | Triggers ✔️ ❌ ❌ Configurações ✔️ ❌ ❌ Logs Pixel (META) ✔️ ❌ ❌ Integrações ✔️ ❌ ❌ CHAT Admin Supervisor User Switch TODOS ✔️ ✔️ ❌ Excluir Ticket ✔️ ✔️ ❌ PESQUISAR Admin Supervisor User Acesso Completo ✔️ ✔️ ❌ Exportar Resultados ✔️ ✔️ ❌ TAGS Admin Supervisor User Editar Tag ✔️ ✔️ ❌ Excluir Tag ✔️ ✔️ ❌ Definir Tipo de Tag ✔️ ✔️ ❌ Habilitar Kanban ✔️ ✔️ ❌ RESPOSTAS RÁPIDAS Admin Supervisor User Editar Respostas ✔️ ✔️ ❌ Excluir Respostas ✔️ ✔️ ❌ Definir Global ✔️ ✔️ ❌ Definir Fluxo ✔️ ✔️ ❌ CONTATOS Admin Supervisor User Excluir Contato ✔️ ✔️ ❌ AGENDAMENTO Admin Supervisor User Editar Agendamento ✔️ ✔️ ❌ Excluir Agendamento ✔️ ✔️ ❌




---


## Inteligência Artificial

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/](https://help.pacoticket.com.br/principal/inteligencia-artificial/)

###  Inteligência para os seus negócios  A Inteligência Artificial é uma realidade para automatizar o seu negócio. Veja como ela pode ajudar em sua produtividade, processos e automações.



---

### * Pré-Requisitos IA

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/pre-requisitos-ia/](https://help.pacoticket.com.br/principal/inteligencia-artificial/pre-requisitos-ia/)

#####  Pré-requisitos
 Ativar a opção**AI**no menu Configurações Planos *Criar um**Token**na OpenAI (tutorial aqui)Definir um**Token**na Conexão (tutorial aqui)***O passo 1 deve ser realizado pela nossa equipe do Pacoticket.**Entre em contato com nosso Suporte.



---

### Transcrever Áudios

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/transcrever-audios/](https://help.pacoticket.com.br/principal/inteligencia-artificial/transcrever-audios/)

Antes de continuar, é necessário integrar a Inteligência Artificial à nossa plataforma. Saiba como em “Pré-Requisitos de IA” 
### Como transcrever Áudios
Em uma**mensagem de áudio**, clique na seta superior direita**e pronto!



---

### Análise de Atendimento

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/analise-de-atendimento/](https://help.pacoticket.com.br/principal/inteligencia-artificial/analise-de-atendimento/)

Nossa**Análise de Atendimento**com inteligência artificial é uma poderosa ferramenta para avaliar um atendimento, trazer informações importantes e sugestões de melhorias como:**✅ Objeções do Cliente****✅ Pontos de Melhoria no Atendimento**PersonalizaçãoClarezaEmpatiaRespostas a Perguntas EspecíficasConfirmação de InformaçõesAgilidade**✅ Sentimento Geral****✅ KPIs**Tempo de respostaFCR (First Contact Resolution)CSAT (Customer Satisfaction) Necessidade de Escalonamento Antes de continuar, é necessário integrar a Inteligência Artificial à nossa plataforma. Saiba como em “Pré-Requisitos de IA” 
#####  💬 Fale com a nossa equipe antes
 Precisamos habilitar o GPT Assistant em seu Plano 
### Como ativar a Análise de Atendimento
 Em um chat, nas ações do Ticket, clique no botão “**Analisar Atendimento com IA**”



---

### GPT Assistant

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/](https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/)

Com o**GPT Assistant**, você pode criar**assistentes de IA**para ajudar no atendimento ao cliente. Esse assistente pode ser treinado via prompt e configurado para melhorar respostas, otimizar atendimento e custos. 
#####  💬 Fale com a nossa equipe antes
 Precisamos habilitar o GPT Assistant em seu Plano 
### Prompt x Agente OpenAi
 Com o módulo do GPT Assistant você pode optar por dois tipos de assistentes.**👉 Prompt**: configure seu assistente direto em nossa plataforma**👉 Agente OpenAi**: utilize o seu assistente configurado na plataforma OpenAi



---

#### Tipo Prompt

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/tipo-prompt/](https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/tipo-prompt/)

Antes de continuar, é necessário integrar a Inteligência Artificial à nossa plataforma. Saiba como em “Pré-Requisitos de IA” 
#####  💬 Fale com a nossa equipe antes
 Precisamos habilitar o GPT Assistant em seu Plano 
### Como criar um GPT Assistant do tipo Prompt
 Acesse o menu Prompts Open.Ai Adicionar Prompt 
#####  Prompt 
#####  Nome
 Defina um rótulo para seu Assistente 
#####  Prompt
 Nesse campo, você define as**instruções, regras e direções**para o seu assistente, como:**Tom de voz e estilo**das respostas.**Limites e restrições**sobre o que ele pode ou não fazer.**Objetivos, referências e formatos de resposta**, entre outros ajustes. Precisa de inspiração?  Veja um modelo de Prompt  Ajuda 
#####  GPT Model
 Escolha o modelo de IA para o seu assistente, considerando desempenho e custo. Uma ótima opção é o**“gpt-4o-mini”**, que oferece qualidade e agilidade com um custo baixíssimo. 
#####  Fila para Atendimento Humano (Transbordo)
 Escolha uma**Fila**para o GPT Assistant transferir a conversa quando solicitado um atendimento humano. 
#####  Mensagem de Transbordo
 Mensagem personalizada que o GPT envia quando entende que deve transferir para um atendimento humano. 
#####  Voz
 Modo que seu assistente enviará as respostas:**➡️**via**Texto****➡️**ou por voz de uma IA.   Tenha em mente que a opção por voz tem um custo extra, através da Microsoft Azure, e demanda a integração nos campos:**Chave da API de Voz**(fornecida pela Azure)**Região da Voz**Obs: deixe esses dois campos vazios se optar por “Texto” 
#####  Temperatura
 Ajuste de**1 a 10**: quanto mais próximo de**10**, mais criativo o assistente será; quanto mais próximo de**1**, mais ele seguirá fielmente o prompt.**OBS:**Coloque temperatura “1” para o agente interpretar corretamente áudios enviados pelos clientes. 
#####  Tokens
 Determina o**limite máximo de texto gerado na resposta**. Um token pode representar uma palavra curta, um pedaço de palavra ou até um espaço, ou seja, a cada token representa em média de 3 a 4 caracteres.**Sugestão**: entre 500 a 1000 tokens é um bom início. Mas faça testes para encontrar um ponto ideal para o seu negócio. 
#####  Máximo de Mensagens no Histórico
 Quantidade de últimas mensagens que o assistente guarda no histórico para entender o contexto da conversa.**Sugestão**: entre 10 a 20 mensagens, mas depende também do seu negócio. Os campos**Tokens**e**Máximo de Mensagens no Histórico**impactam diretamente o custo do seu GPT. Isso ocorre porque o custo é calculado com base na quantidade de**informações processadas**, incluindo todo o histórico da conversa (mensagens anteriores + última pergunta) e o t**amanho da resposta**gerada pelo seu assistente GPT. Faça testes nesses dois campos para ir otimizando seus custos conforme a necessidade de seu negócio. 
### Como ativar seu GPT Assistant do tipo Prompt
 Com um GPT Assistant criado, volte ao menu Filas e ChatBot editar fila campo Prompt Open.AI (ChatGPT) e defina qual assistente será ativado nessa fila. 
#####  Cada GPT Assistant funciona em**uma fila**e somente quando o ticket estiver em status de**Aguardando**#####  💭 Tenha em mente
 O seu assistente começa a agir somente após a mudança do ticket para a fila do GPT.   Sendo assim, estimule seu cliente a enviar uma mensagem após essa troca de fila.   Mensagens enviadas antes da troca para fila do GPT não serão respondidas pelo seu assistente.



---

#### Tipo Agente OpenAI

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/tipo-agente-openai/](https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/tipo-agente-openai/)

Antes de continuar, é necessário integrar a Inteligência Artificial à nossa plataforma. Saiba como em “Pré-Requisitos de IA” 
#####  💬 Fale com a nossa equipe antes
 Precisamos habilitar o GPT Assistant em seu Plano 
### Como criar um GPT Assistant do tipo Agente
 Acesse o menu Prompts Open.Ai Adicionar Prompt 
#####  Agente OpenAI 
#####  Nome
 Defina um rótulo para seu Assistente 
#####  Agente OpenAI
 Escolha um agente cadastrado em sua conta OpenAI (vinculado ao projeto que está em sua apiKey fornecida para nosso sistema) 
#####  Fila para Atendimento Humano (Transbordo)
 Escolha uma**Fila**para o GPT Assistant transferir a conversa quando solicitado um atendimento humano. 
#####  Mensagem de Transbordo
 Mensagem personalizada que o GPT envia quando entende que deve transferir para um atendimento humano. 
#####  Voz
 Modo que seu assistente enviará as respostas:**➡️**via**Texto****➡️**ou por voz de uma IA.   Tenha em mente que a opção por voz tem um custo extra, através da Microsoft Azure, e demanda a integração nos campos:**Chave da API de Voz**(fornecida pela Azure)**Região da Voz**Obs: deixe esses dois campos vazios se optar por “Texto” 
#####  Temperatura
 Ajuste de**1 a 10**: quanto mais próximo de**10**, mais criativo o assistente será; quanto mais próximo de**1**, mais ele seguirá fielmente o prompt.**OBS:**Coloque temperatura “1” para o agente interpretar corretamente áudios enviados pelos clientes. 
#####  Tokens
 Determina o**limite máximo de texto gerado na resposta**. Um token pode representar uma palavra curta, um pedaço de palavra ou até um espaço, ou seja, a cada token representa em média de 3 a 4 caracteres.**Sugestão**: entre 500 a 1000 tokens é um bom início. Mas faça testes para encontrar um ponto ideal para o seu negócio. 
#####  Máximo de Mensagens no Histórico
 Quantidade de últimas mensagens que o assistente guarda no histórico para entender o contexto da conversa.**Sugestão**: entre 10 a 20 mensagens, mas depende também do seu negócio. Os campos**Tokens**e**Máximo de Mensagens no Histórico**impactam diretamente o custo do seu GPT. Isso ocorre porque o custo é calculado com base na quantidade de**informações processadas**, incluindo todo o histórico da conversa (mensagens anteriores + última pergunta) e o t**amanho da resposta**gerada pelo seu assistente GPT. Faça testes nesses dois campos para ir otimizando seus custos conforme a necessidade de seu negócio. 
### Como ativar seu GPT Assistant do tipo Agente
 Com um GPT Assistant criado, volte ao menu Filas e ChatBot editar fila campo Prompt Open.AI (ChatGPT) e defina qual assistente será ativado nessa fila. 
#####  Cada GPT Assistant funciona em**uma fila**e somente quando o ticket estiver em status de**Aguardando**#####  💭 Tenha em mente
 O seu assistente começa a agir somente após a mudança do ticket para a fila do GPT.   Sendo assim, estimule seu cliente a enviar uma mensagem após essa troca de fila.   Mensagens enviadas antes da troca para fila do GPT não serão respondidas pelo seu assistente.



---

#### GPT Assistant em Grupos

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/gpt-assistant-em-grupos/](https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/gpt-assistant-em-grupos/)

#####  💬 Fale com a nossa equipe antes
 É preciso ter o**GPT Assistant**e o módulo de**Grupo**instalado em sua plataforma.  
### Como configurar seu GPT Assistant dentro de um Grupo
 Acesse o menu Prompts Open.Ai Ao criar ou editar um prompt, configure o campo: 
#####  Gatilho para Grupo
 Defina um gatilho para chamar o seu assistente em um grupo. Inicie com !   Por exemplo:**!alfred**###  Tenha em mente que, assim como na conversa privada, o grupo também precisa: ➡️ estar com status “**aguardando”**, ➡️ e estar na**fila**que o seu GPT Assistant está vinculado. 👉 Somado a isso, você precisa adicionar o Prompt em “Editar Contato do Grupo” desejado. 
###  Utilize o comando definido no**gatilho para grupo**sempre que quiser chamar o assistente. 💬 Em nosso exemplo, digite uma mensagem no grupo como:**!alfred como você pode me ajudar?**



---

#### Comandos GPT Assistant

> 🔗 [https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/comandos-gpt-assistant/](https://help.pacoticket.com.br/principal/inteligencia-artificial/gpt-assistant/comandos-gpt-assistant/)

Em seu GPT Assistant você pode utilizar**comandos**para ativar ações em nossa plataforma. Veja abaixo uma lista de**comandos e suas acões,**seguido de um exemplo prático para colocar em seu prompt: 
#####  Dica
 Escreva em seu prompt uma recomendação para a IA manter o código no texto enviado. - Transferir Fila #{"queueId": "544"} Se a pessoa quiser sobre suporte técnico ou qualquer tema relacionado a suporte, você deve dizer exatamente esse texto: Transferindo para o #{“queueId”: “544”} setor de Suporte. .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prompt"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; } - Transferir para Operador #{"queueId": "544", "userId":"3"} Se a pessoa disser “quero falar com o João”, você deve dizer exatamente esse texto: Transferindo para o #{“queueId”: “544”, “userId”:”3″} João. .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prompt"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; } - Atribuir Tag #{"tagId": "71"} Se a pessoa disser “gostaria de saber sobre notebook”, ou qualquer tema relacionado ao interesse em notebook, você deve dizer exatamente esse texto: Legal, temos diversas opções de  #{“tagId”:”71″} Notebook. .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prompt"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; } - Remover Tag #{"removeTag": "71"} Se a pessoa disser “pode cancelar minha consulta”, ou algo que demonstre o interesse em cancelar um agendamento, você deve dizer exatamente esse texto: ok, sua consulta foi  #{“removeTag”:”71″} cancelada. .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prompt"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; } - Encerrar Ticket #{"closeTicket": "1"} Se você entender que todas as pendências foram finalizadas, que não há dúvidas, e que o cliente não deseja mais conversar, você deve dizer exatamente esse texto: Estou encerrando nosso  #{“closeTicket”:”1″} ticket agora, mas fico a disposição se precisar de algo no futuro. .explanation::after { font-family: "Roboto", sans-serif; content: "Exemplo Prompt"; text-transform: uppercase; font-weight: 700; top: -19px; left: 1rem; padding: 0 0.5rem; font-size: 0.6rem; position: absolute; z-index: 1; color: #000; background: #fff; }




---


## FlowBuilder

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/](https://help.pacoticket.com.br/principal/flowbuilder/)

###  Construtor Visual de Fluxos  🧩**Flowbuilder**(Construtor de Fluxos) é a ferramenta visual do**Pacoticket**que permite criar chatbots inteligentes e automatizar o seu atendimento sem precisar escrever uma única linha de código. Ele funciona como um quadro branco interativo onde você “desenha” o caminho da conversa, arrastando blocos e conectando ações de forma intuitiva. ☑️**Autonomia:**crie e edite as respostas do seu robô sem precisar de conhecimentos de programação (No-Code). ☑️**Organização Visual:**enxergue todo o caminho que o cliente percorre, identificando facilmente onde estão os gargalos ou erros de lógica. ☑️**Atendimento 24/7:**garanta que seus clientes sejam respondidos instantaneamente a qualquer hora do dia, inclusive finais de semana.



---

### Visão Geral FlowBuilder

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/visao-geral-flowbuilder/](https://help.pacoticket.com.br/principal/flowbuilder/visao-geral-flowbuilder/)

🧩**Visão Geral do Flowbuilder**é o ambiente de construção visual onde você desenha a inteligência do seu chatbot. Funciona como um quadro branco infinito onde você conecta blocos para criar caminhos de conversa.  
### ⚡**Cabeçalho de Controle:**no topo direito da tela, você encontra as ferramentas de navegação: 🔘**Filtrar por Categoria:**menu suspenso que permite visualizar apenas fluxos de uma categoria específica. 🔘**Buscar fluxos:**campo de texto para digitar o nome do fluxo. 🔲**IMPORTAR:**botão para importar um fluxo. 🔲**+ ADICIONAR FLUXO:**botão para iniciar o cadastro de um novo fluxo.****### PARTE CENTRAL
 ⚡**Lista de Fluxos:**cada box representa um fluxo cadastrado no sistema, sendo composto por: 
##### ⬅️  do lado esquerdo**◽ Ícone colorido:**fluxo azul. ◽**Nome:**rótulo cadastrado para esse fluxo. ◽**Etiqueta Status:**(verde com ícone “check” cinza) escrito Ativo. ◽**Etiqueta Categoria:**(da cor do cadastro da categoria com ícone “tag” cinza) escrito o Nome da Categoria. 
##### ➡️  do lado direito
 🔲**Ícone Ferramenta:**clique para Editar o Fluxo. 🔲**Ícone 3 pontos verticais:**clique para ver as seguintes opções: ◽**Editar Nome:**renomeie o fluxo para facilitar a organização interna.**◽ Editar Fluxo:**abre o editor visual (canvas) para modificar a estrutura do bot.**◽ Exportar Fluxo:**baixa um arquivo de backup do seu robô. Útil para salvar versões ou enviar para outra conta.**◽ Duplicar:**cria uma cópia exata do fluxo. Dica: Use isso antes de fazer alterações arriscadas no seu bot principal.**◽ Excluir:**remove o fluxo permanentemente. 
###  A construção do fluxo acontece no Canva, nossa ferramenta de edição visual. O**Fluxo fica centralizado na tela,**tendo como ponto de partida o**Bloco de Início**– de cor verde e com conector vermelho – e a tela é composta pelos seguintes elementos: 
##### ↖️  canto esquerdo superior**🔲 Botão + :**clique para adicionar novos blocos. 
##### ↗️  canto direito superior**🔲 Salvar Fluxo:**clique para salvar as edições realizadas no fluxo. Se sair do canva sem clicar em Salvar Fluxo, você perderá o trabalho. 
##### ↙️  canto esquerdo inferior**Barra de Controle de Visualização:****◽ Zoom Mais (+):**aproxima a visão.**◽ Zoom Menos (-):**afasta a visão.**◽ Centralizar / Ajustar (ícone de mira****):**reseta o zoom padrão e centraliza o fluxo.**◽ Bloquear Navegação (ícone cadeado****):******cadeado fechado impede o arrastar dos blocos e a exclusão das ligações. 
##### ↘️  canto direito inferior**🔲 Mini-Mapa:**caixa branca que mostra uma miniatura do seu fluxo atual. 
### Movimentação e Zoom do Canva**◽****Arrastar a tela:**Clique em qualquer espaço vazio do fundo branco e arraste para mover a visualização.**◽ Zoom:**Utilize os botões**+**e**–**no canto inferior esquerdo ou o scroll do mouse para diminuir ou aumentar o zoom. 
### Estrutura dos Blocos do Fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”.



---

### Categorias de Fluxos

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/categorias-de-fluxos/](https://help.pacoticket.com.br/principal/flowbuilder/categorias-de-fluxos/)

🧩**As Categorias de Fluxos**funcionam como**etiquetas**organizacionais para os seus fluxos, permitindo que você**filtre**rapidamente por tema. 
#####  ➡️  Acesse o menu**Categorias de Fluxos**. ➡️  Clique no botão**+ Adicionar**. ➡️ Preencha os**campos**e clique no botão**Criar**. 
### Como adicionar uma Categoria de Fluxo
Acesse o menu Categorias de Fluxos + Adicionar**digite o nome da categoria . 🔘**Cor:**escolha uma cor para representar essa categoria. 🔲 Para finalizar, clique em**Criar**. 
### ⚡**Visão Geral Categoria de Fluxos**Na lista central, você visualiza as categorias criadas:**◽ Ícone colorido:**cor definida na criação. ◽**Nome:**rótulo cadastrado para essa categoria. ◽**Contador de Fluxos:**Mostra exatamente quantos fluxos estão utilizando esta etiqueta no momento. 🔲**Ícone Lápis:**botão para editar uma categoria. 🔲**Ícone Lixeira:**botão para excluirx uma categoria. 
###**Como usar o filtro de Categorias de Fluxos**Na tela principal de**Criação de Fluxos (FlowBuilder Nativo)**: ➡️****Ao criar ou editar um fluxo, você verá um campo chamado**Categoria**. Selecione a etiqueta que você acabou de criar. ➡️****Na listagem de fluxos, use o**Filtro**de Categoria no Topo. 
####  ❔ Dúvidas Comuns**Se eu excluir a categoria, eu perco os fluxos que estão nela?**Não. Como a categoria é apenas uma etiqueta de filtro, se você excluí-la, os fluxos continuarão intactos e soltos na sua tela principal, eles apenas voltarão ao status de “Sem Categoria”.**Posso colocar um fluxo em duas categorias ao mesmo tempo?**Não. Cada fluxo recebe apenas uma etiqueta de categoria principal por vez.



---

### Pontos de Entrada (Gatilho)

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/)

🧩**Pontos de Entrada (Gatilhos) do FlowBuilder**são as condições que fazem um fluxo começar a rodar. Pense neles como a “ignição” do seu chatbot: o robô fica parado aguardando até que algo acione um desses gatilho que inicia o fluxo.



---

#### Gatilho via Conexão

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-conexao/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-conexao/)

🧩**Gatilho via Conexão**é o principal ponto de entrada para iniciar um fluxo em um ticket. Funciona como a “Porta Principal” de um Atendimento. ☑️**Fluxo Inicial:**ao retomar uma conversa com status**‘Encerrado’**, o sistema gera automaticamente um novo protocolo. O ticket é direcionado para a Fila definida na Conexão, disparando o Fluxo Inicial. 
#####  Resumo Prático
 ➡️  Acesse o menu**Conexões**. ➡️  Ao editar uma conexão, em**Filas & Tempo**, no campo**Filas**defina uma Fila. ➡️  No menu**Filas & Chatbot**, edite essa Fila vinculando o Fluxo desejado no campo**Fluxos de Automação**.  
### Como configurar o Gatilho de Fluxo em uma Conexão

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 
##### ⚡ Passo 02 – A Fila
 Acesse o menu Filas & Chatbot para criar ou editar uma Fila. No campo Fluxos de Automação, seleciona o fluxo desejado. 
##### ⚡ Passo 03 – A Conexão
 Acesse o menu Conexões e edite a conexão desejada em Filas & Tempo selecionado a Fila que contem o Fluxo que será iniciado na abertura de um atendimento. 
####  ❔ Dúvidas Comuns**Posso ter filas diferentes para horários diferentes?**Na conexão, você deve definir uma única fila. Porém, dentro do seu**Fluxo**, você pode usar um bloco de “Horário de Expediente” ou “Condição” para decidir onde direcionar o atendimento.**Posso iniciar fluxos diferentes conforme palavra-chave enviada pelo cliente?**Sim, inicie seu fluxo com o bloco “Condição” de texto, roteando o atendimento conforme o texto digitado pelo cliente.



---

#### Gatilho via Bloco Trocar de Fluxo

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-bloco-trocar-de-fluxo/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-bloco-trocar-de-fluxo/)

🧩**Gatilho via Bloco Trocar de Fluxo**é o método de acionamento onde um robô transfere o cliente para outro robô. Isso permite conectar diferentes inteligências, criando uma “estrada” onde o cliente navega sem perceber que trocou de fluxo. ☑️**Organização Modular:**em vez de criar um fluxo gigante, crie pequenos fluxos (um só para Triagem, um só para Financeiro, um só para Suporte) e conecte uns aos outros. 
#####  Resumo Prático
 ➡️  Acesse o menu**FlowBuilder**. ➡️  Em seu fluxo utilize o bloco “**Trocar de Fluxo**” para acionar um Fila que tenha um fluxo vinculado. 
### Como configurar o Gatilho Interno de Troca de Fluxo
 Acesse o menu FlowBuilder e em seu fluxo utilize o bloco “Trocar de Fluxo”. Esse bloco permite escolher uma Fila que contenha um outro fluxo vinculado para dar continuidade na automação. 
####  ❔ Dúvidas Comuns**Qual compartamento Padrão do bloco “Trocar de Fluxo”?**Iniciar automaticamente um fluxo vinculado à Fila desejada. Para isso, o atendimento é forçado ao “Aguardando” (caso não esteja), para que a automação seja executada.**O cliente percebe a troca?**Não. Para o cliente, a conversa continua fluindo normalmente.**Posso criar um loop infinito?**Sim, e isso é perigoso. Se o Fluxo A manda para o B, e o B manda para o A sem nenhuma condição de parada, o cliente ficará preso num loop eterno de mensagens. Cuidado!**Por que não está aparecendo minha Fila no bloco “Trocar de Fluxo”?**Provavelmente porque essa Fila não tem um fluxo de automação vinculado à ela.**O bloco “Trocar de Fluxo” funciona igual ao bloco “Departamento”?**Não, apesar dos dois solicitarem a escolha de uma Fila, o bloco “Departamento” deixa o atendimento parado na Fila selecionada para um atendente iniciar a conversa manual (mesmo que a Fila tenha um fluxo vinculado à ela). Já o bloco “Trocar de Fluxo” inicia o fluxo vinculado a essa Fila.



---

#### Gatilho via Remarketing de Tag

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-remarketing-de-tag/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-remarketing-de-tag/)

🧩**Gatilho via Remarketing de Tag**é o método de acionamento temporal. Na prática, assim que uma Tag é adicionada à conversa, o sistema aguarda um período específico e, então, dispara o fluxo. ☑️**Recuperação de Vendas:**se o cliente parou de responder, o atendente coloca a tag “Aguardando” e o robô manda uma mensagem automática 30 minutos depois: “Oi, ficou alguma dúvida?”. ☑️**Follow-up e Pós-venda:**envie uma pesquisa de satisfação (NPS) ou um material complementar exatamente 24 horas após o fechamento do atendimento. 
#####  Resumo Prático
 ➡️  Acesse o menu**Tags**, ao criar ou editar uma Tag, selecione o Fluxo e o tempo na aba Remarketing. 
### Como configurar o Gatilho de Fluxo via Remarketing de Tag

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 
##### ⚡ Passo 02 – A Tag
 Acesse o menu Tags para criar ou editar uma Tag. Na aba “**Remarketing**” selecione o fluxo desejado no campo**Fluxos de Automação**. Configure**quando**o fluxo será disparado após à marcação da tag na conversa. 
####  ❔ Dúvidas Comuns**Se remover a tag antes do tempo, o fluxo é enviado?**Não. Se você adicionar a tag “10min” e removê-la após 5 minutos, o gatilho é cancelado e o fluxo não é ativado.**Isso funciona para tags marcadas manualmente ou por automação?**Funciona para qualquer marcação, seja manualmente pelo atendente ou automaticamente por outro processo do sistema.**Posso ter vários remarketings ao mesmo tempo?**Sim. Um mesmo cliente pode ter a tag “Boleto Pendente” (que dispara em 1 dia) e a tag “Cliente VIP” (que dispara em 1 mês). Os cronômetros rodam em paralelo.**O fluxo substitui o atendimento atual?**Sim. Se o cliente estiver conversando com um atendente e o remarketing disparar, o robô pode “atropelar” a conversa. Porém o status da conversa continua em “Atendimento”.**Por que alguns blocos não funcionam no fluxo do Remarketing de Tag?**Alguns blocos só funcionam com a conversa em “Aguardando”. Se o Remarketing de Tag for acionado durante um**“Atendimento”**, esses blocos podem travar a automação. Você pode utilizar o bloco “Trocar de Fluxo” em seu fluxo atual, para que a conversa seja direcionada para o “Aguardando”, onde os blocos funcionam corretamente.**Atenção**: tenha em mente que a conversa sairá do atendimento de sua equipe.



---

#### Gatilho via Resposta Rápida

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-resposta-rapida/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-resposta-rapida/)

🧩**Gatilho via Resposta Rápida**é o método que permite a um atendente humano invocar um robô manualmente no meio de uma conversa. É a funcionalidade que transforma o fluxo em uma ferramenta de apoio para a sua equipe. Diferente dos outros gatilhos que são automáticos, aqui a decisão de chamar o robô é**do atendente**. Ideal para: ☑️**Coleta de Dados Repetitiva:**o atendente está falando com o cliente e precisa fazer um cadastro. Em vez de perguntar item por item, ele digita /cadastro e o robô assume a coleta dos dados. ☑️**Padronização de Atendimento:**garantir que explicações complexas, apresentações, contratos, etc sejam enviados padronizados. ☑️**Ganho de tempo da equipe:**evite respostas repetitivas que antes eram digitadas pelo operador a cada atendimento. 
#####  Resumo Prático
 ➡️  Acesse o menu**Respostas Rápidas**, ao criar ou editar uma Resposta Rápida, selecione o Fluxo de Automação desejado. 
### Como configurar o Gatilho de Fluxo via Resposta Rápida

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 📌  É recomendável que o último bloco desse fluxo seja “**Encerrar Fluxo [Resposta Rápida]**” ou “**Trocar de Fluxo**“. 
##### ⚡ Passo 02 – A Resposta Rápida
 Acesse o menu Respostas Rápidas para criar ou editar uma Resposta Rápida. No campo “**Fluxo de Automação**” selecione o fluxo desejado. 
####  ❔ Dúvidas Comuns**O ticket fecha quando eu chamo o o fluxo de Resposta Rápida?**Não. O ticket continua aberto com o atendente, mas quem “fala” é o robô.**O atendente pode interromper o robô?**Se o fluxo estiver rodando em “Atendimento” o atendente não consegue pausar. Se estiver rodando em “Aguardando” – por exemplo após a “Troca de Fluxo”, o atendente consegue pausar ao puxar o atendimento novamente.**Por que alguns blocos não funcionam no fluxo do Resposta Rápida?**Alguns blocos só funcionam com a conversa em “Aguardando”.  Você pode utilizar o bloco “Trocar de Fluxo” para que a conversa seja direcionada para o “Aguardando”, onde os blocos funcionam corretamente.**Atenção**: tenha em mente que a conversa sairá do atendimento de sua equipe.



---

#### Gatilho via Campanha

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-campanha/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-campanha/)

🧩**Gatilho via Campanha**é o método que permite conectar um fluxo em seus disparos em massa.  
#####  Resumo Prático
 ➡️  Acesse o menu**Campanhas**, ao criar uma Campanha, selecione a Fila e o Fluxo vinculado a essa Fila. 
### Como configurar o Gatilho de Fluxo via Campanha

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 
##### ⚡ Passo 02 – A Fila
 Acesse o menu Filas & Chatbot para criar ou editar uma Fila. No campo Fluxos de Automação, seleciona o fluxo desejado. 
##### ⚡ Passo 03 – A Campanha
 Acesse o menu Camapnhas para criar uma Campanha. No campo “**Fila**” selecione a fila que contem o fluxo desejado vinculado. No campo “**Fluxos de Automação**” selecione o fluxo desejado – vinculado a Fila anteriormente selecionada. 
####  ❔ Dúvidas Comuns**Posso usar o mesmo fluxo para várias campanhas?**Sim.**Por que alguns blocos não funcionam no fluxo de Campanha?**Alguns blocos só funcionam com a conversa em “Aguardando”. Se a Campanha for acionada durante um**“Atendimento”**, esses blocos podem travar a automação. Você pode utilizar o bloco “Trocar de Fluxo” em seu fluxo atual, para que a conversa seja direcionada para o “Aguardando”, onde os blocos funcionam corretamente.**Atenção**: tenha em mente que a conversa sairá do atendimento de sua equipe.



---

#### Gatilho via API

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-api/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-api/)

🧩**Gatilho via API**é o método que permite que softwares externos (seu site, ERP, n8n, RD Station, entre outros) “forcem” o início de um fluxo através de código. Diferente do gatilho de conexão (onde o cliente chama a empresa), aqui é a**empresa que chama o cliente**ativamente baseada em um evento externo. Ideal para: ☑️**Mensagens Transacionais:**enviar um “Seu pedido foi aprovado!” assim que a compra ocorre no site. ☑️**Leads de Site:**quando alguém preenche um formulário na Landing Page, o sistema cria o contato e já dispara o robô de qualificação imediatamente. ☑️**Reativação de Base:**sistemas de CRM externos que enviam ofertas para contatos antigos. 
#####  Resumo Prático
 ➡️  No seu sistema externo faça uma chamada API para nosso endpoint**Mensagem para FlowBuilder**.../api/messages/flowbuilderStart 
### Como configurar o Gatilho de Fluxo via API

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 
##### ⚡ Passo 02 – A Fila
 Acesse o menu Filas & Chatbot para criar ou editar uma Fila. No campo Fluxos de Automação, seleciona o fluxo desejado. 
##### ⚡ Passo 03 – A API
 Faça uma chamada API: Endpoint https://api.pacoticket.com.br/api/messages/flowbuilderStart Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "queueId": "3" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“queueId”:**ID da fila que está vinculada ao fluxo desejado. 
##### 📌  Atenção: ao chamar essa API, o ticket será transferido para o status**Aguardando**.
 
####  ❔ Dúvidas Comuns**O cliente precisa ter o contato salvo?**Não. A API consegue disparar mensagens para números que nunca interagiram antes. Porém, cuidado com as políticas de bloqueio do WhatsApp ao abordar contatos frios massivamente.**Posso enviar variáveis (como Nome do Cliente) pela API FlowBuilder Start?**Você pode utilizar “Mustaches” (que são as variáveis internas do nosso sistema), mas enviar variáveis vindo do seu sistema externo não. Para isso utilize o Webhook Triggers.



---

#### Gatilho via Webhooks Trigger

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-webhooks-trigger/](https://help.pacoticket.com.br/principal/flowbuilder/pontos-de-entrada/gatilho-via-webhooks-trigger/)

🧩**Gatilho via Webhook Trigger**é o método que cria um endereço de internet exclusivo (URL) para o seu fluxo. Quando qualquer sistema externo acessa esse link enviando os dados de um contato, o robô inicia imediatamente para aquela pessoa. Diferente do Gatilho via API , o Webhook Trigger é capaz de receber**Variáveis Personalizadas**específicas para aquela conversa. ☑️**Formulários de Site:**o cliente preenche “Nome” e “Interesse” no seu site. O site envia esses dados para o Webhook, e o robô já chama o cliente no WhatsApp dizendo: “Olá [Nome], vi que gosta de [Interesse]!”. ☑️**Integrações com Ferramentas (Zapier/n8n/Make):**conectar seu CRM ou planilhas ao WhatsApp sem precisar programar uma integração de API complexa. ☑️**Anúncios de Lead (Facebook Lead Ads):**assim que o lead preenche o cadastro no Facebook, a automação dispara o Webhook e o atendimento começa em segundos. 
#####  Resumo Prático
 ➡️  Acesse o menu**Webhooks | Triggers**, ao criar ou editar um Webhook, selecione a Fila que contenha o Fluxo desejado vinculado. ➡️  Inicie uma requisição HTTP  para o endpoint do Webhook 
### Como configurar o Gatilho de Fluxo via Webhook

##### ⚡ Passo 01 – O Fluxo
 Acesse o menu FlowBuilder e desenvolva seu fluxo. 
##### ⚡ Passo 02 – A Fila
 Acesse o menu Filas & Chatbot para criar ou editar uma Fila. No campo Fluxos de Automação, seleciona o fluxo desejado. 
##### ⚡ Passo 03 – O Webhook 
 Acesse o menu Webhooks | Triggers para criar ou editar um Webhook. No campo “**Fluxo**” selecione a fila que contenha fluxo desejado vinculado. 📌  Atenção: ao chamar essa API, o ticket será transferido para o status**Aguardando**. 
##### ⚡ Passo 04 – Requisição Webhook 
 Realize uma requisição HTTP POST para a URL do Webhook enviando os dados necessários para o funcionamento do seu fluxo. Obrigatório envio do número celular destinatário. 
####  ❔ Dúvidas Comuns**Qual a diferença entre Gatilho via API e via Webhook?**Com o Webhook Trigger é possível iniciar um**Fluxo Específico**e passar variáveis exclusivas para aquela execução.**É seguro? Qualquer um pode disparar?**A URL do Webhook é pública, mas é um código longo e difícil de adivinhar. Cuidado em divulgar essa URL pois qualquer um que tenha acesso a ela poderá iniciar esse fluxo em seu sistema.**O que acontece se não enviar o telefone?**O fluxo falha. O sistema precisa saber o número do destinatário para funcionar o contato.**O cliente precisa ter o contato salvo?**Não. O Webhook consegue disparar mensagens para números que nunca interagiram antes. Porém, cuidado com as políticas de bloqueio do WhatsApp ao abordar contatos frios massivamente.



---

### Blocos

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/)

**Bloco de Mensagem**Identifica blocos que interagem diretamente com o lead. Seja enviando um texto, uma imagem, localização ou um template oficial, esta tag sinaliza que houve uma**saída de conteúdo**na conversa.**Bloco de Dados**Esta categoria é atribuída a blocos que trabalham nos “bastidores” do sistema. Eles são responsáveis por**processar****dados**, salvar informações em variáveis ou organizar a sua base de contatos (como adicionar ou remover etiquetas).**Bloco Roteador**Indica que o bloco atua como um**roteador**de caminhos. Ele analisa dados (como horários ou respostas do usuário) e decide para qual direção o fluxo deve seguir, garantindo que o lead tenha uma experiência personalizada.**Bloco de Integração**Sinaliza blocos que fazem a ponte entre o seu fluxo e o mundo externo. Use estas ferramentas para conectar-se a APIs, Webhooks, sistemas de pagamento como o**Asaas**ou automações no**n8n**e**Make**.**Bloco de Atendimento**Indica blocos que envolvem a gestão de atendimento humano. Eles são usados para organizar o transbordo para departamentos específicos, distribuir leads entre operadores ou gerenciar filas de suporte.**Blocos de Finalização**Essencial para a saúde do seu fluxo, esta tag identifica os blocos que definem um**ponto final ou uma transição completa de estado**(como transferir o lead para um bot externo ou encerrar a sessão de automação).



---

#### Conteúdo

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/conteudo/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/conteudo/)

🧩**O Bloco de Conteúdo**é o elemento responsável pelo envio de mensagens de texto, imagens, áudios, vídeos ou arquivos para o cliente.**🏷️ Categoria: Mensagem**Ideal para: ☑️**Mensagens de Texto:**Dar boas-vindas, explicar serviços ou tirar dúvidas. ☑️**Mídia:**Enviar fotos de produtos, PDFs de apresentação, vídeos ou áudios gravados. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Conteúdo**. ➡️ Adicione**textos ou mídias**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Conteúdo” no FlowBuilder
Acesse FlowBuilder editar fluxo + Conteúdo********para aparecer para o cliente como se fosse gravado na hora.**Envie um vídeo, com uma legenda (opcional). Dica: Evite arquivos muito pesados (acima de 5MB) para garantir que o cliente receba rápido.**Envie um arquivo em formato PDF, com uma legenda (opcional). Dica: Evite arquivos muito pesados (acima de 5MB) para garantir que o cliente receba rápido. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**Posso colocar vários textos no mesmo bloco?**Sim! Você pode adicionar múltiplas “bolhas” de mensagem dentro de um único bloco de Conteúdo. O robô enviará uma seguida da outra.**O áudio toca automático?**Depende da configuração do celular do cliente, mas geralmente ele precisa clicar no “Play”.**Posso enviar link?**Sim, basta colar o link (https://…) no texto.  
###  ✖️ Erros Comuns**Errar o nome da Variável (Mustache):**Digitar {{nome}} quando o sistema espera {{firstName}} ou esquecer de fechar as chaves {{firstName}. O cliente receberá a mensagem com o código escrito, em vez do nome dele, o que quebra a experiência humanizada.**Enviar Mídias Muito Pesadas (>5MB):**Tentar enviar vídeos ou PDFs gigantes. O WhatsApp pode falhar no envio ou o cliente (que muitas vezes usa 4G) não conseguirá baixar o arquivo. Prefira arquivos compactados e leves.**Criar um “Paredão de Texto”:**Escrever um texto imenso em um único bloco de mensagem. Isso torna a leitura cansativa. O ideal é usar o botão**Texto**dentro do bloco para quebrar o texto em 2 ou 3 “balões” menores, facilitando a leitura.



---

#### Mensagem Interna

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/mensagem-interna/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/mensagem-interna/)

🧩**O Bloco Mensagem Interna**é uma ferramenta de comunicação invisível para o cliente final. Ele permite que o robô insira notas, observações ou resumos diretamente na tela de chat da plataforma, mas**apenas sua equipe consegue ver**. Enquanto o cliente vê apenas as respostas normais do bot, o atendente visualiza essas notas destacadas em azul, servindo como um “ponto eletrônico” ou um histórico do que aconteceu no fluxo.**🏷️ Categoria: Dados**☑️**Passagem de Bastão:**O robô pode deixar um resumo (ex: “Cliente escolheu a opção Financeiro”) antes de transferir para o humano. ☑️**Instruções ao Atendente:**Orientar o funcionário sobre o que fazer (ex: “Verificar se a fatura está vencida antes de responder”). ☑️**Auditoria de Fluxo:**Marcar visualmente por quais caminhos o cliente passou dentro da automação. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Mensagem Interna**. ➡️ Preencha sua**mensagem**e clique no botão**Adicionar**. 
### Como aparece para o cliente
A mensagem interna**NÃO é enviada ao cliente**, portanto, nada muda para ele. Para o**atendente**dentro da plataforma, a mensagem interna é exibida com fundo**azul**, com o título de “**Comunicação Interna”**seguido do**usuário/bo**t que gerou a nota. 
### Acesse FlowBuilder editar fluxo + Mensagem Interna**digite o texto de sua comunicação interna. 🔲 Para finalizar, clique em**Adicionar**. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O cliente recebe alguma notificação?**Não. O celular do cliente nem sequer vibra. Para ele, essa mensagem não existe.**Posso usar emojis?**Sim, ajuda a chamar a atenção do atendente (ex: ⚠️ para alertas de situações críticas).**Fica gravado no histórico?**Sim. Mesmo que você feche o ticket, a mensagem interna permanece.



---

#### Pergunta

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/pergunta/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/pergunta/)

🧩**O Bloco de Pergunta**é o momento de escuta do seu fluxo. Ele serve para**interromper a automação**e ficar aguardando o cliente digitar alguma coisa. Enquanto o cliente não responder, o robô não avança para o próximo passo.**🏷️ Categoria: Dados – Mensagem**☑️**Captura de Dados:**Ideal para perguntar Nome, E-mail, CPF ou Cidade. ☑️**Engajamento:**Transforma o monólogo do robô em um diálogo real. ☑️**Controle de Fluxo:**Garante que o cliente só receba a próxima mensagem após interagir. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Pergunta**. ➡️ Preencha sua**mensagem**e clique no botão**Salvar**. 
### Como adicionar o bloco “Pergunta” no FlowBuilder
Acesse FlowBuilder editar fluxo + Pergunta****:**digite o texto de sua pergunta. 🔲 Para finalizar, clique em**Salvar**. 
### Como salvar a Resposta após o bloco de “Pergunta”?
Utilize o bloco de**Variável**, logo após o bloco de**Pergunta.**### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O robô valida a resposta?**O bloco de Pergunta básico geralmente aceita qualquer texto. Se você precisa validar se é um CPF ou E-mail válido por exemplo, utilize os blocos de**Variável**,**Http Request / Code**ou**Condição**conforme necessidade.**Como salvar a resposta do cliente?**Utilize um bloco de Variável logo na sequência.



---

#### Variável

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/variavel/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/variavel/)

🧩**O Bloco de Variável**é a “memória” do seu fluxo. Ele serve para**gravar**uma informação importante para que o robô possa usar esse dado mais tarde, criando conversas personalizadas e inteligentes.**🏷️ Categoria: Dados**☑️**Personalização:**Chamar o cliente pelo nome (%nome%) ou confirmar um dado (%cpf%). ☑️**Integração:**Salvar o resultado de uma consulta de API (ex: Status do Pedido). ☑️**Contexto:**Lembrar exatamente o que o cliente digitou para iniciar a conversa. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Variável**. ➡️ Preencha sua**mensagem**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Variável” no FlowBuilder
Acesse FlowBuilder editar fluxo + Variável****:**digite o nome da variável entre %. 🔲 Para finalizar, clique em**Adicionar**. 
###**No bloco de Variável, use o formato**%nome_variavel%**para definir o nome da variável. Exemplo: Se você quiser armazenar o nome de um lead, escreva**%nome%**no bloco de variável. Ele pode ser utilizado:**Após um Bloco de “Pergunta”:**A variável guarda a resposta digitada pelo lead.**Após um Bloco de “Http Request / Code”:**A variável armazena o retorno enviado no código. (return)**Após um Bloco de “Início do Fluxo”:**A variável salva o último texto enviado pelo cliente antes de iniciar o fluxo. 
###**Em um bloco de “Conteúdo” ou de “Http Request / Code”, use o mesmo formato**%nome_variavel%**que você utilizou para armazenar o valor. No nosso exemplo, seria**%nome%.**### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**Posso usar espaços no nome da variável?**Não recomendamos. Use _ para separar palavras (ex: %data_nascimento% em vez de %data nascimento%). Espaços podem quebrar o código.**A variável expira ou apaga?**A variável fica gravada no ticket (conversa desse cliente com essa conexão). A variável não expira e não pode ser apagada, mas pode ser sobrescrita ao passar pelo fluxo.**Posso sobrescrever uma variável?**Sim. Se você usar %opcao% no começo do fluxo e depois usar %opcao% de novo mais à frente, o valor antigo será apagado e substituído pelo novo. 
###  ✖️ Erros Comuns**Sintaxe Errada (O erro das Chaves):**Tentar definir a variável usando {{nome}} ou apenas nome. Neste bloco, é obrigatório usar as porcentagens:**%nome%**.**Variável “Vazia”:**Tentar usar uma variável antes de defini-la. Exemplo: Dizer “Olá %nome%” logo na primeira mensagem, antes de salvar uma variável. O robô vai enviar o texto feio “%nome%” para o cliente.**Não Conectar Imediatamente:**Colocar um bloco de texto ou menu entre a Pergunta e a Variável ou entre o Http Request / Code e a Variável. O sistema perde a referência da resposta. O Bloco Variável precisa ser o**vizinho imediato**da fonte do dado. A única exceção é ter um bloco Temporizador entre eles.



---

#### Enviar Contato

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-contato/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-contato/)

🧩**O Bloco Enviar Contato**é a ferramenta ideal para compartilhar números de telefone de forma profissional e prática. Em vez de o robô enviar o número solto no meio do texto (o que obriga o cliente a copiar, abrir o discador e colar), este bloco envia um**Cartão de Contato**. O cliente recebe aquele “quadradinho” clássico do WhatsApp e, com um clique, já pode salvar na agenda ou iniciar uma nova conversa.**🏷️ Categoria: Mensagem**☑️**Praticidade:**Peça para seu cliente salvar o seu contato, isso ajuda a fortalecer seu número, diminuindo as chances de bloqueio. ☑️**Networking:**Enviar o contato pessoal de um consultor ou gerente para o cliente. ☑️**Facilidade:**Evitar que o cliente digite o número errado ao tentar salvar. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Enviar Contato**. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como aparece para o cliente
Diferente de uma mensagem de texto comum, o cliente verá um**Card Visual**. O Card contém:**◽ Ícone**de usuário padrão**◽**O**Nome**que você configurou**◽**O botão**Conversar**e o botão**Adicionar contato.**(dependendo do sistema do celular dele). 
### Acesse FlowBuilder editar fluxo + Enviar Contato**digite o nome do contato que vai ser salvo na agenda. 🔘**Telefone:**digite o telefone do contato. 🔘**Legenda:**digite uma mensagem curta que é enviada junto com o cartão. 🔲 Para finalizar, clique em**Adicionar**. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**Posso enviar o contato da própria empresa?**Sim! É uma ótima estratégia pedir: “Salve nosso contato para não perder nossas promoções” e enviar este bloco com o próprio número que o bot está usando.**O cliente é obrigado a salvar?**Não. O bloco apenas facilita o processo. O cliente decide se clica para salvar ou não.**Funciona no WhatsApp Web?**Sim, funciona perfeitamente tanto no celular quanto no computador.



---

#### Enviar Localização

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-localizacao/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-localizacao/)

🧩**O Bloco Enviar Localização**é a ferramenta para compartilhar endereços físicos de forma interativa e precisa. Em vez de enviar um texto simples com o nome da rua (que obriga o cliente a copiar e colar no GPS), este bloco envia um**Mapa**real do WhatsApp. Ao clicar, o aplicativo de mapas do cliente (Google Maps, Waze ou Apple Maps) abre automaticamente já traçando a rota para o seu estabelecimento.**🏷️ Categoria: Mensagem**Ideal para: ☑️**Lojas Físicas e Consultórios:**Facilitar a chegada do cliente até sua porta. ☑️**Eventos:**Compartilhar o local exato de uma festa ou conferência. ☑️**Entregas/Retiradas:**Indicar o ponto exato de coleta (Pickup Point). 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Enviar Localização**. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como aparece para o cliente
Diferente de uma mensagem de texto comum, o cliente verá um**Mapa Visual**. O Mapa contém:**◽ Ícone Pino (vermelho)**identificando a localização. Ao clicar, um mapa é aberto permitindo navegação.**◽**Uma**Legenda**que você configurou. 
### Acesse FlowBuilder editar fluxo + Enviar Localização**digite o endereço (Rua, Número, Cidade) e**aguarde**. O sistema fará uma busca automática.**Dica:**Você também pode clicar no “ícone de Mira/Alvo” para permitir a busca pela sua localização atual. ⚡**Visualização do Mapa:**abaixo do endereço, um mapa interativo aparecerá mostrando o ponto encontrado. Assim como as coordenadas de Latitude e Longitudo. 🔘**Latitude**🔘**Longitude :**você pode pegar a latitude/longitude direto do Google Maps e colar nestes campos manualmente para garantir precisão absoluta. 🔘**Legenda (opcional):**digite um texto curto que acompanha o mapa.****🔲 Para finalizar, clique em**Adicionar**. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O cliente precisa ter o Google Maps instalado?**Não obrigatoriamente. O WhatsApp abre o mapa interno dele e oferece a opção de “Abrir em…” para Google Maps, Waze e outros.**É “Localização em Tempo Real”?**Não. Este bloco envia uma**Localização Fixa**(Ponto Estático). Não serve para rastrear entregadores em movimento.**Meu endereço não aparece na busca, e agora?**Use a técnica das coordenadas. Abra o Google Maps, clique com o botão direito no local exato da sua loja, copie os números (Lat/Long) e cole nos campos 🔘**Latitude**e 🔘**Longitude**.



---

#### Enviar Template

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-template/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/enviar-template/)

🧩**O Bloco Enviar Contato**é a ferramenta ideal para compartilhar números de telefone de forma profissional e prática. Em vez de o robô enviar o número solto no meio do texto (o que obriga o cliente a copiar, abrir o discador e colar), este bloco envia um**Cartão de Contato**. O cliente recebe aquele “quadradinho” clássico do WhatsApp e, com um clique, já pode salvar na agenda ou iniciar uma nova conversa.**🏷️ Categoria: Mensagem – Roteador**☑️**Praticidade:**Peça para seu cliente salvar o seu contato, isso ajuda a fortalecer seu número, diminuindo as chances de bloqueio. ☑️**Networking:**Enviar o contato pessoal de um consultor ou gerente para o cliente. ☑️**Facilidade:**Evitar que o cliente digite o número errado ao tentar salvar. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Enviar Template**. ➡️ Selecione a**Conexão**, o**modelo (template)**, preencha as**variáveis (se houver)**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Enviar Template” no FlowBuilder
Acesse FlowBuilder editar fluxo + Enviar Template**Selecione qual número remetente será feito o disparo. (a lista mostrará apenas conexões de API Oficial ativas dentro da plataforma) 🔘**Template**Selecione a mensagem que deseja enviar. Nota: A lista exibe o nome técnico do modelo, o idioma (ex: pt_BR) e a categoria (ex: UTILITY). Se seu modelo não aparecer, verifique se ele já foi aprovado e sincronizado no menu Gestão de Templates dentro da conexão. ⚡**VARIÁVEIS DO TEMPLATE******O sistema listará todos os campos variáveis**{{1}}**,**{{2}}, …**que existem no seu template e você precisa preencher as informações obrigatórias. ⚡**PREVIEW DO TEMPLATE******Mostra exatamente como a mensagem ficará, com o texto preenchido, para você conferir se a frase faz sentido antes de salvar. 🔲 Para finalizar, clique em**ADICIONAR**. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**Posso mudar o texto fixo do template aqui?**Não. O texto “fixo” foi aprovado pela Meta e não pode ser alterado. Você só consegue alterar o conteúdo das variáveis se houver (os espaços em branco).**Este bloco cobra?**O envio deste bloco geralmente inicia uma nova “Sessão de Conversa” cobrada pela Meta (Marketing, Utilidade ou Autenticação), a menos que a janela de 24h já esteja aberta e o modelo não seja de marketing.**Por que aparece “Variável HEADER”?**Se o seu template tiver uma imagem ou vídeo no cabeçalho (Header), aparecerá um campo extra para você colar a URL da mídia que deseja enviar.



---

#### Menu

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/menu/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/menu/)

🧩**Bloco Menu**é o elemento responsável por criar interatividade no seu fluxo, oferecendo opções claras para o usuário escolher. É a principal forma de guiar o cliente por diferentes caminhos (ex: Vendas, Suporte, Financeiro).**🏷️ Categoria: Mensagem – Roteador**☑️**Facilidade de Uso:**evite que o cliente tenha que digitar frases longas. Ele apenas clica ou digita um número. ☑️**Segmentação Automática:**direcione cada escolha para um fluxo ou departamento diferente sem intervenção humana. ☑️**Visual Profissional:**utilize botões e listas nativas do WhatsApp para tornar a experiência de navegação mais moderna e fluida. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Menu**. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como aparece para o cliente
 Existem 3 tipos diferentes de Menu: 
##### ⚡**1. Menu em Texto (Numérico)**É o formato clássico e universal. O robô envia uma mensagem com opções numeradas (1. Financeiro, 2. Suporte, 3. Vendas) e aguarda o cliente digitar o número correspondente. 
##### ⚡ 2**. Menu em Lista (Gaveta)**Envia um botão único (ex: “Ver Opções”) que, ao ser clicado, abre uma lista deslizante com várias alternativas. 
##### ⚡ 3**. Menu em Botões (Interativo)**Envia botões clicáveis na tela. É o formato que mais prático, pois exige apenas um toque. 
### Acesse FlowBuilder editar fluxo + Menu 🔘**Tipo de Menu:**selecione o tipo desejado:**– Menu em Texto****– Menu em Lista****– Menu em Botões**##### —> Se Menu em Texto:
 🔘**Arquivo de Capa:**(opcional) escolher uma mídia para aparece junto com o menu. 
##### —> Se Menu em Lista:
 🔘**Cabeçalho da Lista:**(opcional) texto inicial. 🔘**Texto do Botão da Lista:**texto do botão que ao ser clicado abre a lista de opções do Menu. 🔘**Rodapé da Lista:**(opcional) texto de rodapé . 
##### —> Se Menu em Botões:
 🔘**Título dos Botões:**(opcional) texto Título inicial. 🔘**Rodapé dos Botões:**(opcional) texto de rodapé. 
##### —> PARA TODOS os Tipos de Menu
 🔘**Mensagem:**texto explicativo perguntando o que o cliente deseja. 🔘**Opções do Menu:**clique em**+ Adicionar Opção**para criar itens em seu Menu, preenchendo o**campos**de cada opção. 🔘**Caminho Alternativo (Else):**saída alternativa caso o usuário escolha uma opção que não consta em seu Menu. 🔲 Para finalizar, clique em**Adicionar**.  
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O que acontece se eu colocar 4 opções no Menu de Botões?**O sistema provavelmente travará. Se precisar de mais do que 3 opções utilize o menu de Texto ou de Lista.



---

#### Adicionar / Remover Tags

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/adicionar-remover-tags/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/adicionar-remover-tags/)

🧩**Os Blocos de Adicionar ou Remover Tags**são os organizadores invisíveis do seu fluxo. Eles servem para classificar o ticket automaticamente enquanto ele passa pelo fluxo sem precisar de intervenção humana.**🔲 Adicionar Tag:**atribui uma “etiqueta” ao ticket (ex: “Interesse em Sapato”).**🔲 Remover Tag:**retira etiqueta antiga (ex: Remove “Novo Lead” quando ele vira “Cliente Comprou”).**🏷️ Categoria: Dados**☑️**Segmentação:**Marque clientes por interesse (Vendas, Suporte, Financeiro) para ações futuras. ☑️**Funil de Vendas:**Monitore a jornada (ex: Tag “Topo de Funil” -> Tag “Fundo de Funil”). ☑️**Gatilhos:**Use tags para rotear fluxo combinando com o bloco de “Condição” ou para disparar outras automações com “Remarketing de Tags”, acessando o menu  Tags editar Tag Fluxo de Automação Quando ele inicia 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Adicionar Tag**ou**Remover Tag**. ➡️ Selecione a**opção**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Adicionar Tag” no FlowBuilder
Acesse FlowBuilder editar fluxo + Adicionar Tag 
### Acesse FlowBuilder editar fluxo + Remover Tag**selecione uma tag – previamente cadastrada no sistema – que será removida do ticket quando passar pelo fluxo. Dentre as opções, você pode também escolher a opção “Remover Todas as Tags”****🔲 Para finalizar, clique em**Adicionar**. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 🔘**Escolha:**selecione uma tag – previamente cadastrada no sistema – que será atribuída ao ticket quando passar pelo fluxo.****🔲 Para finalizar, clique em**Adicionar**. 
####  ❔ Dúvidas Comuns**O cliente vê a Tag?**Não. As tags são 100% internas.**Posso adicionar várias tags de uma vez?**Não. Para adicionar múltiplas (ex: “Interesse em Tênis” E “Promoção Black Friday”), basta colocar blocos de “Adicionar Tag” um seguido do outro.**E se eu mandar remover uma tag que o cliente não tem?**O sistema apenas ignora e segue o fluxo. Não gera erro. Ele entende como “já está sem a tag, então tudo certo”. 
###  ✖️ Erros Comuns**Esquecer de Criar a Tag Antes:**Tentar configurar o bloco e não achar a etiqueta na lista.**Confundir Tag com Fila:**Achar que adicionar a Tag “Financeiro” move o cliente para o Departamento Financeiro. Não move.**Tag**é um adesivo de identificação.**Fila**é o local de atendimento. Para mover o cliente, use o bloco “Fila”.



---

#### Condição

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/condicao/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/condicao/)

🧩**O Bloco de Condição**é o “cérebro” lógico da sua automação, capaz de**mudar o caminho**de um fluxo com base em uma condição definida.**🏷️ Categoria: Roteador**☑️**Validar Respostas:**Verificar se o cliente digitou a palavra-chave correta.  ☑️**Segmentação:**Verificar se o cliente é VIP (via Tag) ou por qual número de WhatsApp ele entrou (Conexão). ☑️**Filtro de Horário:**Direcionar para atendimento apenas em horário comercial. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Condição**. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Condição” no FlowBuilder
Acesse FlowBuilder editar fluxo + Condição**O que vamos analisar? (Texto, Horário, Tag…)**🔘 Condição:**Qual a regra? (Igual a, Contém, É antes de…)**🔘 Valor:**Qual o alvo da comparação? 🔲 Para finalizar, clique em**Adicionar**. Com base nessa verificação, o fluxo segue por um caminho se a condição for**verdadeira**ou por outro caminho se for**falsa**. Abaixo, detalhamos os**6 Tipos de Condicionais**disponíveis: 
#### ⚡**TEXTO (INPUT | PERGUNTA)****de uma variável, uma resposta anterior ou mensagem do cliente. 🔘**Condição:**escolha entre “**Igual**“, “**Diferente**“, “**Contém**” ou “**Expressão Regular**” (para regras avançadas). 🔘**Valor:**digite o texto ou palavra-chave que espera receber. 
#### ⚡**TAG****específicas. Atencão às regras de preenchimento deste campo:**🔘 Condição IGUAL:**o valor deve ser o nome exato de**uma única**tag. (Verifica se ele tem essa tag).**🔘 Condição DIFERENTE:**o valor deve ser o nome exato de**uma única**tag. (Verifica se ele não tem essa tag).**🔘 Condição CONTÉM:**o valor pode ser um grupo de tags separadas por**vírgulas sem espaços**(ex: Tag1,Tag2). O sistema dará “Verdadeiro” se o cliente tiver**pelo menos uma**delas. 
#### ⚡**HORÁRIO****exata em que o cliente passou pelo bloco. 🔘**Condição:**utilize “**É antes das**” ou “**Depois das**“. 🔘**Valor:**digite o horário no formato 24h (ex: 08:30 ou 18:45). 
#### ⚡**É DIA ÚTIL?****. O sistema analisa automaticamente finais de semana e**feriados nacionais**. 🔘**Condição:**selecione “**Dias da Semana**“. 🔘**Valor:**Deixe este campo**vazio**. 
#### ⚡**QUAL DIA DA SEMANA?****exato em que o cliente passou pelo bloco. 🔘**Condição:**selecione “**Dias da Semana**“. 🔘**Valor:**Digite o nome do dia por extenso:**Domingo, Segunda, Terça, Quarta, Quinta, Sexta**ou**Sábado**. 
#### ⚡**ID DA CONEXÃO****o valor deve ser o**ID único**de uma conexão. (Verifica se o atendimento veio exatamente deste número).**🔘 Condição DIFERENTE:**o valor deve ser o**ID único**de uma conexão. (Verifica se o atendimento veio de qualquer outro número, exceto este).**🔘 Condição CONTÉM:**o valor pode ser um grupo de IDs separados por**vírgulas sem espaços**(ex: 15,22,40). O sistema dará “Verdadeiro” se o atendimento vier de**qualquer uma**dessas conexões listadas. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**Posso ligar vários blocos de condição em sequência?**Sim! Isso chama-se “Condicional Aninhada”. Você verifica se é 1, se não for, verifica se é 2, se não for, verifica se é 3.**O que acontece se eu não conectar a saída “se Falso”?**O fluxo para e o cliente fica sem resposta.**Sempre**conecte as duas pontas (verdadeiro e falso), mesmo que a saída falsa seja apenas uma mensagem dizendo “Não entendi, tente novamente”.**Preciso colocar acento nos dias da semana?**Sim. No tipo “Qual dia da semana”, a escrita deve ser exata: Sábado (com acento) e Terça (com cedilha).**Como funciona a “Expressão Regular”?**É um recurso para programadores. Permite validar formatos complexos, como verificar se o cliente digitou um CPF válido ou um e-mail correto.**A condição de Tag “Contém” exige todas as tags?**Não. Se você colocar Vendas,Suporte,Financeiro (entre vírgulas e sem espaço) e o cliente tiver apenas a tag “Vendas”, o resultado será**Verdadeiro**. Ele precisa ter apenas uma das listadas. O mesmo vale para a condição de Conexão.



---

#### Randomizador

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/randomizador/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/randomizador/)

**divide o fluxo com base em uma probabilidade.**🏷️ Categoria: Roteador**Por exemplo, é possível configurara probabilidade de 40% dos leads para seguirem pelo “**caminho A**” e os outros 60% pelo “**caminho B**“. 
#####  Importante
 O randomizador faz o sorteio percentual em cada passagem do lead, sem levar em consideração a passagem de leads anteriores por esse bloco.



---

#### Horário de Expediente

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/horario-de-expediente/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/horario-de-expediente/)

**para alterar o fluxo com base no horário de atendimento de**uma fila**. Defina caminhos diferentes dependendo se o atendimento está**dentro**ou**fora**do horário estabelecido em**uma fila**.**🏷️ Categoria: Roteador**## Para definir o horário de uma Fila
 Acesse o menu Filas & Chatbos editar Fila Horários de Atendimento 
#####  Importante
 Para gerenciar o horário de funcionamento da fila, é necessário ativar a opção no menu Configurações Opções Gestão de Expediente



---

#### Http Request / Code

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/http-request-code/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/http-request-code/)

**para fazer uma chamada à uma**API**, ou ativar uma**url externa**, como por exemplo um fluxo do N8N, Make, CRM ou uma programação própria. O bloco de “Http Request / Code” pode ser utilizado também para escrever códigos em javascript.**🏷️ Categoria: Dados – Integração**### Como realizar uma chamada HTTP**Onde usar:**no bloco de “Http Request / Code” do Flowbuilder, Tipo Requisição**O que faz:**chama um link externo, passando variáveis (caso deseje), e tendo o seu retorno em**response.data**(podendo utilizar um bloco de Variável na sequência para armazenar esse retorno)**O que alterar:**“Link”: define a url a ser chamada“Propriedades”: defina as propriedades que você deseja enviar (opcional) Os trechos entre {{...}} são placeholders do tipo “mustaches” e não precisam ser modificados, pois serão automaticamente substituídos pelos valores correspondentes. 
##### - Chamar um API Interna
 // definir let endpoint = "https://{{backendURL}}/api/url"; let method = "POST"; let payload = { "number": "{{number}}", "contactId": "{{contact_id}}", "name": "{{name}}", "firstName": "{{firstName}}", "ticketId": "{{ticket_id}}", "protocol": "{{protocol}}", "queueId": "{{queue}}", "userName": "{{user}}", "connectionName": "{{connection}}", "companyName": "{{name_company}}", "backendURL": "{{backendURL}}", "token": "{{connection_token}}", "dataHora": "{{data_hora}}" // apague ou insira outros payloads desejados aqui }; let authorization = "{{connection_token}}"; // estrutura try { const response = await axios({ url: endpoint, method: method, headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authorization }, data: payload, maxBodyLength: Infinity }); return JSON.stringify(response.data, null, 2); } catch (error) { return "Algo deu errado: " + error.message; } 
##### - Chamar um API ou Url Externa
 // definir let endpoint = "https://enderecoExterno"; let method = "POST"; let payload = { "number": "{{number}}", "contactId": "{{contact_id}}", "name": "{{name}}", "firstName": "{{firstName}}", "ticketId": "{{ticket_id}}", "protocol": "{{protocol}}", "queueId": "{{queue}}", "userName": "{{user}}", "connectionName": "{{connection}}", "companyName": "{{name_company}}", "backendURL": "{{backendURL}}", "token": "{{connection_token}}", "dataHora": "{{data_hora}}" // apague ou insira outros payloads desejados aqui }; // estrutura try { const response = await axios({ url: endpoint, method: method, headers: { 'Content-Type': 'application/json' }, data: payload, maxBodyLength: Infinity }); return JSON.stringify(response.data, null, 2); } catch (error) { return "Algo deu errado: " + error.message; } 
### Como utilizar Códigos
 Você pode utilizar o bloco “Http Request / Code” para escrever códigos javascript, e retornar o resultado para um bloco de “Variável” na sequência. Veja alguns exemplos de código: 
##### - Setar uma variável
 let dados = "Meu nome é João"; return dados; 
##### - Remover tags Html
 function removeHTML(htmlString) { let texto = htmlString; texto = texto.replace(/\\n/g, "\n") .replace(/]*>/g, ''); return texto; } return removeHTML(" Olá,**flowbuilders**! "); 
##### - Pegar o DDD do lead
 let meuNumero = "{{number}}"; const ddd = parseInt(meuNumero.substring(2, 4), 10); return ddd; 
##### - Tratar CPF
 function tratarEValidarCPF(valor) { // 1. Limpeza: Mantém apenas números let cpf = String(valor).replace(/\D/g, ''); // 2. Validação Rápida: Tamanho e sequências de números iguais if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) { return "CPF inválido!"; } // 3. Algoritmo de Validação (Dígitos Verificadores) function validarDigito(base) { let soma = 0; let peso = base.length + 1; for (let i = 0; i < base.length; i++) { soma += parseInt(base[i]) * peso--; } let resto = soma % 11; return resto < 2 ? 0 : 11 - resto; } const digito1 = validarDigito(cpf.substring(0, 9)); const digito2 = validarDigito(cpf.substring(0, 10)); if (digito1 !== parseInt(cpf[9]) || digito2 !== parseInt(cpf[10])) { return "CPF inválido!"; } // 4. Formatação Final return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); } // Exemplo de uso com a sua variável: return tratarEValidarCPF("%cpf_tratar%"); 
##### - Tratar CNPJ
 function tratarCNPJ(mensagem) { // Remover tudo que não for número let cnpj = mensagem.replace(/\D/g, ''); // Garantir que tenha exatamente 14 dígitos if (cnpj.length !== 14) { return "CNPJ inválido! Certifique-se de que digitou corretamente."; } // Formatar CNPJ no padrão XX.XXX.XXX/0001-XX cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"); return cnpj; } return tratarCNPJ(%resposta_cnpj_lead%); 
####  ❔ Dúvidas Comuns**Posso usar o Bloco de Http Request para utilizar um endpoint da nossa própria ferramenta?**Sim, pode, inclusive utilizando os “mustaches” do nosso sistema e também as variáveis do fluxo atual.**Qual a linguagem aceita pelo bloco de Http Request / Code?**Javascript.



---

#### Pixel Meta

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/pixel-meta/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/pixel-meta/)

**envia informações para a Meta sempre que o lead passar por ele no fluxo.**🏷️ Categoria: Dados – Integração**Essas informações podem ser customizadas, para indicar um cadastro realizado, uma compra, um abandono de carrinho, etc. Com esses dados, a Meta consegue**otimizar seus anúncios**, entender o comportamento do seu público ideal e encontrar pessoas semelhantes. Além disso, o pixel permite fazer**remarketing**– ou seja, mostrar novos anúncios apenas para quem foi marcado por um pixel específico. 
### Como configurar o Pixel da Meta no fluxo
 No menu FlowBuilder , adicione o bloco de**Pixel Meta**e configure os seguintes campos:**seu token da Meta. (tutorial aqui)**➡️ Pixel ID:**o ID (identificador) do seu pixel. (tutorial aqui)**➡️  Nome do Evento:**deve ser digitado exatamente igual a documentação da Meta:**Leads**,**CompleteRegistration**,**AddToWishlist**,**AddToCart**,**Purchase**, por exemplo. (documentação completa em  https://developers.facebook.com/docs/meta-pixel/reference)**➡️ Custom Data:**json das propriedades do evento. Consulte a documentação para saber os campos opcionais e obrigatórios. No evento Purchase é obrigatório “currency” e “value”. Veja um exemplo: { "value": 115.00, "currency": "BRL" }**➡️ Source:**indica o local que o evento está sendo enviando.  Webiste, server, crm ou nesse caso poderia colocar o nome da nossa plataforma Pacoticket.



---

#### Asaas

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/asaas/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/asaas/)

🧩**O Bloco Asaas**é uma integração entre nossa plataforma com o gateway de pagamentos Asaas. Ele permite que o robô consulte o CPF ou CNPJ do cliente e verifique se existe alguma cobrança pendente e envie pronta para pagamento.**🏷️ Categoria: Financeiro – Integração**☑️**Autoatendimento:**Emissão de segunda via de boletos sem intervenção humana (24/7). ☑️**Redução de Inadimplência:**Facilita a vida do cliente que quer pagar, enviando o link na hora. ☑️**Agilidade:**O sistema informa o total de faturas abertas e já foca na cobrança prioritária. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Asaas**. ➡️ Preencha o**token**e clique no botão**Salvar**. ➡️ Consiga seu**token**no**Asaas**em**Perfil > Integrações > Chaves de API**➡️ Dicas: utilize um bloco de**Pergunta**antes do bloco do Asaas para conseguir o CPF ou CNPJ (somente números). Utilize também**Temporizador**de 5 segundos nas saídas de Sucesso e Erro do bloco Asaas. 
### Como adicionar o bloco “Asaas” no FlowBuilder
Acesse FlowBuilder editar fluxo + Asaas**cole o token de sua chave API do Asaas.****🔲 Para finalizar, clique em**Adicionar**. 
### Como conseguir o Token do Asaas
 No site do**Asaas**em**Perfil > Integrações > Chaves de API**Clique no botão**Gerar Chave de API**,**nomeie**sua chave e**Copie a key**gerada após avançar.  
### Como Funciona o Bloco do Asaas na Prática
 O bloco de Asaas é acionado com a entrada de dados CPF ou CNPJ em formato somente de números. ⚡ Utilize um bloco de**Pergunta**antes do bloco Asaas para conseguir esses dados. Avise o cliente para digitar somente números e de preferência utilize um**validador**utilizando o bloco de**Http Request / Code.**⚡ O Bloco do Asaas tem duas saídas:**Dica**: após cada saída coloque um bloco**Temporizador**antes de continuar seu fluxo. 🟢**Sucesso:**A API encontrou o cliente e processou a busca.  🔴**Erro:**Houve falha na API do Asaas, o sistema caiu, ou o documento é inválido.  Em caso de sucesso, o sistema informa se o cliente**tem ou não**faturas em aberto, indicando**o Total de Faturas**e enviando o link de pagamento da mais**recente**. Para pagar faturas mais antigas, o cliente deve quitar a mais recente antes, ou ser transferido para um atendente humano. 
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O cliente digitou com pontos (ex: 123.456.789-00). Vai funcionar?**Não. A API do Asaas geralmente rejeita a busca se o documento contiver caracteres especiais.**Posso escolher qual fatura enviar se houver mais de uma?**Pela automação deste bloco, não. A regra de negócio do bloco envia sempre a mais recente. Para renegociações complexas de várias faturas antigas, o ideal é transferir para o bloco de**Departamento**(atendimento humano).**Quais os métodos de pagamento?**O link gerado pelo Asaas abrirá a fatura padrão do seu gateway, permitindo que o cliente pague via PIX, Boleto ou Cartão (conforme você configurou lá no painel do Asaas).**Perdi o Token do Asaas, o que eu faço?**Como o token é exibido apenas uma vez na criação, você precisará ir no Asaas, excluir a chave antiga, gerar uma nova chave de API e colar o novo token no Bloco Asaas do seu fluxo. 
###  ✖️ Erros Comuns**Não limpar o CPF na Pergunta:**O erro número 1. Esquecer de avisar o cliente ou de usar a validação. O cliente digita com traços, o Bloco Asaas não encontra nada (ou dá erro de sintaxe) e o fluxo quebra.**Achar que todas as faturas vão aparecer:**O cliente tem 5 boletos atrasados. O robô vai avisar que existem 5, mas mandará o link apenas da última. Instrua sua equipe sobre essa regra de negócio.**Deixar a saída de “Erro” vazia:**configurar somente o caminho do “Sucesso”. Se o Asaas estiver fora do ar, o robô para de responder e o cliente fica travado no limbo do fluxo. Sempre configure o caminho de Erro!



---

#### Encerrar Fluxo

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/encerrar-fluxo/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/encerrar-fluxo/)

**é um bloco Finalizador tanto do Fluxo, quando do Ticket / Protocolo. Você pode encerrar adicionando uma última mensagem de texto, ou apenas encerrar.**🏷️ Categoria: Finalização**#####  Importante
 O bloco**Encerrar Fluxo**tem o mesmo efeito do Encerrar Atendimento, finalizando o atendimento do ticket.



---

#### Encerrar Fluxo [Resposta Rápida]

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/encerrar-fluxo-resposta-rapida/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/encerrar-fluxo-resposta-rapida/)

**, ele deve sempre ser finalizado com o bloco**Encerrar Fluxo [Resposta Rápida].****🏷️ Categoria: Finalização**



---

#### Departamentos

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/departamentos/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/departamentos/)

**é um bloco Finalizador. Direciona o lead para uma “Fila”, com o status de “Aguardando”.**🏷️ Categoria: Atendimento – Finalização**#####  Importante
 A fila selecionada não pode estar vinculada a um fluxo



---

#### Operador

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/operador/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/operador/)

**é um bloco Finalizador. Direciona o lead para uma “Fila”, diretamente para um “Atendente”.**🏷️ Categoria: Atendimento – Finalização**#####  Importante
 O “Atendente/Operador” selecionado deve ter permissão para visualizar as mensagens da “Fila” definida.



---

#### Rodízio

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/rodizio/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/rodizio/)

🧩**O Bloco Rodízio**distribui os clientes que chegam no fluxo entre vários atendentes da sua equipe, seguindo uma lógica percentual definida por você. Diferente de uma Fila comum (onde o chat fica solto aguardando alguém pegar), o Rodízio**entrega**o chat diretamente ao atendente, garantindo que o lead tenha um “dono” imediato.**🏷️ Categoria: Atendimento – Finalização – Roteador**☑️**Justiça:**Garante que os leads sejam divididos igualmente (ou proporcionalmente) entre o time. ☑️**Estratégia:**Defina pesos diferentes (ex: Vendedor Sênior recebe mais leads que o Júnior). ☑️**Segurança:**Se ninguém estiver disponível, o sistema move o cliente para uma Fila de espera de segurança. 
#####  ➡️  Acesse o menu**FlowBuilder**. ➡️  Em um fluxo, selecione o Bloco**Rodízio**. ➡️ Preencha os**campos**e clique no botão**Adicionar**. 
### Como adicionar o bloco “Rodízio” no FlowBuilder
Acesse FlowBuilder editar fluxo + Rodízio******🔘**Ciclo de Rodízio:**Define quando a contagem de distribuição é “zerada” para recomeçar o equilíbrio.**Por Hora Cheia:**Zera a contagem a cada hora cheia.**Por Dia:**Zera à meia-noite (ideal para operações diárias).**Por Semana:**Zera no início da semana.**Por Mês:**Zera no início do mês.**Integral (Total):**O sistema considera o histórico total desde sempre (nunca zera).   🔘**Se não encontrar operador disponível, mover para:**Se todos os atendentes do rodízio estiverem indisponíveis, defina uma Fila para a conversa ser direcionada no status “Aguardando”. Exemplo: Selecione uma**Fila (Departamento)**de segurança (ex: “Orçamentos” ou “Espera”). Isso impede que o cliente fique travado no fluxo.   ⚡**PARTICIPANTES E MATEMÁTICA******🔘**Escolha os participantes:**Selecione o atendente na lista e clique para adicionar. 🔘**Status:**Defina a condição para receber o chat. Geralmente mantém-se**Online**. Assim, se o atendente deslogar, o sistema pula ele e passa para o próximo da lista. Se optar por**Indiferente**, o atendente receberá a conversa independente de estar online. 🔘**Porcentagem (%):**Percentual das conversas que devem ir para o atendente. 🚨 A soma das porcentagens de todos os usuários**DEVE SER EXATAMENTE 100%**. 🔲 Para finalizar, clique em**Adicionar**.  
### Como mover, editar, excluir, duplicar ou conectar um Bloco no FlowBuilder
Acesse FlowBuilder editar fluxo**◽****Mover posição:**clique e arraste um bloco para mudá-lo de posição. ◽**Editar:**duplo clique no bloco desejado. ◽**Excluir:**clique simples no bloco desejado, aperte a tecla Delete do teclado ou clique no ícone de “lixeira” no canto superior direito do bloco. ◽**Duplicar:**clique no ícone de “duplicar” no canto superior direito do bloco (ao lado do ícone de “lixeira”). ◽**Conectores:**cada bloco tem um**ponto de saída (à direita)**e/ou um**ponto de entrada (à esquerda)**– representado por um círculo preto com uma seta branca dentro. Para conectar um bloco no outro, clique em um ponto de saída de um bloco e**arraste**até um ponto de entrada de outro bloco. Isso diz ao robô: “depois de fazer isso, vá para aquilo”. 
####  ❔ Dúvidas Comuns**O que acontece se o atendente estiver Offline?**Se no bloco de Rodízio a opção “Status” desse atendente estiver marcada como “Online”, e o mesmo estiver “Offline”, o sistema vai ignorar este atendente e tentar entregar para o próximo da lista que estiver logado. Se**ninguém**estiver online, o cliente é movido para a fila definida no campo “Se não encontrar operador disponível, mover para:”.**A distribuição é perfeita (1 pra 1)?**O sistema trabalha com**Probabilidade Estatística**. Em um ciclo curto (poucos atendimentos), pode parecer desequilibrado, mas ao longo do dia (Ciclo Dia), as porcentagens tendem a se igualar conforme configurado. 
###  ✖️ Erros Comuns**A Matemática não fecha:**erro mais clássico. Por exemplo, 12 atendentes com 8% cada. A conta: 12 x 8 =**96%**.O problema: Sobram 4%. O sistema não sabe para quem mandar esses 4% dos clientes e pode gerar erro.**Ajuste os números para fechar 100% cravado.**(Dica: Coloque 9% em alguns, nunca utilize casas decimais).**Esquecer o Caminho de Fuga (Fallback):**Configurar o rodízio mas não definir uma fila no campo “Se não encontrar operador disponível, mover para:”. Se sua equipe sai para o almoço e todos ficam offline, o cliente trava no bloco e não recebe atendimento.



---

#### Trocar de Fluxo

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/trocar-de-fluxo/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/trocar-de-fluxo/)

**é um bloco Finalizador, mas ao mesmo tempo acaba Roteando para outro fluxo.**🏷️ Categoria: Finalização**#####  Importante
 O bloco**Trocar Fluxo**exibirá apenas uma lista de FILAS que estejam associadas à um fluxo.   Por isso, o novo fluxo precisa estar vinculado à uma fila. 
####  ❔ Dúvidas Comuns**Qual compartamento Padrão do bloco “Trocar de Fluxo”?**Iniciar automaticamente um fluxo vinculado à Fila desejada. Para isso, o atendimento é forçado ao “Aguardando” (caso não esteja), para que a automação seja executada.**O cliente percebe a troca?**Não. Para o cliente, a conversa continua fluindo normalmente.**Posso criar um loop infinito?**Sim, e isso é perigoso. Se o Fluxo A manda para o B, e o B manda para o A sem nenhuma condição de parada, o cliente ficará preso num loop eterno de mensagens. Cuidado!**Por que não está aparecendo minha Fila no bloco “Trocar de Fluxo”?**Provavelmente porque essa Fila não tem um fluxo de automação vinculado à ela.**O bloco “Trocar de Fluxo” funciona igual ao bloco “Departamento”?**Não, apesar dos dois solicitarem a escolha de uma Fila, o bloco “Departamento” deixa o atendimento parado na Fila selecionada para um atendente iniciar a conversa manual (mesmo que a Fila tenha um fluxo vinculado à ela). Já o bloco “Trocar de Fluxo” inicia o fluxo vinculado a essa Fila.



---

#### Trocar de Fluxo para Typebot

> 🔗 [https://help.pacoticket.com.br/principal/flowbuilder/blocos/trocar-de-fluxo-para-typebot/](https://help.pacoticket.com.br/principal/flowbuilder/blocos/trocar-de-fluxo-para-typebot/)

**é um bloco Finalizador, mas ao mesmo tempo acaba Roteando para outro fluxo.**🏷️ Categoria: Finalização**#####  Importante
 O bloco**Trocar Fluxo para Typebot**exibirá apenas uma lista de FILAS que estejam associadas à um fluxo de TYPEBOT.   Por isso, o fluxo do typebot precisa estar vinculado à uma fila.




---


## Webhooks

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/](https://help.pacoticket.com.br/principal/webhooks/)

###  Envio de Sinais para diferentes Eventos  
#### Um evento em um sistema ativa uma ação em outro**Webhook**é uma maneira de um sistema enviar informações automaticamente para outro sistema sempre que algo importante acontece. ✅ Nossa plataforma oferece diversos webhooks que disparam conforme um evento interno, como envios de mensagens, mudanças de status, tags, etc permitindo integrações com outras aplicações. ✅ Também temos os Webhook Triggers, que são os endpoints receptivos de Webhooks externos. Assim, é possível iniciar um fluxo de conversa quando uma aplicação externa envia um sinal para nosso sistema, como por exemplo uma notificação de um sistema de pagamento, cadastro de lead no site, e outros.



---

### Webhook x API

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/webhook-x-api/](https://help.pacoticket.com.br/principal/webhooks/webhook-x-api/)

**API**e**Webhook**são frequentemente comparados, pois ambos são usados para**comunicação entre sistemas**, mas funcionam de maneiras diferentes. ✅**API**é utilizada para fazer uma requisição a outro sistema**de forma ativa**, enviando uma solicitação para um**endpoint (URL)**e recebendo uma resposta no momento da requisição. ✅**Webhook**é utilizado para**notificar outro sistema automaticamente**(via um**endpoint/URL**)**quando um evento acontece**, sem necessidade de uma requisição prévia. 
##**API (Application Programming Interface)**🔑 É um conjunto de regras e definições que permite que**um sistema se comunique com outro**em um momento específico. Funciona por meio de**requisições e respostas**(geralmente via HTTP).O cliente (aplicação que deseja informações) precisa**chamar**a API para**obter dados ou executar**uma ação. 
#####  📌 Analogia**API**é como um restaurante. Você (cliente) pede um prato (requisição) ao garçom e ele traz a comida (resposta). 
##### Exemplos práticos de API
 Um sistema externo chamar a nossa API para enviar uma mensagem de texto. Um sistema externo consultar nossa API Status da Conexão para verificar o status dentro de nosso sistema. Um sistema externo consultar nossa API de mensagens de um protocolo para fazer um resumo do atendimento. 
##**Webhook**🔑 É um**mecanismo de notificações automáticas**enviadas de um sistema para outro quando um evento acontece. Funciona  via**requisições HTTP POST**para um endpoint previamente configurado.Em vez de o cliente ficar chamando uma API para verificar se há novidades (**polling**), o webhook envia a informação assim que ela estiver disponível. 
#####  📌 Analogia**Webhook**é como uma entrega de pizza. Você faz o pedido e apenas aguarda. Quando a pizza estiver pronta, o entregador vai até sua casa sem você precisar ficar ligando (**polling**) para perguntar. 
##### Exemplos práticos de Webhook
 Toda vez que um mensagem é enviada ou recebida, nosso Webhook dispara um aviso para uma URL externa definida no Menu Conexões. O Asaas notificar nosso endpoint/url do webhook-trigger quando receber um pagamento, iniciando assim um fluxo do flowbuilder. Uma plataforma de cursos notificar nosso endpoint/url do webhook-trigger quando o usuário completar uma aula ou módulo. 
###**Principais Diferenças**CaracterísticaAPIWebhook**Definição**É usada para**buscar ou enviar dados**de forma ativa para outro sistema.É usada para**receber dados automaticamente**quando um evento ocorre.**Quem inicia?**O cliente precisa chamarO servidor envia automaticamente**Como?**O sistema A faz uma requisição para o sistema B e aguarda a resposta.O sistema B**notifica automaticamente**o sistema A quando algo acontece.**Quando?**Quando o sistema A solicita (ativa).Assim que um evento ocorre (passiva).**Exemplo**Buscar preço do Bitcoin em uma APIReceber uma notificação quando o preço do Bitcoin mudar**Analogia**Você liga para uma pizzaria e pede uma pizza.A pizzaria te liga quando a pizza sai para entrega.



---

### Webhook da Conexão

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/webhooks-da-conexao/](https://help.pacoticket.com.br/principal/webhooks/webhooks-da-conexao/)

Nosso**Webhook de Conexão**envia uma notificação com dados toda vez que essa**CONEXÃO**:**✅ receber**uma mensagem**✅ enviar**uma mensagem**✅**alterar uma**tag**no ticket**✅**alterar o**status do ticket (abrir ou fechar)**Sempre que um desses**eventos**ocorre, nosso webhook envia um**payload (dados)**para o seu**endpoint**(URL), notificando automaticamente o sistema receptor. 
### Como configurar o Endpoint (URL) do sistema receptor
 Configure seu receptor para receber nossas notificações no método**POST**.Copie a URL de destino (do seu sistema receptor).Acesse em nosso sistema, o menu Conexões Editar Conexão e no campo Webhook adicione a URL copiada. 
#####  Visualize agora as notificações de nossos webhooks chegando em seu enpoint. 
### Payload Enviado
 Um payload diferente é enviado conforme cada tipo de ação. Veja abaixo: 
#### 1. Mensagens
 { "body": { "filaescolhida": "Dep. Entregas", "filaescolhidaid": 5, "mensagem": "Mensagem de teste", "sender": "5511999999999", "chamadoId": 15321, "acao": "start", "name": "José Cliente", // se recebida = nome do cliente | se enviada = cel do cliente (5511999999999) "companyId": 8, "defaultWhatsapp_x": 27, "fromMe": false, // se recebida = false | se enviada = true "queueId": 5, "isGroup": false, "ticketData": { "id": 15321, "status": "open", "unreadMessages": 0, "lastMessage": "Mensagem anterior ao de teste", // se recebida = mensagem anterior | se enviada = mensagem atual "protocolo": "54212", "typebot_sessionId": null, "typebot_status": null, "customA": null, "lastFlowId": null, "repeatCount": 0, "fromAds": 24, "customB": null, "nextFlowId": null, "isGroup": false, "userId": 71, "contactId": 16991, "whatsappId": 27, "queueId": 5, "chatbot": false, "isMenu": false, "variables": null, "channel": "whatsapp", "queueOptionId": null, "companyId": 8, "uuid": "9165510e-d4b0-1234-8aa4-222cc8b2344a", "promptId": null, "createdAt": "2024-12-21T14:06:31.404Z", "updatedAt": "2025-03-21T17:45:00.575Z", "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/3653963772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIWagepE1pi1UEjOTUa4Mf9hyz3bicAoUUMmu068SRl93&oe=67E90699&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "user": { "id": 71, "name": "João Atendimento", "restricted": false, "away": false, "ausencia": null, "sigame": false, "number": "5511987654321" }, "queue": { "id": 5, "name": "Dep. Entregas", "color": "#f44e3b", "typeboturl": "", "typebotname": "", "typebotexpire": 5000, "typebotwait": 1500, "flowiseKey": "", "flowiseUrl": "", "promptId": null, "invalidMessage": "", "flowId": null, "zaiaToken": "", "zaiaAgent": null, "isTranscribe": false, "difyToken": null, "difyURL": null, "webhookQueueURL": null, "prompt": null }, "whatsapp": { "name": "Atendimento", "webhook": "https://go.dominio.com.br/webhook", "id": 27, "token": "7ydsa6dahdaksdas9", "coverImage": null, "selectedCommentQueueId": null, "whatsmeowname": null, "whatsmeowtoken": null, "whatsmeowurl": null, "hubtoken": null, "channel": "whatsapp", "status": "CONNECTED", "ignoreNumbers": "" }, "tags": [ { "id": 27, "name": "Atenção", "color": "#CD0003", "TicketTag": { "ticketId": 52, "tagId": 27, "disparei": 0, "createdAt": "2025-03-24T11:51:41.779Z", "updatedAt": "2025-03-24T11:51:41.779Z" } } ], "company": { "name": "Atendimento - Minha Empresa" } }, "backendURL": "https://backend_url.com.br", "token_origin": "7ydsa6dahdaksdas9", "msg": { "key": { "remoteJid": "5511999999999@s.whatsapp.net", "fromMe": false, "id": "3EB46F40017BA9" }, "message": { "extendedTextMessage": { "text": "Mensagem de teste" } } "messageTimestamp": "1742906049", "status": "PENDING" } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } Temos alguns tipos de mensagens em “**body > msg > message”**São eles: conversation (via celular)extendedTextMessage (via Web)audioMessageimageMessagevideoMessagedocumentMessagereactionMessagestickerMessagecontactMessagelocationMessage 
#### 2. Tags
 { "body": { "action": "tag-sync", "tags": { "ticketId": 15321, "tags": [ { "id": 71, "name": "particular", "color": "#E1A903", "kanban": 0, "prioridade": 0, "automation": 0, "flowsId": 0, "conversao": null, "tagType": "Atendimento", "companyId": 8, "createdAt": "2025-03-15T18:56:21.655Z", "updatedAt": "2025-03-15T18:56:21.655Z" } ] }, "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/44599_56578365129263772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIdaAniZV10jFWDbcoIOlKodMuWHQeZ4C2DV-gJQxQtFx&oe=67E236D9&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "connection_token": "7ydsa6dahdaksdas9", "apiUrl": "https://backend_url.com.br }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 3. Abrir ou Fechar Ticket
 { "body": { "sender": "5511999999999", "chamadoId": 20956, "acao": "open", // closed = se for encerramento de ticket "companyId": 1, "defaultWhatsapp_x": 1, "queueId": 16, "isGroup": false, "backendURL": "https://backend_url.com.br", "ticketData": { "id": 20956, "status": "pending", "unreadMessages": 1, "lastMessage": "olá, tudo bem?", "protocolo": "29924", "typebot_sessionId": null, "typebot_status": null, "customA": null, "lastFlowId": "SXG8YYNS5OWesf2oFYvLB89K2ETTeY", "repeatCount": 0, "fromAds": 24, "customB": null, "nextFlowId": null, "isGroup": false, "userId": null, "contactId": 21019, "whatsappId": 1, "queueId": 16, "chatbot": false, "isMenu": false, "variables": null, "channel": "whatsapp", "queueOptionId": null, "companyId": 1, "uuid": "872b49d0-c009-1234-b640-1c558b69d5bd", "promptId": null, "createdAt": "2025-03-25T15:41:55.115Z", "updatedAt": "2025-03-25T18:43:47.366Z", "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/3653963772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIWagepE1pi1UEjOTUa4Mf9hyz3bicAoUUMmu068SRl93&oe=67E90699&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "user": null, // estará preenchido se estiver em atendimento "queue": { "id": 16, "name": "Dep. Orçamentos", "color": "#999999", "typeboturl": "", "typebotname": "", "typebotexpire": 5000, "typebotwait": 1500, "flowiseKey": "", "flowiseUrl": "", "promptId": null, "invalidMessage": "", "flowId": null, "zaiaToken": "", "zaiaAgent": null, "isTranscribe": false, "difyToken": null, "difyURL": null, "webhookQueueURL": null, "prompt": null }, "whatsapp": { "name": "Atendimento", "webhook": "https://go.dominio.com.br/webhook", "id": 27, "token": "7ydsa6dahdaksdas9", "coverImage": null, "selectedCommentQueueId": null, "whatsmeowname": null, "whatsmeowtoken": null, "whatsmeowurl": null, "hubtoken": null, "channel": "whatsapp", "status": "CONNECTED", "ignoreNumbers": "" }, "tags": [], "company": { "name": "Atendimento - Minha Empresa" } } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 4. Receber Áudio, Imagem ou Arquivo
 O recebimento de áudio, imagem ou arquivo no WhatsApp possui uma particularidade: ele gera dois webhooks seguidos. O primeiro webhook é parecido com o de “mensagem” porém na propriedade “mensagem” em vez de conter o texto, contém a seguinte informação: “mensagem”: “Áudio” (se áudio)“mensagem”: ” ” (se imagem ou vídeo)“mensagem”: “nome do arquivo” (se PDF) Na sequência o**segundo**webhook é recebido, com o seguinte payload: { "body": { "sender": "5511999999999", "chamadoId": 20956, "acao": "fila-data", "companyId": 1, "defaultWhatsapp_x": 1, "fromMe": false, "queueId": 16, "isGroup": false, "ticketData": { ... igual de mensagem ... } "mediaFolder": "public/company1", "mediaName": "1742984582802.ogg", "backendURL": "https://backend_url.com.br", "token_origin": "7ydsa6dahdaksdas9", "msg": { ... igual de mensagem ... } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" }



---

### Webhook de Filas

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/webhook-de-filas/](https://help.pacoticket.com.br/principal/webhooks/webhook-de-filas/)

Nosso**Webhook de Filas**envia uma notificação com dados toda vez que essa**FILA**:**✅ receber**uma mensagem**✅ enviar**uma mensagem**✅**alterar uma**tag**no ticket**✅**alterar o**status do ticket (abrir ou fechar)**Sempre que um desses**eventos**ocorre em um ticket pertecente a essa fila, nosso webhook envia um**payload (dados)**para o seu**endpoint**(URL), notificando automaticamente o sistema receptor. 
#####  Importante!
 Se o webhook de**conexão**e o de**filas**estiverem ativos ao mesmo tempo:**quando o lead não estiver na fila selecionada:**somente o webhook de conexão será disparado.**quando o lead estiver na fila selecionada:**os dois webhooks serão disparados. 
### Como configurar o Endpoint (URL) do sistema receptor
 Configure seu receptor para receber nossas notificações no método**POST**.Copie a URL de destino (do seu sistema receptor).Acesse em nosso sistema, o menu Filas & Chatbot Editar Fila e no campo Url do Webhook adicione a URL copiada. 
#####  Visualize agora as notificações de nossos webhooks chegando em seu enpoint. 
### Payload Enviado
 Um payload diferente é enviado conforme cada tipo de ação. Veja abaixo: 
#### 1. Mensagens
 { "body": { "filaescolhida": "Dep. Entregas", "filaescolhidaid": 5, "mensagem": "Mensagem de teste", "sender": "5511999999999", "chamadoId": 15321, "acao": "start", "name": "José Cliente", // se recebida = nome do cliente | se enviada = cel do cliente (5511999999999) "companyId": 8, "defaultWhatsapp_x": 27, "fromMe": false, // se recebida = false | se enviada = true "queueId": 5, "isGroup": false, "ticketData": { "id": 15321, "status": "open", "unreadMessages": 0, "lastMessage": "Mensagem anterior ao de teste", // se recebida = mensagem anterior | se enviada = mensagem atual "protocolo": "54212", "typebot_sessionId": null, "typebot_status": null, "customA": null, "lastFlowId": null, "repeatCount": 0, "fromAds": 24, "customB": null, "nextFlowId": null, "isGroup": false, "userId": 71, "contactId": 16991, "whatsappId": 27, "queueId": 5, "chatbot": false, "isMenu": false, "variables": null, "channel": "whatsapp", "queueOptionId": null, "companyId": 8, "uuid": "9165510e-d4b0-1234-8aa4-222cc8b2344a", "promptId": null, "createdAt": "2024-12-21T14:06:31.404Z", "updatedAt": "2025-03-21T17:45:00.575Z", "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/3653963772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIWagepE1pi1UEjOTUa4Mf9hyz3bicAoUUMmu068SRl93&oe=67E90699&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "user": { "id": 71, "name": "João Atendimento", "restricted": false, "away": false, "ausencia": null, "sigame": false, "number": "5511987654321" }, "queue": { "id": 5, "name": "Dep. Entregas", "color": "#f44e3b", "typeboturl": "", "typebotname": "", "typebotexpire": 5000, "typebotwait": 1500, "flowiseKey": "", "flowiseUrl": "", "promptId": null, "invalidMessage": "", "flowId": null, "zaiaToken": "", "zaiaAgent": null, "isTranscribe": false, "difyToken": null, "difyURL": null, "webhookQueueURL": null, "prompt": null }, "whatsapp": { "name": "Atendimento", "webhook": "https://go.dominio.com.br/webhook", "id": 27, "token": "7ydsa6dahdaksdas9", "coverImage": null, "selectedCommentQueueId": null, "whatsmeowname": null, "whatsmeowtoken": null, "whatsmeowurl": null, "hubtoken": null, "channel": "whatsapp", "status": "CONNECTED", "ignoreNumbers": "" }, "tags": [ { "id": 27, "name": "Atenção", "color": "#CD0003", "TicketTag": { "ticketId": 52, "tagId": 27, "disparei": 0, "createdAt": "2025-03-24T11:51:41.779Z", "updatedAt": "2025-03-24T11:51:41.779Z" } } ], "company": { "name": "Atendimento - Minha Empresa" } }, "backendURL": "https://backend_url.com.br", "token_origin": "7ydsa6dahdaksdas9", "msg": { "key": { "remoteJid": "5511999999999@s.whatsapp.net", "fromMe": false, "id": "3EB46F40017BA9" }, "message": { "extendedTextMessage": { "text": "Mensagem de teste" } } "messageTimestamp": "1742906049", "status": "PENDING" } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } Temos alguns tipos de mensagens em “**body > msg > message”**São eles: conversation (via celular)extendedTextMessage (via Web)audioMessageimageMessagevideoMessagedocumentMessagereactionMessagestickerMessagecontactMessagelocationMessage 
#### 2. Tags
 { "body": { "action": "tag-sync", "tags": { "ticketId": 15321, "tags": [ { "id": 71, "name": "particular", "color": "#E1A903", "kanban": 0, "prioridade": 0, "automation": 0, "flowsId": 0, "conversao": null, "tagType": "Atendimento", "companyId": 8, "createdAt": "2025-03-15T18:56:21.655Z", "updatedAt": "2025-03-15T18:56:21.655Z" } ] }, "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/44599_56578365129263772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIdaAniZV10jFWDbcoIOlKodMuWHQeZ4C2DV-gJQxQtFx&oe=67E236D9&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "connection_token": "7ydsa6dahdaksdas9", "apiUrl": "https://backend_url.com.br }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 3. Abrir ou Fechar Ticket
 { "body": { "sender": "5511999999999", "chamadoId": 20956, "acao": "open", // closed = se for encerramento de ticket "companyId": 1, "defaultWhatsapp_x": 1, "queueId": 16, "isGroup": false, "backendURL": "https://backend_url.com.br", "ticketData": { "id": 20956, "status": "pending", "unreadMessages": 1, "lastMessage": "olá, tudo bem?", "protocolo": "29924", "typebot_sessionId": null, "typebot_status": null, "customA": null, "lastFlowId": "SXG8YYNS5OWesf2oFYvLB89K2ETTeY", "repeatCount": 0, "fromAds": 24, "customB": null, "nextFlowId": null, "isGroup": false, "userId": null, "contactId": 21019, "whatsappId": 1, "queueId": 16, "chatbot": false, "isMenu": false, "variables": null, "channel": "whatsapp", "queueOptionId": null, "companyId": 1, "uuid": "872b49d0-c009-1234-b640-1c558b69d5bd", "promptId": null, "createdAt": "2025-03-25T15:41:55.115Z", "updatedAt": "2025-03-25T18:43:47.366Z", "contact": { "id": 16991, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/3653963772_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaIWagepE1pi1UEjOTUa4Mf9hyz3bicAoUUMmu068SRl93&oe=67E90699&_nc_sid=5e03e0&_nc_cat=111", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "user": null, // estará preenchido se estiver em atendimento "queue": { "id": 16, "name": "Dep. Orçamentos", "color": "#999999", "typeboturl": "", "typebotname": "", "typebotexpire": 5000, "typebotwait": 1500, "flowiseKey": "", "flowiseUrl": "", "promptId": null, "invalidMessage": "", "flowId": null, "zaiaToken": "", "zaiaAgent": null, "isTranscribe": false, "difyToken": null, "difyURL": null, "webhookQueueURL": null, "prompt": null }, "whatsapp": { "name": "Atendimento", "webhook": "https://go.dominio.com.br/webhook", "id": 27, "token": "7ydsa6dahdaksdas9", "coverImage": null, "selectedCommentQueueId": null, "whatsmeowname": null, "whatsmeowtoken": null, "whatsmeowurl": null, "hubtoken": null, "channel": "whatsapp", "status": "CONNECTED", "ignoreNumbers": "" }, "tags": [], "company": { "name": "Atendimento - Minha Empresa" } } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 4. Receber Áudio, Imagem ou Arquivo
 O recebimento de áudio, imagem ou arquivo no WhatsApp possui uma particularidade: ele gera dois webhooks seguidos. O primeiro webhook é parecido com o de “mensagem” porém na propriedade “mensagem” em vez de conter o texto, contém a seguinte informação: “mensagem”: “Áudio” (se áudio)“mensagem”: ” ” (se imagem ou vídeo)“mensagem”: “nome do arquivo” (se PDF)   Na sequência o**segundo**webhook é recebido, com o seguinte payload: { "body": { "sender": "5511999999999", "chamadoId": 20956, "acao": "fila-data", "companyId": 1, "defaultWhatsapp_x": 1, "fromMe": false, "queueId": 16, "isGroup": false, "ticketData": { ... igual de mensagem ... } "mediaFolder": "public/company1", "mediaName": "1742984582802.ogg", "backendURL": "https://backend_url.com.br", "token_origin": "7ydsa6dahdaksdas9", "msg": { ... igual de mensagem ... } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" }



---

### Webhook Eventos

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/webhook-eventos/](https://help.pacoticket.com.br/principal/webhooks/webhook-eventos/)

Imagine você ser notificado todas vez que um evento específico acontece. 🔔 Com a nossa plataforma isso é possível! Nossos**Webhooks de Eventos**notificam você sempre que:**✅ enviar**uma mensagem interna**✅ alterar**uma tag no ticket**✅ alterar**o status do usuário**✅ alterar**o status do CRM 
### Payload Enviado
 Um payload diferente é enviado conforme cada tipo de ação. Veja abaixo: 
#### 1. Envio de Mensagem Interna
 { "body": { "acao": "send-internal-message", "messageData": { "wid": "INT17480218555331gwLoQEL2QL0", "ticketId": 64, "body": "Teste de mensagem interna", "mediaType": "internal", "fromMe": true, "read": true, "ack": 4, "isForwarded": false, "messageTimestamp": 1748021855533, "importando": false } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 2. Alteração de Tags
 { "body": { "acao": "tag-sync", "tagList": [ { "tagId": 27, "ticketId": 64 }, { "tagId": 5, "ticketId": 64 } ], "tags": [ { "id": 27, "name": "Atenção", "color": "#CD0003", "TicketTag": { "ticketId": 64, "tagId": 27, "disparei": 0, "createdAt": "2025-01-22T19:14:53.901Z", "updatedAt": "2025-01-22T19:14:53.901Z" } }, { "id": 5, "name": "Follow Up", "color": "#A4CCCC", "kanban": 1, "prioridade": 2, "automation": 0, "flowsId": null, "conversao": null, "tagType": "Atendimento", "companyId": 1, "createdAt": "2024-08-20T20:55:38.045Z", "updatedAt": "2024-09-20T09:24:34.988Z" } ], "ticket": { "id": 64, "status": "open", "unreadMessages": 0, "lastMessage": "Olá", "protocolo": "29092", "typebot_sessionId": null, "typebot_status": null, "customA": null, "lastFlowId": null, "repeatCount": 0, "fromAds": 24, "customB": null, "nextFlowId": null, "isGroup": false, "userId": 1, "contactId": 128, "whatsappId": 1, "queueId": 16, "chatbot": false, "isMenu": false, "variables": null, "channel": "whatsapp", "queueOptionId": null, "companyId": 1, "uuid": "705fb38e-f524-4áá98c-a7af-e14c021cafeb", "promptId": null, "createdAt": "2024-08-21T20:53:04.945Z", "updatedAt": "2025-05-23T17:37:35.558Z", "contact": { "id": 128, "name": "José Cliente", "number": "5511999999999", "email": "", "profilePicUrl": "https://pps.whatsapp.net/v/t61.24694-24/312265127_1983643049442739_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa1gGJ4YYfqWviyq19L2I2wSohVwm6QCNQ&oe=683DA3F8&_nc_sid=5e03e0&_nc_cat=108", "acceptAudioMessage": true, "active": true, "disableBot": false, "extraInfo": [] }, "user": { "id": 1, "name": "João Atendimento" }, "whatsapp": { "name": "Atendimento", "webhook": "https://go.dominio.com.br/webhook", "id": 1, "token": "7ydsa6dahdaksdas9", "status": "CONNECTED" }, "tags": [ { "id": 27, "name": "Atenção", "color": "#CD0003", "TicketTag": { "ticketId": 64, "tagId": 27, "disparei": 0, "createdAt": "2025-05-23T17:43:32.964Z", "updatedAt": "2025-05-23T17:43:32.964Z" } }, { "id": 5, "name": "Follow Up", "color": "#A4CCCC", "TicketTag": { "ticketId": 64, "tagId": 5, "disparei": 0, "createdAt": "2025-05-23T17:43:32.964Z", "updatedAt": "2025-05-23T17:43:32.964Z" } } ], "queue": { "id": 16, "name": "Dep. Orçamentos", "color": "#999999" }, "company": { "id": 1, "name": "AGrafica" } }, "addedTags": [ { "id": 5, "name": "Follow Up", "color": "#A4CCCC", "kanban": 1, "prioridade": 2, "automation": 0, "flowsId": null, "conversao": null, "tagType": "Atendimento", "companyId": 1, "createdAt": "2024-08-20T20:55:38.045Z", "updatedAt": "2024-09-20T09:24:34.988Z" } ], "removedTags": [], "backendURL": "https://backend_url.com.br" }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 3. Alteração do Status do Usuário
 { "body": { "acao": "user-status-offline", "user": { "id": 1, "name": "João Atendimento", "email": "joao.atendente.1234@gmail.com", "passwordHash": "$2a$08Pa.8WwrUZUnWfbJjwh/KkmzErZ3msNzsAS", "tokenVersion": 0, "profile": "admin", "whatsappId": 1, "super": false, "online": false, "farewellMessage": "", "rdId": null, "color": "343784", "cvId": null, "cvImob": null, "perfexId": null, "ausencia": null, "carteiraQueueId": null, "number": "5511987654321", "startWork": "00:00", "endWork": "23:59", "limited": true, "restricted": false, "away": false, "sigame": false, "randomupdatedAt": null, "callstatus": "0", "companyId": 1, "createdAt": "2024-08-20T12:22:40.024Z", "updatedAt": "2025-05-23T17:50:00.140Z" } }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" } 
#### 4. Alteração do CRM
 { "body": { "acao": "create", "oportunidade": { "id": 134, "name": "Oportunidade 23116", "companyId": 1, "contactId": 23240, "ticketId": 23116, "message": "Lead está bem aquecido, lembrar amanhã", "etapadofunil": "Proposta", "produto": "Camisa de Futebol", "valor": "350", "free1": "Time São Paulo", "free2": "Oficial", "free3": "Número 9", "free4": "Camisa Principal", "userId": 1, "updatedAt": "2025-05-23T21:42:16.165Z", "createdAt": "2025-05-23T21:42:16.165Z", "funil": null, "fonte": null, "campanha": null, "datadeida": null, "datadevolta": null, "origem": null, "destino": null }, "backendURL": "https://backend_url.com.br" }, "webhookUrl": "https://go.dominio.com.br/webhook", "executionMode": "production" }



---

### Webhook Triggers

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/webhook-triggers/](https://help.pacoticket.com.br/principal/webhooks/webhook-triggers/)

Com o nosso**Webhook Triggers**, você pode configurar um webhook de um**sistema externo**para notificar o**nosso sistema**quando ocorrer um evento e, assim, iniciar um fluxo no nosso Flowbuilder. 
#####  Tudo em 3 passos**algo acontece em um sistema externo:**recebimento de um pagamento, entrada de um lead, etc.**sistema externo notifica o nosso sistema:**via webhook deles, apontando para um dos nossos endpoints do Webhook Triggers.**inicia um fluxo no Flowbuilder:**conforme configurado nesse endpoint do Webhook Trigger 
### Como configurar o Endpoint (URL) em nosso sistema
 Acesse, em nosso sistema, o menu Webhook | Triggers + Novo Webhook | Triggers e no campo Webhook adicione a URL copiada. 
#####  Agora acesse o ícone de “ferramenta” desse Webhook Trigger para configurá-lo. 
### Copie a URL do seu endpoint
 E coloque-a na URL do Webhook do sistema externo. 
###  Para enviar via POST dados em formato JSON, sendo obrigatório o envio de “nome”, “celular” e “email”. Envie campos extras se precisar. 
###  Faça o webhook externo disparar uma notificação em seu endpoint do Webhook Trigger, e então clique no botão “**Atualizar Dados**“. O payload enviado pelo wehook externo vai aparecer no campo de última requisição que este webhook recebeu.  Agora você consegue … 
###  Em cada campo defina o valor das variáveis. Elas serão acessadas no fluxo utilizando**%celular%**,**%nome%**,**%email%**,**%extra1%**… 
###  Por fim defina qual**fluxo**do webhook iniciará quando o webhook trigger receber o sinal. (lembre-se, você deve selecionar a**fila**que tem o**fluxo vinculado**) E escolha qual**conexão**será remetente nesse fluxo. 
##### 📌 Salvar Webhook.
 
###  Utilize**%celular%**,**%nome%**,**%email%**,**%extra1%,**etc …



---

### Arquivos no Webhook

> 🔗 [https://help.pacoticket.com.br/principal/webhooks/arquivos-no-webhook/](https://help.pacoticket.com.br/principal/webhooks/arquivos-no-webhook/)

O recebimento de áudio, imagem ou arquivo no WhatsApp possui uma particularidade: ele gera dois webhooks seguidos. É o**segundo**webhook recebido que contém as informações sobre o arquivo, para seguir os passos abaixo: 
### Como resgatar o arquivo na biblioteca Oficial
 Através do método GET sendo a url o campo  body.mensagem.mediaUrl 
###  É necessário converter o arquivo de áudio recebido em formato base64 para um arquivo real, localizado em  body.mensagem[0].mediaData[0].buffer Sugestão para nome do arquivo o código: {{$json.body.mensagem[0].mediaData[0].originalname.replace("oga", "ogg")}} MIME TYPE: {{$json.body.mensagem[0].mediaData[0].mimetype}} 
###  Através do método GET a url do arquivo é formada utilizando o body.backendURL/body.mediaFolder/body.mediaName




---


## APIs

> 🔗 [https://help.pacoticket.com.br/principal/apis/](https://help.pacoticket.com.br/principal/apis/)

###  Comunicação Fácil entre Sistemas  
#### Interface de Programação de Aplicações**API**é uma forma de facilitar a comunicação entre diferentes sistemas, permitindo que eles compartilhem informações de forma rápida e eficiente. ✅ Nossa plataforma oferece diversas APIs que permitem integração com outras aplicações, possibilitando o envio de mensagens, início de fluxos, atualização de tags, consulta de status, gerenciamento de leads e muito mais.



---

### * Pré-Requisitos APIs

> 🔗 [https://help.pacoticket.com.br/principal/apis/pre-requisitos-apis/](https://help.pacoticket.com.br/principal/apis/pre-requisitos-apis/)

#####  Pré-requisitos Biblioteca de API da Básica
 Definir um**Token**na Conexão (tutorial aqui)Setar**Básica**em Configurações Empresa Api Não Oficial *Ativar**Api Externa**em Configurações Planos ****Os passos 2 e 3 devem ser realizados pela nossa equipe do Pacoticket.**Entre em contato com nosso Suporte. 
#####  Pré-requisitos Biblioteca de API da Pro
 Definir um**Token**na Conexão (tutorial aqui)Setar**Pro**em Configurações Empresa Api Não Oficial *Ativar**Api Externa**em Configurações Planos ****Os passos 2 e 3 devem ser realizados pela nossa equipe [pt_dado] [minha_empresa] .**Entre em contato com nosso Suporte. 
#####  Pré-requisitos Biblioteca de API Oficial da Meta
 Definir um**Token**na Conexão (tutorial aqui)Ter um número de API Oficial instalado na Meta



---

### * Conteúdos sobre APIs

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/)


---

#### Mapa de API

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/mapa-de-api/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/mapa-de-api/)

##### Mensagens
 Simular: Digitando… | Digitando Pro | Gravando… | Gravando Pro Criar Mensagem: Texto | Interna | Grupos | Lista | Flowbuilder | Typebot | Agendada | Contato |  Imagem | Áudio | Vídeo | PDF | Arquivo Obter Mensagem Única: Não Obter Mensagens: Por Protocolo | Por período: Não Atualizar Mensagem: Não Deletar Mensagem Única: Não | Agendada Deletar todas Mensagens: Não 
##### Tickets
 Criar Tickets Obter Ticket Único Obter Tickets de um Contato Atualizar Ticket | Atualizar Tags Deletar Ticket Único: Não | Encerrar Ticket Deletar todos Tickets: Não Transferir Tickets para uma Fila Transferir Tickets entre Conexões 
##### Contatos
 Criar Contato | Criar Contato com Validação Obter um Contato | Validar Contato Obter todos Contatos | Obter Contatos Por tag Atualizar Contato Deletar Contato Único: Não Deletar Todos Contatos 
##### Equipe
 Transferir Tickets entre Conexões 
##### Conexões
 Status das Conexões Reiniciar Conexões 
##### Extras
 Horário de Expediente de uma Fila Ligações (Somente Chamar)   OFICIAL Envio de Mensagem | Template Sem Variável | Template Com Variável | Template Customizado WHATSMEOW Mensagem | Imagem Base64 | Imagem Base64 
# Payloads de Resposta
 
##### CONTATO**Id do Contato (lead)**Mensagem de Texto (ticket.contact.id)**Nome do Contato (lead)**Mensagem de Texto (ticket.contact.name)**WhatsApp do Contato (lead)**Mensagem de Texto (ticket.contact.number)**Email do Contato (lead)**Mensagem de Texto (ticket.contact.email) 
##### TICKET**Id do Ticket**Mensagem de Texto (ticket.id)**Status do Ticket**Mensagem de Texto (ticket.status)**Protocolo do Ticket**Mensagem de Texto (ticket.protocolo)**Última Mensagem do Ticket**Mensagem de Texto (ticket.lastMessage)**Id do Atendente do Ticket**Mensagem de Texto (ticket.user.id)**Nome do Atendente do Ticket**Mensagem de Texto (ticket.user.name)**WhatsApp do Atendente do Ticket**Mensagem de Texto (ticket.user.number) 
##### TAG**Id do Tag**Mensagem de Texto (ticket.tags.id)**Nome da Tag**Mensagem de Texto (ticket.tags.name) 
##### FILA**Id da Fila**Mensagem de Texto (ticket.queue.id)**Nome da Fila**Mensagem de Texto (ticket.queue.name) 
##### CONEXÃO**Id da Conexão**Mensagem de Texto (ticket.whatsapp.id) Status das Conexões (id)**Nome da Conexão**Mensagem de Texto (ticket.whatsapp.name) Status das Conexões (name)**Status da Conexão**Mensagem de Texto (ticket.whatsapp.status) Status das Conexões (status)**Token da Conexão**Mensagem de Texto (ticket.whatsapp.token) Status das Conexões (token)**Url Webhook da Conexão**Mensagem de Texto (ticket.whatsapp.webhook) Status das Conexões (webhook)**Número WhatsApp da Conexão**Status das Conexões (number)**Canal da Conexão**Mensagem de Texto (ticket.whatsapp.channel) Status das Conexões (channel)**Filas da Conexão**Status das Conexões (queues [array]) 
##### EMPRESA**Id da Empresa**Mensagem de Texto (ticket.companyId) Status das Conexões (company.id)**Nome da Empresa**Mensagem de Texto (ticket.company.name) Status das Conexões (company.name)



---

#### API x Webhook

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/api-x-webhook/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/api-x-webhook/)

**API**e**Webhook**são frequentemente comparados, pois ambos são usados para**comunicação entre sistemas**, mas funcionam de maneiras diferentes. ✅**API**é utilizada para fazer uma requisição a outro sistema**de forma ativa**, enviando uma solicitação para um**endpoint (URL)**e recebendo uma resposta no momento da requisição. ✅**Webhook**é utilizado para**notificar outro sistema automaticamente**(via um**endpoint/URL**)**quando um evento acontece**, sem necessidade de uma requisição prévia. 
##**API (Application Programming Interface)**🔑 É um conjunto de regras e definições que permite que**um sistema se comunique com outro**em um momento específico. Funciona por meio de**requisições e respostas**(geralmente via HTTP).O cliente (aplicação que deseja informações) precisa**chamar**a API para**obter dados ou executar**uma ação. 
#####  📌 Analogia**API**é como um restaurante. Você (cliente) pede um prato (requisição) ao garçom e ele traz a comida (resposta). 
##### Exemplos práticos de API
 Um sistema externo chamar a nossa API para enviar uma mensagem de texto. Um sistema externo consultar nossa API Status da Conexão para verificar o status dentro de nosso sistema. Um sistema externo consultar nossa API de mensagens de um protocolo para fazer um resumo do atendimento. 
##**Webhook**🔑 É um**mecanismo de notificações automáticas**enviadas de um sistema para outro quando um evento acontece. Funciona  via**requisições HTTP POST**para um endpoint previamente configurado.Em vez de o cliente ficar chamando uma API para verificar se há novidades (**polling**), o webhook envia a informação assim que ela estiver disponível. 
#####  📌 Analogia**Webhook**é como uma entrega de pizza. Você faz o pedido e apenas aguarda. Quando a pizza estiver pronta, o entregador vai até sua casa sem você precisar ficar ligando (**polling**) para perguntar. 
##### Exemplos práticos de Webhook
 Toda vez que um mensagem é enviada ou recebida, nosso Webhook dispara um aviso para uma URL externa definida no Menu Conexões. O Asaas notificar nosso endpoint/url do webhook-trigger quando receber um pagamento, iniciando assim um fluxo do flowbuilder. Uma plataforma de cursos notificar nosso endpoint/url do webhook-trigger quando o usuário completar uma aula ou módulo. 
###**Principais Diferenças**CaracterísticaAPIWebhook**Definição**É usada para**buscar ou enviar dados**de forma ativa para outro sistema.É usada para**receber dados automaticamente**quando um evento ocorre.**Quem inicia?**O cliente precisa chamarO servidor envia automaticamente**Como?**O sistema A faz uma requisição para o sistema B e aguarda a resposta.O sistema B**notifica automaticamente**o sistema A quando algo acontece.**Quando?**Quando o sistema A solicita (ativa).Assim que um evento ocorre (passiva).**Exemplo**Buscar preço do Bitcoin em uma APIReceber uma notificação quando o preço do Bitcoin mudar**Analogia**Você liga para uma pizzaria e pede uma pizza.A pizzaria te liga quando a pizza sai para entrega.



---

#### Estrutura de API

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/estrutura-de-api/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/estrutura-de-api/)

Em termos simples, uma**API**é como uma**ponte**entre dois sistemas diferentes. Ela permite que um sistema (como um aplicativo ou site) se comunique com outro sistema (a nossa plataforma por exemplo), trocando informações de forma rápida e eficiente. 
##  Para utilizar uma API (fazer uma requisição) é preciso conhecer sua estrutura básica.**✅ Endpoint****✅ Método HTTP****✅ Autenticação****✅ Payloads**{ url: 'https://{{backendURL}}/api/messages/send', method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer {{connection_token}}' }, data : { "number": "{{number}}", "openTicket": "0", "queueId": "0", "body": "{mensagem}" } }; 
### 1. Endpoint
 O**endpoint**é a URL (endereço) que você usa para acessar a API. Ou seja, toda API (assim como um site) está localizada em um endereço (url). O**endpoint**é o nome dado a esse endereço. 
##### 📌**Cada funcionalidade da API terá seu próprio endpoint**.
 Por exemplo, se você quiser**enviar uma mensagem**em nosso sistema, deve acessar o endpoint: https://{BACKEND_URL}/api/messages/send E se você deseja**monitorar o status de suas conexão**, vai realizar uma chamada para o endpoint: https://{BACKEND_URL}/api/whatsapp-status Esse endpoint seria o local em que a API vai “ouvir” as requisições. Quando você enviar informações (dados) para a API através de uma solicitação, ela vai receber e processar esses dados para realizar a ação desejada. 
### 2. Métodos HTTP
 Os**métodos HTTP**são os comandos que você usa para interagir com a API. Os mais comuns são:**GET**: Usado para buscar ou obter dados.**POST**: Usado para enviar ou criar novos dados.**PUT**: Usado para atualizar dados existentes.**DELETE**: Usado para excluir dados.
#####  

##### 📌 Mas não se preocupe!
 O programador da API é quem define qual método utilizar em cada caso. Portanto, para fazer uma requisição de uma API, se preocupe apenas em seguir o método recomendado pela documentação. Se o método indicado for POST, use POST. Se for GET, use GET,  e assim por diante.  Simples assim! 
### 3. Autenticação
 A**autenticação**é utilizada para garantir segurança à API. Nem toda API requer autenticação, mas a que exige pode ser por diferentes razões: Garantir que apenas usuários autorizados possam acessar determinadas funcionalidadesIdentificar quem está realizando a requisição, para fornecer a resposta adequada.
##### 📌 Em nossas APIs, solicitamos o envio do**TOKEN**da conexão.
 Esse TOKEN nos permite validar sua autorização para utilizar a API e também nos informa qual conexão você deseja usar ao acessar o endpoint. Por exemplo, ao utilizar a API de envio de mensagens, o**Token**informado será utilizado para identificar a conexão correspondente, que será a responsável pelo envio da mensagem. 
### 4. Payloads
 Os**payloads**são os dados enviados e recebidos durante a comunicação entre os sistemas via API.” 
####**☑️ Request Payload (Payload de Requisição)**São os dados enviados para a API. Algumas APIs exigem que dados específicos sejam enviados para garantir que a requisição funcione corretamente. Por exemplo: ao utilizar uma API para enviar uma mensagem de texto em nossa plataforma, você precisa fornecer dados (payload) dizendo qual será a mensagem 😄 Outras APIs não precisam que Porém, outras APIs não exigem envio de dados, como a API de status de conexão. Ao consultar seu endpoint, ela já sabe o que fazer e apenas retorna uma resposta (payload de resposta). 
####**☑️ Response Payload (Payload de Resposta)**São os dados retornados pela API. Através desses dados, você pode processar as informações recebidas, como confirmar o sucesso da operação, obter resultados de uma consulta ou receber dados atualizados. O payload de resposta é a chave para entender o que aconteceu após a requisição ser realizada. Os**payloads**são enviados e recebidos em formato JSON. 
#### 📌**Formato JSON****JavaScript Object Notation (JSON)**é um formato leve, de fácil leitura e escrita, usado para troca de dados entre sistemas (compatível com diferentes linguagens de programação). O JSON pode ser lido por máquinas e facilmente interpretado por humanos, devido a sua simplicidade. 
#####  

##### ESTRUTURA DO JSON**Objetos**: Representados por um par de chaves { }, os objetos no JSON podem conter pares de chave-valor, seguindo a seguinte sintaxe: { "chave": "valor" } Havendo mais propriedades desse objeto, podemos separar esses pares com vírgula, por exemplo: { "nome": "João", "idade": 30, "casado": true }**Arrays**: Representados por colchetes [ ], os arrays são listas ordenadas de valores. Eles podem conter objetos, números, strings ou outros arrays. Exemplo: { "nomes": ["João", "Maria", "José"] }**Vamos agora para um exemplo mais completo de uma estrutura JSON**{ "pessoa": { "nome": "João", "idade": 30, "casado": true, "filhos": [ { "nome": "Ana", "idade": 5 }, { "nome": "Carlos", "idade": 3 } ] } }**Objeto**: O JSON acima tem um objeto principal representado por { }, com a chave "pessoa".**Chaves e Valores**: Dentro do objeto "pessoa", temos várias chaves como "nome", "idade", e "casado", e seus respectivos valores.**Arrays**: A chave "filhos" contém um array [ ] com dois objetos representando os filhos, cada um com nome e idade.Essa estrutura simples e organizada facilita tanto a leitura humana quanto a manipulação por sistemas.



---

#### Bibliotecas

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/bibliotecas/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/bibliotecas/)

🧩   Nosso sistema permite o uso de 3 tipos de bibliotecas (libs) de API do WhatsApp.**☑️  Lib Pro**(API QR Code)**☑️  Lib Básica**(API QR Code)**☑️  Lib Meta**(API Oficial) Veja abaixo quais chamadas APIs nosso sistema possui para cada tipo de Lib: MENSAGEM Pro Básica Meta Digitando ✔️ ✔️ ❌ Gravando ✔️ ✔️ ❌ Mensagem de Texto ✔️ ✔️ ✔️ Mensagem Interna ✔️ ✔️ ✔️ Mensagem para Grupos ✔️ ✔️ ❌ Mensagem de Lista ✔️ ✔️ ❌ Mensagem via Flowbuilder ✔️ ✔️ ✔️ Typebot ✔️ ✔️ ✔️ Criar Agendamento ✔️ ✔️ ✔️ Deletar Agendamento ✔️ ✔️ ✔️ Enviar Contato ❌ ✔️ ❌ Obter uma Mensagem ❌ ❌ ❌ Obter Mensagem por Período ❌ ❌ ❌ Obter Mensagens por Protocolo ✔️ ✔️ ✔️ Atualizar Mensagem ❌ ❌ ❌ Deletar Mensagem ❌ ❌ ❌ Botões ✔️ ✔️ ❌ Mídias Pro Básica Meta Enviar Imagem, Áudio, Vídeo ou PDF por URL ✔️ ✔️ ❌ Enviar Imagem, Áudio, Vídeo ou PDF para GRUPO por URL ✔️ ❌ ❌ Enviar Áudio Base64 ✔️ ❌ ❌ Enviar Arquivo Upload ✔️ ✔️ ❌ TICKET Pro Básica Meta Criar Ticket ✔️ ✔️ ✔️ Obter um Ticket ✔️ ✔️ ✔️ Obter Tickets ✔️ ✔️ ✔️ Obter Tickets do Contato ✔️ ✔️ ✔️ Atualizar Tickets ✔️ ✔️ ✔️ Deletar Tickets ❌ ❌ ❌ Atualizar Tags ✔️ ✔️ ✔️ Encerrar Ticket ✔️ ✔️ ✔️ Encerrar Tickets em Massa ✔️ ✔️ ✔️ Encerrar Tickets por dias de Inatividade ✔️ ✔️ ✔️ Transferir Tickets para uma Fila ✔️ ✔️ ✔️ Transferir Tickets entre Conexões ✔️ ✔️ ✔️ CONTATOS Pro Básica Meta Criar Contato ✔️ ✔️ ✔️ Criar contato (com validação) ✔️ ✔️ ❌ Validar Contato ✔️ ✔️ ❌ Obter Contato por Nº ✔️ ✔️ ✔️ Obter Contato por Tag ✔️ ✔️ ✔️ Obter Contatos ✔️ ✔️ ✔️ Atualizar Contato por ID ✔️ ✔️ ✔️ Atualizar Contato por Nº ❌ ❌ ❌ Deletar um Contato ❌ ❌ ❌ Deletar TODOS os Contatos ✔️ ✔️ ✔️ CONEXÕES Pro Básica Meta Criar Conexão ✔️ ❌ ❌ Obter QR Code ✔️ ❌ ❌ Status da Conexões ✔️ ✔️ ✔️ Reiniciar Conexões ✔️ ✔️ ✔️ FILAS Pro Básica Meta Obter Filas da Empresa ✔️ ✔️ ✔️ EQUIPE Pro Básica Meta Obter Usuários da Empresa ✔️ ✔️ ✔️ Transferir Carteira de Clientes ✔️ ✔️ ✔️ TAREFAS Pro Básica Meta Criar Tarefa ✔️ ✔️ ✔️ Obter uma Tarefa ✔️ ✔️ ✔️ Obter Tarefas ✔️ ✔️ ✔️ Finalizar uma Tarefa ✔️ ✔️ ✔️ EXTRAS Pro Básica Meta Enviar Status de Texto ✔️ ❌ ❌ Enviar Status de Imagem ✔️ ❌ ❌ Enviar Status de Vídeo ✔️ ❌ ❌ Horário de Expediente ✔️ ✔️ ✔️ Ligação (somente chamar) ❌ ✔️ ❌



---

#### Retornos de API

> 🔗 [https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/retornos-de-api/](https://help.pacoticket.com.br/principal/apis/conteudos-sobre-apis/retornos-de-api/)

# Payloads de Resposta
 
##### CONTATO**Id do Contato (lead)**Mensagem de Texto (ticket.contact.id)**Nome do Contato (lead)**Mensagem de Texto (ticket.contact.name)**WhatsApp do Contato (lead)**Mensagem de Texto (ticket.contact.number)**Email do Contato (lead)**Mensagem de Texto (ticket.contact.email) 
##### TICKET**Id do Ticket**Mensagem de Texto (ticket.id)**Status do Ticket**Mensagem de Texto (ticket.status)**Protocolo do Ticket**Mensagem de Texto (ticket.protocolo)**Última Mensagem do Ticket**Mensagem de Texto (ticket.lastMessage)**Id do Atendente do Ticket**Mensagem de Texto (ticket.user.id)**Nome do Atendente do Ticket**Mensagem de Texto (ticket.user.name)**WhatsApp do Atendente do Ticket**Mensagem de Texto (ticket.user.number) 
##### TAG**Id do Tag**Mensagem de Texto (ticket.tags.id)**Nome da Tag**Mensagem de Texto (ticket.tags.name) 
##### FILA**Id da Fila**Mensagem de Texto (ticket.queue.id)**Nome da Fila**Mensagem de Texto (ticket.queue.name) 
##### CONEXÃO**Id da Conexão**Mensagem de Texto (ticket.whatsapp.id) Status das Conexões (id)**Nome da Conexão**Mensagem de Texto (ticket.whatsapp.name) Status das Conexões (name)**Status da Conexão**Mensagem de Texto (ticket.whatsapp.status) Status das Conexões (status)**Token da Conexão**Mensagem de Texto (ticket.whatsapp.token) Status das Conexões (token)**Url Webhook da Conexão**Mensagem de Texto (ticket.whatsapp.webhook) Status das Conexões (webhook)**Número WhatsApp da Conexão**Status das Conexões (number)**Canal da Conexão**Mensagem de Texto (ticket.whatsapp.channel) Status das Conexões (channel)**Filas da Conexão**Status das Conexões (queues [array]) 
##### EMPRESA**Id da Empresa**Mensagem de Texto (ticket.companyId) Status das Conexões (company.id)**Nome da Empresa**Mensagem de Texto (ticket.company.name) Status das Conexões (company.name)



---

### Mensagem

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/](https://help.pacoticket.com.br/principal/apis/mensagem/)


---

#### API Digitando&#8230;

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-digitando/](https://help.pacoticket.com.br/principal/apis/mensagem/api-digitando/)

🧩  Altera o status para**Digitando…**por um tempo definido.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/isTyping Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "tempo": 5000 } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“tempo”:**somente número (1000 corresponde a 1 segundo). Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Digitando&#8230;.

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-digitando-pro/](https://help.pacoticket.com.br/principal/apis/mensagem/api-digitando-pro/)

🧩  Altera o status para**Digitando…**até que mude para “pause” ou que envie uma mensagem.**API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendComposingPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "composing", //composing, paused "caption": "" // audio } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**composing****para ficar digitando…, e paused para parar. ➡️**“caption”: “”**para ficar digitando…, e audio para gravando… Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Gravando&#8230;

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-gravando/](https://help.pacoticket.com.br/principal/apis/mensagem/api-gravando/)

🧩  Altera o status para**Gravando…**por um tempo definido.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/isRecording Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "tempo": 5000 } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“tempo”:**somente número (1000 corresponde a 1 segundo). Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Gravando&#8230;.

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-gravando-pro/](https://help.pacoticket.com.br/principal/apis/mensagem/api-gravando-pro/)

🧩  Altera o status para**Gravando…**até que mude para “pause” ou que envie uma mensagem.**API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendComposingPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "composing", //composing, paused "caption": "audio" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**composing****para ficar digitando…, e paused para parar. ➡️**“caption”:**audiopara ficar gravando…, e**“”**para digitando… Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem de Texto

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-texto/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-texto/)

🧩  Envia uma**mensagem de texto**, com opções de abrir um ticket e atribuir a conversa à uma fila.**API:**Básica, Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/send Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "openTicket": "1", "queueId": "16", "body": "Bem vindo Lead" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️**“body”:**Mensagem. Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Mensagem

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem/)

🧩  Envia uma**mensagem de texto pela API oficial,**estando com a Janela de Atendimento ao Cliente**aberta**.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendOfficialData Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "text": "Texto API OFICIAL" } ➡️ “number”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “text”: texto da mensagem**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Mensagem Template

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-template/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-template/)

🧩 Envia uma**mensagem template pela API oficial,**estando previamente aprovada.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendMetaCustom Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "name": "vars_001", "language": "pt_BR", "openTicket": 1, "queueId": 100, "template": [ { "type": "header", "parameters": [ { "type": "text", "text": "Texto cabeçalho" } ] }, { "type": "body", "parameters": [ { "type": "text", "text": "Maria" }, { "type": "text", "text": "Festa do Peão" }, { "type": "text", "text": "15/01/2028" } ] }, { "type": "button", "sub_type": "quick_reply", "index": "0", "parameters": [ { "type": "payload", "payload": "Contato" } ] } ] } ➡️ “**number**“: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**name**“: nome do template idêntico ao aprovado na Meta. ➡️ “**language**“: idioma idêntico ao aprovado na Meta. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️ “**queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" ).   ➡️ “**template**“: –**type**: header, body ou button  (adicione os types conforme seu template aprovado na Meta) ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡**TYPE**header–**parameters**:— >**type**: dentro do header pode ser text, image, video, document ou location**💬 exemplo texto**“type”: “text”,     “text”: “Meu cabeçalho”**📸 exemplo imagem**“type”: “image”,     “image”: {          “link”: “https://…”     }**🎵 exemplo áudio**// a Meta não tem suporte a Áudio no cabeçalho**🎥 exemplo vídeo**“type”: “video”,     “video”: {          “link”: “https://…”     }**📄 exemplo documento**“type”: “document”,      “document”: {          “link”: “https://…”          “filename”: “livro.pdf”     } 📍**exemplo localização**“type”: “location”,     “location”: {          “latitude”: -22.950762,          “longitude”: -43.2135083,          “name”: “Cristo Redentor”,          “address”: “texto do endereço”     } 🚨 Adicione o parâmetro exato de seu template cadastrado na Meta, lembrando que ela só permite 1 header por template. ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡**TYPE**body–**parameters**:— >**type**: dentro do body pode ser text**💬 exemplo texto**“type”: “text”,     “text”: “O valor da sua variável aqui” 🚨 Adicione mais parâmetros de texto conforme cadastrado no seu template da META, e seguindo exatamente a ordem das variáveis. ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡**TYPE**button–**sub_type**: dentro do button pode ser quick_reply, url, copy_code ou flow –**index**: número que representa a ordem do botão. Deve começar pelo 0 (zero), próximo botão ser 1, próximo ser 2… O importante aqui é que o número deve ser exatamente a ordem que foi cadastrada no template. –**parameters**:— >**type**: dentro do button pode ser payload, text, coupon_code ou action**“type”: “payload”,      “payload”: “Texto invisível de retorno para o webhook”**“type”: “text”,      “text”: “pagina-de-vendas” // Text é a Parte dinâmica da URL: site.com/{{1}}**“type”: “coupon_code”,      “coupon_code”: “texto a ser copiado aqui”**“type”: “action”,      “action”: {          “flow_token”: “id_da_sessao”,          “flow_action_data”: {               “chave”: “valor”          }     } 🚨 Botões que não contem variável, como o botão**URL Estático**e o**Botão Ligação (Call)**não precisam ser colocados no payload. Coloque apenas os botões que possuem variáveis, e lembre-se de colocar o index dele na ordem correta conforme o template cadastrado na Meta. 🚨 Botões**Quick Reply**só podem ser usados juntos com outros quick reply. Não podem ser utilizados com URL, Copy Code ou outros.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Mensagem Template sem variável

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-template-sem-variavel/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-template-sem-variavel/)

🧩 Envia uma**mensagem template pela API oficial,**estando previamente aprovada.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendMetaCustom Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "name": "vars_001", "language": "pt_BR", "openTicket": 1, "queueId": 100, "template": [] } ➡️ “**number**“: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**name**“: nome do template. ➡️ “**language**“: idioma. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️ “**template**“: array vazio**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Template sem variável (Hub)

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-sem-variavel-hub/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-sem-variavel-hub/)

🧩  Envia uma**mensagem template SEM variável pela API oficial,**estando previamente aprovada.**API:**Oficial Hub Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendOfficial Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "name": "vars_001", "language": "pt_BR" } ➡️ “number”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “name”: nome do template. ➡️ “language”: idioma.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Template com variável (Hub)

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-com-variavel-hub/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-com-variavel-hub/)

🧩  Envia uma**mensagem template COM variável pela API oficial,**estando previamente aprovada.**API:**Oficial Hub Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendOfficial Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "name": "vars_001", "language": "pt_BR", "template": [ { "type": "text", "parameter_name": "variavel 1", "text": "valor 1" }, { "type": "text", "parameter_name": "variavel 2", "text": "Valor 2" }, { "type": "text", "parameter_name": "variavel 3", "text": "Valor 3" } ] } ➡️ “number”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “name”: nome do template. ➡️ “language”: idioma. ➡️ “template”:– type: tipo da variável– parameter_name: nome da variável definido no template (key)– text: valor da variável (value)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Template Customizado (Hub)

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-customizado-hub/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-template-customizado-hub/)

🧩  Envia uma**mensagem template customizado pela API oficial,**estando previamente aprovada.**API:**Oficial Hub Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendOfficialCustom Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "name": "vars_001", "language": "pt_BR", "template": [ { "type": "header", "parameters": [{ "type": "image", "image": { "link": "https://URL/wp-content/uploads/2024/03/front-view-woman-holding-smartphone-removebg-preview.png" } } ] }, { "type": "button", "sub_type": "quick_reply", "index": "0", "parameters": [{ "type": "payload", "payload": "Descadastrar" } ] }, { "type": "button", "sub_type": "quick_reply", "index": "1", "parameters": [{ "type": "payload", "payload": "Alterar Contato" } ] } ] } ➡️ “number”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “name”: nome do template. ➡️ “language”: idioma. ➡️ “template”:– type: tipo da variável**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem Interna

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-interna/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-interna/)

🧩  Envia uma**mensagem de comunicação interna (whisper)**, sendo visível somente dentro do sistema.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/internal/send Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": "33461", "body": "Lead precisa de retorno no pedido" } ➡️**“ticketId”:**ID do Ticket. – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api) ➡️**“body”:**Mensagem Interna. Modelos PHP Flowbuilder**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-para-grupos/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-para-grupos/)

🧩  Envia uma**mensagem de texto para um Grupo**, com opções de abrir um ticket e atribuir a conversa à uma fila.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendGroup Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "34324434543543212", //ID do grupo "openTicket": "1", "queueId": "23", "body": "Olá pessoal" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum , ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️**“body”:**Mensagem. Modelos API Flowbuilder N8N**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-para-grupos-pro/)

🧩  Envia uma**mensagem de texto para um Grupo**, com opções de abrir um ticket e atribuir a conversa à uma fila.**API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendTextGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "34324434543543212@g.us", //ID do grupo "openTicket": "1", "queueId": "23", "body": "Olá pessoal" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum . ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️**“body”:**Mensagem. Modelos API Flowbuilder N8N**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem de Lista

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-lista/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-lista/)

🧩  Envia uma**mensagem com uma Lista de opções**, para o usuário escolher uma resposta. – o Título será a resposta devolvida quando o lead escolher**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendList Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "Selecione a melhor opção:", "optionList": { "buttonLabel": "Abrir lista de opções", "options": [ { "id": "1", "title": "Título A", "description": "Descrição A" }, { "id": "2", "title": "Título B", "description": "Descrição B" } ] } } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**texto logo acima do botão. ➡️**“buttonLabel”:**texto do botão que ao clicar exibe as opções da lista. ➡️**“options”:**cada opção da lista, sendo que:– id: define o id da opção– title: título da opção– description: descrição da opção Adicione mais opções se desejar! Modelos API Flowbuilder N8N**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem de Lista

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-lista-pro/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-de-lista-pro/)

🧩  Envia uma**mensagem com uma Lista de opções**, para o usuário escolher uma resposta. – o Título será a resposta devolvida quando o lead escolher**API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendListPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "openTicket": 1, "body": { "Desc": "Selecione a melhor opção:", "ButtonText": "Abrir lista de opções", "TopText": "Escolha uma das opções", "List": [ { "RowId": "1", "title": "Título A", "desc": "Descrição A" }, { "RowId": "2", "title": "Título B", "desc": "Descrição B" }, { "RowId": "3", "title": "Título C", "desc": "Descrição C" } ] } } ➡️ “**number**”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**Desc**”: texto logo acima do botão. ➡️ “**ButtonText**”: texto do botão que ao clicar exibe as opções da lista.   ➡️ “**TopText**”: texto logo acima das opções. ➡️ “**List**”: cada opção da lista, sendo que:–**RowId**: define o id da opção–**title**: título da opção–**desc**: descrição da opção Adicione mais opções se desejar!**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Mensagem de Lista

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-de-lista/](https://help.pacoticket.com.br/principal/apis/mensagem/api-oficial-mensagem-de-lista/)

🧩  Envia uma**mensagem com uma Lista de opções**, estando com a Janela de Atendimento ao Cliente**aberta,**para o usuário escolher uma resposta. – o Título será a resposta devolvida quando o lead escolher**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendInteractive Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "type": "list", "header": { "type": "text", "text": "Texto do Header" }, "body": { "text": "Texto do Body" }, "footer": { "text": "Rodapé" }, "action": { "sections": [ { "title": "Titulo da lista A", "rows": [ { "id": 1, "title": "Linha 01 - lista A", "description": "descricao 01 - lista A" }, { "id": 2, "title": "Linha 02 - lista A", "description": "descricao 02 - lista A" } ] }, { "title": "Titulo da lista B", "rows": [ { "id": 3, "title": "Linha 03 - lista B", "description": "descricao 03 - lista B" }, { "id": 4, "title": "Linha 04 - lista B", "description": "descricao 04 - lista B" } ] } ], "button": "Lista de opções" } } ➡️ “**number**”: telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**type**”: list ➡️ “**header**“:–**text**: cabeçalho opcional ➡️ “**body**“:–**text**: digite sua mensagem (máximo de 1024 caracteres) ➡️ “**footer**“:–**text**: rodapé opcional ➡️ “**action**”: –**sections**–->**title**: título da seção.–->**rows**: –->>>**id**: id da opção.–->>>**title**: título de opção.–->>>**description**: descrição da opção. Adicione mais seções e opções se desejar! ➡️ “**button**”: texto do botão que ao clicar exibe as opções da lista.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem via Flowbuilder

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-via-flowbuilder/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-via-flowbuilder/)

🧩  Inicia**um fluxo do flowbuilder,**de forma passiva, ou seja, sem interação do usuário. Nessa fase inicial, o envio é**somente**para mensagens de texto.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/flowbuilderStart Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "queueId": "3" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“queueId”:**ID da fila que está vinculada ao fluxo desejado. 
##### 📌  Atenção: ao chamar essa API, o ticket será transferido para o status**Aguardando**.
 Modelos API Flowbuilder N8N**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Mensagem via Typebot

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-via-typebot/](https://help.pacoticket.com.br/principal/apis/mensagem/api-mensagem-via-typebot/)

🧩  Inicia**um fluxo de Typebot,**de forma passiva, ou seja, sem interação do usuário. A**fila**deve estar devidamente vinculada ao fluxo desejado. Nessa fase inicial, o envio é**somente**para mensagens de texto.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/typebotStart Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "queueId": "50" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“queueId”:**ID da fila que está vinculada ao fluxo desejado. 
##### 📌  Ao final do fluxo iniciado, você pode enviar o lead para outro fluxo, que então será**interativo**pois o lead será transferido para o status**Aguardando**.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Criar Agendamento

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-criar-agendamento/](https://help.pacoticket.com.br/principal/apis/mensagem/api-criar-agendamento/)

🧩  Cria uma**mensagem agendada**, para um contato previamente cadastrado.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/schedules Método POST Autenticação Bearer {seutokenaqui} Payload { "body":"Teste de Agendamento", "sendAt":"2023-12-17T22:00:00.000Z", "contactId":"24294", "userId":"34", "openTicket":"0", "queueId":"0", "whatsappId":"2", "repetir":"0", //0 = Não Repetir, 999 = Todo Dia (repetirTodo) "repetirTodo":"0", //0 = Não Repetir, 999 = Aniversário "quantasVezes":"0" } ➡️**“body”:**texto da mensagem agendada. ➡️**“sendAt”:**data de envio no formato ANO-MES-DIA(letra T)HORA:MINUTO Ex: 2029-11-20T07:52 ➡️**“contactId”:**ID do contato. ➡️**“userId”:**ID do usuário atendente. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️**“whatsappId”:**ID da conexão remetente.   ➡️**“repetir”:**– 0 = Não Repetir – 999 = Todo dia   ➡️**“repetirTodo”:**– 0 = Não Repetir – 999 = Aniversário   ➡️**“quantasVezes”:**quantidade de vezes a mensagem será repetida**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Deletar Agendamento

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-deletar-agendamento/](https://help.pacoticket.com.br/principal/apis/mensagem/api-deletar-agendamento/)

🧩  Deleta uma**mensagem agendada via API**.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/schedules/delete Método POST Autenticação Bearer {seutokenaqui} Payload { "scheduleId":"55" } ➡️**“scheduleId”:**ID do agendamento realizado via API.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-enviar-contato/](https://help.pacoticket.com.br/principal/apis/mensagem/api-enviar-contato/)

🧩  Envia**um cartão de contato**para adicionar ou iniciar uma conversa.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendContact Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "Nome do contato", "optionList": { "phone": "5511888888888", "company": "Empresa do contato", "address": "Endereço do contato, 999" } } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**Nome do contato. ➡️**“optionList”:**dados extras sobre o contato: – phone: telefone – company: empresa – address: endereço**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Mensagens por Protocolo

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-obter-mensagens-por-protocolo/](https://help.pacoticket.com.br/principal/apis/mensagem/api-obter-mensagens-por-protocolo/)

🧩  Retorna**todas as mensagens**de um protocolo (se esse estiver encerrado / finalizado).**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/messages/6126 Método GET Autenticação Bearer {seutokenaqui} Payload { "protocol":"6126" } ➡️**“protocol”:**ID do protocolo.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Mensagens Template Meta

> 🔗 [https://help.pacoticket.com.br/principal/apis/mensagem/api-obter-mensagens-template-meta/](https://help.pacoticket.com.br/principal/apis/mensagem/api-obter-mensagens-template-meta/)

🧩 Obter**lista das Mensagens Templates cadastradas na META**.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/whatsapptemplates Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️  sem payload**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Mídias

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/](https://help.pacoticket.com.br/principal/apis/midias/)


---

#### API Enviar Imagem por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url/)

🧩  Envia uma**imagem a partir de uma URL.****API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendURLImage Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/undv5w2a81os520srvrb4tp5?v=1701958989883", "mimeType": "image/jpeg", "caption": "teste de caption" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**URL do arquivo. ➡️**“mimeType”:**image/jpeg ➡️**“caption”:**legenda.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Imagem por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url-pro/)

🧩  Envia uma**imagem a partir de uma URL.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "image", "caption": "Aqui vai minha legenda", "fileName": "algumnome.jpeg", "openTicket": "1", "queueId": "44", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/undv5w2a81os520srvrb4tp5?v=1701958989883" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**image ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )  ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Enviar Imagem por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-imagem-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-imagem-por-url/)

🧩  Envia uma**imagem a partir de uma URL,**estando com a Janela de Atendimento ao Cliente**aberta**.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/official/sendMediaByURL Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "image", "caption": "Aqui vai minha legenda", "fileName": "algumnome.jpeg", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/undv5w2a81os520srvrb4tp5?v=1701958989883" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**image ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Áudio por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url/)

🧩  Envia um**áudio a partir de uma URL.****API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendURLAudio Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/raycbyurlc6xybynm84b41mw?v=1701959327584", "mimeType": "audio/mpeg", "ptt": true } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**URL do arquivo. ➡️**“mimeType”:**audio/mpeg ➡️**“ppt”:**true**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Áudio por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url-pro/)

🧩  Envia um**áudio a partir de uma URL.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "audio", "openTicket": "1", "queueId": "44", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/raycbyurlc6xybynm84b41mw?v=1701959327584" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**audio ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )  ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Enviar Áudio por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-audio-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-audio-por-url/)

🧩  Envia um**áudio a partir de uma URL,**estando com a Janela de Atendimento ao Cliente**aberta.****API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/official/sendMediaByURL Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "audio", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/raycbyurlc6xybynm84b41mw?v=1701959327584" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**audio ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Áudio Base64

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-base64-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-base64-pro/)

🧩  Envia um**áudio a partir do formato base64.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendBase64AudioWhatsmeowPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "openTicket": "1", "queueId": "44", "body": "data:audio/ogg;base64,iVBORw0a", "ptt": true, "caption": "Aqui você pode colocar a TRANSCRIÇÃO DO ÁUDIO - Uma vez que o cliente não recebe áudio com caption, utilize para registrar o conteúdo enviado na plataforma" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“body”:**string base64    ➡️**“ppt”:**true ➡️**“caption”:**legenda.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Vídeo por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url/)

🧩  Envia um**vídeo a partir de uma URL**, com opção de legenda.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendURLVideo Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "https://video-previews.elements.envatousercontent.com/h264-video-previews/7ab0b4d4-7df3-4125-b020-cb5903a2f66f/40313112.mp4", "caption": "Teste de Caption" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**URL do arquivo. ➡️**“caption”:**legenda.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Vídeo por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url-pro/)

🧩  Envia um**vídeo a partir de uma URL.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "video", "caption": "Aqui vai minha legenda", "fileName": "algumnome.mp4", "openTicket": "1", "queueId": "44", "body": "https://video-previews.elements.envatousercontent.com/h264-video-previews/7ab0b4d4-7df3-4125-b020-cb5903a2f66f/40313112.mp4" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**video ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )  ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Enviar Vídeo por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-video-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-video-por-url/)

🧩  Envia um**vídeo a partir de uma URL,**estando com a Janela de Atendimento ao Cliente**aberta**.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/official/sendMediaByURL Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "video", "caption": "Aqui vai minha legenda", "fileName": "algumnome.mp4", "body": "https://video-previews.elements.envatousercontent.com/h264-video-previews/7ab0b4d4-7df3-4125-b020-cb5903a2f66f/40313112.mp4" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**video ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Documento por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url/)

🧩  Envia um**documento a partir de uma URL**, com opção de legenda.**API:**Básica Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/sendURLDocument Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999", "body": "https://minhaurl.com.br/meuarquivo.pdf", "fileName": "TESTE DE NOME", "mimeType": "application/pdf", "caption": "Caption" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“body”:**URL do arquivo. ➡️**“fileName”:**nome do arquivo. ➡️**“mimeType”:**application/pdf ➡️**“caption”:**legenda.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Documento por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url-pro/)

🧩  Envia um**documento a partir de uma URL.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "document", "caption": "Aqui vai minha legenda", "fileName": "algumnome.pdf", "openTicket": "1", "queueId": "44", "body": "https://livraria-camara-leg.usrfiles.com/ugd/5ca0e9_77426ca451ec4f60b14af67f925f038e.pdf" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**document ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento.  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )  ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Oficial Enviar Documento por URL

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-documento-por-url/](https://help.pacoticket.com.br/principal/apis/midias/api-oficial-enviar-documento-por-url/)

🧩  Envia um**documento a partir de uma URL,**estando com a Janela de Atendimento ao Cliente**aberta**.**API:**Oficial Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/official/sendMediaByURL Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "{{celular}}", "type": "document", "caption": "Aqui vai minha legenda", "fileName": "algumnome.pdf", "body": "https://livraria-camara-leg.usrfiles.com/ugd/5ca0e9_77426ca451ec4f60b14af67f925f038e.pdf" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️**“type”:**document ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Arquivos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-arquivos/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-arquivos/)

🧩  Envia um**arquivo a partir de um upload de uma programação**, com opção de abrir ticket e direcionar à fila.**API:**Básica, Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/send Método POST Autenticação Bearer {seutokenaqui} Payload array( 'medias'=> new CURLFILE('IMAGEM.JPEG'), 'number' => '5511999999999', 'openTicket' => '0', 'queueId' => '0', 'body' => 'Teste' ) ➡️**“medias”:**arquivo. ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números). ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket  ➡️**“queueId”:**ID da fila desejada ( Só funciona quando "openTicket": "1" )   ➡️**“body”:**legenda.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Imagem por URL para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-imagem-por-url-para-grupos-pro/)

🧩  Envia uma**imagem a partir de uma URL para um grupo específico.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "120363176602447147@g.us", "type": "image", "caption": "Aqui vai minha legenda", "fileName": "algumnome.jpeg", "openTicket": "1", "queueId": "44", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/undv5w2a81os520srvrb4tp5?v=1701958989883" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum. ➡️**“type”:**image ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Áudio por URL para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-audio-por-url-para-grupos-pro/)

🧩  Envia um**áudio a partir de uma URL para um grupo específico.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "120363176602447147@g.us", "type": "audio", "openTicket": "1", "queueId": "44", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/raycbyurlc6xybynm84b41mw?v=1701959327584" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum. ➡️**“type”:**audio ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Vídeo por URL para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-video-por-url-para-grupos-pro/)

🧩  Envia um**vídeo a partir de uma URL para um grupo específico.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "120363176602447147@g.us", "type": "video", "caption": "Aqui vai minha legenda", "fileName": "algumnome.mp4", "openTicket": "1", "queueId": "44", "body": "https://video-previews.elements.envatousercontent.com/h264-video-previews/7ab0b4d4-7df3-4125-b020-cb5903a2f66f/40313112.mp4" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum. ➡️**“type”:**video ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Documento por URL para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-documento-por-url-para-grupos-pro/)

🧩  Envia um**documento a partir de uma URL para um grupo específico.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "120363176602447147@g.us", "type": "document", "caption": "Aqui vai minha legenda", "fileName": "algumnome.pdf", "openTicket": "1", "queueId": "44", "body": "https://livraria-camara-leg.usrfiles.com/ugd/5ca0e9_77426ca451ec4f60b14af67f925f038e.pdf" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum. ➡️**“type”:**document ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Arquivos por URL para Grupos

> 🔗 [https://help.pacoticket.com.br/principal/apis/midias/api-enviar-arquivos-por-url-para-grupos-pro/](https://help.pacoticket.com.br/principal/apis/midias/api-enviar-arquivos-por-url-para-grupos-pro/)

🧩  Envia um**arquivo a partir de uma URL para um grupo específico.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendUrlFilesWhatsmeowGroupPRO Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "120363176602447147@g.us", "type": "image", //audio, video, document "caption": "Minha legenda em grupo", "fileName": "algumacoisa.jpeg", "openTicket": "1", "queueId": "44", "body": "https://s3.typebot.io/public/workspaces/clozv34id002ljx0fpagmqor4/typebots/clozv9d7f0004l50go6cgxv4u/blocks/undv5w2a81os520srvrb4tp5?v=1701958989883" } ➡️**“number”:**ID do grupo, fica no mesmo local do telefone em um ticket comum. ➡️**“type”:**image, audio, video ou document ➡️**“caption”:**legenda. ➡️**“fileName”:**nome do arquivo. ➡️ “**openTicket”:**0 Não abre ticket 1 Ticket – Atenção: para abrir ticket é obrigatório definir uma fila. – ao abrir ticket a conversa irá para aguardando mesmo que já esteja em atendimento. ➡️**“body”:**url do arquivo.**PHP**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/](https://help.pacoticket.com.br/principal/apis/ticket/)


---

#### API Criar Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-criar-ticket/](https://help.pacoticket.com.br/principal/apis/ticket/api-criar-ticket/)

🧩**Crie um ticket,**para iniciar uma conversa com um cliente.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/createTicketAPI Método POST Autenticação Bearer {seutokenaqui} Payload { "contactId": 9580 } ➡️**“contatctId”:**ID do contato cadastrado na plataforma. – se o contato não tiver um ticket nessa conexão, abre um ticket sem fila no aguardando. – se o contato já tiver um ticket nessa conexão, nada acontece.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter um Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-obter-um-ticket/](https://help.pacoticket.com.br/principal/apis/ticket/api-obter-um-ticket/)

🧩  Obter**um ticket específico.****API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/updateAPI Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": "2003" } ➡️**“ticketId”:**ID do Ticket. – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Tickets

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-obter-tickets/](https://help.pacoticket.com.br/principal/apis/ticket/api-obter-tickets/)

🧩  Obter**tickets**via filtro.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/get Método GET Autenticação Bearer {seutokenaqui} Payload { "pageNumber": 1, "status": "open", "userId": [1,4], "queueIds": [3,16], "tags": [211,216], "date": null, "updatedAt": null, "searchParam": null } ➡️**“pageNumber”:**número da página (cada página exibe uma média de 30-40 resultados). O payload de resposta "hasMore": true sinaliza a existência de mais páginas a frente da atual. ➡️**“status”:**filtra pelo Status do Ticket.Se open–> definir o(s) “userId” –> definir a(s) “queueIds”–> opcional “tags”  Se pending –> “userId” null –> definir a(s) “queueIds”–> opcional “tags” Se closed os campos não serão filtrados.–> “userId” null –> “queueIds” null –> “tags”  null ➡️**“userId”:**ID do atendente. – null se o status definido for pending ou closed – ou IDs dos user em array: [1,4] se status open ➡️**“queueIds”:**ID das Filas.– null para filtrar somente SEM FILA – ou IDs das filas em array: [3,16]filtra as filas desse ID e também SEM FILAS. ➡️**“tags”: ID das tags**– null para não filtrar por tags (ou seja, todas) – ou IDs das tags em array: [211,216] ➡️**“date”:**data de criação do ticket.  null ou no formato ANO-MES-DIA 2025-11-20 ➡️**“updatedAt”:**data de atualização do ticket.  null ou no formato ANO-MES-DIA 2027-10-16 ➡️**“searchParam”:**deixar null**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Tickets do Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-obter-tickets-do-contato/](https://help.pacoticket.com.br/principal/apis/ticket/api-obter-tickets-do-contato/)

🧩  Obter**TODOS os tickets do contato,**em todas conexões. Lembre-se: um ticket é uma conversa aberta entre um contato e uma conexão.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts/alltickets Método GET Autenticação Bearer {seutokenaqui} Payload { "number":"5511999999999" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números).  – atenção: o número precisa ter a mesma quantidade de dígito que está cadastrado na plataforma.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Protocolos de um Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-obter-protocolos-de-um-ticket/](https://help.pacoticket.com.br/principal/apis/ticket/api-obter-protocolos-de-um-ticket/)

🧩  Obter**os protocolos**de um ticket**.****API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/getproto Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": "2003" } ➡️**“ticketId”:**ID do Ticket. – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Atualizar Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-atualizar-ticket/](https://help.pacoticket.com.br/principal/apis/ticket/api-atualizar-ticket/)

🧩  Atualize**um ticket,**alterando seu status, fila, atendente ou campos personalizados.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/updateAPI Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": "1067", "status": "pending", "userId": "13", "queueId": "34", "typebot_sessionId": "CAMPO LIVRE LETRAS E NÚMEROS", "customA": "CAMPO LIVRE LETRAS E NÚMEROS", "customB": "CAMPO LIVRE LETRAS E NÚMEROS" } ➡️**“ticketId”:**ID do Ticket.  – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api) ➡️**“status”:**open, pending, closed ➡️**“userId”:**ID do atendente ou null ➡️**“queueId”:**ID da fila ou null ➡️**“typebot_sessionId”:**ID do typebot. ➡️**“customA”:**Informação Livre A. ➡️**“customB”:**Informação Livre B.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Atualizar Tags

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-atualizar-tags/](https://help.pacoticket.com.br/principal/apis/ticket/api-atualizar-tags/)

🧩  Vincule**tags à um ticket.**Tenha em mente que ao utilizar esse api, todas as tags serão apagadas e serão adicionadas as tags definidas no código.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tags/add Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": 383, "tags": [ { "id": 100 }, { "id": 98 } ] } ➡️**“ticketId”:**ID do Ticket.  – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api) ➡️**“tags.id”:**ID da Tag a ser adicionada ao ticket.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Encerrar Ticket

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-ticket/](https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-ticket/)

🧩  Encerrar**um ticket,**alterando seu status.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/updateAPI Método POST Autenticação Bearer {seutokenaqui} Payload { "ticketId": "1067", "status": "closed", "userId": null, "queueId": null } ➡️**“ticketId”:**ID do Ticket.  – o ticketId é o número que fica entre parênteses em uma conversa.Por exemplo:**João da Silva (52) | #25678**– nessa situação o ticketId é o 52– o numero 25678 seria o protocolo (não deve ser usado nessa api) ➡️**“status”:**closed ➡️**“userId”:**null ➡️**“queueId”:**null**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Encerrar Ticket em Massa

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-ticket-em-massa/](https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-ticket-em-massa/)

🧩  Encerrar**um grupo de ticket,**a partir do seus status e filas.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/closestatus Método POST Autenticação Bearer {seutokenaqui} Payload { "status": "open", "all": false, "queueId": null } ➡️**“status”:**status dos tickets a serem fechados. As opções são: open, pending, both   ➡️**“all”:**define quais conexões terão os tickets filtrados encerrados. – false: somente a conexão do token – true: todas as conexões   ➡️**“queueId”:**ID da fila a ser encerrada. Deixe null se quiser encerrar todas as filas.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Encerrar Tickets por &quot;Dias de Inatividade&quot;

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-tickets-por-dias-de-inatividade/](https://help.pacoticket.com.br/principal/apis/ticket/api-encerrar-tickets-por-dias-de-inatividade/)

🧩  Encerrar**todos os tickets sem atividade por x dias,**alterando seus status. Temos**dois endpoints:**– um para encerrar tickets da**conexão atual**, – outro para encerrar tickets de**todas conexões**da empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint A - Encerra os tickets apenas da conexão atual https://api.pacoticket.com.br/api/tickets/closeforced Endpoint B - Encerra os tickets de todas as conexões da empresa https://api.pacoticket.com.br/api/tickets/closeforcedAll Método POST Autenticação Bearer {seutokenaqui} Payload { "days":10 } ➡️**“days”:**quantidade de dias sem atividade**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Transferir Tickets para uma Fila

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-transferir-tickets-para-uma-fila/](https://help.pacoticket.com.br/principal/apis/ticket/api-transferir-tickets-para-uma-fila/)

🧩  Transferir**todos os Tickets EM ATENDIMENTO para uma fila**específica.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tickets/changequeue Método POST Autenticação Bearer {seutokenaqui} Payload { "NEW_queueId":94 } ➡️**“NEW_queueId”:**ID da fila a ser transferidos os tickets abertos.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Transferir Tickets entre Conexões

> 🔗 [https://help.pacoticket.com.br/principal/apis/ticket/api-transferir-tickets-entre-conexoes/](https://help.pacoticket.com.br/principal/apis/ticket/api-transferir-tickets-entre-conexoes/)

🧩  Transferir**todos os Tickets de uma conexão**para outra**.****API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint POST https://api.pacoticket.com.br/api/tickets/changeconnection Método POST Autenticação Bearer {seutokenaqui} Payload { "OLD_connectionId":158, "NEW_connectionId":159 } ➡️**“OLD_connectionId”:**ID da conexão que irá transferir seus tickets   ➡️**“NEW_connectionId”:**ID da conexão que recebe a transferência dos tickets**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Contatos

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/](https://help.pacoticket.com.br/principal/apis/contatos/)


---

#### API Criar Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-criar-contato/](https://help.pacoticket.com.br/principal/apis/contatos/api-criar-contato/)

🧩  Criar**um contato**em sua empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts Método POST Autenticação Bearer {seutokenaqui} Payload { "name": "José Silva", "number": "5511999999999", "email": "email@email.com", "cpfcnpj": "000.111.222-33", "genero": "masculino", "estado": "SP", "cidade": "São Paulo", "referencia": "indicado por Lucas", "aniversario": "1982-11-20T07:52", "endereco": "Av Principal 987", "carteiraId": "", "extraInfo": [ { "name": "Tamanho", "value": "1,80 m" }, { "name": "Peso", "value": "90 kg" } ] } ➡️**“dados gerais”:**os campos são auto explicativos, de formatação livre ➡️**“referencia”:**quem indicou o contato ➡️**“aniversário”:**data de nascimento no formato ANO-MES-DIA(letra T)HORA:MINUTO Ex: 1982-11-20T07:52 ➡️**“carteiraId”:**ID do atendente da carteira (caso habilitado)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Criar Contato (com validação)

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-criar-contato-com-validacao/](https://help.pacoticket.com.br/principal/apis/contatos/api-criar-contato-com-validacao/)

🧩  Criar**um contato**(com validação do número whatsapp) em sua empresa.**API:**Básica, Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contactswv Método POST Autenticação Bearer {seutokenaqui} Payload { "name": "José Silva", "number": "5511999999999", "email": "email@email.com", "cpfcnpj": "000.111.222-33", "genero": "masculino", "estado": "SP", "cidade": "São Paulo", "referencia": "indicado por Lucas", "aniversario": "1982-11-20T07:52", "endereco": "Av Principal 987", "carteiraId": "", "extraInfo": [ { "name": "Tamanho", "value": "1,80 m" }, { "name": "Peso", "value": "90 kg" } ] } ➡️**“dados gerais”:**os campos são auto explicativos, de formatação livre ➡️**“referencia”:**quem indicou o contato ➡️**“aniversário”:**data de nascimento no formato ANO-MES-DIA(letra T)HORA:MINUTO Ex: 1982-11-20T07:52 ➡️**“carteiraId”:**ID do atendente da carteira (caso habilitado)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Validar Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-validar-contato/](https://help.pacoticket.com.br/principal/apis/contatos/api-validar-contato/)

🧩  Valide**se um contato**é um número válido no whatsapp. Se for válido, o número retornado vem formatado corretamente em 8 ou 9 .  ⚠️ Atenção: a validação de contato funciona apenas se em Configurações Ignorar Validação de Contatos? estiver definido como**Não.**Além disso, em Conexões deve ter uma Conexão marcada como**Padrão.****API:**Básica, Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/isValid Método POST Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números).**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### Obter um Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/obter-um-contato/](https://help.pacoticket.com.br/principal/apis/contatos/obter-um-contato/)

🧩  Obter**informações de um contato**de sua empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts/single Método GET Autenticação Bearer {seutokenaqui} Payload { "number": "5511999999999" } ➡️**“number”:**telefone do destinatário no formato ddi ddd numero (somente números).**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Contatos

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-obter-contatos/](https://help.pacoticket.com.br/principal/apis/contatos/api-obter-contatos/)

🧩  Obter**todos os contatos**de sua empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts/all Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️**sem payload****API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter Contatos por Tag

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-obter-contatos-por-tag/](https://help.pacoticket.com.br/principal/apis/contatos/api-obter-contatos-por-tag/)

🧩  Obter**todos os contatos por tags**marcadas em seus tickets.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts/findbytag Método GET Autenticação Bearer {seutokenaqui} Payload { "tagid":"56" } ➡️**“tagid”:**ID da tagou array para mais tags ex “tagid”: [56,47]**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Atualizar Contato

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-atualizar-contato/](https://help.pacoticket.com.br/principal/apis/contatos/api-atualizar-contato/)

🧩  Atualiza**um contato**de sua empresa através do ID**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contact/update Método POST Autenticação Bearer {seutokenaqui} Payload { "id": "31", "name": "José Silva", "number": "5511999999999", "email": "email@email.com", "cpfcnpj": "000.111.222-33", "genero": "masculino", "estado": "SP", "cidade": "São Paulo", "referencia": "indicado por Lucas", "aniversario": "1982-11-20T07:52", "endereco": "Av Principal 987", "carteiraId": "", "extraInfo": [ { "name": "Tamanho", "value": "1,80 m" }, { "name": "Peso", "value": "90 kg" } ] } ➡️**“id”:**ID do contato cadastrado na plataforma ➡️**“dados gerais”:**os campos são auto explicativos, de formatação livre ➡️**“referencia”:**quem indicou o contato ➡️**“aniversário”:**data de nascimento no formato ANO-MES-DIA(letra T)HORA:MINUTO Ex: 1982-11-20T07:52 ➡️**“carteiraId”:**ID do atendente da carteira (caso habilitado)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Deletar TODOS os Contatos

> 🔗 [https://help.pacoticket.com.br/principal/apis/contatos/api-deletar-todos-os-contatos/](https://help.pacoticket.com.br/principal/apis/contatos/api-deletar-todos-os-contatos/)

🧩  Delete**TODOS os contatos**de sua empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs 
#####  Atenção!
 Repita quantas vezes forem necessárias para que todos sejam excluídos. Isto pode levar horas dependendo da quantidade de mensagens e tickets. Faça por conta e risco e de preferência fora do horário comercial Endpoint https://api.pacoticket.com.br/contacts-delete Método DELETE Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️**sem payload:**repita a chamada da API quantas vezes forem necessárias até apagar todos os contatos.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Filas

> 🔗 [https://help.pacoticket.com.br/principal/apis/filas/](https://help.pacoticket.com.br/principal/apis/filas/)


---

#### API Obter Filas da Empresa

> 🔗 [https://help.pacoticket.com.br/principal/apis/filas/api-obter-filas-da-empresa/](https://help.pacoticket.com.br/principal/apis/filas/api-obter-filas-da-empresa/)

🧩 Obter**todas as Filas de uma Empresa**.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/company/queues Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️  sem payload**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Equipe

> 🔗 [https://help.pacoticket.com.br/principal/apis/equipe/](https://help.pacoticket.com.br/principal/apis/equipe/)


---

#### API Obter Usuários da Empresa

> 🔗 [https://help.pacoticket.com.br/principal/apis/equipe/api-obter-usuarios-da-empresa/](https://help.pacoticket.com.br/principal/apis/equipe/api-obter-usuarios-da-empresa/)

🧩 Obter**todas os Usuários de uma Empresa**.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/company/users Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️  sem payload**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Transferir Carteira de Clientes

> 🔗 [https://help.pacoticket.com.br/principal/apis/equipe/api-transferir-carteira-de-clientes/](https://help.pacoticket.com.br/principal/apis/equipe/api-transferir-carteira-de-clientes/)

🧩  Transferir toda**Carteira de Clientes**de um membro da equipe para outro.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/contacts/changecarteira Método POST Autenticação Bearer {seutokenaqui} Payload { "OLD_carteiraId":39, "NEW_carteiraId":40 } ➡️**“OLD_carteiraId”:**ID do User da Equipe que irá transferir sua carteira. ➡️**“NEW_carteiraId”:**ID do User da Equipe que recebe a transferência da carteira.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Tags

> 🔗 [https://help.pacoticket.com.br/principal/apis/tags/](https://help.pacoticket.com.br/principal/apis/tags/)


---

#### API Obter Tags da Empresa

> 🔗 [https://help.pacoticket.com.br/principal/apis/tags/api-obter-tags-da-empresa/](https://help.pacoticket.com.br/principal/apis/tags/api-obter-tags-da-empresa/)

🧩 Obter**todas as Filas de uma Empresa**.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tags Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload ➡️  sem payload**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### Tarefas

> 🔗 [https://help.pacoticket.com.br/principal/apis/tarefas/](https://help.pacoticket.com.br/principal/apis/tarefas/)


---

#### API Criar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/apis/tarefas/api-criar-tarefa/](https://help.pacoticket.com.br/principal/apis/tarefas/api-criar-tarefa/)

🧩**Criar uma tarefa**dentro da empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tasks/create Método POST Autenticação Bearer {seutokenaqui} Payload { "createdBy": 1, "title": "Nova tarefa via API", "description": "Descrição da tarefa", "priority": "high", "assignedTo": 4, "dueDate": "2028-12-30T23:59:59.000Z" } ➡️ “**createdBy**“: ID do atendente criador dessa tarefa. (*)   ➡️ “**title**”: Título da Tarefa. (*) ➡️ “**description**”: Descrição da Tarefa.   ➡️ “**priority**”: high, medium, low (padrão: medium).   ➡️ “**assignedTo**”: ID do atendente a quem foi designada essa tarefa.   ➡️ “**dueDate**”: Data de vencimento(formato ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ). (*) =  obrigatório**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Obter uma Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/apis/tarefas/api-obter-uma-tarefa/](https://help.pacoticket.com.br/principal/apis/tarefas/api-obter-uma-tarefa/)


---

#### API Obter Tarefas

> 🔗 [https://help.pacoticket.com.br/principal/apis/tarefas/api-obter-tarefas/](https://help.pacoticket.com.br/principal/apis/tarefas/api-obter-tarefas/)

🧩**Criar uma tarefa**dentro da empresa.**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/tasks/list?status=&priority=medium&userId= Método GET Autenticação Bearer {seutokenaqui} Payload // sem payload, mas com query na URL ➡️  sem payload, use query params na URL (ex: ?status=pending&priority=medium)**Lista de Query:**➡️**status**: pending ,completed   ➡️**priority**: high ,medium , low   ➡️**userId**: ID do usuário (encontra o criador, o designado, e o compartilhado com)**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Finalizar Tarefa

> 🔗 [https://help.pacoticket.com.br/principal/apis/tarefas/api-finalizar-tarefa/](https://help.pacoticket.com.br/principal/apis/tarefas/api-finalizar-tarefa/)


---

### Extras

> 🔗 [https://help.pacoticket.com.br/principal/apis/extras/](https://help.pacoticket.com.br/principal/apis/extras/)


---

#### API Enviar Status de Texto

> 🔗 [https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-texto/](https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-texto/)

🧩  Enviar**status de texto.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendTextStatus Método POST Autenticação Bearer {seutokenaqui} Payload { "body": "Testando", "color": 4294967295, "backgroundcolor": 4285408638, "font": 10 } ➡️ “body”: Mensagem de texto. ➡️ “color”: Cor do texto. ➡️ “backgroundcolor”: Cor do fundo. ➡️ “font”: Tamanho da fonte.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Status de Imagem

> 🔗 [https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-imagem/](https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-imagem/)

🧩  Enviar**status de Imagem.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendImageStatus Método POST Autenticação Bearer {seutokenaqui} Payload { "body": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=", "caption": "Teste" } ➡️ “body”: Imagem em base64. ➡️ “caption”: Legenda.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Enviar Status de Vídeo

> 🔗 [https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-video/](https://help.pacoticket.com.br/principal/apis/extras/api-enviar-status-de-video/)

🧩  Enviar**status de vídeo.****API**: Pro Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/messages/whatsmeow/sendVideoStatus Método POST Autenticação Bearer {seutokenaqui} Payload { "body": "data:video/mp4;base64,Akd9300...", "caption": "Teste" } ➡️ “body”: Vídeo em base64. ➡️ “caption”: Legenda.**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

#### API Horário de Expediente

> 🔗 [https://help.pacoticket.com.br/principal/apis/extras/api-horario-de-expediente/](https://help.pacoticket.com.br/principal/apis/extras/api-horario-de-expediente/)

🧩  Verifica o**horário de expediente de uma fila.**Dentro do horário retorna "isOpen": true Fora do horário retorna "isOpen": false**API:**Todas Verifique aqui os Pré-Requisitos para utilizar APIs Endpoint https://api.pacoticket.com.br/api/queue Método POST Autenticação Bearer {seutokenaqui} Payload { "queueId": 1 } ➡️**“queueId”:**ID da fila**API**Utilize o código em requisições HTTPS com ferramentas como cURL ou bibliotecas de integração.



---

### API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/apis/api-oficial/](https://help.pacoticket.com.br/principal/apis/api-oficial/)



---


## Configurações

> 🔗 [https://help.pacoticket.com.br/principal/configuracoes/](https://help.pacoticket.com.br/principal/configuracoes/)

###  Sua sala de Comandos



---

### Armazenamento Remoto de Arquivos

> 🔗 [https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/](https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/)

🧩  Nossa plataforma mantem os**arquivos**em backup por alguns poucos dias, apagando-os para liberar espaço no**armazenamento interno.**Para que os arquivos se mantenham de modo permanente é preciso contratar um**armazenamento externo**e vincular à sua empresa. 
### Integração com Object Storage
 Nosso sistema suporta integração com os seguintes serviços externos de armazenamento de objetos:**➡️ Amazon Web Services**S3 (Simple Storage Service)**➡️ Cloudflare**R2**➡️ MinIO**➡️**Hetzner**Object Storage 
### Como integrar um armazenamento externo**✅**Escolha um provedor de armazenamento de objetos.**✅**Crie**Buckets**na plataforma escolhida. Eles atuam como containers (semelhantes a pastas) sendo essenciais para organização eficiente dos seus dados.**✅**Com os buckets criados, gere as**API Keys (chaves de acesso)**. Essas credenciais criptografadas garantem a segurança e permissão necessária para que nossa plataforma estabeleça uma conexão segura com os buckets.



---

#### Amazon S3

> 🔗 [https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/amazon-s3/](https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/amazon-s3/)


---

#### Cloudflare R2

> 🔗 [https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/cloudflare-r2/](https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/cloudflare-r2/)

Link para contratar a**Cloudflare R2:**https://www.cloudflare.com 
#####  Resumo Prático (Consulta Rápida)
 ➡️  Crie um**Bucket e seu domínio.******➡️  Gere as**Credenciais**. ➡️  Vincule o bucket e as credenciais dentro de nossa plataforma em “**Configurações**” > “**Armazenamento Remoto de Arquivos**“. 
### Criar um Bucket**Buckets**atuam como containers (semelhantes a pastas) sendo essenciais para organização eficiente dos seus dados. ⚡ Logado em sua conta da**Cloudflare**, acesse o menu Build Storage & Databases R2 Object Storage   Overview Create Bucket**para seu bucket. 
###  Clique no Bucket criado, na aba “**Settings**“, clique no botão “**+ Add**” da seção Custom Domains. Adicione (ou crie) um subdomínio para esse bucket. 
###  Agora vamos gerar as**API Keys**, que são chaves criptografadas que permitem a conexão segura da nossa plataforma com esses buckets. ⚡  Dentro do**Manage**da seção**Account Details**, clique em “**Create Account API Token**“.**do Token, e a opção “**Object Read & Write**” antes de criar seu token.**Copie a**Secret Key**Copie também sua**URL S3 API**###  ⚡ Em nossa plataforma, acesse o menu Configurações Armazenamento Remoto de Arquivos para vincular a**Empresa**a esse**Bucket**.**cole a URL do Custom Domain que você criou em seu bucket.**➡️  Minio URL / S3 Custom Api URL:**cole a URL S3 API da sua conta**➡️  Nome do Bucket:**mesmo nome definido em seu bucket**➡️  S3 Key:**cole a “Access Key” copiada na credencial gerada anteriormente em seu bucket.**➡️  S3 Secret:**cole a “Secret Key” copiada na credencial gerada anteriormente em seu bucket. 
##### 📌 Pronto!
 A partir de agora, todos arquivos recebidos em nossa plataforma serão enviados para o seu bucket após alguns minutos.**É importante confirmar se tudo está funcionando corretamente**. Acesse seu bucket e verifique se os arquivos estão sendo sincronizados (backup).



---

#### Hetzner Object Storage

> 🔗 [https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/hetzner-object-storage/](https://help.pacoticket.com.br/principal/configuracoes/armazenamento-remoto-de-arquivos/hetzner-object-storage/)

Link para contratar o**Object Storage da Hetzner:**https://www.hetzner.com/storage/object-storage/ 
#####  Resumo Prático (Consulta Rápida)
 ➡️  Crie um**Bucket**.****➡️  Gere as**Credenciais**. ➡️  Vincule o bucket e as credenciais dentro de nossa plataforma em “**Configurações**” > “**Armazenamento Remoto de Arquivos**“. 
### Criar um Bucket**Buckets**atuam como containers (semelhantes a pastas) sendo essenciais para organização eficiente dos seus dados. ⚡ Logado em sua conta da**Hetzner**, acesse o menu Object Storage Create Bucket**para seu bucket e defina a**visibilidade como Pública**. 
###**, que são chaves criptografadas que permitem a conexão segura da nossa plataforma com esses buckets. ⚡ Dentro do bucket clique em “**Manage Credentials**“**“****###  ⚡ Em nossa plataforma, acesse o menu Configurações Armazenamento Remoto de Arquivos para vincular a**Empresa**a esse**Bucket**.****: coloque o https:// na frente da url)**➡️  Nome do Bucket:**mesmo nome definido em seu bucket**➡️  S3 Key:**cole a “Access Key” copiada na credencial gerada anteriormente em seu bucket.**➡️  S3 Secret:**cole a “Secret Key” copiada na credencial gerada anteriormente em seu bucket. 
##### 📌 Pronto!
 A partir de agora, todos arquivos recebidos em nossa plataforma serão enviados para o seu bucket após alguns minutos.**É importante confirmar se tudo está funcionando corretamente**. Acesse seu bucket e verifique se os arquivos estão sendo sincronizados (backup).




---


## Integrações

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/](https://help.pacoticket.com.br/principal/integracoes/)

###  Sincronizando outros sistemas  Nossa plataforma é altamente versátil e pode ser**integrada**a diversos sistemas por meio de**credenciais**– informações utilizadas para**identificar e autenticar**usuários ou sistemas em APIs e plataformas de terceiros. Elas funcionam como uma “**chave**” que valida se o usuário ou sistema tem permissão para acessar determinados recursos. Cada sistema utiliza um tipo específico de credencial, sendo que os mais comuns o “**Token**“, “**API Token**” e “**API Key**“.



---

### Token da Conexão

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/token-da-conexao/](https://help.pacoticket.com.br/principal/integracoes/token-da-conexao/)

🔑 O**token da conexão**funciona como uma**chave exclusiva**, permitindo que você acesse e gerencie uma conexão do nosso sistema (como WhatsApp) de fora da plataforma, por meio de nossas APIs, mesmo sem estar logado no sistema. Você cadastra um**token único**por conexão.Esse token serve como sua**chave de acesso**para acionar a sua conexão via APIs.Com o token, você pode criar integrações personalizadas, como:Enviar mensagens, arquivos, imagensRealizar ações como adicionar contatos, atribuir tags, atualizar tickets, etcIntegrar com ferramentas externas (como bots, CRMs ou notificações automáticas). 
### Como adicionar um Token em uma conexão
 Acesse o menu Conexões editar campo Token Na janela aberta da Conexão, procure pelo campo Token, e digite um token qualquer para essa conexão. Pode ser como desejar, mas como sugestão, utilize algo que ajude a lembrar a conexão do token. Por exemplo: API.NOMEDACONEXAO.4f1c2ab8d12345678 
#####  Importante
 O Token deve ser único para cada conexão.**Não**utilize o mesmo token para mais de uma conexão!



---

### Token OpenAI

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/token-openai/](https://help.pacoticket.com.br/principal/integracoes/token-openai/)

🔑 O**token da OpenAI**é uma chave de acesso exclusiva que permite nosso sistema se comunicar com os serviços da OpenAI. Funciona como uma espécie de senha, permitindo o uso seguro e privado entre as plataformas. Essa integração é essencial para ativar as funcionalidades de inteligência artificial em nossa plataforma. 
### Como criar um Token da OPENAI**✅**Acesse o site da OpenAI: https://platform.openai.com**➡️**Faça um login na OpenAi (ou se cadastre antes caso não tenha um login)**➡️**Navegue até Dashboard API Keys**➡️**Clique em Create New Secrete Key para gerar um novo token**Digite um nome qualquer para sua chave e clique em Criar (Create)**Copie o token gerado e mantenha-o em um local seguro 
### Em nosso sistema, acesse o menu Integrações e configure os campos: 
#####  Token OpenAI
 Coloque seu token OpenAI 
#####  Model OpenAi
 O sistema já usa por padrão o modelo “whisper-1” para transcrição de áudio.**Deixe vazio**para manter o padrão, ou coloque o nome de outro modelo se desejar. 
#####  Idioma OpenAi**Deixe vazio**para manter o padrão. 
### Boas Práticas para Gerenciar seu Token**➡️ Não compartilhe seu token com terceiros**: Ele é único, dá acesso direto às funções na OpenAI, inclusive à parte financeira.**➡️ Regenere o token periodicamente**: Caso suspeite de vazamentos ou uso indevido, gere um novo token no painel da OpenAI e substitua no local desejado.**➡️ Verifique os limites de uso**: Tokens podem estar associados a custos, dependendo do volume de requisições feitas à API. Consulte sua conta na OpenAI para mais detalhes sobre tarifas.



---

### Access Token Meta

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/access-token-meta/](https://help.pacoticket.com.br/principal/integracoes/access-token-meta/)

🔑 O**Access Token da Meta**(Facebook) é uma**credencial de autenticação**usada para permitir que aplicações ou sistemas se comuniquem com a Meta de forma segura e autorizada. Em nosso sistema, utilizaremos o Access Token da Meta para chamar a API de Eventos da Meta (API de Conversão), com o objetivo de**registrar eventos de conversão no pixel**. 
### Como conseguir o Access Token da Meta
 1️⃣  Em seu**Gerenciador de Anúncios**da Meta, acesse o menu Gerenciador de Eventos 2️⃣  Na**Conta de Anúncio**desejada, acesse o menu  Fontes de Dados 3️⃣  Selecione o nome de um de seus**dados (pixel)**(se necessário vá antes em “+ Conectar dados”). Dica: abaixo do nome você pode pegar o número de Identificação (ID) do seu pixel. 4️⃣  Siga para a aba**Configurações**5️⃣  Em**Configurar Integração direta**, selecione a opção “Configurar com a Dataset Quality API” e gerar seu Access Token. Guarde seu token para utilizar no Pixel Meta dentro de nossa plataforma! 
###  O Pixel da Meta em nosso sistema pode ser configurado em uma Tag ou em um bloco do Flowbuilder.**➡️ Access Token:**seu token da Meta.**➡️ Pixel ID:**o ID (identificador) do seu pixel.**➡️  Nome do Evento:**deve ser digitado exatamente igual a documentação da Meta:**Leads**,**CompleteRegistration**,**AddToWishlist**,**AddToCart**,**Purchase**, por exemplo. (documentação completa em  https://developers.facebook.com/docs/meta-pixel/reference)**➡️ Custom Data:**json das propriedades do evento. Consulte a documentação para saber os campos opcionais e obrigatórios. No evento Purchase é obrigatório “currency” e “value”. Veja um exemplo: { "value": 115.00, "currency": "BRL" }**➡️ Source:**indica o local que o evento está sendo enviando.  Webiste, server, crm ou nesse caso poderia colocar o nome da nossa plataforma Pacoticket.



---

### n8n via Webhook

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/n8n-via-webhook/](https://help.pacoticket.com.br/principal/integracoes/n8n-via-webhook/)

###  A integração com o N8N via Webhook pode acontecer através da Conexão, Fila ou Webhook Eventos  🧩**Conectar o n8n ao**Pacoticket**(Via Webhook)**permite que você dispare automações complexas no n8n a partir de eventos que ocorrem em nosso sistema (ex: uma nova mensagem é recebida, um atendimento é encerrado, ou uma tag é adicionada).**Funciona assim:**ao conectar um fluxo do n8n em nossa plataforma – via**Conexão, Fila**ou**Webhook Eventos**– toda vez que nosso sistema enviar um webhook (evento) esse fluxo do n8n será**iniciado**, assim como sua automação programada. ☑️**Automação de Eventos:**enviar dados para outras ferramentas (CRM, planilhas, email marketing) no momento exato em que um evento acontece. ☑️**Inteligência Artificial:**desenvolver uma IA conversacional capaz de receber e enviar mensagens. ☑️**Integração em Tempo Real:**garantir que as informações da nossa plataforma para os seus fluxos externos, sem atrasos. 
#####  Resumo Prático
 ➡️  Crie um**Workflow**no n8n. ➡️  Nesse workflow adicione um node de**Webhook Trigger**definindo HTTP Method POST. ➡️  Copie a**URL**desse node dentro do campo “webhook” em uma**Conexão, Fila**ou**Webhook Eventos**em nossa plataforma. 
### Como integrar o n8n com nosso sistema

#### ⚡ Passo 01 – Configurar um fluxo no n8n
 Dentro do N8N, crie um Workflow e adicione o node**Webhook Trigger,**para definir uma URL que será ativado quando nossa plataforma enviar um webhook.**➡️**Utilize o HTTP Method**Post****➡️  Em Path:**defina uma URL personalizada e única.**➡️  Authentication:**opcional, mas o padrão é None. 
####  Ainda no node do**Webhook Trigger (n8n)**, clique na aba**Production URL**e em seguida no link logo abaixo para Copiar a URL. Conecte esse fluxo em uma**Conexão, Fila**ou**Webhook Eventos**dentro de nossa plataforma, colando a URL nos campos específicos. ◽ Para conectar o fluxo em uma**Conexão**, acesse Conexões editar Integrações Webhook Principal ou Secundário ◽ Para conectar o fluxo em uma**Fila**, acesse Filas & Chatbot editar URL do Webhook ◽ Para conectar o fluxo em um**Webhook Eventos**, acesse Configurações seção Webhook | Eventos escolha o evento 
#### ⚡ Passo 03 – Responder via API (opcional)
 Em seu fluxo n8n você pode opcionalmente utilizar nossas APIs para enviar comandos para nossa plataforma como responder um lead, alterar dados do ticket, contato, entre outras funcionalidades. Para isso, utilize o node**HTTP Request do n8n**, usando os “Endpoints” de nossa biblioteca de API e o “Token da Conexão” desejada.



---

### n8n via Flowbuilder

> 🔗 [https://help.pacoticket.com.br/principal/integracoes/n8n-via-flowbuilder/](https://help.pacoticket.com.br/principal/integracoes/n8n-via-flowbuilder/)

###  A integração com o N8N via Flowbuilder é feita com o bloco Http Request  🧩**Integração n8n via Flowbuilder (HTTP Request)**permite que seu chatbot “converse” com o n8n em um momento**específico**do fluxo. Enquanto o Webhook é “passivo” (escuta tudo o que acontece), a**Requisição HTTP no Flowbuilder**é “ativa” e acontece num momento específico da conversa e**aguarda uma resposta**para continuar. ☑️**Consultas em Tempo Real:**enviar um CPF ou Número de Pedido para o n8n analisar em sua programação e devolver o status direto na conversa. 
#####  Resumo Prático
 ➡️  Crie um**Workflow**no n8n. ➡️  Nesse workflow adicione um node de**Webhook Trigger**definindo HTTP Method POST. ➡️  Realize uma chamada HTTP Request a essa**URL**dentro do Flowbuilder. Se necessário aguarde a resposta do fluxo n8n e salve em um bloco de**Variável**. 
### Como integrar o n8n com nosso sistema

#### ⚡ Passo 01 – Configurar um fluxo no n8n
 Dentro do N8N, crie um Workflow e adicione o node**Webhook Trigger,**para definir uma URL que será ativado quando nossa plataforma enviar um webhook.**➡️**Utilize o HTTP Method**Post****➡️  Em Path:**defina uma URL personalizada e única.**➡️  Authentication:**opcional, mas o padrão é None. 
####  No FlowBuilder utilize o bloco HTTP Request com o seguinte código (alterando para a URL correspondente): // definir let endpoint = "https://enderecoWebhookTrigger"; let method = "POST"; let payload = { "number": "{{number}}", "contactId": "{{contact_id}}", "name": "{{name}}", "firstName": "{{firstName}}", "ticketId": "{{ticket_id}}", "protocol": "{{protocol}}", "queueId": "{{queue}}", "userName": "{{user}}", "connectionName": "{{connection}}", "companyName": "{{name_company}}", "backendURL": "{{backendURL}}", "token": "{{connection_token}}", "dataHora": "{{data_hora}}" // apague ou insira outros payloads desejados aqui }; // estrutura try { const response = await axios({ url: endpoint, method: method, headers: { 'Content-Type': 'application/json' }, data: payload, maxBodyLength: Infinity }); return JSON.stringify(response.data, null, 2); } catch (error) { return "Algo deu errado: " + error.message; } 
#### ⚡ Passo 03 – Aguardar Resposta (opcional)
 Em seu n8n você pode configurar seu workflow para enviar uma resposta ao Flowbuilder. Para isso, em seu node “**Webhook Trigger**” no campo**Respond**, escolha a opção**Using ‘Respond to Webhook’ Node**. E no final do seu fluxo, adicione o node**Respond to Webhook**configurando os dados de resposta ao Flowbuilder. Para salvar essa resposta, em seu Flowbuilder, após o bloco de HTTP Request que fez a requisição ao n8n, adicione um bloco de**Variável**.




---


## Perguntas Frequentes

> 🔗 [https://help.pacoticket.com.br/principal/perguntas-frequentes/](https://help.pacoticket.com.br/principal/perguntas-frequentes/)

###  Respostas na ponta da língua



---

### Como atualizar o cache

> 🔗 [https://help.pacoticket.com.br/principal/perguntas-frequentes/como-atualizar-o-cache/](https://help.pacoticket.com.br/principal/perguntas-frequentes/como-atualizar-o-cache/)

Ao clicar no ícone de**Perfil**, localizado no canto superior direito de nossa plataforma, é possível visualizar a versão de sistema que você está acessando. Algumas funcionalidades novas só funcionam com o sistema atualizado, e apesar de estarmos cuidando de tudo isso do lado de cá, algumas vezes o seu navegador de internet pode estar visualizando a versão antiga por causa do cache. Por isso, algumas vezes, para acessar a versão atual recomendamos algumas ações para fazer a limpeza de cache do navegador. 
### Reabra a aba do navegador**➡️**Fecha a aba ou o próprio navegador.  Abra novamente e verifique se isso já fez a versão do nosso sistema atualizar. Se ainda persistir a versão anterior, siga para o próximo passo. 
### Recarregar a Página ignorando o cache
 Para atualizar a página, realizando um recarregamento forçado (que ignora o cache e força o navegador a refazer os downloads dos arquivos), utilize os atalhos:**➡️  Chrome ou Firefox:****Ctrl + F5 (windows)**ou**Command + Shift + R (mac)****➡️  Safari:****Command + Option + E****-> depois****Command + Option + R (mac)**Verifique agora a versão do sistema. Caso continue com a versão antiga, siga para o próximo passo. 
### Limpar o cache do navegador
No chrome acesse os**3 pontinhos**no canto superior direito.Selecione “**Excluir dados de navegação…**“Marque apenas a opção “**Imagens e arquivos em cache**“. As outras opções deixe desmarcada, clique no botão**Excluir Dados**.



---

### Como Migrar Conexões

> 🔗 [https://help.pacoticket.com.br/principal/perguntas-frequentes/como-migrar-conexoes/](https://help.pacoticket.com.br/principal/perguntas-frequentes/como-migrar-conexoes/)

Em nossa plataforma os tickets são vínculos entre o**Contato**e uma**Conexão**. Dessa forma, caso seja necessário alterar a Conexão (seja por exclusão acidental ou por transferência de bibliotecas de APIs), será preciso realizar a**migração de tickets**da conexão antiga para a nova. Veja abaixo o passo a passo: 
#####  Mudança de biblioteca de API
 Caso sua intenção seja alterar a biblioteca de API utilizada na conexão peça para nosso suporte alterar no menu Configurações Empresas API Não Oficial   É necessário Reiniciar Conexões após essa alteração.   Fique atento também que a nova conexão**deve**ser criado**obrigatoriamente após**a troca de biblioteca. No menu Conexões   ➡️  Adicione a nova Conexão (mas não conecte) ➡️  Desconecte a Conexão antiga (**não**clique no ícone da lixeira) ➡️  Clique no botão “**Migrar Tickets entre Conexões**“**(a antiga, que irá transferir seus tickets) ➡️  Selecione a**Conexão de Destino**(a nova, que recebe a transferência dos tickets) ➡️  Clique em**Confirmar Migração****✅  Na nova Conexão:**defina a fila inicial e realize a leitura do QR Code.**✅**Clique no botão**“Reiniciar Conexões”**#####  Caso tenha realizado mudança de biblioteca de API
 Antes de excluir a conexão antiga confira se os tickets foram transferidos corretamente para a nova conexão.




---


## Problema / Solução

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/](https://help.pacoticket.com.br/principal/problema-solucao/)

###  Soluções para problemas conhecidos



---

### Aguardando mensagem. Essa ação pode levar alguns instantes.

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/aguardando-mensagem-essa-acao-pode-levar-alguns-instantes/](https://help.pacoticket.com.br/principal/problema-solucao/aguardando-mensagem-essa-acao-pode-levar-alguns-instantes/)

#####  PROBLEMA
 Existem alguns motivos para que uma mensagem seja substituída pelo aviso “**Aguardando mensagem. Essa ação pode levar alguns instantes.**“: Não foi possível entregar a mensagem. Você ou a outra pessoa reinstalou o WhatsApp recentemente. Você ou a outra pessoa não está usando a versão mais recente do WhatsApp. Você trocou de celular e instalou o WhatsApp em um dispositivo novo usando o mesmo número de telefone. 
#####  SOLUÇÃO
 Algumas orientações que podem ajudar estão no próprio site da Meta em https://faq.whatsapp.com/3398056720476987/?locale=pt_BR ➡️  Abra o Whatsapp no seu celular principal a cada 14 dias. ➡️  Abra o Whatsapp no seu celular e peça para que a outra pessoa acesse o WhatsApp dela ao mesmo tempo. ➡️  Aparelho conectado na plataforma muito antigo ou muito fraco… sem memória para o volume de mensagens. ➡️  Aparelho conectado desligado a mto tempo. ➡️  Um dos aparelhos (que envia ou recebe) está com o whatsapp desatualizado. ➡️  Ler o qrcode novamente.



---

### API não funciona

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/api-nao-funciona/](https://help.pacoticket.com.br/principal/problema-solucao/api-nao-funciona/)

#####  PROBLEMA
 Chamada API não funciona 
#####  SOLUÇÃO
 ➡️**API Externa**deve estar habilitada em**Planos**. ➡️  A conexão deve ter um**Token**definido. ➡️  O Token da Conexão**não**pode ser igual ao token de outra conexão. ➡️  Teste uma chamada simples como a API**Status da Conexão**, para validar se obtém um retorno. ➡️  Confira o**Endpoint**e o**Método**(GET, POST, PUT, DELETE) ➡️  Confira o**Payload**, em especial string (com aspas) e number (sem aspas), conforme a documentação.



---

### Conexão desconectada

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/conexao-desconectada/](https://help.pacoticket.com.br/principal/problema-solucao/conexao-desconectada/)

#####  PROBLEMA
 Se sua conexão desconectar os tickets (conversas) ficarão com fundo vermelho em seu chat. 
#####  Sua conexão com o sistema caiu. Existem alguns motivos para isso acontecer, mas o principal é deixar o celular mais de 14 dias sem abrir o WhatsApp: a própria Meta desconecta por questões de segurança. 
### Como reconectar uma Conexão
 Acesse o menu Conexões 🔘 Na Conexão desejada clique no botão “**Excluir Sessão**” (muito cuidado:**NÃO clicar no botão ícone de Lixeira**). 🔘 No canto superior direito, clique nos 3 pontinhos e depois em Reiniciar Conexões. 🔘 Na conexão desejada clique no botão Ver QR Code e realize a leitura pelo WhatsApp do celular. 📱 (Opcional): algumas vezes é recomendável excluir a conexão do celular no aplicativo do WhatsApp Business antes de realizar os procedimentos acima.



---

### Conexão não lê o QR CODE

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/conexao-nao-le-o-qr-code/](https://help.pacoticket.com.br/principal/problema-solucao/conexao-nao-le-o-qr-code/)

#####  PROBLEMA
 Conexão não consegue ler o QR CODE 
#####  SOLUÇÃO
 Aqui estão algumas sugestões do que se deve fazer quando QR code não estiver dando leitura. Após cada solução tente ler novamente antes de ir para a próxima. ➡️  Seu app deve ser o WhatsApp Business. ➡️  Verifique se o aplicativo do Whatsapp Business do celular está atualizado. ➡️  Reiniciar as conexões da empresa. ➡️  Excluir Sessão da Conexão, e ativar novamente. ➡️  Entrar em Contato com o Suporte. ➡️  Aguardar 24h.



---

### Mensagem não aparece no Aguardando

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/mensagem-nao-aparece-no-aguardando/](https://help.pacoticket.com.br/principal/problema-solucao/mensagem-nao-aparece-no-aguardando/)

#####  PROBLEMA
 Mensagem chega no celular, mas não está aparecendo no**Aguardando**na plataforma. 
#####  SOLUÇÃO
 ➡️  Se o ticket estiver “**Sem Fila**”, somente Administradores e Supervisores terão acesso. Usuários comuns não. Adicione uma fila inicial no menu Conexões, e depois confirme se o atendente tem acesso a essa fila. ➡️  Se for diferente de “**Sem Fila**”, confirme se o atendente tem permissão para visualizar essa fila, através do menu Equipe.



---

### Ticket em Atendimento voltando para o Aguardando

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/ticket-em-atendimento-voltando-para-o-aguardando/](https://help.pacoticket.com.br/principal/problema-solucao/ticket-em-atendimento-voltando-para-o-aguardando/)

#####  PROBLEMA
 Ticket em**Atendimento**voltando para**Aguardando**de forma automática. 
#####  SOLUÇÃO
 Verificar automações ou funcionalidades rodando em paralelo que tenha o comportamento de voltar o ticket ao aguardando: ➡️ Flowbuilder ➡️ Campanhas ➡️ Agendamento ➡️ Tempo de expiração do typebot ➡️ Inatividade em Conexões ➡️ API



---

### Missing Body in Payload

> 🔗 [https://help.pacoticket.com.br/principal/problema-solucao/missing-body-in-payload/](https://help.pacoticket.com.br/principal/problema-solucao/missing-body-in-payload/)

#####  PROBLEMA
 Recado em vermelho com texto: Missing Body in Payload 
#####  SOLUÇÃO
 O sistema está tentando enviar alguma mensagem automática, porém essa mensagem está com o campo vazio, ou seja, sem texto definido. A**solução**é desativar o contexto / condição da automação de envio de mensagem, ou então preencher a mensagem com um texto. Segue uma lista de condições e campos de mensagens que você deve observar: ➡️  Em Configurações**Mensagem de Saudação do Operador**marcada como Sim, e**Texto de Saudação**vazio.




---


## Aplicativo

> 🔗 [https://help.pacoticket.com.br/principal/aplicativo/](https://help.pacoticket.com.br/principal/aplicativo/)

###  Nossa Plataforma na palma de sua mão  PWA (Progressive Web App) é um tipo de aplicação web projetada para fornecer uma experiência de usuário semelhante a um aplicativo nativo, mas sem a necessidade de ser baixada ou instalada a partir de uma loja de apps.  Com nosso PWA:**✅**Você pode**acessar**nossa plataforma diretamente pelo seu celular, com a mesma experiência de um aplicativo.**✅**Você pode “instalar” no seu dispositivo como se fosse um aplicativo nativo, criando um ícone na tela inicial.



---

### Como Instalar o PWA

> 🔗 [https://help.pacoticket.com.br/principal/aplicativo/como-instalar-o-pwa/](https://help.pacoticket.com.br/principal/aplicativo/como-instalar-o-pwa/)

Veja como instalar o PWA e um ícone em sua tela inicial: 
### Instalar PWA pelo Chrome
 Acesse nossa plataforma pelo Chrome do seu celular. Ao lado direito da url, clique no ícone “Compartilhar” (é um retângulo com uma seta dentro apontando para cima) Na nova janela, selecione a opção “**Adicionar à Tela de Início**“ 
###  Acesse nossa plataforma pelo Safari do seu celular. Embaixo da url, clique no ícone “Compartilhar” (é um retângulo com uma seta dentro apontando para cima) Na nova janela, selecione a opção “**Adicionar à Tela de Início**“



---

### Notificações Push

> 🔗 [https://help.pacoticket.com.br/principal/aplicativo/notificacoes-push/](https://help.pacoticket.com.br/principal/aplicativo/notificacoes-push/)

**Notificações Push**são mensagens que aparecem no seu celular ou computador, mesmo quando você não está usando o aplicativo ou site naquele momento.   
### Como ativar as Notificações Push no PWA
 Com nosso PWA aberto, toque no ícone do “sino” vermelho que fica piscando no canto superior direito, e então em “Permitir“.  O “sino” ficará verde, indicando que as notificações estão ativadas. Agora você será avisado por notificações push quando**receber**uma mensagem.




---


## META

> 🔗 [https://help.pacoticket.com.br/principal/meta/](https://help.pacoticket.com.br/principal/meta/)

###  Você precisa saber sobre ela**🧩 A Meta**é a empresa “mãe” que controla as maiores redes sociais do mundo:**Facebook, Instagram e WhatsApp**. Antigamente chamada de Facebook Inc., a empresa mudou de nome para refletir que é um ecossistema completo. Para você, usuário da nossa plataforma, saber quem é a Meta é vital porque**ela é quem define as regras do jogo**. ☑️**Entendimento:**Compreender por que certas regras existem. ☑️**Conformidade:**Saber que seguir as políticas da Meta é o que ajuda a evitar o bloqueio do seu número. ☑️**Hierarquia:**Entender que nossa plataforma é a ferramenta que gerencia o atendimento, mas a infraestrutura de envio pertence à Meta. Ao utilizar o WhatsAPp, você entra em um “contrato” direto com a Meta. Isso traz benefícios e deveres:**⚡ As Políticas Comerciais (O que pode e não pode)**A Meta é rígida para proteger os usuários finais de spam e golpes. Ela proíbe, por exemplo, a venda de certos itens (armas, drogas, jogos de azar).**⚡ O Gerenciador de Negócios (BM)**Para usar as ferramentas profissionais da Meta, sua empresa precisa ter uma “sede virtual”. Esse lugar chama-se**Portfólio Empresarial**(ou Business Manager/BM).



---

### Portfólio Empresarial (BM)

> 🔗 [https://help.pacoticket.com.br/principal/meta/portfolio-empresarial-bm/](https://help.pacoticket.com.br/principal/meta/portfolio-empresarial-bm/)

🧩**A Verificação da Empresa**no Portfólio Empresarial (antiga BM) é o processo onde você prova para o Facebook que seu negócio é real, enviando CNPJ e comprovantes. Muitos clientes perguntam: “É obrigatório?” A resposta é: Para começar, não. Para crescer,**sim**.**☑️ Aumentar o Limite de Disparos (Fim da Trava de 250)****Sem Verificação:**O Facebook limita você a iniciar conversas com no máximo**250 clientes únicos**a cada 24 horas. O Problema: Se você tiver uma lista de 500 clientes para mandar uma oferta de Black Friday, você levará 2 dias para entregar tudo.**Com Verificação:**O Facebook entende que você é confiável. O limite salta automaticamente para**1.000**, depois**10.000**e pode chegar a**Ilimitado**.**☑️ O Nome da Empresa no Chat (Autoridade)**Você já recebeu mensagem de um número desconhecido e ficou com medo de abrir? Seu cliente também fica.**Sem Verificação:**O cliente vê apenas o seu telefone (+55 11 99999-9999) no topo da conversa e na lista de chats.**Com Verificação:**O WhatsApp passa a exibir o**Nome da Sua Empresa**em destaque no cabeçalho. O Resultado: Aumenta a confiança, a taxa de abertura das mensagens e profissionaliza o atendimento.**☑️ Diminui chance de Bloqueios**O sistema do WhatsApp está sempre caçando spammers e golpistas. Uma empresa verificada (que provou ter CNPJ e endereço físico) possui um “Score de Confiança” muito maior, oque faz diminuir as chances de bloqueios. (mas lembre-se: você**nunca**está livre do risco de ser bloqueado)**Escala:**Romper o limite inicial de 250 mensagens por dia e disparar para milhares de clientes. 
#####  Resumo Prático
 ➡️ Acesse o portal**Meta Business Suite**para criar um Portfólio Empresarial. ➡️ Acesse o portal**Meta for Developers**para criar um novo**Aplicativo de Negócios**com**WhatsApp**e**vincular**à sua BM**.**➡️ Solicite a**Verificação de sua BM**no portal Meta Business Suite. 
### ⚠️**Pré-requisitos Obrigatórios**Antes de começar, você**precisa**ter:**Cartão CNPJ em PDF.**Um**Site Ativo**de preferência com uma página de “Política de Privacidade” e “Termos de Uso”. • Ter acesso ao e-mail com o domínio da empresa (ex: contato@suaempresa.com.br) acelera a aprovação. 
### Criando um Portfólio Empresarial
 Acesse https://business.facebook.com e faça login usando sua conta do facebook. 🔲 Embaixo do logo da Meta, clique no menu Select e em seguida no botão**Criar um portfólio empresarial**. 🔘 Preencha as informações necessárias. 
### Informações do portfólio empresarial
 Acesse as Configurações dessa BM, no menu**Informações da Empresa**. 
#### ⚡ Detalhes da Empresa
 Clique no botão**Editar**, e preencha as informações**exatamente****iguais**ao seu cartão CNPJ (isso ajuda muito na verificação da empresa). OBS: o telefone pode ser o que consta no seu site. 
#### ⚡ Minhas informações
 Desça no final da página, no botão Editar para configurar e confirmar seu email. 
#### ⚡ Status de verificação da empresa
 Suba novamente a página, na área de Status de verificação da empresa clique no botão**Ver Detalhes**. Uma nova janela abrirá. No final dela veja se aparece o botão para iniciar a Verificação da Empresa. (Se não estiver aparecendo, será necessário criar e vincular um Aplicativo à sua BM antes.) 
### Criando um Aplicativo
Acesse https://developers.facebook.com e faça login usando a mesma conta de facebook utilizada para logar em sua BM. 🔲 Clique em**Criar Aplicativo**. 🔘 Defina um nome para seu app e digite seu e-mail. 🔘 Selecione a opção Conectar-se com clientes pelo WhatsApp. 🔘 Selecione a sua BM (Portfólio Empresarial) verificada. 🔲 Clique em**Avançar**e depois**Ir para o Painel**. 
### Verificando a Empresa
De volta a janela do  https://business.facebook.com e na parte de verificação de empresa, atualize a página para aparecer o botão de verificação. Se necessário, o caminho completo é: Configurações da BM > menu Informações da Empresa: na parte Status de verificação da empresa clique no botão Ver Detalhes. Ao clicar no botão para iniciar uma verificação, uma janela pop aparecerá. 🔘**Selecione o tipo de sua empresa:**–**Empresa Individual:**para MEI, EI –**Empresa Privada:**para LTDA, SLU, S.A. Capital Fechado. –**Parceria:**para Sociedade Simples (comum para advocacia, clínicas médicas, dentistas, arquitetos, onde o sócio exerce a profissão intelectualmente. – Corporação: para S.A. Capital Aberto –**Instituição:**para ONGs, fundação, igrejas e orgãos públicos. 🔘**Adicionar dados da empresa:**preencha novamente suas informações da empresa, conforme cartão CNPJ. Na parte de Selecione sua empresa: escolha**Minha empresa não está na lista**(mesmo que ela esteja). 🔘**Confirme sua conexão com a empresa:**se possível escolha a opção via E-mail, se você possui um e-mail do tipo @suaempresa.com, pois é a que aprova mais rápido a sua verificação.  🔘**Carregar documentos:**escolha uma opção, porém a mais simples é a de**Cadastro Nacional de Pessoa Jurídica (CNPJ),**precisando apenas enviar o arquivo PDF do seu cartão CNPJ. Siga em frente para finalizar o pedido de Verificação de sua empresa. Ao finalizar, aguarde o prazo estipulado pela Meta para realizar a verificação. Em média, uns 2 dias. 
####  ❔ Dúvidas Comuns**Posso começar a usar antes de verificar?**Sim! Você pode conectar e começar a atender hoje mesmo. A verificação pode ser feita com calma depois, conforme sua empresa sentir necessidade de aumentar os limites de envio.**A verificação garante o Selo Verde (Verificado**✅**)?**Não garante, mas é o**pré-requisito obrigatório**. O Facebook nem analisa pedidos de Selo Verde de empresas que não verificaram a BM primeiro.**É pago?**Não. O processo de verificação de empresa é gratuito. (Não confunda com o “Meta Verified” pago para influenciadores no Instagram).**Quais documentos preciso ter em mãos?**Basicamente o Cartão CNPJ (ativo) e um Site Ativo (ou página estruturada).**Por que não aparece a opção de Verificação de Empresa?**É necessário que a BM esteja vinculada à um aplicativo, ou que contenha uma conta WABA para que a opção de Verificar Empresa apareça.



---

### Conteúdos sobre API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/](https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/)


---

#### Entenda a API Oficial

> 🔗 [https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/entenda-a-api-oficial/](https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/entenda-a-api-oficial/)

🧩**A API Oficial do WhatsApp Business (WABA)**é a solução profissional definitiva oferecida pela Meta (Facebook) para empresas que desejam conectar o WhatsApp em uma plataforma, de forma segura e escalável. Diferente da conexão comum por QR Code — que simula um WhatsApp Web e depende de um celular ligado — a API Oficial conecta sua empresa**diretamente aos servidores do WhatsApp na nuvem**. ☑️**Maior Segurança:**Na API Oficial, o envio de mensagens é relativamente blindado (desde que seja seguido as diretrizes da META). ☑️**Escala:**Para quem tem times grandes e alto volume de mensagens por dia. ☑️**Limitações:**Nem tudo são flores. A API Oficial possui custos por envio de mensagens, conceito de Janela de Atendimento e algumas restrições de funcionalidades. 
#####  Resumo Prático
 ➡️  API Oficial oferece profissionalismo, escala e mais estabilidade contra banimentos. ➡️  Porém tem como ônus alguns custos, limitações de funcionalidades e o conceito de Janela de Atendimento. 
### Principais Diferenças API QR Code X API Oficial

##### ⚡ Envio de Mensagens em Massa**QR Code (Normal):**O WhatsApp não gosta de automação em contas comuns. Se você enviar muitas mensagens rápido demais, o algoritmo pode banir seu número por “atividade suspeita”.**API Oficial:**Você é um parceiro verificado. A Meta sabe que você é uma empresa. Desde que respeite as regras de conteúdo, você pode enviar até 100 mil mensagens em um dia sem medo de bloqueio. 
##### ⚡Ausência de Celular
 A API oficial não é conectada em seu celular, funcionando em nuvem. Recentemente a META lançou a opção COEX, permitindo o uso do celular junto com a plataforma na API Oficial. 
##### ⚡ Ausência de Grupos
 Com a API Oficial não é possível participar de grupos ou comunidades. (em breve a META pretende disponibilizar grupos com limitações) 
##### ⚡ Restrições de Ações de Mensagens
 Você não conseguirá “encaminhar”, “editar” ou “excluir” uma mensagem específica. 
##### ⚡ Custo por Conversa
Enquanto o WhatsApp comum é gratuito, a API Oficial cobra uma pequena tarifa em dólares (diretamente para a Meta) por cada conversa iniciada ativamente por meio de**Mensagens Templates**. 
##### ⚡ Janela de Atendimento ao Cliente
 Na API Oficial existe o conceito de**Janela (de tempo) de Atendimento ao Cliente**, desenvolvido pela META, que se refere ao período de 24h após: – a recepção de uma mensagem de um cliente. Dentro desse período (janela) a empresa pode interagir livremente com seu cliente sem restrições quanto ao conteúdo ou formato da mensagem. Após 24h da última mensagem**recebida**essa “janela” é fechada, e somente o envio de**Mensagens Templates**são permitidos até que o cliente envie uma nova mensagem.



---

#### Janela de Atendimento

> 🔗 [https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/janela-de-atendimento/](https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/janela-de-atendimento/)

🧩**O Modelo de Cobrança**da API Oficial é diferente de tudo que você conhece. Ao contrário do SMS (que cobra por mensagem enviada), o WhatsApp cobra por**Conversas (Sessões de 24h)**. Isso significa que, uma vez aberta uma conversa, você e seu cliente podem trocar mensagens dentro de um período de 24 horas (Janela de Atendimento) sem pagamentos extras. ☑️**Transparência:**esses custos são pagos**diretamente à Meta (Facebook)**através do cartão de crédito na sua BM, e não para a nossa plataforma. 
#####  Resumo Prático
 ➡️ Utilize**mensagens templates**– pré-aprovadas –  para iniciar uma conversa (Janela de Atendimento ao Cliente). ➡️ Converse livremente dentro de um período de 24h sem custos adicionais. ➡️ Após as 24h uma nova janela só pode ser aberta com o envio de uma Mensagem Template ou com o recebimento de uma mensagem do cliente. 
### Como funciona a Janela de Atendimento ao Cliente
Se você receber uma mensagem ou uma ligação de um cliente do WhatsApp, uma**janela de atendimento ao cliente de 24 horas**será aberta (ou**atualizada**, caso já tenha sido iniciada). Quando uma janela de atendimento ao cliente estiver aberta, você pode enviar qualquer tipo de mensagem ao cliente. Caso contrário, será possível enviar somente**mensagens templates pré-aprovada (não pode escrever qualquer coisa livremente)**ao usuário, pois esse é o único tipo de mensagem que pode ser enviado fora da janela de atendimento ao cliente. 
#####  ⏳  Uma janela de atendimento ao cliente é iniciada toda vez que uma**mensagem template é enviada**ou**uma mensagem é recebida**.    💵 Enquanto a janela de atendimento ao cliente estiver aberta, a empresa pode trocar mensagens**normais**com seu cliente –**sem custos extras**.   🔄  O tempo da janela de atendimento é renovado em 24h a cada mensagem recebida.   🕒  Uma conversa iniciada tendo como origem um anúncio da meta tem sua janela de tempo inicial em 72h, e dentro desse janela não há cobrança de mensagem – mesmo as templates.   ⚠️ Após 24h da última mensagem recebida do cliente, a janela será fechada, e somente poderá ser aberta através do envio de uma nova mensagem template ou recebimento de mensagem do cliente.



---

#### Mensagem Template

> 🔗 [https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/mensagem-template/](https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/mensagem-template/)

🧩**Uma Mensagem de Modelo (Template)**é o único formato de mensagem que a Meta permite que você envie para iniciar uma conversa ou para falar com um cliente após a janela de 24 horas ter fechado. Diferente do WhatsApp comum, onde você escreve o que quiser, na API Oficial as mensagens ativas precisam ser**pré-aprovadas**pelo Facebook para garantir que não sejam spam ou golpe. ☑️**Iniciar conversa:**com uma lista de leads que nunca falaram com você. ☑️**Retomada:**Chamar aquele cliente que parou de responder há dias (janela fechada). ☑️**Notificações:**Enviar avisos automáticos como “Seu pedido saiu para entrega” ou “Sua fatura vence hoje”. 
### Tipos de Conversas
A Meta divide as conversas em 4 categorias, com preços diferentes: 🟢**1. Serviço (Service) – Iniciada pelo Cliente******Cenário: O cliente chama sua empresa para tirar dúvida.Custo: Gratuito 🔵**2. Utilidade (Utility) – Iniciada pela Empresa******Cenário: Enviar atualização de pedido, boleto ou confirmação de agendamento.Custo: Médio. 🟡**3. Marketing – Iniciada pela Empresa******Cenário: Enviar promoções, novidades ou ofertas para quem não te chamou.Custo: Mais alto. É aqui que a Meta ganha dinheiro e evita spam. 🔴**4. Autenticação – Iniciada pela Empresa******Cenário: Enviar códigos OTP (tokens) de login.Custo: Médio/Baixo. 
### Como funciona uma Mensagem Template
 Antes de serem enviadas, as Mensagens Templates precisam ser**aprovadas**pela Meta. Isso significa que o conteúdo da mensagem será revisado para garantir que não viole as diretrizes do WhatsApp – como práticas de spam ou conteúdo impróprio. As mensagens Templates podem incluir: ✔️**Textos e mídias**✔️**Variáveis dinâmicas**(por exemplo: nome do cliente, número do pedido, etc) ✔️**Elementos Interativos**: como botões ou quick reply 
### Tipos e Custos das Mensagens Templates
 Descrição Cobrança com a Janela Fechada Cobrança com a Janela Aberta Custo por Mensagem Marketing Mensagens promocionais enviadas pela empresa, como ofertas, atualizações de produtos ou lembretes de carrinho abandonado ✔️ ✔️ $ 0,07 Utilidade Mensagens transacionais relacionadas a ações do usuário, como confirmações de pedidos, atualizações de entrega ou lembretes de pagamento. ✔️ ❌ $ 0,01 Autenticação Mensagens de autenticação, como códigos de verificação (OTP) para login ou recuperação de conta. ✔️ ✔️ $ 0,01 
#####  Importante saber...
 💵  Os valores são cobrados em dólares e não estão incluso impostos.   💬 Uma mensagem de**Utilidade**não é cobrada se enviada enquanto a “janela de atendimento ao cliente” estiver aberta.   ⚠️ As mensagens de**Marketing**e de**Autenticação**são cobradas mesmo que a “janela de atendimento ao cliente” esteja aberta.



---

#### Templates de Utilidade x Marketing

> 🔗 [https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/templates-de-utilidade-x-marketing/](https://help.pacoticket.com.br/principal/meta/conteudos-sobre-api-oficial/templates-de-utilidade-x-marketing/)

🧩**Entender as Categorias de Mensagem**é fundamental não apenas para conseguir a aprovação da Meta, mas para**controlar seus custos**. O preço que você paga depende diretamente da**Categoria do Template**que você usa para iniciar a conversa. Na prática, a diferença fundamental é a**intenção**e o**contexto da transação**. Para a Meta,**Utilidade**é sobre informar algo que o cliente já espera (pós-venda/transacional), enquanto**Marketing**é sobre persuadir ou chamar atenção (venda/promoção). 
### 📦**1. Categoria: Utilidade (Utility)**Esta categoria é focada em**Serviço e Transação**. São mensagens enviadas para confirmar, suspender ou alterar uma transação ou assinatura que o usuário já solicitou.**A Regra de Ouro:**Pergunte-se: “O cliente está esperando receber isso porque ele fez alguma ação antes?” Se sim, é Utilidade. 💲**Custo:**Geralmente é**mais barato**que a conversa de Marketing. ✅**Serve para:******Envio de Faturas e Boletos.Atualização de Status de Pedido (“Saiu para entrega”).Confirmação de Agendamento ou Check-in.Avisos de Segurança ou problemas na conta. 
### 📢**2. Categoria: Marketing**Esta categoria é focada em**Vendas, Promoções e Engajamento**. São mensagens enviadas para despertar interesse, vender algo novo ou apenas manter o relacionamento com a marca.**A Regra de Ouro:**Pergunte-se: “O cliente pediu isso agora? Ou sou eu quem quero mostrar algo para ele?” Se é você querendo mostrar, é Marketing. 💲**Custo:**É a categoria**mais cara**da tabela da Meta. ✅**Serve para:******Ofertas, Promoções e Cupons.Lançamento de novos produtos.Recuperação de Carrinho Abandonado (“Você esqueceu algo…”).Mensagens de Aniversário ou datas comemorativas.Convites para eventos.  📦 Utilidade 📢 Marketing Objetivo Informar sobre algo já acordado. Convencer ou vender algo novo. Custo Menor (Intermediário). Maior (Premium). Flexibilidade Rígida (Meta rejeita se tiver propaganda). Flexível (Pode usar linguagem vendedora). 
#### ⚠️**A Armadilha da “Mensagem Mista”**Muitos clientes tentam ser espertos e misturar as coisas para pagar menos, mas a Meta usa inteligência artificial para detectar isso.**A Regra da Contaminação:**Se o seu template for 99% Utilidade, mas tiver**uma única frase**de Marketing, ele será classificado como**Marketing**.**Exemplo Misto (Classificado como Marketing):**“Olá João, sua fatura de Julho está fechada (Utilidade). Aproveite e veja nossas ofertas de iPhone com desconto (Marketing).”Como tem oferta no final, você pagará o preço de Marketing, mesmo sendo um envio de fatura.**Dica:**Se quer economizar, mande a fatura seca. Deixe a oferta para outro momento. 
#### 📝**Templates para Copiar (Utilidade):********1. Confirmação de Agendamento******“Olá, {{1}}! Confirmamos sua consulta para o dia {{2}} às {{3}}. Para reagendar, responda a esta mensagem.”**2. Confirmação de Pedido**“Olá {{1}}, seu pedido #{{2}} foi confirmado e já está sendo separado no estoque. Avisaremos quando sair para entrega.”**3. Envio de Código Pix/Boleto******“Segue o código PIX para pagamento do seu pedido {{1}}. O código expira em 30 minutos: {{2}}”**4. Aviso de Vencimento******“Oi {{1}}, notamos que sua mensalidade vence hoje. Segue o link para pagamento e evitar bloqueio: {{2}}” 
#### 📝**Templates para Copiar (Marketing):****1. Anúncios e Promoções**“Olá {{1}}! A Black Friday chegou mais cedo por aqui. Aproveite 20% de desconto em toda a loja usando o cupom {{2}}. Clique abaixo!”**2. Reativação de Cliente (Oi Sumido)******“Oi {{1}}, faz tempo que não nos falamos! 😿 Selecionamos uma oferta especial para você voltar: Frete Grátis hoje! Veja aqui: {{2}}”**3. Carrinho Abandonado******“Olá {{1}}, seus produtos ainda estão te esperando no carrinho. Finalize sua compra agora e garanta 5% OFF. Clique no botão!”**4. Feliz Aniversário******“Parabéns, {{1}}! 🎂 Hoje é o seu dia e o presente é nosso. Venha até a loja e ganhe um brinde exclusivo na sua próxima compra.” 
####  ❔ Dúvidas Comuns**Posso mudar a categoria se a Meta classificar errado?**Você pode “Contestar” a categoria logo após a criação. Porém, se a Meta negar, o template ficará naquela categoria para sempre. A solução é apagar e criar outro com texto diferente.**Mensagem de “Bom dia” é o quê?**Geralmente**Marketing**. Mensagens vagas ou apenas de relacionamento (“Bom dia, tenha uma ótima semana”) são vistas como engajamento, logo, Marketing.**Autenticação (OTP) entra aqui?**Não. Envio de códigos de segurança (como “Seu código do Sistema é 1234”) é uma terceira categoria chamada**Autenticação**, que é a mais barata de todas, mas EXTREMAMENTE restrita (não pode ter nada além do código).




---


## Contato para Suporte

> 🔗 [https://help.pacoticket.com.br/principal/contato-para-suporte/](https://help.pacoticket.com.br/principal/contato-para-suporte/)

###  Estamos aqui para Ajudar  Pacoticket (35) 99729-0384 atendimento@pacoticket.com.br




---

