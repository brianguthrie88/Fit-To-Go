// import models
const User = require('./User');
const Exercise = require('./Exercise');
const UserExercise = require('./UserExercise');


User.belongsToMany(Exercise, {
    through: {
        model: UserExercise,
        unique: false
    }
});

Exercise.belongsToMany(User, {
    through: {
        model: UserExercise,
        unique: false
    }
});


module.exports = {
  User,
  Exercise,
  UserExercise,
};
