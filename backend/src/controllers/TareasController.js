const { TareaRepository } = require("../models/index");
const Exception = require("../utils/handleError");
const moment = require("moment");
/**
 * localhost:3001/api/tareas
 */
const getTareas = async (req, res) => {
  try {
    res.send(await TareaRepository.listarTareas());
  } catch (error) {
    Exception(res, "Hubo un error en el controlador ", 403);
  }
};

/**
 * localhost:3001/api/tareas/:id
 */
const getTareasId = async (req, res) => {
  try {
    let id = req.params.id;
    let tareaXid = await TareaRepository.tareaFindById(id);
    if (!tareaXid) {
      Exception(res, "La tarea no existe", 403);
      return;
    }
    res.json(tareaXid);
  } catch (error) {
    Exception(res, "Hubo un error en el controlador ", 403);
  }
};
/**
 * localhost:3001/api/tareas/addTarea
 */
const saveTareas = async (req, res) => {
  try {
    let { tarea_descripcion, estado_id, creado } = req.body;
    var fecha = moment().format("YYYY-MM-DD");
    let tarea = {
      tarea_descripcion,
      estado_id,
      creado,
      fecha,
    };
    const taraSave = await TareaRepository.tareaSave(tarea);
    if (!taraSave) {
      return Exception(
        res,
        "No se pudo guardar la tarea por favor revisar los datos enviados  ",
        403
      );
    }
    let mensaje = {
      mensaje: "La tarea fue creada ",
      tarea: taraSave,
    };
    res.json(mensaje);
  } catch (error) {
    console.log("error : ", error);
    Exception(res, "Hubo un poblema a guardar la tarea", 403);
  }
};
/**
 * localhost:3001/api/tareas/updateTarea/:id
 */
const updateTareas = async (req, res) => {
  try {
    let id = req.params.id;
    let { tarea_descripcion, estado_id, creado, fecha } = req.body;
    
    let tareaXid = await TareaRepository.tareaFindById(id);
    if (!tareaXid) {
      Exception(res, "La tarea no existe", 403);
      return;
    }
    let tarea = {
      tarea_descripcion : tareaXid.tarea_descripcion,
      estado_id,
      creado : tareaXid.creado,
      fecha : tareaXid.fecha,
    };
    const updateTarea = await TareaRepository.tareaUpdate(tarea, id);
    if (!updateTarea) {
      return Exception(res, "Hubo un problema actualizar la tarea", 403);
    }
    let respuesta = {
      mensaje: "Se actualizo la tarea",
    };
    res.json(respuesta);
  } catch (error) {
    console.error("Error :", error);
    Exception(res, "Hubo un problema al actualizar la tarea ", 403);
  }
};
/**
 * localhost:3001/api/tareas/deleteTarea/:id
 */
const deleteTareas = async (req, res) => {
  try {
    let id = req.params.id;
    let tareaXid = await TareaRepository.tareaFindById(id);
    if (!tareaXid) {
      Exception(res, "La tarea no existe", 403);
      return;
    }
    const deletetarea = await TareaRepository.tareaDelete(id);
    if (deleteTareas > 0) {
      return Exception(res, "No se pudo eliminar la tarea : " + id, 403);
    }
    res.json({ mensaje: "Se elimino correctamente" });
  } catch (error) {
    console.error(error);
    Exception(res, "Hubo un problema en eliminar la tarea");
  }
};

module.exports = {
  getTareas,
  getTareasId,
  saveTareas,
  updateTareas,
  deleteTareas,
};
