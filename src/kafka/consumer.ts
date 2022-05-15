import { KafkaService } from "./KafkaService";

async function main() {
  const kafkaService = new KafkaService();

  const client = kafkaService.createClient();

  const consumer = client.consumer({ groupId: "orders" });

  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: "update-order-status",
      fromBeginning: true,
    });

    await consumer.run({
      async eachMessage({ topic, message }) {
        if (message) {
          const prefix = `${topic} - ${message.timestamp}`;

          console.log(`- ${prefix} ${message.value}`);

          const order = message.value?.toString();

          if (order) {
            console.log(JSON.parse(order));
          }
        }
      },
    });

    console.log("Listening to messages!");
  } catch (error) {
    console.log(error);
  }
}

main().catch(console.error);
