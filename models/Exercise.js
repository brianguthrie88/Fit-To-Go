const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    muscle_group: {
      type: DataTypes.STRING,
    },
    is_weighted: {
        type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intervals: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Exercise',
  }
);

module.exports = Exercise;