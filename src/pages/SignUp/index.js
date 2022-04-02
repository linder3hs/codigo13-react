import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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
  const [dateSelect, setDateSelect] = useState(null);

  // vamos a crear una funcion usando formik
  const formik = useFormik({
    // dentro de formik vamos a definir los valores iniciales de nuestro
    // formulario
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      address: "",
      city: "",
      date_born: "",
      document_number: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="lg">
      {/* como esto es un form tiene un evento llamando onSubmit */}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <h2>Crear cuenta</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="name"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellido"
              name="last_name"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Correo"
              name="email"
              type="email"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Telefono"
              name="phone_number"
              type="number"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Direccion"
              name="address"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Ciudad"
              name="city"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Fecha de nacimiento"
                name="date_born"
                value={dateSelect}
                inputFormat="dd/MM/yyyy"
                onChange={(date) => {
                  // en este caso tenemos la funcion setDateSelect
                  setDateSelect(date);
                  // existe una propiedad llamada setFieldValue
                  //setFieldValue recibe 2 cosas
                  // 1 el nombre de campo (name)
                  // 2 el valor de campo (date)
                  formik.setFieldValue("date_born", date);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="DNI/Pasaport/CE"
              name="document_number"
              type="number"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="genero">Genero</InputLabel>
              <Select
                labelId="genero"
                label="Genero"
                onChange={formik.handleChange}
                name="gender"
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button type="submit" variant="contained" fullWidth size="large">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
