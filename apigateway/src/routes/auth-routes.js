import express from "express";
import validate from "../middleware/validate-request.js";
import { register, login } from "../validations/auth.schema.js";

const router = express.Router();

router.post("/register", validate(register), (req, res) => {
  res
    .status(501)
    .json({ message: "Stub: this route should be proxied to auth-service" });
});

router.post("/login", validate(login), (req, res) => {
  res
    .status(501)
    .json({ message: "Stub: this route should be proxied to auth-service" });
});

export default router;
