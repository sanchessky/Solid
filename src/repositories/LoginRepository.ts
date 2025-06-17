import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsLogin from "../Interfaces/CommandsLogin";
import bcrypt from "bcrypt";
import { conexao } from "../database/Config";
import { error } from "console";

export default class LoginRepository implements CommandsLogin<Usuario>{
    login(usuario: string, senha: string) {
        conexao.query(`SELECT us.id,us.nomeusuario, us.senha, us.fotousuario, cli.id_cliente WHERE us.nomeusuario=?`, 
            [
                usuario
            ],
            (erro, result:any)=>{
                if (erro) {
                    return "false"
                }
                else{
                    return result
                }
            }
        )
        


    }
    loginUs(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
    return new Promise((resolve, rejact)=>{
        conexao.query(`INSERT INTO usuario(nomeusuario,senha,fotousuario)VALUES(?,?,?)`,
            [
                obj.nomeusuario,
                obj.senha,
                obj.fotousuario
            ],
            (erro, result:any)=>{
                if (erro) {
                    return rejact(erro)
                }
                else{
                    return resolve(result)
                }
            }
        )

        })    
    }
    Listar(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    
}