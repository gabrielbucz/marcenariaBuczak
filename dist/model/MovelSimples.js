"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movel_1 = __importDefault(require("./Movel"));
class MovelSimples extends Movel_1.default {
    // Sobrescreve o cálculo para o móvel simples
    calcularPreco() {
        const custoMateriais = (this.getChapas() * 180) + (this.getFundos() * 90) + (this.getDobradicas() * 5) + (this.getPuxadores() * 8);
        const maoDeobra = this.getHoraTrabalho() * 40;
        return custoMateriais + maoDeobra;
    }
}
exports.default = MovelSimples;
