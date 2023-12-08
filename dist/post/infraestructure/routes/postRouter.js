"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../services/multer"));
const authenticator_1 = require("../../../middlewares/authenticator");
const dependencies_1 = require("../dependencies");
exports.postRouter = express_1.default.Router();
exports.postRouter.use(authenticator_1.authenticaMiddleware);
exports.postRouter.post('/', multer_1.default.single('postImageUrl'), dependencies_1.createPostController.run.bind(dependencies_1.createPostController));
exports.postRouter.delete('/:id', dependencies_1.deletePostController.run.bind(dependencies_1.deletePostController));
exports.postRouter.get('/', dependencies_1.readPostController.run.bind(dependencies_1.readPostController));
exports.postRouter.get('/:id', dependencies_1.readSinglePostController.run.bind(dependencies_1.readSinglePostController));
exports.postRouter.patch('/:id', dependencies_1.updatePostController.run.bind(dependencies_1.updatePostController));
exports.postRouter.patch('/like/:id', dependencies_1.likePostController.run.bind(dependencies_1.likePostController));
