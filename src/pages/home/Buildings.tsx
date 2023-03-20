import styled from "@emotion/styled"
import { Button, Card, Grid, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addOrcamento, removeOrcamento } from "../../data/reducers/orcamento"
import { clientes } from "../../data/initialState"
import { Orcamento } from "../../@types/orcamento"

const Buildings = () => {
  const orcamentos = useSelector((state : any) => state.orcamento)

  const dispatch = useDispatch();

  const adicionar = () => {
    dispatch(addOrcamento({
      id: parseInt((Math.random() * 1000).toString()),
      cliente : clientes[0],
      atividades : undefined,
      data_orcamento : (new Date()),
      data_inicio : (new Date()),
      data_termino : (new Date()),
      fase_atual : undefined
    }))
  }

  const remover = () => {
    var orcamento_to_delete : Orcamento = orcamentos[orcamentos.length - 1]
    dispatch(removeOrcamento(orcamento_to_delete.id))
  }

  return (
    <Buildings.Container direction="column">
      <Buildings.Title>
        Obras / Orçamentos em execução
      </Buildings.Title>
      <Buildings.Grid container spacing={2}>
      {orcamentos.map((orcamento : Orcamento) => {
        return (
          <Buildings.GridItem item xs={4}>
            <Buildings.Card>
              <h2>{orcamento.cliente.nome}</h2>
              <h2>{orcamento.id}</h2>
            </Buildings.Card>
          </Buildings.GridItem>
        )
      })}
      </Buildings.Grid>
      <Buildings.Buttons>
        <Button fullWidth variant="contained" onClick={() => adicionar()}>
          Cadastrar novo orçamento
        </Button>
        <Button fullWidth variant="contained" onClick={() => remover()}>
          Remover orçamento
        </Button>
      </Buildings.Buttons>  
    </Buildings.Container>
  )
}

Buildings.Container = styled(Stack)``;
Buildings.Title = styled.h3``;
Buildings.Grid = styled(Grid)``;
Buildings.GridItem = styled(Grid)``;
Buildings.Card = styled(Card)`
  padding: ${p => p.theme.spacing(1)};
`;
Buildings.Buttons = styled.div`
  margin-top: ${p => p.theme.spacing(2)};
`;

export default Buildings