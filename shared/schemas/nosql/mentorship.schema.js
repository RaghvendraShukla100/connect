import mongoose from "../../polyglot-db/mongo.js";

const mentorshipSchema = new mongoose.Schema(
  {
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    menteeId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sessionDate: Date,
    topic: String,
  },
  { timestamps: true }
);

export const Mentorship = mongoose.model("Mentorship", mentorshipSchema);
