const sequelize = require('../config/connection');
const { User, Exercise } = require('../models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json'); 
const dayOfWeekData = require('./dayOfWeekData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const exercise = await Exercise.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
