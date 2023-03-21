import styled from "@emotion/styled";
import { Button, CardActions, CardContent, Grid, Input, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const {getToken, setToken} = useToken()
  const submit = () => {
    var headers = new Headers()
    headers.append("Content-Type", "application/json");
    fetch("https://localhost:7172/user/login", {
      method: 'post',
      body: JSON.stringify({
        Email : email,
        Password : password
      }),
      headers: headers
    })
    .then(data => data.text())
    .then(response => {
      setToken(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <label>E-mail</label>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
          <label>Senha</label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth size="large" onClick={submit}>
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