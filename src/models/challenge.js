'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenges extends Model {
    static associate(models) {
      Challenges.belongsTo(models.users, { foreignKey: 'created_by', as: 'creator' });
      Challenges.belongsTo(models.classes, { foreignKey: 'class_id', as: 'class' });
      Challenges.hasMany(models.challenge_results, { foreignKey: 'challenge_id', as: 'results' });
    }
  }
  Challenges.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    min_score: DataTypes.INTEGER,
    created_by: DataTypes.UUID,
    class_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'challenges',
    tableName: 'challenges',
    timestamps: true
  });
  return Challenges;
};
