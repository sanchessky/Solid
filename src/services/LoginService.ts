import LoginRepository from "../repositories/LoginRepository";
import bcrypt from "bcrypt"
import {Request, Response} from "express";
import Usuario from "../classes/Usuario";

export default class LoginService{
    loginRepository = new LoginRepository()

    async criptoSenha(senha:string){
        let rs = await bcrypt.hash(senha, 12);
        return rs
    }

    async cadastrarUsuario(req:Request, res:Response){
        let us = new Usuario();
        us.nomeusuario = req.body.nomeusuario;
        us.senha = (await this.criptoSenha(req.body.senha)).toString()
        us.fotousuario = req.body.fotousuario;

        try{
            let rs = this.loginRepository.Cadastrar(us)
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }
}