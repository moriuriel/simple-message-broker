const { Kafka } = require("kafkajs");

const kafkaClient = new Kafka({
  clientId: "message",
  brokers: ["localhost:9093"],
});

const kafkaConsumer = kafkaClient.consumer({ groupId: "group-id-test" });

function updateOrderStatus({ orderId, status }) {
  console.log(`Order ${orderId} is updated with status of ${status}`);
}

async function main() {
  await kafkaConsumer.connect();

  await kafkaConsumer.subscribe({
    topic: "message-broker-topic",
  });

  await kafkaConsumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value);

      updateOrderStatus({ orderId: order.id, status: order.status });
    },
  });
}

main().catch(console.error);
