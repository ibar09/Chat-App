import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Message } from 'src/message/entities/message.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    conversations: Conversation[];
    messages: Message[];
}
