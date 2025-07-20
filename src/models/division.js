'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Divisions extends Model {
    static associate(models) {
      Divisions.hasMany(models.users, { foreignKey: 'division_id', as: 'users' });
    }
  }
  Divisions.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'divisions',
    tableName: 'divisions',
    timestamps: true
  });
  return Divisions;
};
