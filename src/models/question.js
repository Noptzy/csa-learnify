"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate(models) {
      Questions.belongsTo(models.materials, {
        foreignKey: "material_id",
        as: "material",
      });
    }
  }
  Questions.init(
    {
      text: DataTypes.TEXT,
      options: DataTypes.TEXT,
      answer_key: DataTypes.STRING,
      material_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "questions",
      tableName: "questions",
      timestamps: true,
    }
  );
  return Questions;
};
