import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['frank-toucan-6188-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZnJhbmstdG91Y2FuLTYxODgkjEtmWvgca4OQFZoXS0FYV7jtv88pgxZ04YcITZk',
          password:
            '3om9qMnId-jOHvZ57TaQiRJxYtolCAUjy4s1YV0dh2UkAQlLjQQWK5y0fjGDDtN0HYIJVQ==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
