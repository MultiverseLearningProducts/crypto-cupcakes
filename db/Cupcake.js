const {Sequelize, sequelize} = require('./db');

const Cupcake = sequelize.define('cupcake', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  age: Sequelize.INTEGER
});

module.exports = { Cupcake };
