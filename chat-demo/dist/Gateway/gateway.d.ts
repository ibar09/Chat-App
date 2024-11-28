import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ServerToClientEvents } from './events/events.gateway';
import { AuthService } from 'src/auth/auth.service';
import { MessageService } from 'src/message/message.service';
export declare class GateWay implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private authService;
    private messageService;
    constructor(authService: AuthService, messageService: MessageService);
    private logger;
    server: Server<any, ServerToClientEvents>;
    afterInit(client: Socket): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    onMessage(message: any): void;
}
