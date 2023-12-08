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
exports.LikePostController = void 0;
const postModel_1 = __importDefault(require("../model/postModel"));
class LikePostController {
    constructor(likePostUseCase) {
        this.likePostUseCase = likePostUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                const userId = req.body.userId;
                let updatedLikes;
                const post = yield postModel_1.default.findById(id);
                if (post) {
                    post.likes.push(userId);
                    updatedLikes = yield this.likePostUseCase.run(id, post.likes, post.likes.length);
                }
                return res.status(201).json({
                    status: "success",
                    message: "like con éxito",
                    data: updatedLikes,
                });
            }
            catch (error) {
                console.error("Error actualizando like:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Error al actualizar el like",
                });
            }
        });
    }
}
exports.LikePostController = LikePostController;
