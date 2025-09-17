// cors.js
// CORS policy config

import cors from "cors";

export default cors({
  origin: ["http://localhost:3000"], // Allowed frontends
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});
