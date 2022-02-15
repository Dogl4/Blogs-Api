# Project Blogs API 

## Contexto

Este projeto trata-se de uma arquitetura de *API* com sistema **CRUD** (POST, GET, PUT e DELETE) utilizando a arquitetura **REST**(Representational State Transfer). Ela consiste em vários **endpoints** que estarão conectados com o banco de dados. Principais bibliotecas utilizadas neste projeto: o Sequelize CLI para criar e gerenciar tabelas pela linha de comando do terminal, o Express para gerenciamento de rota e junto com o express-rescue junto com o Joi tratar erros e resposta nas requisições e entradas de dados.

### Técnologias usadas

**Back-end:**

>  **Desenvolvido usando:** NodeJS, ExpressJS, MYSQL, ES6, Sequilize, Joi, JWT e Dotenv.

## Requerimentos para rodar localmente

**Necessita dos seguintes programas para rodar no ambiente**

> [Node.js](https://nodejs.org/en/download/)

> MySQL Server, configurado com usuário, [versões suportadas](https://www.mysql.com/support/supportedplatforms/database.html), [doc de como instalar](https://dev.mysql.com/doc/refman/8.0/en/installing.html).

> Para requisição de API, teste, recomedo um destes: [Thunder Client](https://www.thunderclient.com/) ou [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).



## Instalando Dependências

**Para baixar o node_modules:**

```bash

~$ npm install

```

**Variáveis a serem configuradas. Crie um arquivo na raiz do projeto: `.env`, adicione este ao  `.gitignore` e preencha com suas variáveis:**

> `MYSQL_USER=<seuUsuarioSqlServe>`

> `MYSQL_PASSWORD=<suaSenha>`

> `HOSTNAME=<localhost>`

> `PORT=<3000>`

> `JWT_SECRET=<inventeUmaSenhaParaValidarSeuToken>`



## Executando aplicação

**Para iniciar o server:**

```bash
~$ npx nodemon index.js
```
- Para criar o banco de dados:

```bash
~$ npx sequelize db:create

~$ npx sequelize db:migrate

```

## Endpoints | rotas

POST e GET |**`/user`**

GET | **`/user/id`**

POST | **`/login`**

POST e GET | **`/categories`**

POST e GET | **`/post`**

GET e DELETE | **`/post:id`**

DELETE | **`/user/me`**

GET | **`/post/search?q=`**


## Desenvolvido por:

>Pedro D. P. Barreto. 
Contato:([Linkedin](https://www.linkedin.com/in/dogl4/), [Portifólio](https://dogla.com.br), [Github](https://github.com/Dogl4))

> Trybe. Contato:([Linkedin](https://www.linkedin.com/school/betrybe/), [Site](https://www.betrybe.com/), [Github](https://github.com/betrybe))
