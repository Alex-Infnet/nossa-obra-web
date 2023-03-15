import styled from "@emotion/styled"
import { Button, Card, Grid, Stack } from "@mui/material"
import { useSelector } from "react-redux"

const Buildings = () => {
  const builds = useSelector((state : any) => state.orcamento)
  return (
    <Buildings.Container direction="column">
      <Buildings.Title>
        Obras / Orçamentos em execução
      </Buildings.Title>
      <Buildings.Grid container spacing={2}>
      {builds.map((build : any) => {
        return (
          <Buildings.GridItem item xs={4}>
            <Buildings.Card>
              <h2>{build.cliente.nome}</h2>
            </Buildings.Card>
          </Buildings.GridItem>
        )
      })}
      </Buildings.Grid>
      <Buildings.Buttons>
        <Button fullWidth variant="contained">
          Cadastrar novo orçamento
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