import styled from "@emotion/styled"
import { AccountCircle, Menu as IconMenu } from "@mui/icons-material"
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material"
import { useState } from "react"

const Header = () => {

  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  return (
    <AppBar position="static">
      <Toolbar>
        <Header.Menu>
          <IconMenu />
        </Header.Menu>
        <Header.Title>
          Nossa Obra
        </Header.Title>
        <Header.Profile>
          <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu open={anchorEl !== null} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
            <MenuItem>Home</MenuItem>
          </Menu>
        </Header.Profile>
      </Toolbar>
    </AppBar>
  )
}

Header.Title = styled.h4`
  flex-grow: 1;
`
Header.Menu = styled.div`
  margin-right: ${p => p.theme.spacing(1)}
`
Header.Profile = styled.div`
`

export default Header