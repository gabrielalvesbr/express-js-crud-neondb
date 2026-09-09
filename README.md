# Express CRUD NeonDB

API CRUD desenvolvida com **Express.js** e **NeonDB**.

## Tecnologias

- Node.js
- Express.js
- NeonDB
- JavaScript

## Como começar

### 1. Instale as dependências

Após clonar o projeto, execute:

```bash
npm install
```

### 2. Crie uma conta no NeonDB

Para utilizar o banco de dados, é necessário criar uma conta no [NeonDB](https://neon.tech/).

Após criar sua conta, crie um projeto e obtenha a sua **Database URL**.

### 3. Configure o banco de dados

Na pasta `database`, existe o arquivo `init.sql`.

Copie todo o conteúdo do arquivo `init.sql`.

Depois, no painel do NeonDB, abra o **SQL Editor**, cole o conteúdo copiado e execute o código.

Isso irá criar as tabelas necessárias para utilizar a API.

### 4. Configure as variáveis de ambiente

O projeto já possui um arquivo `.env.example`.

Crie uma cópia dele e renomeie para `.env`:

```text
.env.example → .env
```

Depois, preencha as variáveis:

```env
PORT=3000
DATABASE_URL=sua_database_url
```

- `PORT`: porta em que a API Express será executada.
- `DATABASE_URL`: URL do banco de dados fornecida pelo NeonDB.

> **Importante:** não compartilhe ou envie seu arquivo `.env` para o GitHub.

### 5. Execute o projeto

```bash
npm run dev
```

A API estará disponível localmente.

## Rotas

### GET `/`

Retorna todos os usuários.

### POST `/create`

Cria um novo usuário.

**Body:**

```json
{
  "name": "Gabriel"
}
```

### PUT `/update/:id`

Atualiza o nome de um usuário específico.

O `:id` representa o **ID do usuário que será atualizado**.

Por exemplo, se o usuário com ID `1` possui o nome `Gabriel`, podemos alterar seu nome para `João`.

**Body:**

```json
{
  "name": "João"
}
```

### DELETE `/delete/:id`

Exclui um usuário pelo ID.

**Exemplo:**

```text
DELETE /delete/1
```

## Estrutura do projeto

```text
src/
├── config/
│   └── database.js
├── routes/
├── app.js
└── server.js

database/
└── init.sql
```
## Autor

Desenvolvido por **Gabriel Alves de Sousa**.

Projeto desenvolvido para estudo e prática de criação de APIs REST utilizando **Express.js** e **NeonDB**.