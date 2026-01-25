const express = require("express");
const app = express();

// aquí importamos rutas
const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHora = require("./middlewares/validarHora");

const indexRouter = require('./routes/index')
const endrouteRouter = require('./routes/endroute')

// es para aplicar el middleware de la hora a toda la app
app.use(horaMiddleware);

app.use("/", indexRouter);

app.use("/enroute", validarHora, endrouteRouter);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
