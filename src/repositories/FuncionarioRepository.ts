import Funcionario from "../classes/Funcionario";
import { conexao } from "../database/Config";
import CommandsFuncionario from "../Interfaces/CommandsFuncionario";

export default class FuncionarioRepository implements CommandsFuncionario<Funcionario> {
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
        return new Promise((resolve, reject) => {
            let id_end: any = null;
            conexao.query("INSERT INTO endereco(tipo_logradouro,logradouro,numero,complemento,cep,bairro) Values (?,?,?,?,?,?)",
                [obj.endereco.tipo_logradouro,
                obj.endereco.logradouro,
                obj.endereco.numero,
                obj.endereco.complemento,
                obj.endereco.cep,
                obj.endereco.bairro],
                (erro, end: any) => {
                    if (erro) {
                        return reject(erro)
                    }
                    else {
                        id_end = end.insertId;
                    }


                    conexao.query("INSERT INTO funcionario(nome,cpf,email,telefone,id_endereco,cargo,salario)values(?,?,?,?,?,?,?)",
                        [obj.nome,
                        obj.cpf,
                        obj.email,
                        obj.telefone,
                        id_end,
                        obj.cargo,
                        obj.salario], 
                        (erro, result) => {
                            if (erro) {
                                return reject(erro);
                            }
                            else {
                                return resolve(obj)
                            }
                        })
                })
        })





    }
    Listar(): Promise<Funcionario[]> {
        return new Promise((resolve, reject) => {
            conexao.query("Select * from funcionario", (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
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