import { Client } from "@elastic/elasticsearch";

const client = new Client({
  node: process.env.ELASTIC_NODE || "http://localhost:9200",
  auth: {
    username: process.env.ELASTIC_USER || "elastic",
    password: process.env.ELASTIC_PASSWORD || "changeme",
  },
});

client
  .ping()
  .then(() => console.log("✅ Connected to Elasticsearch"))
  .catch((err) => console.error("❌ Elasticsearch ping failed:", err));

export default client;
