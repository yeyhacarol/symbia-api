const Sequelize = require("sequelize");

const connection = require("../database/database");

const patient = connection.define(
  "tbl_patient",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    telephone: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    smartphone: {
      type: Sequelize.STRING(11),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    responsibleName: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    responsiblePhone: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

/* patient.sync({ force: true }); */
module.exports = patient;
