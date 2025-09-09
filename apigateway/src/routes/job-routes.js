import express from "express";
import validate from "../middleware/validate-request.js";
import { createJob } from "../validations/job.schema.js";

const router = express.Router();

router.post("/", validate(createJob), (req, res) => {
  res
    .status(501)
    .json({ message: "Stub: this should be proxied to job-service" });
});

export default router;
