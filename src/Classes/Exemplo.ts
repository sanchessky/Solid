import Commands from "../Interfaces/Commands";
import Cliente from "./Cliente";
import Produto from "./Produto";

class Exemplo implements Commands<Produto>{
    Cadastrar(obj: Produto): Produto {
        throw new Error("Method not implemented.");
    }
    Listar(): Produto[] {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Produto {
        throw new Error("Method not implemented.");
    }

    
    
}