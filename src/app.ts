import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";



const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
});

app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})

app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});


