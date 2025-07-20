'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    static associate(models) {
      Materials.belongsTo(models.users, { foreignKey: 'created_by', as: 'creator' });
      Materials.belongsTo(models.classes, { foreignKey: 'class_id', as: 'class' });
      Materials.hasMany(models.questions, { foreignKey: 'material_id', as: 'questions' });
    }
  }
  Materials.init({
    created_by: DataTypes.UUID,
    class_id: DataTypes.UUID,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    file_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'materials',
    tableName: 'materials',
    timestamps: true
  });
  return Materials;
};