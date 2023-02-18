import styled from "@emotion/styled";
import { Button, CardActions, CardContent, Grid, Input, Stack } from "@mui/material";
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
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ForgotPassword.Link to="/user/signin">Login</ForgotPassword.Link>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <ForgotPassword.Link to="/user/signup">Criar conta</ForgotPassword.Link>
          </Grid>
        </Grid>
      </CardActions>
    </>
  )
}

ForgotPassword.Link = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.palette.grey[700]};
`

export default ForgotPassword