import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginCredentials } from './types/login-credentials.interface';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(loginCredentials: LoginCredentials): Promise<any>;
    login(user: any): Promise<{
        token: string;
    }>;
    register(user: any): Promise<import("../user/entities/user.entity").User>;
    validateToken(token: string): Promise<any>;
    findAll(): Promise<import("../user/entities/user.entity").User[]>;
}
