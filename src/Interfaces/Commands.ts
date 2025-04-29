export default interface Commands<T>{
    Cadastrar(objeto:T):T;
    Listar():T[];
    Apagar(id:number):string;
    Atualizar(objeto:T):T;
}