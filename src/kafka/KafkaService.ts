import { Kafka, Producer, logLevel } from "kafkajs";

interface IKafkaService {
  createClient(): Kafka;
}

export interface IMessage {
  id: string;
  status: string;
}
export class KafkaService implements IKafkaService {
  private client: Kafka | null = null;

  constructor() {
    this.createClient();
  }

  createClient(): Kafka {
    if (!this.client) {
      const kafka = new Kafka({
        clientId: "orders",
        brokers: ["localhost:29092"],
        logLevel: logLevel.WARN,
      });

      this.client = kafka;
    }

    return this.client;
  }
}
