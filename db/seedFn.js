const {sequelize} = require('./db');
const {User} = require('./');
const {Cupcake} = require('./');
const {users, cupcakes} = require('./seedData');

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // recreate db
    const createdUsers = await User.bulkCreate(users);
    const createdCupcakes = await Cupcake.bulkCreate(cupcakes);
    for(let i=0; i<createdCupcakes.length; ++i){
        let cupcake = createdCupcakes[i];
        const userId = createdUsers[i % 3].id;
        await cupcake.setUser(userId);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = seed;
