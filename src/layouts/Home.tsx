import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Grid } from "@mui/material"

const Home = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Outlet />
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Footer />
    </>
  )
}

export default Home