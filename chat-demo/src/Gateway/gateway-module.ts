import { Module } from '@nestjs/common';
import { GateWay } from './gateway';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { MessageModule } from 'src/message/message.module';

@Module({
  providers: [GateWay],
  imports: [AuthModule, UserModule, MessageModule],
})
export class GateWayModule {}
