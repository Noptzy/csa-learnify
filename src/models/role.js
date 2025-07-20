'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      Roles.hasMany(models.users, {
        foreignKey: 'role_id',
        as: 'users'
      });
    }
  }

  Roles.init({
    title: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'roles',
    tableName: 'roles',
    timestamps: true
  });

  return Roles;
};
