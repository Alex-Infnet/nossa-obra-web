import styled from "@emotion/styled";
import React from "react";

type GridProps = {
  children : React.ReactNode
}

const Grid = (props : GridProps) => {
  return (
    <Grid.Container>
      <Grid.Content>
        {props.children}
      </Grid.Content>
    </Grid.Container>
  )
}

Grid.Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px 1fr;
  background: ${p => p.theme.palette.grey[200]};
  height: 100vh;
`
Grid.Content = styled.div`
  grid-column-start: 2;
`

export default Grid