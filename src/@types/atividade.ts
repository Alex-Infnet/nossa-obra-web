export type Atividade = {
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