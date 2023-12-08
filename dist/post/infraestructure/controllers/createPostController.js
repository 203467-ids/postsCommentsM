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
exports.CreatePostController = void 0;
class CreatePostController {
    constructor(createPostUseCase) {
        this.createPostUseCase = createPostUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { creatorUid, username, description, likes, totalLikes, totalComments, createAt, userProfileUrl } = req.body;
                let postImageUrl;
                if (req.file) {
                    postImageUrl = req.file.path;
                }
                else {
                    // Aquí puedes manejar el caso cuando no hay archivo, por ejemplo, asignando un valor predeterminado o lanzando un error.
                    // postImageUrl = 'valorPorDefecto'; // Asignar un valor predeterminado
                    return res.status(400).json({
                        status: "error",
                        message: "No se proporcionó ningún archivo.",
                    });
                }
                const createPost = yield this.createPostUseCase.run(creatorUid, username, description, postImageUrl, likes, totalLikes, totalComments, createAt, userProfileUrl);
                if (createPost instanceof Error) {
                    return res.status(409).json({
                        status: "error",
                        message: createPost.message,
                    });
                }
                if (createPost) {
                    return res.status(201).json({
                        status: "success",
                        data: {
                            createPost
                        },
                    });
                }
                else {
                    return res.status(500).json({
                        status: "error",
                        message: "Se registró un error inesperado mientras se registraban los datos del post.",
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    status: "error",
                    message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
                });
            }
        });
    }
}
exports.CreatePostController = CreatePostController;
