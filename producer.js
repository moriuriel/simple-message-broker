const { Kafka } = require("kafkajs");
const { v4: uuidv4 } = require("uuid");

const kafkaClient = new Kafka({
  clientId: "message",
  brokers: ["localhost:9093"],
});

const kafkaProducer = kafkaClient.producer();

async function main() {
  await kafkaProducer.connect();

  const order = JSON.stringify({ id: uuidv4(), status: "PAID" });

  await kafkaProducer.send({
    topic: "message-broker-topic",
    messages: [
      {
        value: order,
        status: "ok",
      },
    ],
  });

  console.log(chalk.cyan("Message to send consumer"));
}

main().catch(console.error);
