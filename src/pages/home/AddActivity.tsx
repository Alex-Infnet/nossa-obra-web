import styled from "@emotion/styled"
import { Alert, Button, Card, Grid, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"

const AddActivity = () => {
  const [isValid, setIsValid] = useState<boolean>(true)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data : Object) => {
    console.log(data)
  }

  const onError = (errors : Object) => {
    setIsValid(false)
    console.log(errors)
  }

  return (
    <Stack direction="column">
      <Grid container spacing={2}>
        <AddActivity.Grid item xs={12}>
          <AddActivity.Card >
            <AddActivity.Title>
              Cadastrar atividade
            </AddActivity.Title>
            {!isValid && 
            <Alert severity="warning">
              Verifique o preenchimento das informações!
            </Alert>}
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={8}>
                <TextField
                  label="Descrição"
                  placeholder="Informe a descrição"
                  fullWidth
                  {...register("descricao",{required: "Você precisa informar uma descrição"})}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    label="Categoria"
                    placeholder="Informe a categoria"
                    fullWidth
                    {...register("categoria",{required: true})}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={4}>
                <TextField
                  label="Previsto"
                  fullWidth
                  type="date"
                  {...register("previsto",{required: true})}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    label="Responsável"
                    placeholder="Informe o responsável pela atividade"
                    fullWidth
                    {...register("responsavel",{required: true, minLength: 3})}
                  />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    label="Número de funcionários"
                    placeholder="Informe o número de funcionários envolvidos"
                    fullWidth
                    type="number"
                    {...register("numero_funcionarios",{required: true, min: {
                      value: 1,
                      message: "O número minimo de funcionários é 1"
                    }})}
                  />
              </Grid>
            </Grid>
            <AddActivity.Button variant="contained" onClick={handleSubmit(onSubmit, onError)}>
              Salvar
            </AddActivity.Button>
          </AddActivity.Card>
        </AddActivity.Grid>
      </Grid>
    </Stack>
  )
}

AddActivity.Grid = styled(Grid)`
  margin-top: ${p => p.theme.spacing(2)};
`

AddActivity.Title = styled.h3``;

AddActivity.Card = styled(Card)`
  padding: ${p => p.theme.spacing(2)};
`

AddActivity.Button = styled(Button)`
  margin-top: ${p => p.theme.spacing(4)};
`

export default AddActivity