const express = require('express');

const router = express.Router();

const tareasRouter = require("./TareasRouter");

router.use('/tareas', tareasRouter)


module.exports = router