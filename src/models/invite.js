"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invites extends Model {
    static associate(models) {
      Invites.belongsTo(models.users, {
        foreignKey: "mentor_id",
        as: "mentor",
      });
      Invites.belongsTo(models.classes, {
        foreignKey: "class_id",
        as: "class",
      });
    }
  }
  Invites.init(
    {
      mentor_id: DataTypes.UUID,
      class_id: DataTypes.UUID,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "invites",
      tableName: "invites",
      timestamps: true,
    }
  );
  return Invites;
};
