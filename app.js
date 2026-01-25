const express = require("express");
const app = express();

// aquí importamos rutas
const horaMiddleware = require("./routes/index");
const endrouteRouter = require("./routes/endroute");
const validarHora = require("./middlewares/validarHora");

// es para aplicar el middleware de la hora a toda la app
app.use(horaMiddleware);

app.use("/", indexRouter);

app.use("/enroute", validarHora, endrouteRouter);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
