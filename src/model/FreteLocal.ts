import Frete from "./Frete";

export default class  FreteLocal extends Frete{
   override calcularFrete(): number {
       const taxaBasica = this.getDistancia()*1.12;
    return taxaBasica * 10;
   }  
}