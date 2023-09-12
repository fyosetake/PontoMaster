const express = require('express');
const bodyParser = require('body-parser');
const Registro = require('./Registro');
const sequelize = require('./dbConfig');

const app = express();

app.use(bodyParser.json());

app.post('/registrar-ponto', async (req, res) => {
  try {
    const { user } = req.body;
    const timestamp = new Date();

    // Insere um registro na tabela
    await Registro.create({ user, timestamp });

    res.status(200).json({ message: 'Ponto registrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar o ponto.' });
  }
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
