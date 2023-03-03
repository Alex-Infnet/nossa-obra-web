import styled from "@emotion/styled"
import { Button, Card, Grid, Stack } from "@mui/material"
import { useContext } from "react"
import { BuildingsContext } from "./BuildingContext"

const Buildings = () => {
  const {builds, setBuilds} = useContext(BuildingsContext)
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
              <h2>{build.cliente}</h2>
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