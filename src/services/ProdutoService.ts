import {Request, Response} from "express";
import Produto from "../classes/Produto";
import ProdutoRepository from "../repositories/ProdutoRepository";

export default class ProdutoService{
    prodRepository: any;
    listarPagamentos: any;
    cadastroPagamento: any;
    async cadastroProduto(req:Request, res:Response){
        const prod:Produto = new Produto();
        prod.nome = req.body.nome
        prod.descricao = req.body.descricao;
        prod.preco = req.body.preco;

        try{
            const rs = await this.prodRepository.Cadastrar(prod);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarProdutos(req:Request, res:Response){
        try{
            const rs = await this.prodRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}