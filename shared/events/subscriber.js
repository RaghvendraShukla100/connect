// /shared/events/subscriber.js
import { Kafka } from "kafkajs";
import { logger } from "../libs/logger/logger.js";

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || "job-platform",
  brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
});

const consumer = kafka.consumer({
  groupId: process.env.KAFKA_GROUP_ID || "job-platform-group",
});

export const connectConsumer = async (topic, handleEvent) => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const event = JSON.parse(message.value.toString());
        logger.info(`Event received from topic: ${topic}`);
        await handleEvent(event);
      },
    });

    logger.info(`✅ Kafka Consumer connected & subscribed to topic: ${topic}`);
  } catch (err) {
    logger.error("❌ Kafka Consumer error", err);
  }
};
