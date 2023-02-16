import { Card } from "@mui/material";
import Grid from "../components/Grid";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Access = () => {
  const year = (new Date()).getFullYear()
  return (
    <Grid>
      <Access.Container>
        <Access.Cliente>
          Nossa Obra
        </Access.Cliente>
        <Access.Card>
          <Outlet />
        </Access.Card>
        <Access.Sistema>
          Sistema desenvolvido em {year}
        </Access.Sistema>
      </Access.Container>
    </Grid>
  )
}

Access.Card = styled(Card)`
  border-radius: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)};
`

Access.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(2)};
  gap: ${p => p.theme.spacing(2)};
`

Access.Cliente = styled.div`
  text-align: center;
  font-size: ${p => p.theme.typography.h4.fontSize};
  color: ${p => p.theme.palette.primary.main};
`

Access.Sistema = styled.div`
  font-size: 0.8rem;
  text-align: center;
`

export default Access