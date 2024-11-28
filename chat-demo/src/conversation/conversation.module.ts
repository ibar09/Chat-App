import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';

@Module({
  controllers: [ConversationController],
  imports: [TypeOrmModule.forFeature([Conversation])],

  providers: [ConversationService],
})
export class ConversationModule {}
