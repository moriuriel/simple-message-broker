<h1 align="center">Welcome to simple-message-broker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Example of implementing message brokers

## Message Brokers

- RabbitMQ ✅
- Apache Kafka ✅

## Docker

Up docker container

```sh
docker-compose -f docker-compose.dev.yml up
```

## Install

```sh
yarn install
```

## Brokers test

### Kafka

#### Producer

```sh
yarn kafka:producer
```

#### Consumer

```sh
yarn kafka:consumer
```

### RabbitMQ

#### Producer

```sh
yarn amqp:producer
```

#### Consumer

```sh
yarn amqp:consumer
```

## Author

👤 **Uriel Mori Vanso**

- Github: [@moriuriel](https://github.com/moriuriel)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
