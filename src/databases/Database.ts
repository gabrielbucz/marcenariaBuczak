import Orcamento from "../model/Orcamento";
import IRepositorioOrcamento from "./IRepositorioOrcamento";
export default class DataBase implements IRepositorioOrcamento {

    private orcamentos: Orcamento[] = [];

    public adicionarOrcamento(orcamento: Orcamento): void {
        this.orcamentos.push(orcamento);
    }

    public listarOrcamentos(): Orcamento[] {
        return this.orcamentos;
    }
}