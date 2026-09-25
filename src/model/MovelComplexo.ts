import Movel from "./Movel";

export default class MovelComplexo extends Movel{
    public override calcularPreco(): number {
       const custoMateriais =  ((this.getChapas()*280)+ (this.getDobradicas()*8) + (this.getFundos()*90)+ (this.getPuxadores()*12));
       const maoDeObra = this.getHoraTrabalho()*50;
       return maoDeObra + custoMateriais;
    }
}
