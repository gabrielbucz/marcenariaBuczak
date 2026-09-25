import Cliente from "./Cliente";
import Movel from "./Movel";
import Frete from "./Frete";

export default class Orcamento {
     private cliente!: Cliente;
     private moveis: Movel[] = [];
     private frete!: Frete;

     public getCliente(): Cliente {
          return this.cliente;
     }

     public setCliente(cliente: Cliente): void {
          this.cliente = cliente;
     }

     public getMoveis(): Movel[] {
          return this.moveis;
     }

     public adicionarMovel(movel: Movel): void;
     public adicionarMovel(moveis: Movel[]): void;

     public adicionarMovel(movelOuMoveis: Movel | Movel[]): void {
          if (Array.isArray(movelOuMoveis)) {
               this.moveis.push(...movelOuMoveis);
          } else {
               this.moveis.push(movelOuMoveis);
          }
     }

     public getFrete(): Frete {
          return this.frete;
     }

     public setFrete(frete: Frete): void {
          this.frete = frete;
     }

     public calcularTotal(): number {
          const totalMoveis = this.moveis.reduce((soma, movel) => soma + movel.calcularPreco(), 0);
          return totalMoveis + this.frete.calcularFrete();
     }
}