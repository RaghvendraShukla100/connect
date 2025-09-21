import { DataTypes } from "sequelize";
import { sequelize } from "../../polyglot-db/postgres.js";

export const Payment = sequelize.define(
  "payment",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: { type: DataTypes.UUID, allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    status: {
      type: DataTypes.ENUM("pending", "completed", "failed"),
      defaultValue: "pending",
    },
  },
  { timestamps: true }
);
