import styled from "@emotion/styled";
import { Button, CardActions, CardContent, Grid, Input, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <label>E-mail</label>
          <Input />
          <label>Senha</label>
          <Input type="password" />
          <label>Confirmar senha</label>
          <Input type="password" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth size="large">
          Criar conta
        </Button>
      </CardActions>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SignUp.Link to="/user/signin">Login</SignUp.Link>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <SignUp.Link to="/user/forgotpassword">Esqueceu sua senha?</SignUp.Link>
          </Grid>
        </Grid>
      </CardActions>
    </>
  )
}

SignUp.Link = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.palette.grey[700]};
`

export default SignUp