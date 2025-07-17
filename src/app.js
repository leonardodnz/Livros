const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/database');
const livrosRouter = require('./routes/livros');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rotas
app.use('/livros', livrosRouter);

// Tratamento de erros
app.use(errorHandler);

// Inicialização do banco de dados e servidor
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Falha ao conectar ao banco de dados:', err);
});