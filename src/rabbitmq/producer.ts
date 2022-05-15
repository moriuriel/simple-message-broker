import { RabbitMqService } from "./RabbitmqService";
import { v4 } from "uuid";

const URI = "amqp://guest:guest@localhost:5672";
const QUEUE = "orders";

interface IMessage {
  id: string;
  status: string;
}

async function main() {
  const rabbitmqService = new RabbitMqService();

  const connection = await rabbitmqService.createConnection(URI);

  const channel = await connection.createChannel();

  const payload: IMessage = {
    id: v4(),
    status: "paid",
  };

  await channel.assertQueue(QUEUE, { durable: true });

  await channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(payload)));

  console.log("MESSAGE SEND");
}

main();
