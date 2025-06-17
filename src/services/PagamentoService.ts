import {Request, Response} from "express";
import PagamentoRepository from "../repositories/PagamentoRepository";
import Pagamento from "../classes/pagamento";


export default class PagamentoService{
    pagRepository = new PagamentoRepository();

    async cadastroPagamento(req:Request, res:Response){
        let pag:Pagamento = new Pagamento();
        pag.venda = req.body.id_venda;
        pag.total_pagar = req.body.total_pagar;



        try{
            const rs = await this.pagRepository.Cadastrar(pag);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarPagamentos(req:Request, res:Response){
        try{
            const rs = await this.pagRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}