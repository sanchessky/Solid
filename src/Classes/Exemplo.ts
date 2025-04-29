import Commands from "../Interfaces/Commands";
import Cliente from "./Cliente";
import Produto from "./Produto";

class Exemplo implements Commands<Produto>{
    Cadastrar(objeto: Produto): Produto {
        throw new Error("Method not implemented.");
    }
    
}