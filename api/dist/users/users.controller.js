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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const payload_dto_1 = require("../auth/dto/payload.dto");
const token_payload_param_1 = require("../auth/params/token-payload.param");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const auth_token_guard_1 = require("../auth/guard/auth-token.guard");
const common_1 = require("@nestjs/common");
let UsersController = class UsersController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    findOneUser(tokenPayload) {
        return this.userService.getUser(tokenPayload);
    }
    createUser(body) {
        return this.userService.create(body);
    }
    updateUser(body, tokenPayload) {
        return this.userService.update(body, tokenPayload);
    }
    deleteUser(tokenPayload) {
        return this.userService.delete(tokenPayload);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Find a user' }),
    (0, common_1.UseGuards)(auth_token_guard_1.AuthTokenGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.dto").ResponseFindUserDto }),
    __param(0, (0, token_payload_param_1.TokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payload_dto_1.PayloadDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_token_guard_1.AuthTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a user' }),
    openapi.ApiResponse({ status: 201, type: require("./dto/response.dto").ResponseCreateUserDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_token_guard_1.AuthTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user' }),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.dto").ResponseUpdateUserDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, token_payload_param_1.TokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto,
        payload_dto_1.PayloadDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_token_guard_1.AuthTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user' }),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.dto").ResponseDeleteUserDto }),
    __param(0, (0, token_payload_param_1.TokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payload_dto_1.PayloadDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map