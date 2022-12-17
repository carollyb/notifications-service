import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'oi',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
