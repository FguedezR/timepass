const validarHora = (req, res, next) => {
  const hora = req.horaNumerica;

  if (hora >= 12 && hora <= 23) {
    next();
  } else {
    const mensaje = "Aún no son las 12 de la mañana";
    res.redirect("/?mensaje" + encodeURIComponent(mensaje));
  }
};
module.exports = validarHora;
