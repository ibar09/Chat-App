"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WsJwtAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsJwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const websockets_1 = require("@nestjs/websockets");
let WsJwtAuthGuard = WsJwtAuthGuard_1 = class WsJwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        const client = context.switchToWs().getClient();
        const token = WsJwtAuthGuard_1.extractTokenFromHandshake(client);
        if (!token) {
            throw new websockets_1.WsException('Unauthorized');
        }
        return super.canActivate(context);
    }
    static extractTokenFromHandshake(client) {
        const authHeader = client.handshake?.headers?.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            return authHeader.split(' ')[1];
        }
        return null;
    }
};
exports.WsJwtAuthGuard = WsJwtAuthGuard;
exports.WsJwtAuthGuard = WsJwtAuthGuard = WsJwtAuthGuard_1 = __decorate([
    (0, common_1.Injectable)()
], WsJwtAuthGuard);
//# sourceMappingURL=jwt.guard.js.map