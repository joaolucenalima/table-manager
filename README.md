# Table Manager

## Requisitos

Node.js (versão utilizada no projeto: 20.18.0)

## Como Executar o Projeto

Para executar o projeto localmente, siga as instruções abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/joaolucenalima/table-manager.git
   cd table-manager
   ```

2. **Instale as dependências:**

   ```bash
   npm i
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

# Estrutura do projeto

A estrutura de arquivos utilizada no projeto é organizada da seguinte forma:

- **src/**: Diretório principal contendo o código-fonte do projeto.

  - **components/**: Contém os componentes reutilizáveis da aplicação. Componentes maiores que contém muitos sub-componentes são também separados em pastas com seu nome.
  - **contexts/**: Contém todos os contextos usados na aplicação.

Os arquivos .css estão no mesmo nível hierárquico que os componentes que o utilizam, pois assim fica mais fácil encontrar estilizações específicas de componentes.
