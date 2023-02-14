import { Button, CardActions, CardContent, Input, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <label>E-mail</label>
          <Input />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth size="large">
          Recuperar senha
        </Button>
      </CardActions>
      <Stack direction="row" spacing={2}>
        <Link to="/user/signin">Entrar</Link>
        <Link to="/user/signup">Criar conta</Link>
      </Stack>
    </>
  )
}

export default ForgotPassword