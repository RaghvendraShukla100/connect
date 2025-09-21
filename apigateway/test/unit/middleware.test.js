import { errorHandler } from "../../src/middleware/error-handler.js";

describe("Error Handler Middleware", () => {
  it("should handle errors and return JSON", () => {
    const err = new Error("Test error");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Test error" })
    );
  });
});
