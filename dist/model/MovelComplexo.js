"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movel_1 = __importDefault(require("./Movel"));
class MovelComplexo extends Movel_1.default {
    calcularPreco() {
        const custoMateriais = ((this.getChapas() * 280) + (this.getDobradicas() * 8) + (this.getFundos() * 90) + (this.getPuxadores() * 12));
        const maoDeObra = this.getHoraTrabalho() * 50;
        return maoDeObra + custoMateriais;
    }
}
exports.default = MovelComplexo;
