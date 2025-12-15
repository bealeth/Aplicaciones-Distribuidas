const express = require('express');
const app = express();

// Generador de número aleatorio entre 37 y 42
app.get('/temperatura', (req, res) => {
  const temperatura = 40;//Math.floor(Math.random() * (42 - 37 + 1)) + 37;
  res.json({ temperatura });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor de temperatura activo en http://localhost:${PORT}`));
