import Cliente from "./Cliente";
import Funcionario from "./Funcionario";
export default class Venda{
    id!:number;
    cliente!:Cliente;
    funcionario!:Funcionario;
    data_hora!:Date
}