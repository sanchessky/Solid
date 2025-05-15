import Commands from "./Commands";

export default interface CommandsVendas<T> extends Commands <T>{
    PesquisarPorData(data:Date):Promise<T[]>
    PesquisarPorIntervalo(data_inicial:Date, data_final:Date):Promise<T[]>
}
