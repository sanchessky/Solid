import Produto from "./Produto";
import Vendas from "./Vendas";

export default class Itemvendidos{
    id!:number;
    vendas!:Vendas;
    produto!:Produto;
    quantidade!:number;
}