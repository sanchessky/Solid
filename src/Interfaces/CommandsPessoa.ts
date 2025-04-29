import Commands from "./Commands";

export default interface CommandsPessoa<T> extends Commands <T> {
    PesquisarCPF(cpf:string):T;
    PesquisarEmail(email:string):T;
    

}
