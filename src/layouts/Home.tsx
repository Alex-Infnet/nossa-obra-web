import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Grid } from "@mui/material"
import { BuildingsContext } from "../pages/home/BuildingContext"
import { useState } from "react"
import { buildings } from "../data/buildings"

const Home = () => {
  const [builds, setBuilds] = useState(buildings)
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <BuildingsContext.Provider value={{builds, setBuilds}}>
            <Outlet />
          </BuildingsContext.Provider>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Footer />
    </>
  )
}

export default Home