import express from "express";
import validate from "../middleware/validate-request.js";
import { updateProfile } from "../validations/profile.schema.js";

const router = express.Router();

router.put("/:userId", validate(updateProfile), (req, res) => {
  res
    .status(501)
    .json({ message: "Stub: this should be proxied to profile-service" });
});

export default router;
