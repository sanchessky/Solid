import Itemvendido from "../classes/Itemvendido";
import { conexao } from "../database/Config";
import Commands from "../Interfaces/Commands";

export default class ItemvendidoRepository implements Commands<Itemvendido>{
    Listar(): Promise<Itemvendido[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from itensvenda",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Itemvendido[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Itemvendido): Promise<Itemvendido> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Itemvendido> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Itemvendido): Promise<Itemvendido> {
        return new Promise((resolve,reject)=>{
 
            conexao.query("INSERT INTO itensvenda(id_venda,id_produto,quantidade) Values (?,?,?)",
            [   obj.venda,
                obj.produto,
                obj.quantidade
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
