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
exports.CreateCommentUseCase = void 0;
class CreateCommentUseCase {
    constructor(commentRepository, rabbit) {
        this.commentRepository = commentRepository;
        this.rabbit = rabbit;
    }
    run(postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //conexion a rabbit
                yield this.rabbit.connect();
                const registerComment = yield this.commentRepository.createComment(postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays);
                if (registerComment === null) {
                    return null;
                }
                //Creacion y publicacion de data con mensaje
                let totalComments = 0;
                const data = {
                    postId: postId,
                    totalComments: totalComments + 1,
                };
                yield this.rabbit.publishMessage('total-comments', 'total.count', { data });
                return registerComment;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateCommentUseCase = CreateCommentUseCase;
