import Produto from "./Produto";
import Venda from "./Venda";
export default class ItemVendido{
    id!:number;
    venda!:Venda;
    produto!:Produto;
    quantidade!:number;
}