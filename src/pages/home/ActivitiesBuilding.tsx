import { useContext } from "react"
import { BuildingsContext } from "./BuildingContext"
import { useParams } from "react-router"

type ParamsType = {
  id : string
}

const ActivitiesBuilding = () => {
  const {builds, setBuilds} = useContext(BuildingsContext)
  const params = useParams<ParamsType>()
  const atividades = builds[params.id ? parseInt(params.id) : 0].atividades
  return (
    <ul>
      {atividades.map((atividade: any) => (
        <li>{atividade.descricao}</li>
      ))}
    </ul>
  )
}

export default ActivitiesBuilding