import { Stack } from "@mui/material";
import Grid from "../../components/Grid";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import styled from "@emotion/styled";

const NotFound404 = () => {
  return (
    <Grid>
      <Stack spacing={2} direction="column" marginTop={20} alignItems="center">
        <NotFound404.Icon />
        <NotFound404.Message>
          Ops! Parece que essa página não existe, tem certeza que a URL <strong>{window.location.href}</strong> está correta? 
        </NotFound404.Message>
      </Stack>
    </Grid>
  )
}

NotFound404.Message = styled.div`
  font-size: ${p => p.theme.typography.h5.fontSize};
  text-align: center;
`

NotFound404.Icon = styled(SentimentDissatisfiedIcon)`
  font-size: ${p => p.theme.typography.h1.fontSize};
`

export default NotFound404