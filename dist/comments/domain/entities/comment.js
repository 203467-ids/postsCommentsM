"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const class_validator_1 = require("class-validator");
class Comment {
    constructor(postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays) {
        this.postId = postId,
            this.creatorUid = creatorUid,
            this.description = description,
            this.username = username,
            this.userProfileUrl = userProfileUrl,
            this.createAt = createAt,
            this.likes = likes,
            this.totalReplays = totalReplays;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
}
exports.Comment = Comment;
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "creatorUid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "userProfileUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Comment.prototype, "createAt", void 0);
