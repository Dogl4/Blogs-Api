# Projeto Blogs API

## Descrição

API para um blog. Desenvolvida em [Node.js](https://nodejs.org/en/), com [JavaScript](https://www.javascript.com/learn/strings), [Express.js](https://expressjs.com/en/api.html) para ligar com rotas, [Sequelize](https://sequelize.org/)(ORM) para criar e gerenciar um banco de dados, [MySQL](https://www.mysql.com/), [JWT](https://jwt.io/) para autenticação e [Joi](https://www.npmjs.com/package/joi) para validação de dados. Com sistema **CRUD** (POST, GET, PUT e DELETE) utilizando a arquitetura **API-REST**(Representational State Transfer).

<details>
  <summary>📷 <strong>Screenshot</strong></summary><br />

| [<img alt="Screenshot da API" height="400" width="auto" src="./images/blogApi.gif">](./images/blogApi.gif "Screenshot da API") |
|--------------------------------------------------------------------------------------------------------------------------------|
| **Figura** **1.1** - Gif da API                                                                                                |
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

## Rodando API localmente

1. #### Pré-requisitos
    > Ter o [NodeJS](https://nodejs.org/en/) e o [MySQL](https://www.mysql.com/) instalados.
2. #### Baixando o repositório
    ```bash
    # clonando o repositório ou baixe por zip(ali em cima)
    $ git clone git@github.com:Dogl4/Blogs-Api.git

    # entrando na pasta do repositório
    $ cd Blogs-Api

    # instalando dependências
    $ npm install
    ```
3. #### Definindo váriaveis de ambiente
    > Renomei o arquivo `.env.example` para `.env`, substituindo os valores por seus respectivos dados locais.
4. #### Criando o banco de dados
    ```bash
    # criando o banco de dados
    $ npm run init

    # populando o banco, executando as seeds
    $ npm run seed

    # se quiser deletar o banco de dados
    $ npm run drop
    ```
5. #### Rodando a API
    ```bash
    # iniciando o servidor
    $ npm run start

    # iniciando o servidor em modo de desenvolvimento
    $ npm run dev
    ```

## Endpoints

>  Use algum dos seguintes programas para fazer as requisições: [Postman](https://www.postman.com/) ou [Thunder Client](https://www.thunderclient.com/) ou [Insomnia](https://insomnia.rest/).
>  Se estiver utilizando o **Postman**, vá em importe a [`collection.json`](./postman/collection.json) do repositório, que está localizada em `./postman/collection.json`.
>  Rotas com 🔐 (**protected**) são protegidas por um token JWT.

#### Usuários

- <details>
      <summary><strong>POST</strong> (cadastra)</summary>

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
          "message": "\"password\" length must be at least 6 characters long"
      }
      ```

    - Status: `409 Conflict`
    - Body: 
      ```json
      {
          "message": "User already registered"
      }
      ```
</details>

- <details>
      <summary><strong>POST</strong> (login)</summary>

  - Url:
     - `/login`
     - Exemplo: `http://localhost:3000/login`
  - Request:
    - Body:
      ```json
        {
            "email": "doougllas@hotmail.com.br",
            "password": "123456"
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiYWFhQGFhYS5jbyIsImlhdCI6MTY1OTUyNDkwNiwiZXhwIjoxNjU5NjExMzA2LCJzdWIiOiJhYWFAYWFhLmNvIn0.tHMoYbyjXGYEK0ZghfmUh3jmBOv4cZxRbDjZrYYKVL8"
      }
      ```

  - Response erro:
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
          "message": "\"email\" must be a valid email"
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
          "message": "\"password\" length must be at least 6 characters long"
      }
      ```
      ```json
      {
          "message": "Invalid fields"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>GET</strong> (todos os usuários)</summary>

  - Url:
     - `/user`
     - Exemplo: `http://localhost:3000/user`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      [
          {
              "id": 1,
              "displayName": "Lewis Hamilton",
              "email": "lewishamilton@gmail.com",
              "password": "123456",
              "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          {
              "id": 2,
              "displayName": "Michael Schumacher",
              "email": "MichaelSchumacher@gmail.com",
              "password": "123456",
              "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
          },
          {
              "id": 3,
              "displayName": null,
              "email": "aaa@aaa.co",
              "password": "123456",
              "image": null
          },
          {
              "id": 4,
              "displayName": null,
              "email": "doougllas@hotmail.com.br",
              "password": "123456",
              "image": null
          }
      ]
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>GET</strong> (um usuário)</summary>

  - Url:
     - `/user/:id`
     - Exemplo: `http://localhost:3000/user/1`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "password": "123456",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      }
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>DELETE</strong> (deleta usuário)</summary>

  - Url:
     - `/user/me`
     - Exemplo: `http://localhost:3000/user/me`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `204 No Content`

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```

    - Status: `404 Not Found`
    - Body: 
      ```json
      {
          "message": "User does not exist"
      }
      ```
</details>

#### Categorias

- <details>
      <summary>🔐 <strong>POST</strong> (cadastra)</summary>

  - Url:
     - `/categories`
     - Exemplo: `http://localhost:3000/categories`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```
    - Body:
      ```json
      {
          "name": "Programação"
      }
      ```

  - Response sucesso:
    - Status: `201 Created`
    - Body:
      ```json
      {
          "id": 4,
          "name": "Programação"
      }
      ```

  - Response erro:
    - Status: `400 Bad Request`
    - Body:
      ```json
      {
          "message": "\"name\" is required"
      }
      ```
      ```json
      {
          "message": "\"name\" is not allowed to be empty"
      }
      ```

    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```

    - Status: `409 Conflict`
    - Body: 
      ```json
      {
          "message": "Categorier already registered"
      }
      ```

</details>

- <details>
      <summary>🔐 <strong>GET</strong> (todas categorias)</summary>

  - Url:
     - `/categories`
     - Exemplo: `http://localhost:3000/categories`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      [
          {
              "id": 1,
              "name": "Inovação"
          },
          {
              "id": 2,
              "name": "Escola"
          },
          {
              "id": 3,
              "name": "1"
          },
          {
              "id": 4,
              "name": "Programação"
          }
      ]
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>


