
import Cliente from "../Classes/Cliente";
import CommandsPessoa from "../Interfaces/CommandsPessoa";
import { conexao } from "../database/Config";

export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCPF(cpf: string): Cliente {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Cliente {
        throw new Error("Method not implemented.");
    }
    Cadastrar(objeto: Cliente): Cliente {
       
    conexao.query("INSERT INTO cliente SET ?", objeto,(erro, result)=>{
        if (erro) return erro
            else {
                return result;
        }
    })


    }
    Listar(): Cliente[] {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    Atualizar(objeto: Cliente): Cliente {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Cliente {
        throw new Error("Method not implemented.");
    }
    
}