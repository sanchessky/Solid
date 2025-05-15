import Venda from "../classes/Venda";
import { conexao } from "../database/Config";
import CommandsVendas from "../Interfaces/CommandsVendas";

export default class VendaRepository implements CommandsVendas<Venda>{
    Listar(): Promise<Venda[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from venda",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Venda[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Venda): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorData(data: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Venda): Promise<Venda> {
        return new Promise((resolve,reject)=>{
 
            conexao.query("INSERT INTO venda(id_cliente,id_funcionario) Values (?,?)",
            [   obj.cliente,
                obj.funcionario,
                ],        
            
                (erro,end:any)=>{
                    
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
        }
    }
