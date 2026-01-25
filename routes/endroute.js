const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/", (req, res) => {
  res.end(`
    <h1>Ruta Final</h1>
    <p>Bienvenido a la ruta protegida por horario</p>
    <a href="/">volver</a>
    `);
});
module.exports = router;