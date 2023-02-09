import { Button, Card, CardActions, CardContent } from "@mui/material";
import Grid from "../components/Grid";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <Grid>
      <Login.Container>
        <Card>
          <CardContent>
            <label htmlFor="">E-mail</label>
            <input type="email" />
            <label htmlFor="">Senha</label>
            <input type="password" />
          </CardContent>
          <CardActions>
            <Button>
              Entrar
            </Button>
          </CardActions>
        </Card>
      </Login.Container>
    </Grid>
  )
}

Login.Container = styled.div`
  margin-top: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(2)}
`

export default Login