import LoginRepository from "../repositories/LoginRepository";
import bcrypt from "bcrypt"
import {Request, Response} from "express";
import Usuario from "../classes/Usuario";
import {sign, verify } from "jsonwebtoken";


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
            let rs = await this.loginRepository.Cadastrar(us)
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }


    async loginUsuario(req:Request, res: Response){
        let us = req.body.usuario;
        let lg = req.body.senha;
        try{
            const rs = await this.loginRepository.login(us,lg);
            if(rs==null){
                return res.status(401).json({msg:`Usuário ou senha inválido`})
            }
            bcrypt.compare(lg, rs[0].senha,(erro,igual)=>{
                if(!igual){
                    return res.status(401).json({msg:`Usuário ou senha inválido`})
                }
                let usuario={
                    id:rs[0].id,
                    nomeusuario:rs[0].nomeusuario,
                    fotousuario:rs[0].fotousuario,
                }
                const token = sign(usuario,"P@44w0rd",{expiresIn: "2d"})


                return res.status(200).json({msg:`Usuário logado`, payload:usuario, token:token})
            })

        }
        catch(error){
            return res.status(500).json({msg:`Erro ao tentar logar ${error}`})
        }
    }





















}