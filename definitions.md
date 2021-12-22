# Definitions About RabbitMQ

RabbitMQ is the most popular open source message broker. Is lightweight and easy to deploy. It supports multiple messaging protocols(MQTT, AMQP and STOMP). Has a decent perfomance and strong community. 

A normal work queue setup in RabbitMQ looks like:

![Work Queues Setup](images/queue-setup.png)

There are 3 important parts in the setup.

1. **Producer.** A program that sends messages is a producer (represented by P in the diagram).

2. **Queue.** Messages are stored inside a queue. It's essentially a large message buffer. A queue is onlu bound by the host's memory and disk limits (represented by the red rectangular boxes in the diagram).

3. **Consumer.** Is a program that mostly waits to receive messages (represented by C1 & C2 in the diagram).

There can be multiple producers and consumers to a queue. Consuming a message from the queue and performing a task based on the message normally takes time. For that es recomended implement multiple consumers for a quere, so that when a consumer is busy, other consumer can read from the queue and perform the task.

If one of the consumers starts a long task and dies with it only partly done. If the worker crashes, we will lose the message it was just processing. In order to make sure a message is never lost, RabbitMQ supports message **acknowledgments**.

An **acknowledgement** is sent back by the consumer to tell RabbitMQ that a particular message has been received, processed and that RabbitMQ is free to delete it. If there are other consumers online at the same time, it will then quickly redeliver it to another consumer.

## Architecture

![basic architecture](images/basic-architecture.png)

* **General purpose message broker.** Uses variations of request/reply, point to point and pub-sub communication patterns.

* **Smart broker / dumb consumer model.** Consistent delivery of messages to consumers, at around the same speed as the broker monitors the consumer state.

* **Mature platform.** Well supported, available for java, client libraries, .NET, ruby, node.js and others.

* **Communication.** Can be synchronous or asynchronous.

* **Deployment scenarios.** Provides distributed deployment scenarios.

* **Multi-node cluster to cluster deferation.** Does not reply on external services, however, specific cluster formation plugins can use DNS, APIs, Consult, etc.

## Performace

Can also process a million messages per second but requires more resources (around 30 nodes). 

## Use Cases

Can be used when web servers need to quickly respond to requests. This eliminates the need to perform resource-intensive activities while the user waits for a result. Is also used to convey a message to various recipients for consumption or to share loads between workers under high load (20K+ messages/second).

Scenarios that can be used for:

* Applications that need to sopport legacy protocols, such as STOMP, MQTT, AMQP, 0-9-1.

* Granular control over consistency/set of guarantees in a per-message basis.

* Complex routing to consumers.

* Applications that need a variety of publicash/subscribe, point-to-point request/reply messaging capabilities.

## Bibliografy

* https://betterprogramming.pub/implementing-rabbitmq-with-node-js-93e15a44a9cc 

* https://www.upsolver.com/blog/kafka-versus-rabbitmq-architecture-performance-use-case