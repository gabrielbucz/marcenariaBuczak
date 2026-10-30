import Frete from "./Frete";

export default class  FreteLonge extends Frete{
   private estadia! : number;

   public getEstadia(): number{
      return this.estadia;
   }

   public setEstadia(estadia:number):void{
         this.estadia = estadia;

   }
   override setDistancia(distancia: number): void {
    if(distancia <=50 || distancia > 100){
      throw new Error("Distância inválida para frete longe. A distância deve ser maior que 50 e menor ou igual a 100.");
        
    }
    super.setDistancia(distancia);
   }
   override calcularFrete(): number {
       const taxaBasica = this.getDistancia()*1.5;
    return (taxaBasica * 12)+(this.getEstadia()*50);
   }  
}