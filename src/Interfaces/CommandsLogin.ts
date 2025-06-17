import Commands from "./Commands";

export default interface CommandsLogin<T> extends Commands<T> {
    login(usuario: string, senha: string): any;
    loginUs(usuario: string, cpf: string, email:string, senha:string): any;
}