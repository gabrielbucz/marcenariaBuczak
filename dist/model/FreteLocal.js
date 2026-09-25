"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Frete_1 = __importDefault(require("./Frete"));
class FreteLocal extends Frete_1.default {
    calcularFrete() {
        const taxaBasica = this.getDistancia() * 1.12;
        return taxaBasica * 10;
    }
}
exports.default = FreteLocal;
