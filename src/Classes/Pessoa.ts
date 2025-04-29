/* 
Criar a classe pai(superclasse) chamado pessoa que passará todos os seus dados às clases filhas.
A Classe Pessoa segue o principio O(Open/Close) do SOLID,
onde, temos a classe fechada para modificar e aberta para extensões.
O qualificador abstract(abstrato) mantém a classe Pessoa, sempre abstrata, não permitindo
que ela seja materializada, ou seja, não poderá ser uma instância 
*/

import Endereco from "./Endereco";
export default  abstract class Pessoa{
    /* "?" é opcional mas não obrigatorio "!" esse é obrigatório*/ 
    id!:number;
    nome!:string;
    cpf!:string;
    email!:string;
    numero?:string;
    endereco!: Endereco;
}