# **NodeJS + Express + PostgreSQL**

Este projeto é um exemplo prático de como integrar o **NodeJS** com **Express.js** e **PostgreSQL**, mostrando as etapas para configurar um servidor simples com conexão a um banco de dados relacional.

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter os seguintes itens instalados em sua máquina:

- **Node.js**
- **PostgreSQL**

## **Instalação e Configuração**

Siga as etapas abaixo para configurar e executar o projeto:

1. **Inicialize o projeto**

   ```bash
   npm init -y
   ```

   Em seguida, adicione o tipo de módulo no arquivo `package.json`:

   ```json
   "type": "module"
   ```

2. **Instale as dependências**

   - Dependências principais:

     ```bash
     npm i express pg dotenv
     ```

   - Dependência de desenvolvimento:

     ```bash
     npm i -D nodemon
     ```

   Atualize o `package.json` para incluir o seguinte script:

   ```json
   "scripts": {
     "dev": "nodemon index.js"
   }
   ```

3. **Crie os arquivos principais**

   - **`index.js`**: Arquivo principal do servidor.
   - **`db.js`**: Responsável pela configuração e conexão com o PostgreSQL.

4. **Configuração do ambiente**
   Crie um arquivo **`.env`** na raiz do projeto e defina suas variáveis de ambiente. Exemplo:

   ```env
   DATABASE_URL = postgresql://user:password@host:port/database
   PORT = 3000
   ```

5. **Desenvolvimento do banco de dados**
   Configure a conexão com o PostgreSQL no arquivo **`db.js`** usando a biblioteca `pg`.

6. **Desenvolvimento do servidor**
   No arquivo **`index.js`**, crie rotas e métodos HTTP para interação com o banco de dados.

## **Estrutura de Diretórios**

A estrutura básica do projeto será:

```text
express-postgresql/
├── .env
├── db.js
├── index.js
├── package.json
└── node_modules/
```

## **Comandos Principais**

- **Iniciar o servidor em modo de desenvolvimento:**

  ```bash
  npm run dev
  ```

## **Funcionalidades**

- Conexão ao banco de dados PostgreSQL utilizando `pg`.
- Rotas HTTP para gerenciar recursos (CRUD).
- Variáveis de ambiente gerenciadas com `dotenv`.

---

Com este projeto, você tem uma base sólida para começar a explorar o uso do **NodeJS** com **Express.js** e **PostgreSQL**.
