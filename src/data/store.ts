import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Como iniciar sua store
const initialState = [
  {
    descricao : 'Name of the item'
  }
]

// Adicionando acoes aos seus reducers
const ITEM_ADD = "item/ADD"
const add = createAction(ITEM_ADD, item => {
  return {
    payload: item
  }
})

// Criar reducers dentro da sua loja
const itemReducer = createReducer(initialState, builder => {
  builder.addCase(add, (state, data) => {
    state.push(data.payload.item)
  })
})

// Adicionar logica para chamada das actions
export const addItem = (data : string) => {
  return add({
    type: ITEM_ADD,
    item: {
      descricao : data
    }
  })
}

const store = configureStore({
  reducer : {
    items : itemReducer
  }
})

export default store