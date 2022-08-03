// Este middlewares, de tratamento de erro
// Foi inspirado na no repositório do tribo 14a do github.
const joiError = require('./joi-error');
const domainError = require('./domain-error');
const serverError = require('./server-error');
const generateError = require('./generateError');
const authJwt = require('./authJwt');

module.exports = {
  joiError,
  domainError,
  serverError,
  generateError,
  authJwt,
};
