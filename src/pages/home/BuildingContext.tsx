import { createContext } from "react"

type TypeBuildingsContext = {
  builds : any,
  setBuilds : any
}

export const BuildingsContext = createContext<TypeBuildingsContext>({builds: [], setBuilds: () => {}})