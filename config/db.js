const { Sequelize } = require("sequelize");

 

// Connection parameters
const sequelize = new Sequelize('telasonce_db', 'root', 'w3pmL72kLCzyCJqpDlE9zZMG0NuZQ1EA',{
    host: 'dpg-cf3ihph4rebfa0p7hcqg-a.oregon-postgres.render.com', 
    dialect: 'postgres',
    dialectOptions: {ssl: true,
        native:true},
        acquireConnectionTimeout: 5000,
        pool: {
          min: 0,
          max: 10,
          createTimeoutMillis: 8000,
          acquireTimeoutMillis: 8000,
          idleTimeoutMillis: 8000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
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
