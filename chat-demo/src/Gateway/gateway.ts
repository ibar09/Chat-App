import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Logger, NotFoundException, UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { ServerToClientEvents } from './events/events.gateway';
import { WsJwtAuthGuard } from 'src/auth/Guards/jwt.guard';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { AuthService } from 'src/auth/auth.service';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway({ cors: true })
export class GateWay
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
  ) {}

  private logger: Logger = new Logger('GateWay');
  @WebSocketServer()
  server: Server<any, ServerToClientEvents>;

  afterInit(client: Socket) {
    this.logger.log('Gateway initialized');
    client.use(async (req, next) => {
      const token = WsJwtAuthGuard.extractTokenFromHandshake(req);
      if (!token) {
        return next(new WsException('Unauthorized'));
      } else {
        try {
          const payload = await this.authService.validateToken(token);
        } catch (e) {
          return next(new WsException('Unauthorized'));
        }
        next();
      }
    });
  }

  handleConnection(socket: Socket) {
    this.logger.log(`Client connected: ${socket.id}`);
  }
  handleDisconnect(socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('message')
  onMessage(@MessageBody() message: any) {
    this.server.emit('reply', message);
  }
}
