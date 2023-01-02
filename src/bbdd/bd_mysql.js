const { Sequelize } = require('sequelize'); //Requerir CLASE sequelize
const mysql = require('mysql2/promise');
const { mysqlConfig } = require('../config/config');

// variables de conexión a la bd
const { bd_nombre, port, host, username, password } = mysqlConfig;
// Instanciar sequelize para crear una nueva conexión
const sequelize = new Sequelize(bd_nombre, username, password, {
    host,
    dialect: 'mysql',
    port,
    define: {
        timestamps: false
    },
    logging: false // Para ver los logs en la terminal comentar esta línia.
});

const connectSequelize = async () => {
    try {
      // Create database if it does not exist/
      const connection = await mysql.createConnection({
        host,
        port,
        user: username,
        password
      });
      console.log('Connected to MySQL server', username, password);
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${bd_nombre}\`;`);
      await sequelize.sync({ force: false });
      console.log('La conexión con la BDD mySQL se ha establecido correctamente.');
    } catch (error) {
      console.error('Ha sido imposible establecer la conexión con la BDD:', error);
    }
  };
  
module.exports = { connectSequelize, sequelize };