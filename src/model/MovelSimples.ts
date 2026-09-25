import Movel from "./Movel";

export default class MovelSimples extends Movel {
    // Sobrescreve o cálculo para o móvel simples
    public override calcularPreco(): number {
        const custoMateriais = (this.getChapas() * 180) + (this.getFundos() * 90) + (this.getDobradicas() * 5) + (this.getPuxadores() * 8)
                               ;

        const maoDeobra = this.getHoraTrabalho() * 40;
        return custoMateriais + maoDeobra ; 
    }
}