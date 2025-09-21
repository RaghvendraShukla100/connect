import logger from "../../src/config/logger.js";

describe("Logger", () => {
  it("should have info, warn, and error methods", () => {
    expect(logger.info).toBeDefined();
    expect(logger.warn).toBeDefined();
    expect(logger.error).toBeDefined();
    expect(typeof logger.info).toBe("function");
  });
});
