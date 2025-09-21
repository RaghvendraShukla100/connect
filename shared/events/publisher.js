// /shared/events/publisher.js
import { Kafka } from "kafkajs"; // Example using Kafka, can be swapped for RabbitMQ/NATS
import { logger } from "../libs/logger/logger.js";

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || "job-platform",
  brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
});

const producer = kafka.producer();

export const connectProducer = async () => {
  try {
    await producer.connect();
    logger.info("✅ Kafka Producer connected");
  } catch (err) {
    logger.error("❌ Kafka Producer connection failed", err);
  }
};

export const publishEvent = async (topic, event) => {
  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(event) }],
    });
    logger.info(`Event published to topic: ${topic}`);
  } catch (err) {
    logger.error("❌ Event publish failed", err);
  }
};
