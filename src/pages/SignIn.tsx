import { Button, CardActions, CardContent, Input, Stack } from "@mui/material";
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
      <Stack direction="row" spacing={2}>
        <Link to="/user/signup">Criar conta</Link>
        <Link to="/user/forgotpassword">Esqueceu sua senha?</Link>
      </Stack>
    </>
  )
}

export default SignIn