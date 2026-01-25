const horaMiddleware = (req, res, next) => {
  const now = new Date();
  const horas = now.getHours();
  const minutos = now.getMinutes();

  req.horaActual = `${horas}:${minutos < 10 ? "0" + minutos : minutos}`;
  req.horaNumerica = horas;

  next()
};
module.exports = horaMiddleware