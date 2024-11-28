import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationController {
    private readonly conversationService;
    constructor(conversationService: ConversationService);
    create(createConversationDto: CreateConversationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConversationDto: UpdateConversationDto): string;
    remove(id: string): string;
}
