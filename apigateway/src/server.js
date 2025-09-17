// server.js
import dotenv from "dotenv";
dotenv.config();

import app from "./index.js";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
