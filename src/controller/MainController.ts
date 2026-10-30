import Database from "../databases/Database";
import IRepositorioOrcamento from "../databases/IRepositorioOrcamento";
import TipoFrete from "../enums/TipoFrete";
import TipoMovel from "../enums/TipoMovel";
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
    public database: IRepositorioOrcamento = new Database();

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

    public getNewMovel(tipoMovel: TipoMovel): Movel {
        if (tipoMovel === TipoMovel.COMPLEXO) {
            return new MovelComplexo();
        }

        if (tipoMovel === TipoMovel.SIMPLES) {
            return new MovelSimples();
        }

        throw new Error("Tipo de móvel inválido");
    }

    public getNewFrete(tipoFrete: TipoFrete): Frete {
        if (tipoFrete === TipoFrete.LOCAL) {
            let freteLocal = new FreteLocal();

            while (true) {
                try {
                    const distancia = Number(promptSync()("Informe a distância em km: "));

                    freteLocal.setDistancia(distancia);
                    return freteLocal;
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.log("Erro ao cadastrar frete", error.message);

                       

                    }
                }
            }
        }

        if (tipoFrete === TipoFrete.LONGE) {
            let freteLonge = new FreteLonge();
  
            while (true) {
                try {
                    const distancia = Number(promptSync()("Informe a distância em km: "));
                    freteLonge.setDistancia(distancia);
                    break;
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.log("Erro ao cadastrar frete", error.message);
                    }
                }}

            freteLonge.setEstadia(
                Number(promptSync()("Informe a quantidade de dias de estadia: "))
            );

            return freteLonge;
        }

        throw new Error("Tipo de frete inválido");
    }
}