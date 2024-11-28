import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [
    TypeOrmModule.forFeature([Message]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Conversation]),
  ],
  exports: [MessageService],
})
export class MessageModule {}
