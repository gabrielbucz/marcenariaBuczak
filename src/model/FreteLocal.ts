import Frete from "./Frete";

export default class  FreteLocal extends Frete{
   override setDistancia(distancia: number): void {
    if(distancia <= 0 || distancia > 50){
      throw new Error("Distância inválida para frete local. A distância deve ser maior que 0 e menor que 50.");
        
    }
    super.setDistancia(distancia);
   }
   override calcularFrete(): number {
       const taxaBasica = this.getDistancia()*1.12;
    return taxaBasica * 10;
   }  
}