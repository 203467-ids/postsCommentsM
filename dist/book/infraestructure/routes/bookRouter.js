"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticator_1 = require("../../../middlewares/authenticator");
const dependencies_1 = require("../dependencies");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.post("/", authenticator_1.authenticaMiddleware, dependencies_1.bookCreateController.run.bind(dependencies_1.bookCreateController));
