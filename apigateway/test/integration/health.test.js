import request from "supertest";
import app from "../../src/app.js";

describe("Health Check API", () => {
  it("should return 200 OK with status and uptime", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("uptime");
    expect(typeof res.body.uptime).toBe("number");
  });
});
