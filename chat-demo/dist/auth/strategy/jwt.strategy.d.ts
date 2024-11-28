import { ConfigService } from '@nestjs/config';
import { Payload } from '../types/payload.interface';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(payload: Payload): Promise<{
        id: number;
        username: string;
        email: string;
        conversations: import("../../conversation/entities/conversation.entity").Conversation[];
        messages: import("../../message/entities/message.entity").Message[];
    }>;
}
export {};
