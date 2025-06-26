import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import ItemvendidoService from "./services/ItemvendidoService";
import PagamentoService from "./services/PagamentoService";
import LoginService from "./services/LoginService";




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
const us = new LoginService();



///#####################-- Fim Importações --##################################

app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});

app.post("/api/v1/cliente/cadastro", (req, res) => {
        cli.cadastroCliente(req, res);
    })
app.get("/api/v1/autor/listar", (req, res) => {
    auter.listarAutores(req, res);
});

app.post("/api/v1/autor/cadastrar", (req, res) => {
    auter.cadastroAutor(req, res);
});
app.get("/api/v1/funcionario/listar", (req, res) => {
    fun.listarFuncionarios(req, res);
});

app.post("/api/v1/funcionario/cadastrar", (req, res) => {
    fun.cadastroFuncionario(req, res);
});
app.get("/api/v1/produto/listar", (req, res) => {
    prod.listarProdutos(req, res);
});

app.get("/api/v1/produto/listarmaisvendidos", (req, res) => {
    prod.listarProdutosMaisVendidos(req, res);
});

app.get("/api/v1/produto/listarporcategoria/:categoria", (req, res) => {
    prod.listarProdutosPorCategoria(req, res);
});

app.get("/api/v1/produto/listarporid/:id", (req, res) => {
    prod.listarProdutosPorId(req, res);
});

app.post("/api/v1/produto/cadastrar", (req, res) => {
    prod.cadastroProduto(req, res);
});


app.get("/api/v1/vendas/listar", (req, res) => {
    ven.listarVendas(req, res);
});
app.post("/api/v1/vendas/cadastrar", (req, res) => {
    ven.cadastroVenda(req, res);
});



app.get("/api/v1/itemvendido/listar", (req, res) => {
    item.listarItemvendidos(req, res);
});
app.post("/api/v1/itemvendido/cadastrar", (req, res) => {
    item.cadastroItemvendido(req, res);
});



app.get("/api/v1/pagamento/listar", (req, res) => {
   pag.listarPagamentos(req, res);
});

app.post("/api/v1/pagamento/cadastrar", (req, res) => {
  pag.cadastroPagamento(req, res);
});

 app.post("/api/v1/usuarios/cadastrar", (req, res) => {
   us.cadastrarUsuario(req, res);
 });

 app.post("/api/v1/usuarios/login", (req, res) => {
    us.loginUsuario(req, res);
  });






















//#####################-- Inicio listen --##################################
app.listen(5000, () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});
//#####################--FIM listen --##################################


