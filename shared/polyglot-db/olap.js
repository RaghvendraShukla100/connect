// Example for ClickHouse
import { ClickHouse } from "clickhouse";

const clickhouse = new ClickHouse({
  url: process.env.CLICKHOUSE_URL || "http://localhost",
  port: process.env.CLICKHOUSE_PORT || 8123,
  basicAuth: {
    username: process.env.CLICKHOUSE_USER || "default",
    password: process.env.CLICKHOUSE_PASSWORD || "",
  },
  debug: false,
});

clickhouse
  .query("SELECT 1")
  .toPromise()
  .then(() => console.log("✅ Connected to ClickHouse"))
  .catch((err) => console.error("❌ ClickHouse connection error:", err));

export default clickhouse;
