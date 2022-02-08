const app = require('express')();
const bodyParser = require('body-parser');

const router = require('./routers');
const middlewares = require('./middlewares');

app.use(bodyParser.json());

app.use('/user', router.user);
app.use('/login', router.login);
app.use('/categories', router.categories);
app.use('/post', router.post);

app.use(middlewares.joiError);
app.use(middlewares.domainError);
app.use(middlewares.serverError);

module.exports = app;
