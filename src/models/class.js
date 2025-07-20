'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate(models) {
      Classes.belongsTo(models.users, {
        foreignKey: 'mentor_id',
        as: 'mentor'
      });

      Classes.belongsToMany(models.users, {
        through: models.user_classes,
        foreignKey: 'class_id',
        otherKey: 'user_id',
        as: 'members'
      });

      Classes.hasMany(models.materials, {
        foreignKey: 'class_id',
        as: 'materials'
      });

      Classes.hasMany(models.challenges, {
        foreignKey: 'class_id',
        as: 'challenges'
      });

      Classes.hasMany(models.invites, {
        foreignKey: 'class_id',
        as: 'invites'
      });
    }
  }

  Classes.init({
    name: DataTypes.STRING,
    pict: DataTypes.TEXT,
    description: DataTypes.TEXT,
    mentor_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'classes',
    tableName: 'classes',
    timestamps: true
  });

  return Classes;
};
