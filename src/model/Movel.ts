export default abstract class Movel{
  private chapas! : number;
  private fundos! : number;
  private dobradicas! : number;
  private puxadores! : number;
  private horaTrabalho! : number;

   public getChapas():number{
        return this.chapas;
    }
    public setChapas(chapas: number):void{
       this.chapas = chapas;
    }

    public getFundos():number{
        return this.fundos;
    }

     public setFundos  (fundos: number):void{
       this.fundos = fundos;
    }

     public getDobradicas():number{
        return this.dobradicas;
    }
    public setDobradicas(dobradicas: number):void{
       this.dobradicas = dobradicas;
    }

    public getPuxadores():number{
        return this.puxadores;
    }

     public setPuxadores(puxadores: number):void{
       this.puxadores = puxadores;
    }

    public getHoraTrabalho():number{
        return this.horaTrabalho;
    }

     public setHoraTrabalho(horaTrabalho: number):void{
       this.horaTrabalho= horaTrabalho;
    }

    public abstract calcularPreco():number;
}