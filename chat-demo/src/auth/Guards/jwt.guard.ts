import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WsException } from '@nestjs/websockets';
import { Observable } from 'rxjs';

@Injectable()
export class WsJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const client = context.switchToWs().getClient();
    const token = WsJwtAuthGuard.extractTokenFromHandshake(client);

    if (!token) {
      throw new WsException('Unauthorized');
    }

    return super.canActivate(context);
  }

  static extractTokenFromHandshake(client: any): string | null {
    const authHeader = client.handshake?.headers?.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.split(' ')[1];
    }
    return null;
  }
}
