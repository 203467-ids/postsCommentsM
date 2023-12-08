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
exports.likePostController = exports.updatePostController = exports.readSinglePostController = exports.readPostController = exports.deletePostController = exports.createPostController = exports.updateTotalComments = void 0;
const mongoDbPostRepository_1 = require("./repositories/mongoDbPostRepository");
const postRepositoryImpl = new mongoDbPostRepository_1.PostRepositoryImpl();
const updateTotalComments_1 = require("./services/updateTotalComments");
const createPostController_1 = require("./controllers/createPostController");
const createPostUseCase_1 = require("../application/use-cases/createPostUseCase");
const createPostUseCase = new createPostUseCase_1.CreatePostUseCase(postRepositoryImpl);
const createPostController = new createPostController_1.CreatePostController(createPostUseCase);
exports.createPostController = createPostController;
const deletePostController_1 = require("./controllers/deletePostController");
const deletePostUseCase_1 = require("../application/use-cases/deletePostUseCase");
const deletePostUseCase = new deletePostUseCase_1.DeletePostUseCase(postRepositoryImpl);
const deletePostController = new deletePostController_1.DeletePostController(deletePostUseCase);
exports.deletePostController = deletePostController;
const readPostController_1 = require("./controllers/readPostController");
const readPostUseCase_1 = require("../application/use-cases/readPostUseCase");
const readPostUseCase = new readPostUseCase_1.ReadPostUseCase(postRepositoryImpl);
const readPostController = new readPostController_1.ReadPostController(readPostUseCase);
exports.readPostController = readPostController;
const readSinglePostController_1 = require("./controllers/readSinglePostController");
const readSinglePostUseCase_1 = require("../application/use-cases/readSinglePostUseCase");
const readSinglePostUseCase = new readSinglePostUseCase_1.ReadSinglePostUseCase(postRepositoryImpl);
const readSinglePostController = new readSinglePostController_1.ReadSinglePostController(readSinglePostUseCase);
exports.readSinglePostController = readSinglePostController;
const updatePostController_1 = require("./controllers/updatePostController");
const updatePostUseCase_1 = require("../application/use-cases/updatePostUseCase");
const updatePostUseCase = new updatePostUseCase_1.UpdatePostUseCase(postRepositoryImpl);
const updatePostController = new updatePostController_1.UpdatePostController(updatePostUseCase);
exports.updatePostController = updatePostController;
const likePostController_1 = require("./controllers/likePostController");
const likePostUseCase_1 = require("../application/use-cases/likePostUseCase");
const likePostUseCase = new likePostUseCase_1.LikePostUseCase(postRepositoryImpl);
const likePostController = new likePostController_1.LikePostController(likePostUseCase);
exports.likePostController = likePostController;
const updateTotalCommentsUseCase_1 = require("../application/use-cases/updateTotalCommentsUseCase");
function updateTotalComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const updateTotalCommetsUseCase = new updateTotalCommentsUseCase_1.UpdateTotalCommetsUseCase(postRepositoryImpl);
        yield (0, updateTotalComments_1.UpdateTotalComments)(updateTotalCommetsUseCase);
    });
}
exports.updateTotalComments = updateTotalComments;
