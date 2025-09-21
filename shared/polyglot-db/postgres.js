import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.PG_USER || "postgres",
  host: process.env.PG_HOST || "localhost",
  database: process.env.PG_DATABASE || "job_platform",
  password: process.env.PG_PASSWORD || "password",
  port: process.env.PG_PORT || 5432,
});

pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL");
});

pool.on("error", (err) => {
  console.error("❌ PostgreSQL connection error:", err);
});

export default pool;
