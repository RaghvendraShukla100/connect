// job-routes.js
import express from "express";
const router = express.Router();

// Example: Fetch all jobs
router.get("/", (req, res) => {
  res.json({ message: "Jobs endpoint hit" });
});

export default router;
