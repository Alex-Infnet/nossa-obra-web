import styled from "@emotion/styled";
import { Button, CardActions, CardContent, Grid, Input, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
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
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SignIn.Link to="/user/signup">Criar conta</SignIn.Link>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <SignIn.Link to="/user/forgotpassword">Esqueceu sua senha?</SignIn.Link>
          </Grid>
        </Grid>
      </CardActions>
    </>
  )
}

SignIn.Link = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.palette.grey[700]};
`

export default SignIn