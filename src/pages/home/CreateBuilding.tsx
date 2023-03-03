import styled from "@emotion/styled"
import { FormLabel, Input } from "@mui/material"
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from "react-router";
import { BuildingsContext } from "./BuildingContext";
import { Link } from "react-router-dom";

type BuildingInputs = {
  descricao: string,
  categoria: string,
};

type ParamsType = {
  id : string
}

const CreateBuilding = () => {
  const {builds, setBuilds} = useContext(BuildingsContext)
  const {register, handleSubmit, watch, formState: {errors}} = useForm<BuildingInputs>()
  const params = useParams<ParamsType>()

  const onSubmit: SubmitHandler<BuildingInputs> = (data : object) => {
    const newBuilds = {...builds}
    newBuilds[params.id ? params.id : 0].atividades.push(data)
    setBuilds(newBuilds)
  }

  return (
    <CreateBuilding.Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Descrição:
        </FormLabel>
        <Input {...register("descricao", {
          required: true,
          maxLength: 150
        })} />
        <h6>{errors.descricao && `Descrição deve ser preenchida`}</h6>
        <FormLabel>
          Categoria:
        </FormLabel>
        <Input {...register("categoria", {
          required: true,
          maxLength: 50
        })} />
        <h6>{errors.categoria && `Categoria deve ser preenchida`}</h6>
        <br /><br />
        <Input type="submit" value="Entrar" />
        <hr />
        <p>
          Descricao: {watch("descricao")} - Categoria: {watch("categoria")}
        </p>
        <hr />
        <Link to={`/orcamento/${params.id}`} >
          Voltar ao orçamento
        </Link>
    </CreateBuilding.Form>
  )
}

CreateBuilding.Form = styled.form`
  margin-top: ${p => p.theme.spacing(1)};
`;

export default CreateBuilding