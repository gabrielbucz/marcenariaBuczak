import Database from "../databases/Database";
import Cliente from "../model/Cliente";
import Frete from "../model/Frete";
import FreteLocal from "../model/FreteLocal";
import FreteLonge from "../model/FreteLonge";
import Movel from "../model/Movel";
import MovelComplexo from "../model/MovelComplexo";
import MovelSimples from "../model/MovelSimples";
import Orcamento from "../model/Orcamento";
import MainScreen from "../view/MainScreen";
import promptSync from 'prompt-sync';


export default class MainController {
    public database: Database = new Database();

    constructor() {
        new MainScreen(this);
    }

    public showAllOrcamentos(): void {
        console.log(this.database.listarOrcamentos()
        );
    }

    public getNewClient(): Cliente {
        return new Cliente();
    }

    public getNewOrcamento(): Orcamento {
        return new Orcamento();
    }
    
    public getNewMovel(tipoMovel: number): Movel {
    if (tipoMovel === 2) {
        return new MovelComplexo();
    }

    return new MovelSimples();
}
 
    public getNewFrete(tipoFrete: number): Frete {
    if (tipoFrete === 1) {
        let freteLocal = new FreteLocal();

        freteLocal.setDistancia(
            Number(promptSync()("Informe a distância em km: "))
        );

        return freteLocal;
    }

    if (tipoFrete === 2) {
        let freteLonge = new FreteLonge();

        freteLonge.setDistancia(
            Number(promptSync()("Informe a distância em km: "))
        );

        freteLonge.setEstadia(
            Number(promptSync()("Informe a quantidade de dias de estadia: "))
        );

        return freteLonge;
    }

    throw new Error("Tipo de frete inválido");
}
}