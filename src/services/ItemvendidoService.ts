import {Request, Response} from "express";
import Itemvendido from "../classes/Itemvendido";
import ItemvendidoRepository from "../repositories/ItemvendidoRepository";


export default class ItemvendidoService{
    itemRepository = new ItemvendidoRepository();

    async cadastroItemvendido(req:Request, res:Response){
        const item:Itemvendido = new Itemvendido();
        item.venda = req.body.id_venda;
        item.produto = req.body.id_produto;
        item.quantidade = req.body.quantidade;


        try{
            const rs = await this.itemRepository.Cadastrar(item);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarItemvendidos(req:Request, res:Response){
        try{
            const rs = await this.itemRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}