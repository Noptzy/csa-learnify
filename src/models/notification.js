"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    static associate(models) {
      Notifications.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Notifications.init(
    {
      message: DataTypes.STRING,
      is_read: DataTypes.BOOLEAN,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "notifications",
      tableName: "notification",
      timestamps: true,
    }
  );
  return Notifications;
};
