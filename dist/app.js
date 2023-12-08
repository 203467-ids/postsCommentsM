"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const mongodb_1 = require("./database/mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const postRouter_1 = require("./post/infraestructure/routes/postRouter");
const commentRouter_1 = require("./comments/infraestructure/routes/commentRouter");
const dependencies_1 = require("./post/infraestructure/dependencies");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
mongoose_1.default.set('strictQuery', true);
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
        this.updateTotalComments();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
    databaseSync() {
        /** Connect to Mongo */
        mongoose_1.default.connect(mongodb_1.config.mongo.url, { retryWrites: true, w: 'majority' });
        const connection = mongoose_1.default.connection;
        connection.once('open', () => {
            console.log('Mongodb Connection stablished');
        });
        connection.on('error', (err) => {
            console.log('Mongodb connection error:', err);
            process.exit();
        });
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("posts");
        });
        this.app.use("/p", postRouter_1.postRouter);
        this.app.use("/c", commentRouter_1.CommentRouter);
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    updateTotalComments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, dependencies_1.updateTotalComments)();
            }
            catch (error) {
            }
        });
    }
}
const port = 5000;
const app = new App().app;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
