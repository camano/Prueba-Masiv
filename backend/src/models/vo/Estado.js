const { sequelize } = require('../../config/DbConfig');
const { DataTypes } = require('sequelize');

const Estado = sequelize.define("estados", {
    estado_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado_nombre: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: "estados"
});

module.exports = Estado