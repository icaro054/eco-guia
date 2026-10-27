# eco-guia
Guia digital interativo que orienta o utilizador sobre o descarte correto de resíduos e apresenta pontos de coleta de forma simples, educativa e acessível.

# Guia Digital Interativo para Descarte Consciente de Resíduos 

> MVP desenvolvido para orientar estudantes, professores e colaboradores sobre o descarte correto de resíduos e localização de pontos de coleta na comunidade acadêmica.

## Problema e Objetivo
Membros da comunidade acadêmica frequentemente têm dúvidas sobre onde e como descartar resíduos específicos (como pilhas, eletrônicos e recicláveis), gerando descarte inadequado. Este PWA oferece uma consulta rápida (< 2 segundos), responsiva e educativa com mapeamento de pontos de coleta.

## Funcionalidades Principais
- **Acesso Rápido (Tela Inicial):** Atalhos diretos para busca, navegação por categorias e exploração via mapa.
- **Busca Inteligente (RF01):** Pesquisa de resíduos por nome com sugestões instantâneas.
- **Guia Educativo por Categoria (RF02, RF04, RF06):** Exibe a história do resíduo, orientação passo a passo de descarte, curiosidades e dicas ambientais.
- **Mapa de Pontos de Coleta (RF05, RN04):** Localização dos coletores associados a cada resíduo (pontos demonstrativos possuem identificação explícita de simulação conforme regulamento).
- **Suporte PWA:** Instalável em dispositivos móveis e com cache local para carregamento imediato.

## Como Executar Localmente
1. Clone o repositório:
   `git clone https://github.com/SEU-USUARIO/guia-descarte-sustentavel.git`
2. Instale as dependências:
   `npm install`
3. Inicie o servidor de desenvolvimento:
   `npm run dev`