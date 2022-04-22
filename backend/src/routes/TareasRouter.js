const express = require('express')
const router = express.Router()


const { getTareas, getTareasId, saveTareas, updateTareas, deleteTareas } = require("../controllers/TareasController");

router.get('/', getTareas);
router.get('/:id', getTareasId);
router.post('/addTarea', saveTareas);
router.put('/updateTarea/:id', updateTareas)
router.delete('/deleteTarea/:id', deleteTareas)


module.exports = router