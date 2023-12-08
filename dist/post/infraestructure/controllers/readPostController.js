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
exports.ReadPostController = void 0;
class ReadPostController {
    constructor(readPostUseCase) {
        this.readPostUseCase = readPostUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.readPostUseCase.run();
                console.log(posts);
                if (posts) {
                    return res.status(200).send({
                        status: 'success',
                        data: posts,
                        message: 'Lista de posts obtenida exitosamente',
                    });
                }
                //console.log(users)
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontraron posts',
                });
            }
            catch (error) {
                console.error("Error fetching all posts:", error);
                return res.status(500).send({
                    status: "error",
                    data: [],
                    message: "Error al recuperar posts",
                });
            }
        });
    }
}
exports.ReadPostController = ReadPostController;
