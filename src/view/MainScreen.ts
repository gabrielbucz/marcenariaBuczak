import MainController from "../controller/MainController";
import promptSync from 'prompt-sync';
import Cliente from "../model/Cliente";
import Orcamento from "../model/Orcamento";
import MovelSimples from "../model/MovelSimples";
import MovelComplexo from "../model/MovelComplexo";
import FreteLocal from "../model/FreteLocal";
import FreteLonge from "../model/FreteLonge";

export default class MainScreen {
    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.openFirstScreen();
    }

    private openFirstScreen(): void {
        let option: number = 0;
        while (option !== 3) {
            console.log("\n==========================================");
            console.log("            MARCENARIA BUCZAK             ");
            console.log("==========================================");
            option = Number(this.prompt("DIGITE:\n1. Cadastrar Orçamento\n2. Listar Orçamentos\n3. Sair\nOpção: "));

            switch (option) {
                case 1:
                    this.cadastrarOrcamentoScreen();
                    break;
                case 2:
                    this.listarOrcamentosScreen();
                    break;
                case 3:
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Entre com um número entre 1 e 3.");
                    break;
            }
        }
    }

    private cadastrarOrcamentoScreen(): void {
        let orcamento = new Orcamento();

        // 1. Coleta dados do Cliente
        let cliente = new Cliente();
        console.log("\n--- DADOS DO CLIENTE ---");
        cliente.setNome(this.prompt("Nome do cliente: "));
        cliente.setTelefone(this.prompt("Telefone: "));
        cliente.setEndereco(this.prompt("Endereço: "));
        orcamento.setCliente(cliente);

        // 2. Coleta dos Móveis (permite adicionar múltiplos)
        let adicionarOutro = "S";
        while (adicionarOutro.toUpperCase() === "S") {
            console.log("\n--- ADICIONAR MÓVEL ---");
            console.log("1. Móvel Simples");
            console.log("2. Móvel Complexo");
            let tipoMovel = Number(this.prompt("Escolha o tipo de móvel: \n Simples (1) ou Complexo (2):"));

            let movel = (tipoMovel === 2) ? new MovelComplexo() : new MovelSimples();

            movel.setChapas(Number(this.prompt("Quantidade de chapas: ")));
            movel.setFundos(Number(this.prompt("Quantidade de fundos: ")));
            movel.setDobradicas(Number(this.prompt("Quantidade de dobradiças: ")));
            movel.setPuxadores(Number(this.prompt("Quantidade de puxadores: ")));
            movel.setHoraTrabalho(Number(this.prompt("Horas de trabalho necessárias: ")));

            orcamento.adicionarMovel(movel);

            adicionarOutro = this.prompt("Deseja adicionar outro móvel a este orçamento? (S/N): ");
        }

        // 3. Escolha do Frete
        console.log("\n--- TIPO DE FRETE ---");
        console.log("1. Frete Local");
        console.log("2. Frete Longe (Com Estadia)");
        let tipoFrete = Number(this.prompt("Escolha o tipo de frete: "));

        if (tipoFrete === 2) {
            let freteLonge = new FreteLonge();
            freteLonge.setDistancia(Number(this.prompt("Distância em KM: ")));
            freteLonge.setEstadia(Number(this.prompt("Dias de estadia: ")));
            orcamento.setFrete(freteLonge);
        } else {
            let freteLocal = new FreteLocal();
            freteLocal.setDistancia(Number(this.prompt("Distância em KM: ")));
            orcamento.setFrete(freteLocal);
        }

        // 4. Salva no banco em memória e imprime resumo
        this.controller.database.orcamentos.push(orcamento);

        console.log("\n------------------------------------------");
        console.log(" ORÇAMENTO FINALIZADO!");
        console.log(` Cliente: ${orcamento.getCliente().getNome()}`);
        console.log(` Quantidade de móveis: ${orcamento.getMoveis().length}`);
        console.log(` Valor do Frete: R$ ${orcamento.getFrete().calcularFrete().toFixed(2)}`);
        console.log(` VALOR TOTAL: R$ ${orcamento.calcularTotal().toFixed(2)}`);
        console.log("------------------------------------------\n");
    }

    private listarOrcamentosScreen(): void {
        console.log("\n--- ORÇAMENTOS REGISTRADOS ---");
        const orcamentos = this.controller.database.orcamentos;

        if (orcamentos.length === 0) {
            console.log("Nenhum orçamento cadastrado até o momento.");
            return;
        }

        orcamentos.forEach((orc, index) => {
            console.log(`\nOrçamento #${index + 1}`);
            console.log(`Cliente: ${orc.getCliente().getNome()} (${orc.getCliente().getTelefone()})`);
            console.log(`Móveis: ${orc.getMoveis().length} item(ns)`);
            console.log(`Frete: R$ ${orc.getFrete().calcularFrete().toFixed(2)}`);
            console.log(`Total: R$ ${orc.calcularTotal().toFixed(2)}`);
            console.log("------------------------------------------");
        });
    }
}