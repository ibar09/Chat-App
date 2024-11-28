import { User } from 'src/user/entities/user.entity';
import { Message } from 'src/message/entities/message.entity';
export declare class Conversation {
    id: number;
    users: User[];
    messages: Message[];
}
