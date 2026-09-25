"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Orcamento {
    constructor() {
        this.moveis = [];
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getMoveis() {
        return this.moveis;
    }
    adicionarMovel(movelOuMoveis) {
        if (Array.isArray(movelOuMoveis)) {
            this.moveis.push(...movelOuMoveis);
        }
        else {
            this.moveis.push(movelOuMoveis);
        }
    }
    getFrete() {
        return this.frete;
    }
    setFrete(frete) {
        this.frete = frete;
    }
    calcularTotal() {
        const totalMoveis = this.moveis.reduce((soma, movel) => soma + movel.calcularPreco(), 0);
        return totalMoveis + this.frete.calcularFrete();
    }
}
exports.default = Orcamento;
