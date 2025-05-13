import Autor from "../classes/Autor";
import { conexao } from "../database/Config";
import CommandsPessoa from "../Interfaces/CommandsPessoa";

export default class AutorRepository implements CommandsPessoa<Autor>{
    PesquisarCPF(cpf: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Autor): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Autor[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from autor",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Autor[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Autor): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    
}