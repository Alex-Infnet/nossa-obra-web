import { Atividade } from "../@types/atividade"
import { Cliente } from "../@types/cliente"
import { Fase } from "../@types/fase"
import { Orcamento } from "../@types/orcamento"

const atividades : Array<Atividade> = [
  {
    descricao : "",
    categoria : "",
    previsto : (new Date("2023-01-10")),
    responsavel : "",
    numero_funcionarios : 1,
    custo_unitario : 20,
    metragem : 2,
    bdi : 32,
    outras_informacoes : ""
  }
]
export const clientes : Array<Cliente> = [
  {
    nome : "Escola A",
    url : "",
    responsavel : "Cliente",
    email : ""
  }
]
const fases : Array<Fase> = [
  {
    descricao : "Pavimentação"
  }
]
const orcamentos : Array<Orcamento> = [
  {
    id : 1,
    cliente : clientes[0],
    atividades : atividades,
    data_orcamento : new Date(),
    data_inicio : new Date(),
    data_termino : new Date(),
    fase_atual : fases[0]
  }
]

export default orcamentos