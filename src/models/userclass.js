'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserClasses extends Model {
    static associate(models) {}
  }
  UserClasses.init({
    user_id: DataTypes.UUID,
    class_id: DataTypes.UUID,
    role_in_class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_classes',
    tableName: 'user_classes',
    timestamps: true
  });
  return UserClasses;
};