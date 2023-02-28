import styled from "@emotion/styled"
import { Button, FormLabel, Input } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"

type BuildingInputs = {
  descricao: string,
  categoria: string,
};

const CreateBuilding = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<BuildingInputs>()

  const onSubmit: SubmitHandler<BuildingInputs> = (data : object) => {
    console.log(data)
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
    </CreateBuilding.Form>
  )
}

CreateBuilding.Form = styled.form`
  margin-top: ${p => p.theme.spacing(1)};
`;

export default CreateBuilding