import { DataTypes } from "sequelize";
import { sequelize } from "../../polyglot-db/postgres.js";

export const Badge = sequelize.define(
  "badge",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: { type: DataTypes.UUID, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
  },
  { timestamps: true }
);
