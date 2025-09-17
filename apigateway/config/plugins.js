// plugins.js
// Common gateway plugins (logging, compression, etc.)

import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

export default function applyPlugins(app) {
  app.use(morgan("dev")); // Logging
  app.use(helmet()); // Security headers
  app.use(compression()); // Gzip compression
}
