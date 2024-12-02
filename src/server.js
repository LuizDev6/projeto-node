const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Usar as rotas
app.use('/api', userRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados conectado!');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
