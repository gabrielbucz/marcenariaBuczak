import Orcamento from "../model/Orcamento";
export default class Database {

    private orcamentos: Orcamento[] = [];

    public adicionarOrcamento(orcamento: Orcamento): void {
        this.orcamentos.push(orcamento);
    }

    public listarOrcamentos(): Orcamento[] {
        return this.orcamentos;
    }
}