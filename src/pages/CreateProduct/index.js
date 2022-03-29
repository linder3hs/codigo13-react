import { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { storeProductClothe } from "../../service/firestore";
import swal from "sweetalert";

const CreateProduct = () => {
  const [values, setValues] = useState({
    name: "",
    photo: "",
    price: "",
    price_sale: "",
  });

  // envienem el codigo de la funcion handleInputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickStore = async () => {
    await storeProductClothe(values);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
  };

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h4>Crear Producto</h4>
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Nombre del producto"
            name="name"
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Link del producto"
            onChange={handleInputChange}
            name="photo"
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Precio del producto"
            onChange={handleInputChange}
            name="price"
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Precio oferta del producto"
            name="price_sale"
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item md={12}>
          <Button onClick={handleClickStore} variant="contained">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
