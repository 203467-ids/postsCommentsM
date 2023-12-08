"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookCreateController = void 0;
const authUseCase_1 = require("../application/use-cases/authUseCase");
const bookMysqlAdapter_1 = require("./adapters/bookMysqlAdapter");
const bookCreateController_1 = require("./controllers/bookCreateController");
const mysqlBookadapter = new bookMysqlAdapter_1.BookMysqlAdapterRepository();
const createBookUseCase = new authUseCase_1.CreateBookUseCase(mysqlBookadapter);
exports.bookCreateController = new bookCreateController_1.BookCreateController(createBookUseCase);
