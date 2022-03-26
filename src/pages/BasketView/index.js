import { Container, Grid, Button, Card, CardContent } from "@mui/material";

const BasketView = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h3>Bolsa de Compras </h3>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketView;
