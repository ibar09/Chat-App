import { AuthService } from './auth.service';
import { LoginCredentials } from './types/login-credentials.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginCredentials: LoginCredentials): Promise<{
        token: string;
    }>;
    register(user: any): Promise<import("../user/entities/user.entity").User>;
    findAll(): Promise<import("../user/entities/user.entity").User[]>;
}
