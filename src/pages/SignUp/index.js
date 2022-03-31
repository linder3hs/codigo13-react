import { Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";

// nombre
// apellido
// correo
// telefono
// contrasena
// direccion
// ciudad
// fecha de nacimiento
// DNI
// sexo

const SignUp = () => {
  return (
    <Container maxWidth="lg">
      <form>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <h2>Crear cuenta</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label="Nombre" name="name" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label="Apellido" name="last_name" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label="Correo" name="email" type="email" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Telefono"
              name="phone_number"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label="Direccion" name="address" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label="Ciudad" name="city" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Fecha de nacimiento"
                name="date_born"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <TextField
              label="Fecha de nacimiento"
              name="date_born"
              type="date"
              fullWidth
            /> */}
          </Grid>
          <Grid item md={6} xs={12}></Grid>
          <Grid item md={6} xs={12}></Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
