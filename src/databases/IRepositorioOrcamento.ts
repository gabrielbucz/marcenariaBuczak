import Orcamento from "../model/Orcamento";

export default interface IRepositorioOrcamento {
    adicionarOrcamento(orcamento: Orcamento): void;
    listarOrcamentos(): Orcamento[];
}