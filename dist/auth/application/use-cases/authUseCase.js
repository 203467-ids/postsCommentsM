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
exports.AuthUseCase = void 0;
const authCredential_1 = require("../../domain/entities/authCredential");
const authValidate_1 = require("../../domain/validators/authValidate");
const auth_1 = require("../jwt/auth");
class AuthUseCase {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let credentials = new authCredential_1.AuthCredential(email, password);
            let authValidate = new authValidate_1.AuthValidate(credentials);
            yield authValidate.invalidIfHasErrors();
            let user = yield this.authRepository.verifyUser(credentials);
            if (!user) {
                this.invalidCredentialsTrhow();
            }
            let token = yield (0, auth_1.generateToken)(user === null || user === void 0 ? void 0 : user.email);
            return {
                user,
                token
            };
        });
    }
    invalidCredentialsTrhow() {
        throw ({
            http_status: 401,
            errors: [
                {
                    property: "credentials",
                    messages: [
                        "Invalid credentials"
                    ]
                }
            ]
        });
    }
}
exports.AuthUseCase = AuthUseCase;
