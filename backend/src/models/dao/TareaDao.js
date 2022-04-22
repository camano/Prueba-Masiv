const TareaDao = (tarea, estado) => {
    const listarTareas = async() => {
        let cond = {
            include: {
                model: estado,
            },
            order: [
                ["tarea_id", "DESC"]
            ]
        };
        return tarea.findAll(cond);
    };
    const tareaFindById = async(id) => {        
        let cond = {
            include: {
                model: estado
            },
            where: {
                tarea_id: id
            }
        };
        return tarea.findOne(cond);
    };
    const tareaSave = async(tareas) => {
        return tarea.create(tareas);
    };
    const tareaDelete = async(id) => {
        let cond = {
            where: {
                tarea_id: id
            }
        }
        return tarea.destroy(cond);
    }
    const tareaUpdate = async(tareas,id) => {
        let cond = {
            where: {
                tarea_id: id
            }
        }
        return tarea.update(tareas, cond);
    }
    return {
        listarTareas,
        tareaDelete,
        tareaFindById,
        tareaSave,
        tareaUpdate
    };
};

module.exports = TareaDao;