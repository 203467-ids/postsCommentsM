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
exports.DeletePostController = void 0;
class DeletePostController {
    constructor(deletePostUseCase) {
        this.deletePostUseCase = deletePostUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const isDeleted = yield this.deletePostUseCase.run(id);
                if (isDeleted) {
                    res.status(200).json({ message: 'Post eliminado.' });
                }
                else {
                    res.status(404).json({ error: 'Post no encontrado o no autorizado para eliminar.' });
                }
            }
            catch (error) {
                console.error('Error al eliminar el post:', error);
                res.status(500).json({ error: 'Error al eliminar el post.' });
            }
        });
    }
}
exports.DeletePostController = DeletePostController;
