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
exports.Post = void 0;
const class_validator_1 = require("class-validator");
class Post {
    constructor(creatorUid, username, description, postImageUrl, likes, totalLikes, totalComments, createAt, userProfileUrl) {
        this.creatorUid = creatorUid;
        this.username = username;
        this.description = description;
        this.postImageUrl = postImageUrl;
        this.likes = likes;
        this.totalLikes = totalLikes;
        this.totalComments = totalComments;
        this.createAt = createAt;
        this.userProfileUrl = userProfileUrl;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
}
exports.Post = Post;
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "creatorUid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "postImageUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "createAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Post.prototype, "userProfileUrl", void 0);
