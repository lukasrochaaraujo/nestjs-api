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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
let TaskController = class TaskController {
    constructor() {
        this.tasks = [
            { id: 1, description: 'Test' }
        ];
    }
    async getAll() {
        return this.tasks;
    }
    async getById(res, id) {
        const task = this.tasks.find((t) => t.id == id);
        if (task)
            res.status(common_1.HttpStatus.OK).json(task);
        res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
    create(task) {
        this.tasks.push(task);
        return task;
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "create", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [])
], TaskController);
//# sourceMappingURL=task.controller.js.map