// import models
const User = require('./User');
const Exercise = require('./Exercise');
const UserExercise = require('./UserExercise');
const DayOfWeek = require('./DayOfWeek');
const DayOfWeekUserExercise = require('./DayOfWeekUserExercise');


User.belongsToMany(Exercise, {
    through: {
        model: UserExercise,
        unique: true,
    }
});

Exercise.belongsToMany(User, {
    through: {
        model: UserExercise,
        unique: true,
    }
});

UserExercise.belongsToMany(DayOfWeek, {
    through: {
        model: DayOfWeekUserExercise,
        unique: false,
    }
});

DayOfWeek.belongsToMany(UserExercise, {
    through: {
        model: DayOfWeekUserExercise,
        unique: false,
    }
});

module.exports = {
  User,
  Exercise,
  UserExercise,
  DayOfWeek,
  DayOfWeekUserExercise,
};
