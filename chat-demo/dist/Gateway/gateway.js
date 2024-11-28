"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GateWay = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const jwt_guard_1 = require("../auth/Guards/jwt.guard");
const auth_service_1 = require("../auth/auth.service");
const message_service_1 = require("../message/message.service");
let GateWay = class GateWay {
    constructor(authService, messageService) {
        this.authService = authService;
        this.messageService = messageService;
        this.logger = new common_1.Logger('GateWay');
    }
    afterInit(client) {
        this.logger.log('Gateway initialized');
        client.use(async (req, next) => {
            console.log('test');
            const token = jwt_guard_1.WsJwtAuthGuard.extractTokenFromHandshake(req);
            if (!token) {
                return next(new websockets_1.WsException('Unauthorized'));
            }
            else {
                try {
                    const payload = await this.authService.validateToken(token);
                }
                catch (e) {
                    return next(new websockets_1.WsException('Unauthorized'));
                }
                next();
            }
        });
    }
    handleConnection(socket) {
        this.logger.log(`Client connected: ${socket.id}`);
    }
    handleDisconnect(socket) {
        this.logger.log(`Client disconnected: ${socket.id}`);
    }
    onMessage(message) {
        this.logger.log(message);
        this.server.emit('reply', message);
    }
};
exports.GateWay = GateWay;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], GateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GateWay.prototype, "onMessage", null);
exports.GateWay = GateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        message_service_1.MessageService])
], GateWay);
//# sourceMappingURL=gateway.js.map