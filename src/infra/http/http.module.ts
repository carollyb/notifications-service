import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class HttpModule {}
