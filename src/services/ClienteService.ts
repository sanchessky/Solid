import {Request, Response} from "express"
import Cliente from "../Classes/Cliente";
import ClienteRepository from "../repositories/ClienteRepository";


export default class ClienteServices{
    cliRepository = new ClienteRepository();
    
    async cadastroCliente(req:Request, res:Response){
        const cli:Cliente = new Cliente()
        cli.nome = req.body.nome;
        cli.email = req.body.email;
        cli.cpf = req.body.cpf;
        cli.numero = req.body.telefone;
        cli.aniversario = req.body.aniversario;
        cli.endereco = req.body.endereco
        const rs = await this.cliRepository.Cadastrar(cli);


    }
}