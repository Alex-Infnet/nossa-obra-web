import Grid from "../components/Grid";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <Grid>
      <Login.Container>
        Login
      </Login.Container>
    </Grid>
  )
}

Login.Container = styled.div`
  margin-top: ${p => p.theme.spacing(12)};
  background-color: ${p => p.theme.palette.primary.main};
  padding: ${p => p.theme.spacing(2)}
`

export default Login