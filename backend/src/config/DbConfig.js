const { Sequelize } = require("sequelize");
require("dotenv").config();
const database = process.env.POSTGRES_DATABASE;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const sequelize = new Sequelize(
    database,
    username,
    password, {
        host,
        dialect: "postgres",
        port: 5432,
        logging: false,
    }
);


const dbConnect = async() => {
    try {
        await sequelize.authenticate();

        console.log('Conexion A la base de datos fue :: Correcta');
    } catch (error) {
        console.log("Error de conexion ", error);
    }
}

module.exports = { sequelize, dbConnect }