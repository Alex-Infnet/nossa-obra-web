import styled from "@emotion/styled";
import { Button, CardActions, CardContent, Grid, Input, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { ApiContext } from "../../context/ApiContext";

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const {getToken, setToken} = useToken()
  const {post} = useContext(ApiContext)
  const navigate = useNavigate();

  const submit = () => {
    post("https://localhost:7172/user/login", {
      Email : email,
      Password : password
    })
    .then((data : Response) => data.text())
    .then((response : string) => {
      setToken(response)
    })
    .catch((error : Error) => {
      console.log(error)
    })
  }

  const token = getToken()
  useEffect(() => {
    if (token !== null) {
      navigate("/")
    }
  }, [navigate, token])

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