// utils/proxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");
const { SERVICES } = require("./constants");
const logger = require("../config/logger");

/**
 * Setup a proxy for a given service
 * @param {string} serviceName - Name of the service (e.g., 'user', 'job')
 * @returns Proxy middleware
 */
function proxy(serviceName) {
  const target = SERVICES[serviceName];
  if (!target) {
    throw new Error(`Proxy target for service '${serviceName}' not found`);
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: { [`^/api/${serviceName}`]: "" },
    onProxyReq: (proxyReq, req) => {
      logger.debug(`Proxying request to ${target}${req.url}`);
    },
    onError: (err, req, res) => {
      logger.error(`Proxy error for service ${serviceName}:`, err.message);
      res.status(502).json({
        success: false,
        message: `Bad Gateway: Unable to reach ${serviceName} service`,
      });
    },
  });
}

module.exports = proxy;
