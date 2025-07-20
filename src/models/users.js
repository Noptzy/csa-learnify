'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      Users.belongsTo(models.roles, {
        foreignKey: {
          name: 'role_id',
          type: DataTypes.UUID
        },
        as: 'role',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Users.belongsTo(models.division, {
        foreignKey: {
          name: 'division_id',
          type: DataTypes.UUID
        },
        as: 'division',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });

      Users.hasMany(models.notification, {
        foreignKey: 'user_id',
        as: 'notification'
      });

      Users.hasMany(models.challengeResult, {
        foreignKey: 'user_id',
        as: 'results'
      });

      Users.hasMany(models.certificate, {
        foreignKey: 'user_id',
        as: 'certificate'
      });

      Users.hasMany(models.invite, {
        foreignKey: 'mentor_id',
        as: 'sent_invites'
      });

      Users.hasMany(models.classes, {
        foreignKey: 'mentor_id',
        as: 'mentored_classes'
      });

      Users.belongsToMany(models.classes, {
        through: models.user_classes,
        foreignKey: 'user_id',
        otherKey: 'class_id',
        as: 'joined_classes'
      });
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_photo: DataTypes.TEXT,
    role_id: DataTypes.UUID,
    division_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: true,
  });
  return users;
};