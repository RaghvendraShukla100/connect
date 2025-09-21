export const success = (res, data, message = "Success") => {
  return res.json({ success: true, message, data });
};

export const error = (res, message = "Error", status = 500) => {
  return res.status(status).json({ success: false, message });
};
// utils/response.js

/**
 * Success response formatter
 */
const success = (res, data = {}, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Error response formatter
 */
const error = (
  res,
  message = "Internal Server Error",
  statusCode = 500,
  details = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    details,
  });
};

module.exports = { success, error };
