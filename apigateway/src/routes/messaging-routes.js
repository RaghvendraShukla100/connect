import express from "express";

const router = express.Router();

router.get("/ws", (req, res) => {
  res.status(501).json({
    message:
      "Stub: configure WebSocket proxy separately (e.g., NGINX or dedicated socket gateway).",
  });
});

export default router;
