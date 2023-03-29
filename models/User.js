// example.js
const { sq } = require("../config/db");

const { DataTypes } = require("sequelize");

const User = sq.define("user", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
    autoIncrement:true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      fullName: {
        type: DataTypes.STRING, 
      },
      
      age: {
        type: DataTypes.INTEGER,
      },
    
      employed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });

    User.sync({alter: true}).then(() => {
          console.log("User Model synced");
        });

        module.exports = User;
