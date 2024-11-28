import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationService {
    create(createConversationDto: CreateConversationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConversationDto: UpdateConversationDto): string;
    remove(id: number): string;
}
