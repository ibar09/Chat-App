import { MessageService } from './message.service';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMessageDto: UpdateMessageDto): string;
    remove(id: string): string;
}
