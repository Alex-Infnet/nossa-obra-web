type Atividade = {
  descricao : string,
  categoria : string,
  previsto : Date,
  responsavel : string | undefined,
  numero_funcionarios : number | undefined,
  custo_unitario : number,
  metragem : number,
  bdi : number,
  outras_informacoes : string | undefined
}
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

type Cliente = {
  nome : string,
  url : string | undefined,
  responsavel : string | undefined,
  email : string | undefined
}
const clientes : Array<Cliente> = [
  {
    nome : "Escola A",
    url : "",
    responsavel : "Cliente",
    email : ""
  }
]

type Fase = {
  descricao : string
}
const fases : Array<Fase> = [
  {
    descricao : "Pavimentação"
  }
]
type Orcamento = {
  cliente : Cliente,
  atividades : Array<Atividade> | undefined,
  data_orcamento : Date,
  data_inicio : Date,
  data_termino : Date,
  fase_atual : Fase | undefined
}
const orcamentos : Array<Orcamento> = [
  {
    cliente : clientes[0],
    atividades : atividades,
    data_orcamento : new Date(),
    data_inicio : new Date(),
    data_termino : new Date(),
    fase_atual : fases[0]
  }
]

export default orcamentos