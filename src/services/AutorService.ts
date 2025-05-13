import {Request, Response} from "express";
import Autor from "../classes/Autor";
import AutorRepository from "../repositories/AutorRepository";

export default class AutorService{
    auterRepository = new AutorRepository();

    async cadastroAutor(req:Request, res:Response){
        const auter:Autor = new Autor();
        auter.nome = req.body.nome
        auter.email = req.body.email;
        auter.cpf = req.body.cpf;
        auter.telefone = req.body.telefone;
        auter.genero_literario = req.body.genero_literario;
        auter.endereco = req.body.endereco;
        try{
            const rs = await this.auterRepository.Cadastrar(auter);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarAutor(req:Request, res:Response){
        try{
            const rs = await this.auterRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}