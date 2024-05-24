'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    min_invest: DataTypes.INTEGER,
    fund_needed: DataTypes.INTEGER,
    fund_achieved: DataTypes.INTEGER,
    expected_profit: DataTypes.INTEGER,
    commission: DataTypes.INTEGER,
    start_at: DataTypes.DATE,
    finished_at: DataTypes.DATE,
    profit: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};