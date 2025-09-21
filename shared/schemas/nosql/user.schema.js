import mongoose from "../../polyglot-db/mongo.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [String],
    resumeUrl: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
