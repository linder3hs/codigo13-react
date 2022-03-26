import { useContext } from "react";
import { Container, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../Context/UserContext";

const BasketView = () => {
  const { basket } = useContext(UserContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={8}>
          <h3>Bolsa de Compras </h3>
          <Grid container spacing={3}>
            {basket.map((product) => (
              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3}>
                        <img
                          style={{ objectFit: "contain" }}
                          width={150}
                          height={150}
                          src={product.photo}
                          alt=""
                        />
                      </Grid>
                      <Grid item md={3}>
                        <h4>{product.name}</h4>
                      </Grid>
                      <Grid item md={3}>
                        <p>$ {product.price}</p>
                        <p>$ {product.price_sale}</p>
                      </Grid>
                      <Grid item md={3}>
                        <h4>{product.quantity}</h4>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <h4>Total precio</h4>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketView;
