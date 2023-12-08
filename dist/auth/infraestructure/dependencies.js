"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authUseCase_1 = require("../application/use-cases/authUseCase");
const authMysqlAdapter_1 = require("./adapters/authMysqlAdapter");
const authController_1 = require("./controllers/authController");
const authMysqlAdpater = new authMysqlAdapter_1.AuthMysqlAdapterRepository();
const authUseCase = new authUseCase_1.AuthUseCase(authMysqlAdpater);
exports.authController = new authController_1.AuthController(authUseCase);
