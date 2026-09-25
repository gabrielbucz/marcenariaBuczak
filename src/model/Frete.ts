export default abstract class Frete {
    private distancia!: number;

    public getDistancia(): number {
        return this.distancia;
    }

    public setDistancia(distancia: number): void {
        this.distancia = distancia;
    }

    
    public abstract calcularFrete(): number;
}