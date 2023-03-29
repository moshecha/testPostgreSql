const { Sequelize } = require("sequelize");

 

// Connection parameters
const sequelize = new Sequelize('telasonce_db', 'root', 'w3pmL72kLCzyCJqpDlE9zZMG0NuZQ1EA',{
    host: 'dpg-cf3ihph4rebfa0p7hcqg-a.oregon-postgres.render.com', 
    dialect: 'postgres',
    dialectOptions: {ssl: true,
        native:true},
        pool: {
            max: 5,
            min: 0,
            idle: 300000,
            acquire: 300000
          },
    // port: 5432
  })

const testDbConnection = async () => {
      try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    };

    module.exports = { sq: sequelize, testDbConnection };
