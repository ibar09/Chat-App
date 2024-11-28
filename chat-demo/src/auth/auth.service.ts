import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginCredentials } from './types/login-credentials.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginCredentials: LoginCredentials): Promise<any> {
    const user = await this.userService.findByEmail(loginCredentials.email);
    if (
      user &&
      (await bcrypt.compare(loginCredentials.password, user.password))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
  async register(user: any) {
    return this.userService.create(user);
  }
  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
  findAll() {
    return this.userService.findAll();
  }
}
