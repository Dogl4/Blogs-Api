# Projeto Blogs API

  ## 📷 Screenshot
![Screenshot](./blogApi.gif)  

## 📋 Descrição do projeto

Uma API para um blog com endpoits que produzem conteúdo e gerenciam o banco de dados. 

Este projeto trata-se de uma arquitetura de *API* com sistema **CRUD** (POST, GET, PUT e DELETE) utilizando a arquitetura **REST**(Representational State Transfer).  Além de usar Joi para tratar os erros e resposta nas requisições e entradas de dados.

## 💻 Tecnologias utilizadas

- NodeJS
- ExpressJS
- MYSQL
- JavaScript (ES6)
- Sequilize (ORM)
- Joi (tratamento de dados inseridos)
- JWT
- Dotenv

##  :inbox_tray: Para rodar este projeto localmente

1. Tenha node, MySQL Server e o Git instalados e configurados em sua máquina.
2.  Para baixar este projeto via git rode no terminal: `git clone git@github.com:Dogl4/Blogs-Api.git` 
3. Vá para a pasta raiz do projeto, rode: `npm install`. Cópie o conteúdo do arquivo: `Trybesmith.sql`, crie o banco com workbench.
4. Cria um arquivo na raiz do projeto para as variáveis de ambiente, `.env`(MYSQL_USER, MYSQL_PASSWORD, HOSTNAME, PORT, JWT_SECRET).
5. No terminal rode `npm run dev`
6. Para iniciar o server e criar o banco de dados, rode os comandos: 
```bash
~$ npx nodemon index.js
```
```bash
~$ npx sequelize db:create

~$ npx sequelize db:migrate
```
7.  Use algum dos seguintes programas para fazer a requisição:  [Thunder Client](https://www.thunderclient.com/) ou [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).
8. Faça a requisição para os endpoints abaixo.

## :balloon: Endpoints
- POST - `/user`
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

✅ Concluído

## :busts_in_silhouette: Colaboradores

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
