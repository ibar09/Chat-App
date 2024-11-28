import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { User } from 'src/user/entities/user.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
  ) {}
  async create(
    userId: number,
    conversationId: number,
    content: string,
  ): Promise<Message> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const conversation = await this.conversationRepository.findOne({
      where: { id: conversationId },
    });

    if (!user || !conversation) {
      throw new Error('User or Conversation not found');
    }

    const message = new Message();
    message.content = content;
    message.user = user;
    message.conversation = conversation;
    message.createdAt = new Date();

    return await this.messageRepository.save(message);
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
