# Projeto Blogs API

## 📋 Descrição

API para um blog. Desenvolvida em [Node.js](https://nodejs.org/en/), com [JavaScript](https://www.javascript.com/learn/strings), [Express.js](https://expressjs.com/en/api.html) para ligar com rotas, [Sequelize](https://sequelize.org/)(ORM) para criar e gerenciar um banco de dados, [MySQL](https://www.mysql.com/), [JWT](https://jwt.io/) para autenticação e [Joi](https://www.npmjs.com/package/joi) para validação de dados. Com sistema **CRUD** (POST, GET, PUT e DELETE) utilizando a arquitetura **API-REST**(Representational State Transfer).

<details>
  <summary>📷 <strong>Screenshot</strong></summary><br />

| [<img alt="Screenshot da API" height="400" width="auto" src="./blogApi.gif">](./blogApi.gif "Screenshot da API") |
|------------------------------------------------------------------------------------------------------------------|
| _1.1-api-gif_                                                                                                    |
</details>

<details>
  <summary>💻 <strong>Tecnologias utilizadas</strong></summary><br />

- [JavaScript](https://www.javascript.com/learn/strings): Linguagem de programação.
- [NodeJS](https://nodejs.org/en/): Motor de JavaScript para criação de aplicações web.
- [ExpressJS](https://expressjs.com/): Framework para desenvolvimento da API.
- [MYSQL](https://www.mysql.com/): Banco de dados.
- [Sequilize](https://sequelize.org/): ORM para o MYSQL.
- [Joi](https://www.npmjs.com/package/joi): Validação de dados.
- [JWT](https://www.npmjs.com/package/jsonwebtoken): Autenticação.
- [Dotenv](https://www.npmjs.com/package/dotenv): Carregamento de variáveis de ambiente.
</details>

## 📥 Rodando API localmente

### Pré-requisitos
> Ter o [NodeJS](https://nodejs.org/en/) e o [MySQL](https://www.mysql.com/) instalados.

### Baixando o repositório

```bash
# clonando o repositório ou baixe por zip(ali em cima)
$ git clone git@github.com:Dogl4/Blogs-Api.git

# entrando na pasta do repositório
$ cd Blogs-Api

# instalando dependências
$ npm install
```

### Definindo váriaveis de ambiente
```bash
# Renomei o arquivo `.env.example` para `.env`, substituindo os valores por seus respectivos dados locais.
```

### Criando o banco de dados

```bash
# criando o banco de dados
$ npx sequelize-cli db:create && npx sequelize-cli db:migrate

# populando o banco, executando as seeds
$ npx sequelize-cli db:seed:all 
```

## 🎈 Endpoints

> Use algum dos seguintes programas para fazer as requisições:  [Thunder Client](https://www.thunderclient.com/) ou [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

### Usuários

> Modificando(novo)...
- <details>
      <summary>POST (cadastra)</summary>

  - Url:
     - `/user`
     - Exemplo: `http://localhost:3000/user`
  - Request:
    - Body:
      ```json
        {
            "email": "doougllas@hotmail.com.br",
            "password": "123456"
        }
      ```

  - Response sucesso:
      - Status: `201 Created`
      - Body:
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiYWFhQGFhYS5jbyIsImlhdCI6MTY1OTM1NjE1NywiZXhwIjoxNjU5NDQyNTU3LCJzdWIiOiJhYWFAYWFhLmNvIn0.y3TmHszGD1XvS-PatCJ1zofM8ZLG4YnGm5UantcP2Ak"
        }
        ```

  - Response erro:
      - Status: `409 Conflict`
      - Body: 
        ```json
        {
            "message": "User already registered"
        }
        ```

    - Status: `400 Bad Request`
    - Body:
      ```json
      {
          "message": "\"email\" is required"
      }
      ```
      ```json
      {
          "message": "\"email\" is not allowed to be empty"
      }
      ```
      ```json
      {
          "message": "\"password\" is required"
      }
      ```
      ```json
      {
          "message": "\"password\" is not allowed to be empty"
      }
      ```
      ```json
      {
          "message": "\"password\" length must be 6 characters long"
      }
      ```
</details>

---

> Modificando(antigo)...
- GET - `/user`
- GET - `/user/id`
- POST - `/login`
- GET - `/categories`
- POST - `/categories`
- POST - `/post`
- GET - `/post`
- GET - `/post:id`
- DELETE - `/post:id`
- DELETE - `/user/me`
- GET - `/post/search?q=`

## 📈 Status do projeto

<!-- ✅ Concluído  -->
🚧 Em desenvolvimento
> Estou melhorando a documentação.

## 👥 Colaboradores

Estas pessoas participaram deste projeto:

<table>
  <tr  style="width:120px">
    <td align="center">
      <a target=”_blank” href="https://github.com/Dogl4">
        <img src="https://avatars.githubusercontent.com/u/85720722?s=400&u=c260de98c1eee20df67d72857c3bcc8682fed68a&v=4" width="100px;" alt="Foto do Pedro Barreto no GitHub"/><br>
        <sub>
          <b>Pedro Barreto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target=”_blank” href="https://github.com/betrybe">
        <img src="https://avatars.githubusercontent.com/u/55410300?s=200&v=4" width="100px;" alt="Foto Trybe"/><br>
        <sub>
          <b>Trybe</b>
        </sub>
      </a>
    </td>
  </tr>
  <td width="120px;">
    Desenvolvimento do código da api, requisições, validações.
  </td>
  <td width="120px;">
    Ideia e banco.
  </td>
  </th>
</table>
