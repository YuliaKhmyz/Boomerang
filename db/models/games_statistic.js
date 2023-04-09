'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games_statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Games_statistic.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
      onDelete: 'cascade',
    },
    scores: {
      type: DataTypes.INTEGER,
    },
    enemies_count: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Games_statistic',
  });
  return Games_statistic;
};