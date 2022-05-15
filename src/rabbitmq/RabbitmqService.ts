import { connect, Connection } from "amqplib";

export class RabbitMqService {
  private rabbitmqConn: Connection | null = null;

  async createConnection(uri: string): Promise<Connection> {
    if (!this.rabbitmqConn) {
      this.rabbitmqConn = await connect(uri);
    }

    return this.rabbitmqConn;
  }
}
