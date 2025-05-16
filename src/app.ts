import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import ItemvendidoService from "./services/ItemvendidoService";
import PagamentoService from "./services/PagamentoService";




const app = express();
app.use(express.json());
app.use(cors());

///#####################-- Inicio Importações --##################################

const cli = new ClienteService();
const auter = new AutorService();
const fun = new FuncionarioService();
const prod =new ProdutoService();
const ven = new VendaService();
const item = new ItemvendidoService();
const pag = new PagamentoService();



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

//#####################--Inicio Produto--##################################
//#####################--get--##################################
app.get("/api/v1/produto/listar", (req, res) => {
    prod.listarProdutos(req, res);
});
//#####################--post--##################################
app.post("/api/v1/produto/cadastrar", (req, res) => {
    prod.cadastroProduto(req, res);
});
//#####################--Fim Produto--####################################

//#####################--Inicio Vendas--##################################

//#####################--get--##################################
app.get("/api/v1/vendas/listar", (req, res) => {
    ven.listarVendas(req, res);
});
//#####################--post--##################################
app.post("/api/v1/vendas/cadastrar", (req, res) => {
    ven.cadastroVenda(req, res);
});

//#####################--Fim Vendas--####################################

//#####################--Inicio Itemvendido--##################################

//#####################--get--##################################
app.get("/api/v1/itemvendido/listar", (req, res) => {
    item.listarItemvendidos(req, res);
});
//#####################--post--##################################
app.post("/api/v1/itemvendido/cadastrar", (req, res) => {
    item.cadastroItemvendido(req, res);
});

//#####################--Fim Itemvendido--####################################

//#####################--Inicio Pagamento--##################################

//#####################--get--##################################
app.get("/api/v1/pagamento/listar", (req, res) => {
   pag.listarPagamentos(req, res);
});
//#####################--post--##################################
app.post("/api/v1/pagamento/cadastrar", (req, res) => {
  pag.cadastroPagamento(req, res);
});

//#####################--Fim Pagamento--####################################











//#####################-- Inicio listen --##################################
app.listen(5000, () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});
//#####################--FIM listen --##################################


