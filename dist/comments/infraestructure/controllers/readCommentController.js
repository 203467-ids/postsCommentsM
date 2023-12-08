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
exports.ReadCommentController = void 0;
class ReadCommentController {
    constructor(readCommentUseCase) {
        this.readCommentUseCase = readCommentUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const comment = yield this.readCommentUseCase.run(id);
                console.log(comment);
                if (comment) {
                    return res.status(200).send({
                        status: 'success',
                        data: comment,
                        message: 'Lista de comentarios obtenida exitosamente',
                    });
                }
                //console.log(users)
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontraron comentarios',
                });
            }
            catch (error) {
                console.error("Error fetching all comentarios:", error);
                return res.status(500).send({
                    status: "error",
                    data: [],
                    message: "Error al recuperar comentarios",
                });
            }
        });
    }
}
exports.ReadCommentController = ReadCommentController;
