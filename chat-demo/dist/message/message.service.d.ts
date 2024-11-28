import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { User } from 'src/user/entities/user.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Repository } from 'typeorm';
export declare class MessageService {
    private messageRepository;
    private userRepository;
    private conversationRepository;
    constructor(messageRepository: Repository<Message>, userRepository: Repository<User>, conversationRepository: Repository<Conversation>);
    create(userId: number, conversationId: number, content: string): Promise<Message>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMessageDto: UpdateMessageDto): string;
    remove(id: number): string;
}
