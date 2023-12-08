"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
const authenticator_1 = require("../../../middlewares/authenticator");
exports.CommentRouter = express_1.default.Router();
exports.CommentRouter.use(authenticator_1.authenticaMiddleware);
exports.CommentRouter.post('/', dependencies_1.createCommentController.run.bind(dependencies_1.createCommentController));
exports.CommentRouter.delete('/:id', dependencies_1.deleteCommentController.run.bind(dependencies_1.deleteCommentController));
exports.CommentRouter.get('/:id', dependencies_1.readCommentController.run.bind(dependencies_1.readCommentController));
exports.CommentRouter.patch('/:id', dependencies_1.updateCommentController.run.bind(dependencies_1.updateCommentController));
exports.CommentRouter.patch('/like/:id', dependencies_1.likeCommentController.run.bind(dependencies_1.likeCommentController));
