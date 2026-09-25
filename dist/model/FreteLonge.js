"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Frete_1 = __importDefault(require("./Frete"));
class FreteLonge extends Frete_1.default {
    getEstadia() {
        return this.estadia;
    }
    setEstadia(estadia) {
        this.estadia = estadia;
    }
    calcularFrete() {
        const taxaBasica = this.getDistancia() * 1.5;
        return (taxaBasica * 12) + (this.getEstadia() * 50);
    }
}
exports.default = FreteLonge;
