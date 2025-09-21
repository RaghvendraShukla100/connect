import { DataTypes } from "sequelize";
import { sequelize } from "../../polyglot-db/postgres.js";

export const Job = sequelize.define(
  "job",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING },
    salary: { type: DataTypes.DECIMAL },
  },
  { timestamps: true }
);
