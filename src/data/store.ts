import { configureStore } from '@reduxjs/toolkit'
import {orcamentoReducer} from './reducers/orcamento'

const store = configureStore({
  reducer : {
    orcamento : orcamentoReducer
  }
})

export default store