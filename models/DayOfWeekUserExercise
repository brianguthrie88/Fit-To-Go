const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DayOfWeekUserExercise extends Model {}

DayOfWeekUserExercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    day_of_week_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DayOfWeek',
        key: 'id',
      },
    },
    user_excercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserExercise',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'DayOfWeekUserExercise',
  }
);

module.exports = DayOfWeekUserExercise;