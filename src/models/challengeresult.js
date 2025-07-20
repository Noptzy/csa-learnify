"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChallengeResults extends Model {
    static associate(models) {
      ChallengeResults.belongsTo(models.challenges, {
        foreignKey: "challenge_id",
        as: "challenge",
      });
      ChallengeResults.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  ChallengeResults.init(
    {
      challenge_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
      score: DataTypes.FLOAT,
      status: DataTypes.STRING,
      feedback: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "challenge_results",
      tableName: "challenge_results",
      timestamps: true,
    }
  );
  return ChallengeResults;
};
