import Produto from "../classes/Produto";
import { conexao } from "../database/Config";
import Commands from "../Interfaces/Commands";

export default class ProdutoRepository implements Commands<Produto> {
    Listar(): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query("Select * from produto", (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
                    return resolve(result as Produto[])
                }
            })
        })
    }

    ListarMaisVendidos(): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query(`SELECT produto.nome, produto.foto1, itensvenda.quantidade
                            FROM produto INNER JOIN itensvenda
                            ON produto.id = itensvenda.id_produto
                            ORDER BY itensvenda.quantidade DESC
                            LIMIT 0,10`, (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
                    return resolve(result as Produto[])
                }
            })
        })
    }
    ListarPorCategoria(categoria:string): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query(`Select * from produto where descricao like ${categoria}`, (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
                    return resolve(result as Produto[])
                }
            })
        })
    }

    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Produto): Promise<Produto> {
        return new Promise((resolve, reject) => {

            conexao.query("INSERT INTO produto(nome,descricao,preco,foto1,foto2,foto3) Values (?,?,?,?,?,?)",
                [obj.nome,
                obj.descricao,
                obj.preco,
                obj.foto1,
                obj.foto2,
                obj.foto3
                ],

                (erro, end: any) => {

                    if (erro) {
                        return reject(erro);
                    }
                    else {
                        return resolve(obj)
                    }
                })
        })
    }
}
