require('dotenv').config();
const app = require('./src/api/app');

app.get('/', (_request, response) => { response.send(); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
