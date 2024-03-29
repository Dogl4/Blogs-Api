const postMock = {
  body: {
    "title": "Post do Futuro",
    "content": "Inovação na escola",
    "categoryIds": [1,2]
  },
  list: [
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
          },
          {
            "id": 3,
            "title": "Post do Futuro",
            "content": "Inovação na escola",
            "userId": 3,
            "published": "2022-08-04T21:08:44.000Z",
            "updated": "2022-08-04T21:08:44.000Z",
            "user": {
                "id": 3,
                "displayName": null,
                "email": "doougllas@hotmail.com.br",
                "image": null
            },
            "categories": [
                {
                    "id": 1,
                    "name": "Inovação"
                },
                {
                    "id": 2,
                    "name": "Escola"
                }
              ]
          },
          {
            "id": 4,
            "title": "Post do Futuro",
            "content": "Inovação na escola",
            "userId": 3,
            "published": "2022-08-04T21:11:22.000Z",
            "updated": "2022-08-04T21:11:22.000Z",
            "user": {
                "id": 3,
                "displayName": null,
                "email": "doougllas@hotmail.com.br",
                "image": null
            },
            "categories": [
                {
                    "id": 1,
                    "name": "Inovação"
                },
                {
                    "id": 2,
                    "name": "Escola"
                }
              ]
          }
        ],
  id: "1",
  idThree: "2",
  edit: {
    "title": "Refletir sobre o vôo",
    "content": "Foguete tem ré"
  },
  resultEdit: {
    "0": {
        "id": 1,
        "name": "Inovação"
    },
    "1": {
        "id": 2,
        "name": "Escola"
    },
    "title": "Refletir sobre o vôo",
    "content": "Foguete tem ré",
    "userId": 3
  },
  title: "vamos"
}

module.exports = postMock;
