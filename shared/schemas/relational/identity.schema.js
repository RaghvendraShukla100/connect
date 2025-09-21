// Identity schema for SQL (Postgres/MySQL) using Sequelize or any ORM
import { DataTypes } from "sequelize";
import { sequelize } from "../../polyglot-db/postgres.js";

export const Identity = sequelize.define(
  "identity",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin", "seller"),
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
  }
);
