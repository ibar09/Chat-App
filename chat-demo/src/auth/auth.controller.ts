import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCredentials } from './types/login-credentials.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginCredentials: LoginCredentials) {
    const user = await this.authService.validateUser(loginCredentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() user: any) {
    return this.authService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  findAll() {
    return this.authService.findAll();
  }
}
