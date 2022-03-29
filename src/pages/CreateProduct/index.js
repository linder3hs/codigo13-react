import { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { storeProductClothe } from "../../service/firestore";

const CreateProduct = () => {
  const [values, setValues] = useState(null);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h4>Crear Producto</h4>
        </Grid>
        <Grid item md={6}>
          <TextField label="Nombre del producto" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Link del producto" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Precio del producto" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Precio oferta del producto" fullWidth />
        </Grid>
        <Grid item md={12}>
          <Button variant="contained">Guardar</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
