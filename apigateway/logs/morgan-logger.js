// morgan-logger.js
// HTTP request logger middleware (uses morgan + winston)

import morgan from "morgan";
import logger from "./logger.js";

// Stream logs from Morgan → Winston
const stream = {
  write: (message) => logger.http(message.trim()),
};

// Morgan setup
const morganMiddleware = morgan("combined", { stream });

export default morganMiddleware;
