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
exports.CreateCommentController = void 0;
class CreateCommentController {
    constructor(createCommentUseCase) {
        this.createCommentUseCase = createCommentUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let post, comments;
                const { postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays, } = req.body;
                const createComment = yield this.createCommentUseCase.run(postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays);
                /*post = await postModel.findById(postId)
                console.log(post)
                if(post){
                    comments=post.totalComments+1
                    console.log(comments)
                    await postModel.findByIdAndUpdate(
                        postId,
                        { totalComments: comments },
                        { new: true } // Esto es opcional y devuelve el documento actualizado
                      );
                  }*/
                if (createComment instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: createComment.message,
                    });
                }
                if (createComment) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            createComment
                        },
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "Se registró un error inesperado mientras se registraban los datos del comentario.",
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
                });
            }
        });
    }
}
exports.CreateCommentController = CreateCommentController;
