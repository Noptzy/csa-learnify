"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificates extends Model {
    static associate(models) {
      Certificates.belongsTo(models.challenges, {
        foreignKey: "challenge_id",
        as: "challenge",
      });
      Certificates.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Certificates.init(
    {
      file_url: DataTypes.TEXT,
      issue_date: DataTypes.DATE,
      challenge_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "certificates",
      tableName: "certificates",
      timestamps: true,
    }
  );
  return Certificates;
};
