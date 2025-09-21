import mongoose from "../../polyglot-db/mongo.js";

const aiResumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    version: Number,
  },
  { timestamps: true }
);

export const AIResume = mongoose.model("AIResume", aiResumeSchema);
