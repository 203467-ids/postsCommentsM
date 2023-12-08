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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentController = void 0;
const postModel_1 = __importDefault(require("../../../post/infraestructure/model/postModel"));
const commentModel_1 = __importDefault(require("../model/commentModel"));
class DeleteCommentController {
    constructor(deleteCommentUseCase) {
        this.deleteCommentUseCase = deleteCommentUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let post, comments, coment;
                const id = req.params.id;
                coment = yield commentModel_1.default.findById(id);
                const isDeleted = yield this.deleteCommentUseCase.run(id);
                if (coment) {
                    post = yield postModel_1.default.findById(coment.postId);
                }
                console.log(post);
                if (post) {
                    comments = post.totalComments - 1;
                    console.log(comments);
                    yield postModel_1.default.findByIdAndUpdate(post.id, { totalComments: comments }, { new: true } // Esto es opcional y devuelve el documento actualizado
                    );
                }
                if (isDeleted) {
                    res.status(200).json({ message: 'comentario eliminado.' });
                }
                else {
                    res.status(404).json({ error: 'comentario no encontrado o no autorizado para eliminar.' });
                }
            }
            catch (error) {
                console.error('Error al eliminar el comentario:', error);
                res.status(500).json({ error: 'Error al eliminar el comentario.' });
            }
        });
    }
}
exports.DeleteCommentController = DeleteCommentController;
