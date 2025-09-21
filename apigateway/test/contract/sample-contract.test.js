import request from "supertest";
import app from "../../src/app.js";

describe("API Contract Test", () => {
  it("GET /health should conform to expected contract", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: expect.any(String),
      uptime: expect.any(Number),
    });
  });
});
