import { Atividade } from "./atividade"
import { Cliente } from "./cliente"
import { Fase } from "./fase"

export type Orcamento = {
  id: number,
  cliente : Cliente,
  atividades : Array<Atividade> | undefined,
  data_orcamento : Date,
  data_inicio : Date,
  data_termino : Date,
  fase_atual : Fase | undefined
}