#### Posts

- <details>
      <summary>🔐 <strong>POST</strong> (cadastra)</summary>

  - Url:
     - `/post`
     - Exemplo: `http://localhost:3000/post`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```
    - Body:
      ```json
      {
          "title": "Post do Futuro",
          "content": "Inovação na escola",
          "categoryIds": [1,2]
      }
      ```

  - Response sucesso:
    - Status: `201 Created`
    - Body:
      ```json
      {
          "id": 10,
          "userId": 7,
          "title": "Post do Futuro",
          "content": "Inovação na escola"
      }
      ```

  - Response erro:
    - Status: `400 Bad Request`
    - Body:
      ```json
      {
          "message": "\"title\" is required"
      }
      ```
      ```json
      {
          "message": "\"title\" is not allowed to be empty"
      }
      ```
      ```json
      {
          "message": "\"content\" is required"
      }
      ```
      ```json
      {
          "message": "\"content\" is not allowed to be empty"
      }
      ```
      ```json
      {
          "message": "\"categoryIds\" is required"
      }
      ```
      ```json
      {
          "message": "\"categoryIds\" must be an array"
      }
      ```
      ```json
      {
          "message": "\"categoryIds\" does not contain 1 required value(s)"
      }
      ```
      ```json
      {
          "message": "\"categoryIds[0]\" must be a number"
      }
      ```

    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```

    - Status: `404 Not Found`
    - Body: 
      ```json
      {
          "message": "\"categoryIds\" not found"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>GET</strong> (todos posts)</summary>

  - Url:
     - `/post`
     - Exemplo: `http://localhost:3000/post`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      [
          {
              "id": 1,
              "title": "Post do Ano",
              "content": "Melhor post do ano",
              "userId": 1,
              "published": "2011-08-01T19:58:00.000Z",
              "updated": "2011-08-01T19:58:51.000Z",
              "user": {
                  "id": 1,
                  "displayName": "Lewis Hamilton",
                  "email": "lewishamilton@gmail.com",
                  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
              },
              "categories": [
                  {
                      "id": 1,
                      "name": "Inovação"
                  }
              ]
          },
          {
              "id": 2,
              "title": "Vamos que vamos",
              "content": "Foguete não tem ré",
              "userId": 1,
              "published": "2011-08-01T19:58:00.000Z",
              "updated": "2011-08-01T19:58:51.000Z",
              "user": {
                  "id": 1,
                  "displayName": "Lewis Hamilton",
                  "email": "lewishamilton@gmail.com",
                  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
              },
              "categories": [
                  {
                      "id": 2,
                      "name": "Escola"
                  }
              ]
          }
      ]
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>GET</strong> (um post)</summary>

  - Url:
     - `/post/:id`
     - Exemplo: `http://localhost:3000/post/1`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
              "id": 1,
              "displayName": "Lewis Hamilton",
              "email": "lewishamilton@gmail.com",
              "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
              {
                  "id": 1,
                  "name": "Inovação"
              }
          ]
      }
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>


- <details>
      <summary>🔐 <strong>GET</strong> (um post por título)</summary>

  - Url:
     - `/post/search?q=`
     - Exemplo: `http://localhost:3000/post/search?q=vamos`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `200 OK`
    - Body:
      ```json
      [
          {
              "id": 2,
              "title": "Vamos que vamos",
              "content": "Foguete não tem ré",
              "userId": 1,
              "published": "2011-08-01T19:58:00.000Z",
              "updated": "2011-08-01T19:58:51.000Z",
              "user": {
                  "id": 1,
                  "displayName": "Lewis Hamilton",
                  "email": "lewishamilton@gmail.com",
                  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
              },
              "categories": [
                  {
                      "id": 2,
                      "name": "Escola"
                  }
              ]
          }
      ]
      ```

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
</details>

- <details>
      <summary>🔐 <strong>DELETE</strong> (deleta usuário)</summary>

  - Url:
     - `/post/:id`
     - Exemplo: `http://localhost:3000/post/1`
  - Request:
    - Headers:
      ```json
        {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlckVtYWlsIjoiZG9vdWdsbGFzQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNjU5NTI1NjgzLCJleHAiOjE2NTk2MTIwODMsInN1YiI6ImRvb3VnbGxhc0Bob3RtYWlsLmNvbS5iciJ9.HlIe_JlHWPBdqyh80fCR-umYbVwy0aFqaGIMI63kgWQ",
        }
      ```

  - Response sucesso:
    - Status: `204 No Content`

  - Response erro:
    - Status: `401 Unauthorized`
    - Body: 
      ```json
      {
          "message": "Token not found"
      }
      ```
      ```json
      {
          "message": "Expired or invalid token"
      }
      ```
      ```json
      {
          "message": "Unauthorized user"
      }
      ```

    - Status: `404 Not Found`
    - Body: 
      ```json
      {
          "message": "Post does not exist"
      }
      ```
</details>

## Colaboradores

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
  <td width="120px;" align="center">
    Desenvolvimento do código da api, requisições, validações.
  </td>
  <td width="120px;" align="center">
    Ideia e banco.
  </td>
  </th>
</table>
