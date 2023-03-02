import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const Footer = () => {
  const year = (new Date()).getFullYear()
  return (
    <Footer.AppBar>
      <Typography variant="h6">
        Nossa obra - Sistema desenvolvido em {year}
      </Typography>
    </Footer.AppBar>
  )
}

Footer.AppBar = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.palette.primary.main};
  color: ${p => p.theme.palette.grey[100]};
  position: fixed;
  padding: ${p => p.theme.spacing(2)};
  bottom: 0;
  justify-content: center;
`

export default Footer