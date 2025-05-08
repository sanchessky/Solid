
import { Request, Response } from "express";
import Cliente from "../Classes/Cliente";
import CommandsPessoa from "../Interfaces/CommandsPessoa";
import { conexao } from "../database/Config";


export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(objeto: Cliente): Promise<Cliente> {
        return new Promise ((resolve, reject)=>{
            //obs: antes de cadastrar um cliente, vc precisa cadastrar o endereço para ter o ID para colocar em uma variavel para depois, inserir numa tabela (CLIENTE), no campo id_endereco
            conexao.query("INSERT INTO endereco (tipo_logradouro,logradouro,numero,complemento,cep,bairro)Values(?,?,?,?,?,?)",[
                objeto.endereco.tipo_logradouro,
                objeto.endereco.logradouro,
                objeto.endereco.numero,
                objeto.endereco.complemento,
                objeto.endereco.cep,
                objeto.endereco.bairro
            ],(erro, end)=>{}
        )

            conexao.query("INSERT INTO cliente SET ?", objeto,(erro, result)=>{
                if (erro){
                    return reject(erro)
                } 
                else {
                        return resolve (objeto) 
                }
            })
        })
    }
    Listar(): Promise<Cliente[]> {
        return new Promise ((resolve, reject)=>{
            conexao.query("SELECT * FROM cliente ",(erro, result)=>{
                if (erro){
                    return reject(erro)
                } 
                    else {
                        return resolve (result as Cliente[]) 
                    }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(objeto: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    
}