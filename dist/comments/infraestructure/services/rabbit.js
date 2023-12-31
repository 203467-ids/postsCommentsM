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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class RabbitMQ {
    constructor() {
        // Servicio y conexciodn de rabbit
        this.connection = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield amqplib_1.default.connect('amqp://127.0.0.1');
        });
    }
    publishMessage(exchange, routingKey, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connection) {
                throw new Error('RabbitMQ connection not established');
            }
            const channel = yield this.connection.createChannel();
            yield channel.assertExchange('total-comments', 'direct', { durable: true });
            channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
            console.log('Mensaje enviado [-->]', message);
        });
    }
}
exports.RabbitMQ = RabbitMQ;
