import Funcionario from "../classes/Funcionario";
import { conexao } from "../database/Config";
import CommandsFuncionario from "../Interfaces/CommandsFuncionario";

export default class FuncionarioRepository implements CommandsFuncionario<Funcionario>{
    PesquisarCargo(cargo: string): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarSalario(salario: number): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Funcionario[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from funcionario",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Funcionario[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    
}