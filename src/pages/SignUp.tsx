import { Button, CardActions, CardContent, Input, Stack } from "@mui/material";
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
      <Stack direction="row" spacing={2}>
        <Link to="/user/signin">Login</Link>
        <Link to="/user/forgotpassword">Esqueceu sua senha?</Link>
      </Stack>
    </>
  )
}

export default SignUp