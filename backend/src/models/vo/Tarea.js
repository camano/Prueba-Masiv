const { sequelize } = require('../../config/DbConfig');
const { DataTypes } = require('sequelize');

const Tarea = sequelize.define("tarea", {
    tarea_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarea_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estado_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "estados",
            key: "estado_id"
        }
    },
    creado: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    timestamps: false,
    tableName: "tarea"
});


module.exports = Tarea