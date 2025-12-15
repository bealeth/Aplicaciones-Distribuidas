const express = require("express");
const app = express();
const path = require("path");

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, "cotizacion.html")));

// Ruta principal → abrirá tu HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "cotizacion.html"));
});

// Levantar en localhost:3000
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
