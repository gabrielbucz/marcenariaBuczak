"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
}
exports.default = Cliente;
