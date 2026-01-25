const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mensaje = req.query.mensaje || "";
  res.end(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.horaActual}</p>
    ${mensaje ? `<p style="color: red;">${mensaje}</p>` : ""}
    <a href="/enroute"><button>Entrar</button></a>
    `);
});
module.exports = router;
