import { createAction, createReducer } from "@reduxjs/toolkit";
import initialState from '../initialState'
import { Orcamento } from "../../@types/orcamento";

// Adicionando acoes aos seus reducers
const ORCAMENTO_REMOVE = "orcamento/REMOVE"
export const removeOrcamento = createAction(ORCAMENTO_REMOVE, (id : number) => {
  return {
    payload : id
  }
})

const ORCAMENTO_ADD = "orcamento/ADD"
export const addOrcamento = createAction(ORCAMENTO_ADD, (orcamento : Orcamento) => {
  return {
    payload: orcamento
  }
})

// Criar reducers dentro da sua loja
export const orcamentoReducer = createReducer(initialState, builder => {
  builder.addCase(addOrcamento, (state, data) => {
    state.push(data.payload)
  })
  builder.addCase(removeOrcamento, (state, data) => {
    return state.filter(s => s.id !== data.payload)
  })
})