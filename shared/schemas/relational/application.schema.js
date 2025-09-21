import { DataTypes } from "sequelize";
import { sequelize } from "../../polyglot-db/postgres.js";

export const Application = sequelize.define(
  "application",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: { type: DataTypes.UUID, allowNull: false },
    jobId: { type: DataTypes.UUID, allowNull: false },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected"),
      defaultValue: "pending",
    },
  },
  { timestamps: true }
);
