// Criando error customizado, tratado no domain-error.js, agradeço ao pablo por me ensinar isto.
module.exports = (code, message) => {
  const e = new Error();
  e.code = code;
  e.message = message;
  throw e;
};
