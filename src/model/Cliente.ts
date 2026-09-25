export default class Cliente{
    private nome!: string;
    private telefone!: string;
    private endereco!: string;

    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }

     public getTelefone():string{
        return this.telefone;
    }
    public setTelefone(telefone:string):void{
        this.telefone = telefone;
    }

     public getEndereco():string{
        return this.endereco;
    }
    public setEndereco(endereco:string):void{
        this.endereco = endereco;
    }
}