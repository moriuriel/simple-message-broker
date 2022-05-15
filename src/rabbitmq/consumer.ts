import { RabbitMqService } from "./RabbitmqService";

const URI = "amqp://guest:guest@localhost:5672";

const QUEUE = "orders";

async function main() {
  const rabbitmqService = new RabbitMqService();

  const connection = await rabbitmqService.createConnection(URI);

  const channel = await connection.createChannel();

  await channel.assertQueue(QUEUE, { durable: true });

  await channel.consume(QUEUE, (message) => {
    if (message) {
      const order = message?.content.toString();

      console.log(JSON.parse(order));

      channel.ack(message);
    }
  });
}

main();
