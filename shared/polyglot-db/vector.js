import { PineconeClient } from "@pinecone-database/pinecone";

const client = new PineconeClient();

await client.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENV || "us-west1-gcp",
});

console.log("✅ Connected to Vector DB (Pinecone)");

export default client;
