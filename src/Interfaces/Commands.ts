export default interface Commands<T>{
    Cadastrar(objeto:T):Promise<T>;
    Listar():Promise<T[]>;
    Apagar(id:number):Promise<string>;
    Atualizar(objeto:T):Promise<T>;
    PesquisarId(id:number):Promise<T>;
}