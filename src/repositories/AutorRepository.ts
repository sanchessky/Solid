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
        return new Promise((resolve,reject)=>{
            //Antes de cadastrar um cliente, temos de cadastrar o
            //endereço deste cliente e, então obtemos o id do endereço
            //cadastrado e alocamos em uma variável para depois inserir
            //na tabela clientes, no campo id_endereco
            let id_end:any = null;
            conexao.query("INSERT INTO endereco(tipo_logradouro,logradouro,numero,complemento,cep,bairro) Values (?,?,?,?,?,?)",
            [obj.endereco.tipo_logradouro,
                obj.endereco.logradouro,
                obj.endereco.numero,
                obj.endereco.complemento,
                obj.endereco.cep,
                obj.endereco.bairro],
                (erro,end:any)=>{
                    if(erro){
                        return reject(erro)
                    }
                    else{
                        id_end = end.insertId;
                    }
              
            
            conexao.query("INSERT INTO autor(nome,cpf,email,telefone,id_endereco,genero_literario)values(?,?,?,?,?,?)",
            [obj.nome,
                obj.cpf,
                obj.email,
                obj.telefone,
                id_end,
                obj.genero_literario],
                (erro,result)=>{
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
        })
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