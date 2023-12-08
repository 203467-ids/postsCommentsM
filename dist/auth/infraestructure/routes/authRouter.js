"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/", dependencies_1.authController.run.bind(dependencies_1.authController));
