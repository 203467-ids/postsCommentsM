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
exports.CommentRepositoryImpl = void 0;
const commentModel_1 = __importDefault(require("../model/commentModel"));
class CommentRepositoryImpl {
    createComment(postId, creatorUid, description, username, userProfileUrl, createAt, likes, totalReplays) {
        return __awaiter(this, void 0, void 0, function* () {
            return commentModel_1.default.create({
                postId,
                creatorUid,
                description,
                username,
                userProfileUrl,
                createAt,
                likes,
                totalReplays,
            });
        });
    }
    deleteComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commentDeleted = yield commentModel_1.default.findByIdAndDelete(id);
                if (!commentDeleted) {
                    console.log(`comentario con ID ${id} no encontrado.`);
                    return false;
                }
                console.log(`comentario con ID ${id} eliminado.`);
                return true;
            }
            catch (error) {
                console.error(`Error al eliminar el comentario: ${error}`);
                return false;
            }
        });
    }
    listAllComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return commentModel_1.default.find({ postId: id });
        });
    }
    updateComment(id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedComment = yield commentModel_1.default.findByIdAndUpdate(id, // El primer argumento es el ID del documento que deseas actualizar
                { description }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
                );
                return updatedComment;
            }
            catch (error) {
                console.error(`Error al actualizar el post: ${error}`);
                return null;
            }
        });
    }
    likeComment(idComment, likes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedComment = yield commentModel_1.default.findByIdAndUpdate(idComment, // El primer argumento es el ID del documento que deseas actualizar
                { likes }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
                );
                return updatedComment;
            }
            catch (error) {
                console.error(`Error al actualizar el Comentario: ${error}`);
                return null;
            }
        });
    }
}
exports.CommentRepositoryImpl = CommentRepositoryImpl;
