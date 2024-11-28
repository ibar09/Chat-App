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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_entity_1 = require("./entities/message.entity");
const user_entity_1 = require("../user/entities/user.entity");
const conversation_entity_1 = require("../conversation/entities/conversation.entity");
const typeorm_2 = require("typeorm");
let MessageService = class MessageService {
    constructor(messageRepository, userRepository, conversationRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.conversationRepository = conversationRepository;
    }
    async create(userId, conversationId, content) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const conversation = await this.conversationRepository.findOne({
            where: { id: conversationId },
        });
        if (!user || !conversation) {
            throw new Error('User or Conversation not found');
        }
        const message = new message_entity_1.Message();
        message.content = content;
        message.user = user;
        message.conversation = conversation;
        message.createdAt = new Date();
        return await this.messageRepository.save(message);
    }
    findAll() {
        return `This action returns all message`;
    }
    findOne(id) {
        return `This action returns a #${id} message`;
    }
    update(id, updateMessageDto) {
        return `This action updates a #${id} message`;
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(conversation_entity_1.Conversation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MessageService);
//# sourceMappingURL=message.service.js.map