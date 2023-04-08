'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game_Stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game_Stat.init({
    User_Name: DataTypes.TEXT,
    Rounds: DataTypes.INTEGER,
    Scores: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game_Stat',
  });
  return Game_Stat;
};