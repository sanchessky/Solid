import {Request, Response} from "express";
import Venda from "../classes/Venda";
import VendaRepository from "../repositories/VendaRepositor";

export default class VendaService{
    venRepository = new VendaRepository();

    async cadastroVenda(req:Request, res:Response){
        const ven:Venda = new Venda();
        ven.cliente.id = req.body.id_cliente
        ven.funcionario.id = req.body.id_funcionario;

        try{
            const rs = await this.venRepository.Cadastrar(ven);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarVendas(req:Request, res:Response){
        try{
            const rs = await this.venRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}