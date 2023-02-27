import styled from "@emotion/styled"
import { Button, Card, Grid, Stack } from "@mui/material"

const Buildings = () => {
  const buildings = [
    {
      nome : "Escola A",
      data_orcamento : "06/01/2022",
      inicio_obras : "06/01/2022",
      data_previsto_termino : "08/08/2022",
      percentual_concluido : 20,
      fase_atual : "Pavimentação do terreno"
    },
    {
      nome : "Escola B",
      data_orcamento : "06/01/2022",
      inicio_obras : "06/01/2022",
      data_previsto_termino : "08/08/2022",
      percentual_concluido : 80,
      fase_atual : "Pavimentação do terreno"
    }
  ]
  return (
    <Buildings.Container direction="column">
      <Buildings.Title>
        Obras / Orçamentos em execução
      </Buildings.Title>
      <Buildings.Grid container spacing={2}>
      {buildings.map(building => {
        return (
          <Buildings.GridItem item xs={4}>
            <Buildings.Card>
              <h2>{building.nome}</h2>
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