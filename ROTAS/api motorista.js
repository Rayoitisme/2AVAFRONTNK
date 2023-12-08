// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://raysacarla:Carlos1969@ray.7fzbxn6.mongodb.net/filiadosnk?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar dados JSON
app.use(express.json());

// Rotas para motoristas
const motoristasRouter = require('./routes/motoristas');
app.use('/motoristas', motoristasRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// routes/motoristas.js
const express = require('express');
const router = express.Router();

// Exemplo de dados de motoristas
let motoristas = [
  { id: 1, nome: 'Motorista 1', telefone: '123456789', modeloDoCarro: 'Caminhão A', placaDoCarro: 'ABC123' },
  { id: 2, nome: 'Motorista 2', telefone: '987654321', modeloDoCarro: 'Caminhão B', placaDoCarro: 'XYZ789' },
];

// Rota para obter todos os motoristas
router.get('/', (req, res) => {
  res.json(motoristas);
});

// Rota para criar um novo motorista
router.post('/', (req, res) => {
  const novoMotorista = req.body;
  motoristas.push(novoMotorista);
  res.status(201).json(novoMotorista);
});

// Rota para atualizar um motorista existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const motoristaAtualizado = req.body;

  motoristas = motoristas.map(m => (m.id === id ? motoristaAtualizado : m));

  res.json(motoristaAtualizado);
});

// Rota para excluir um motorista
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  motoristas = motoristas.filter(m => m.id !== id);
  res.status(204).end();
});

module.exports = router;

