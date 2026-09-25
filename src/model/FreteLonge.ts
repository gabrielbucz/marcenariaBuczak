import Frete from "./Frete";

export default class  FreteLonge extends Frete{
   private estadia! : number;

   public getEstadia(): number{
      return this.estadia;
   }

   public setEstadia(estadia:number):void{
         this.estadia = estadia;

   }
   override calcularFrete(): number {
       const taxaBasica = this.getDistancia()*1.5;
    return (taxaBasica * 12)+(this.getEstadia()*50);
   }  
}