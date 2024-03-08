// import models
const User = require('./User');
const Exercise = require('./Exercise');
const UserExercise = require('./UserExercise');
const DayOfWeek = require('./DayOfWeek');
const DayOfWeekUserExercise = require('./DayOfWeekUserExercise');


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
