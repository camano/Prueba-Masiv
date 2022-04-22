/**
 * Llamando vo de la tabla
 */
const tarea = require('./vo/Tarea')
const estado = require('./vo/Estado')

/**
 * llamando los daos 
 */
const tareaDao = require('./dao/TareaDao')


/**
 * Haciendo las relaciones
 */
tarea.belongsTo(estado, { foreignKey: "estado_id" });


let TareaRepository = tareaDao(tarea, estado);

module.exports = {
    TareaRepository
}