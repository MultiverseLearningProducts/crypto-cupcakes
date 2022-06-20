const {Cupcake} = require('./Cupcake');
const {User} = require('./User');
const {sequelize, Sequelize} = require('./db');

Cupcake.belongsTo(User, {foreignKey: 'ownerId'}); // Cupcake table, there will be an ownerId <- FK
User.hasMany(Cupcake);

module.exports = {
    Cupcake,
    User,
    sequelize,
    Sequelize
};
