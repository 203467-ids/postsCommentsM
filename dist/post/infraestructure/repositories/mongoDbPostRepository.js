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
exports.PostRepositoryImpl = void 0;
const postModel_1 = __importDefault(require("../model/postModel"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
class PostRepositoryImpl {
    updateTotalComments(id, comments) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let totalComments;
                const post = yield postModel_1.default.findById(id);
                if (post) {
                    totalComments = post.totalComments + comments;
                }
                const updatedPost = yield postModel_1.default.findByIdAndUpdate(id, // El primer argumento es el ID del documento que deseas actualizar
                { totalComments }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
                );
                return updatedPost;
            }
            catch (error) {
                console.error(`Error al actualizar el post: ${error}`);
                return null;
            }
        });
    }
    likePost(idPost, likes, totalLikes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPost = yield postModel_1.default.findByIdAndUpdate(idPost, // El primer argumento es el ID del documento que deseas actualizar
                { likes, totalLikes }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
                );
                return updatedPost;
            }
            catch (error) {
                console.error(`Error al actualizar el post: ${error}`);
                return null;
            }
        });
    }
    createPost(creatorUid, username, description, postImageUrl, likes, totalLikes, totalComments, createAt, userProfileUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return postModel_1.default.create({
                creatorUid,
                username,
                description,
                postImageUrl,
                likes,
                totalLikes,
                totalComments,
                createAt,
                userProfileUrl
            });
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postDeleted = yield postModel_1.default.findByIdAndDelete(id);
                if (postDeleted) {
                    yield fs_extra_1.default.unlink(path_1.default.resolve(postDeleted.postImageUrl));
                }
                if (!postDeleted) {
                    // El post no se encontró
                    console.log(`Post con ID ${id} no encontrado.`);
                    return false;
                }
                // Post eliminado exitosamente
                console.log(`Post con ID ${id} eliminado.`);
                return true;
            }
            catch (error) {
                // Manejar errores
                console.error(`Error al eliminar el post: ${error}`);
                return false;
            }
        });
    }
    listAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return postModel_1.default.find();
        });
    }
    getPostbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return postModel_1.default.findById(id);
        });
    }
    updatePost(id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield postModel_1.default.findById;
                const updatedPost = yield postModel_1.default.findByIdAndUpdate(id, // El primer argumento es el ID del documento que deseas actualizar
                { description }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
                );
                return updatedPost;
            }
            catch (error) {
                console.error(`Error al actualizar el post: ${error}`);
                return null;
            }
        });
    }
}
exports.PostRepositoryImpl = PostRepositoryImpl;
