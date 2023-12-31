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
exports.BookCreateController = void 0;
class BookCreateController {
    constructor(createBookUseCase) {
        this.createBookUseCase = createBookUseCase;
    }
    run(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, password } = request.body;
                let authentication = yield this.createBookUseCase.execute(email, password);
                return response.status(200)
                    .json(authentication);
            }
            catch (error) {
                response.status((_a = error.http_status) !== null && _a !== void 0 ? _a : 500)
                    .json({
                    message: "error while authenticating",
                    error: error
                });
            }
        });
    }
}
exports.BookCreateController = BookCreateController;
