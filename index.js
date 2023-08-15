const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/error400', (req, res) => {
    res.status(400).send('Erro 400: Requisição Inválida');
});

app.get('/error500', (req, res) => {
    res.status(500).send('Erro 500: Requisição Inválida');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
