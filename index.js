require('dotenv').config();
const app = require('./app');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => { response.send(); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
