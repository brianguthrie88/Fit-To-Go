const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserExercise extends Model {}

UserExercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exercise',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserExercise',
  }
);

module.exports = UserExercise;