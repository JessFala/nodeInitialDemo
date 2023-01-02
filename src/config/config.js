require('dotenv').config();

//Configuración MySQL

const mysqlConfig = {
    bd_nombre: process.env.MYSQL_BD_NOMBRE,
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USUARIO,
    password: process.env.MYSQL_PASSWORD
};

module.exports =  { mysqlConfig };