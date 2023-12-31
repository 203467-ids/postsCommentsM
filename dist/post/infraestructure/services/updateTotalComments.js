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
exports.UpdateTotalComments = void 0;
const rabbitConfig_1 = require("../rabbitConfig");
function UpdateTotalComments(useCase) {
    return __awaiter(this, void 0, void 0, function* () {
        const { connection, channel, queueName } = yield (0, rabbitConfig_1.setupRabbitMQ)();
        console.log('Consumidor de Órdenes esperando mensajes...');
        // Consume mensajes de la cola
        channel.consume(queueName, (msg) => {
            if (msg) {
                const content = JSON.parse(msg.content.toString());
                const currentDateTime = new Date();
                // Lógica para procesar la orden pagada
                console.log('Mensaje recibido [Y]', content);
                const id = content.data.postId;
                const totalComments = content.data.totalComments;
                useCase.run(id, totalComments);
                // Marcar el mensaje como entregado (acknowledge)
                channel.ack(msg);
            }
        });
    });
}
exports.UpdateTotalComments = UpdateTotalComments;
