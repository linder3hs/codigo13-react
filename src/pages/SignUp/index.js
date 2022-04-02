import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  Radio,
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

  const [validateInputsEmpty, setValidateInputsEmpty] = useState({
    name: false,
    last_name: false,
    email: false,
    phone_number: false,
    password: false,
    address: false,
    city: false,
    date_born: false,
    document_number: false,
    gender: false,
  });

  // vamos a crear una variable que se encargue de manejar si es que el boton
  // esta en disabled o no
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // vamos a crear una funcion llamada validate la cual se va a encargar
  // de poder almacenar los errores que tengas en nuestro formulario
  // nota: validate va a recibir como parametros los valores de nuestros inpus
  const validate = (values) => {
    // aca estaran nuestros errores
    // podemos validar que todos los campos sean requerido
    // para hacerlo pro podriamos usar los key de nuestro inputs y ver que si algunos
    // este vacio lance un error de que todos los campos son requeridos
    // Esto extrae los keys del objeto y los guarda en un array
    const errors = {};
    delete values.marital_status;
    delete values.date_born;
    delete values.gender;
    Object.keys(values).forEach((value) => {
      //aca estamos comparado si es el uno de los items del objeto esta vacio
      // si este vacio entonces muestra en la consola dicho campo
      // if (values[value] === "") {
      // aca a va imprimir los nombre de los inputs que estan vacios
      //  aca deberamos usar la funcion setValidateInputsEmpty
      //   errors[value] = true;
      // } else {
      //   errors[value] = false;
      // }
      errors[value] = values[value] === "" ? true : false;
    });
    // basicamente si todos los campos de error son false entonces
    // asumimismo que todo esta lleno

    // Object.values(errors) Es un array que tiene los valores
    // if (Object.values(errors).includes(true)) {
    //   setButtonDisabled(true);
    // } else {
    //   setButtonDisabled(false);
    // }
    // recordemos que includes retorna true o false
    // si encuenstra al elemento es true si no false
    setButtonDisabled(Object.values(errors).includes(true));
    setValidateInputsEmpty(errors);
  };

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
      marital_status: "",
      languages: [],
    },
    // para poder usar validate dentro de formik necesitamos llamar a la funcion
    // validate antes del onSubmit
    // validate que ahora es una funcion de formik por ende el valir default
    // que tendra como parametros son los values
    validate,
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
          {/* NOTA: Lo inputs de material tienen una propiedad para mostrar errores */}
          {/* llamada error si error es true entonces el input se marca de rojo si no, no pasada */}
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="name"
              fullWidth
              error={validateInputsEmpty.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellido"
              name="last_name"
              fullWidth
              error={validateInputsEmpty.last_name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Correo"
              name="email"
              error={validateInputsEmpty.email}
              type="email"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Telefono"
              name="phone_number"
              error={validateInputsEmpty.phone_number}
              type="number"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              error={validateInputsEmpty.password}
              type="password"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Direccion"
              name="address"
              error={validateInputsEmpty.address}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Ciudad"
              name="city"
              error={validateInputsEmpty.city}
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
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    error={validateInputsEmpty.date_born}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="DNI/Pasaport/CE"
              name="document_number"
              type="number"
              error={validateInputsEmpty.document_number}
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
          <Grid item md={6} xs={12}>
            {/* Radio de estado civil */}
            <FormControl>
              <FormLabel id="label-radio">Estado civil</FormLabel>
              <RadioGroup
                aria-labelledby="label-radio"
                onChange={formik.handleChange}
                name="marital_status"
              >
                <FormControlLabel
                  value="soltero"
                  control={<Radio />}
                  label="Soltero"
                />
                <FormControlLabel
                  value="divorciado"
                  control={<Radio />}
                  label="Divorciado"
                />
                <FormControlLabel
                  value="viudo"
                  control={<Radio />}
                  label="Viudo"
                />
                <FormControlLabel
                  value="casodo"
                  control={<Radio />}
                  label="Casado"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="ingles"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Ingles"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="portuges"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Portugues"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="espanol"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Español"
              />
            </FormGroup>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              type="submit"
              disabled={buttonDisabled}
              variant="contained"
              fullWidth
              size="large"
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;

// entienden que values es el objeto que tiene los valores delo inputs
// const values = {
//   name: "pepe",
//   last_name: "",
//   email: "",
//   phone_number: "",
//   password: "",
//   address: "",
// };

// ahora al hacer un Objet.key(values)
// estamos extrayendo los key guardandalo en un array
// Object.keys(values);
// [name, last_name, email, phone_number, password, address];

// ahora para poder extraer lo que es un elemente del objeto hay 2 formas
// values.name = pepe
// values[name] = pepe

// Si le hacemos un forEach a Object.keys(values);
// Object.keys(values).forEach((value) => {
//   console.log(value);
//   console.log(values[value]);
//   if (values[value] === "") {
//     console.log("Este valor " + value + " esta vacio");
//   }
// });
