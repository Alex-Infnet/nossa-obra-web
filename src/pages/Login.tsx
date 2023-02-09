import { Button, Card, CardActions, CardContent, Input, Stack } from "@mui/material";
import Grid from "../components/Grid";
import styled from "@emotion/styled";

const Login = () => {
  const year = (new Date()).getFullYear()
  return (
    <Grid>
      <Login.Container>
        <Login.Cliente>
          Nossa Obra
        </Login.Cliente>
        <Login.Card>
          <CardContent>
            <Stack spacing={2}>
              <label>E-mail</label>
              <Input />
              <label>Senha</label>
              <Input type="password" />
            </Stack>
          </CardContent>
          <CardActions>
            <Button variant="contained" fullWidth size="large">
              Entrar
            </Button>
          </CardActions>
        </Login.Card>
        <Login.Sistema>
          Sistema desenvolvido em {year}
        </Login.Sistema>
      </Login.Container>
    </Grid>
  )
}

Login.Card = styled(Card)`
  border-radius: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)};
`

Login.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(2)};
  gap: ${p => p.theme.spacing(2)};
`

Login.Cliente = styled.div`
  text-align: center;
  font-size: ${p => p.theme.typography.h4.fontSize};
  color: ${p => p.theme.palette.primary.main};
`

Login.Sistema = styled.div`
  font-size: 0.8rem;
  text-align: center;
`

export default Login