const ErrorHttps = (res, mensaje = "Algo sucedio", code = 403) => {
    res.status(code);
    res.json({ Error: mensaje })
}
module.exports = ErrorHttps