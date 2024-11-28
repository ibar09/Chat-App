import { Conversation } from 'src/conversation/entities/conversation.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Message {
    id: number;
    content: string;
    user: User;
    conversation: Conversation;
    createdAt: Date;
}
