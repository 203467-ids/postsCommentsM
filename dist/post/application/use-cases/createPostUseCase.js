"use strict";
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
exports.CreatePostUseCase = void 0;
class CreatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    run(creatorUid, username, description, postImageUrl, likes, totalLikes, totalComments, createAt, userProfileUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registerPost = yield this.postRepository.createPost(creatorUid, username, description, postImageUrl, likes, totalLikes, totalComments, createAt, userProfileUrl);
                if (registerPost === null) {
                    return null;
                }
                return registerPost;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
