import styled from "@emotion/styled"
import { Button, Card, Grid, LinearProgress, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { Orcamento } from "../../@types/orcamento"

type SectionProps = {
  right? : boolean
}

const Buildings = () => {
  const orcamentos = useSelector((state : any) => state.orcamento)

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
              <Buildings.Cliente>
                <Buildings.Image src="https://placehold.co/300x300" />
                <Buildings.ClienteName>
                  {orcamento.cliente.nome}
                </Buildings.ClienteName>
              </Buildings.Cliente>
              <Buildings.Data>
                <Buildings.DataSection>
                  <Buildings.DataSectionLabel>
                    Orçamento
                  </Buildings.DataSectionLabel>
                  <Buildings.DataSectionValue>
                    {orcamento.data_orcamento.toLocaleDateString()}
                  </Buildings.DataSectionValue>
                </Buildings.DataSection>
                <Buildings.DataSection right={true}>
                  <Buildings.DataSectionLabel>
                    Início das obras
                  </Buildings.DataSectionLabel>
                  <Buildings.DataSectionValue>
                    {orcamento.data_inicio.toLocaleDateString()}
                  </Buildings.DataSectionValue>
                </Buildings.DataSection>
              </Buildings.Data>
              <Buildings.Data>
                <Buildings.DataSection>
                  <Buildings.DataSectionLabel>
                    Término previsto
                  </Buildings.DataSectionLabel>
                  <Buildings.DataSectionValue>
                    {orcamento.data_termino.toLocaleDateString()}
                  </Buildings.DataSectionValue>
                </Buildings.DataSection>
              </Buildings.Data>
              <Buildings.Progress>
                <Buildings.LinearProgress variant="determinate" value={80} color="success" />
              </Buildings.Progress>
              <Buildings.Data>
                <Buildings.DataSection>
                  <Buildings.DataSectionLabel>
                    Fase atual
                  </Buildings.DataSectionLabel>
                  <Buildings.DataSectionValue>
                    {orcamento.fase_atual?.descricao}
                  </Buildings.DataSectionValue>
                </Buildings.DataSection>
              </Buildings.Data>
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
  padding: ${p => p.theme.spacing(2)};
  border-radius: ${p => p.theme.spacing(2)};
`;
Buildings.Buttons = styled.div`
  margin-top: ${p => p.theme.spacing(2)};
`;

Buildings.Cliente = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(1)};
  align-items: center
`

Buildings.Image = styled.img`
  width: 50px;
`;

Buildings.ClienteName = styled.div`
  font-size: ${p => p.theme.typography.h5.fontSize};
  font-weight: bold;
`

Buildings.Data = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.spacing(2)};
`;

Buildings.DataSection = styled.div<SectionProps>`
  font-size: ${p => p.theme.typography.subtitle2.fontSize};
  text-align: ${p => p.right ? 'right' : 'left'};
`;

Buildings.DataSectionLabel = styled.div`
  font-weight: bold;
`;

Buildings.DataSectionValue = styled.div``;

Buildings.Progress = styled.div`
  margin-top: ${p => p.theme.spacing(2)};
`;

Buildings.LinearProgress = styled(LinearProgress)`
  height: ${p => p.theme.spacing(2)};
  border-radius: 1rem;
`


export default Buildings