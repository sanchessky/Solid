import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/funcionarioServise";



const app = express();
app.use(express.json());
app.use(cors());

///#####################-- Inicio Importações --##################################

const cli = new ClienteService();
const auter = new AutorService();
const fun = new FuncionarioService();

///#####################-- Fim Importações --##################################

//#####################-- Inicio Cliente --##################################

//#####################-- get --##################################
app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});
//#####################--post--##################################
app.post("/api/v1/cliente/cadastro", (req, res) => {
        cli.cadastroCliente(req, res);
    })
//#####################--FIM Cliente--##################################
//#####################--Inicio Autor--##################################

//#####################--get--##################################
app.get("/api/v1/autor/listar", (req, res) => {
    auter.listarAutores(req, res);
});

//#####################--post--##################################
app.post("/api/v1/autor/cadastrar", (req, res) => {
    auter.cadastroAutor(req, res);
});
//#####################--Fim Autor--##################################



//#####################--Inicio Funcionario--##################################

//#####################--get--##################################
app.get("/api/v1/funcionario/listar", (req, res) => {
    fun.listarFuncionarios(req, res);
});

//#####################--post--##################################
app.post("/api/v1/funcionario/cadastrar", (req, res) => {
    fun.cadastroFuncionario(req, res);
});
//#####################--Fim Funcionario--##################################














//#####################-- Inicio listen --##################################
app.listen(5000, () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});
//#####################--FIM listen --##################################


