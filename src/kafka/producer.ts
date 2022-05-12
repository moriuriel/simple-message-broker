import { IMessage, KafkaService } from "./KafkaService";
import { v4 } from "uuid";

async function main() {
  const kafkaService = new KafkaService();

  const client = kafkaService.createClient();

  const payload: IMessage = {
    id: v4(),
    status: "paid",
  };

  const producer = client.producer();

  try {
    await producer.connect();
    await producer.send({
      topic: "update-order-status",
      messages: [
        {
          value: JSON.stringify(payload),
        },
      ],
    });

    console.log("MESSAGE SEND");
  } catch (error) {
    console.log(error);
  } finally {
    await producer.disconnect();
  }
}

main();
