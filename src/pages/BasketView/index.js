import { useContext, useState, useEffect } from "react";
import { Container, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const BasketView = () => {
  const { basket } = useContext(UserContext);

  const [total, setTotal] = useState(0);

  const calculatePrice = () => {
    let sum = 0;
    basket.forEach((product) => {
      const finalPrice = +product.quantity * +product.price_sale;
      sum += finalPrice;
    });
    setTotal(sum);
  };

  useEffect(() => {
    calculatePrice();
  }, []);

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
                        <div>
                          <Button>
                            <AddRoundedIcon />
                          </Button>
                          &nbsp;&nbsp;
                          {product.quantity}
                          &nbsp;&nbsp;
                          <Button>
                            <RemoveRoundedIcon />
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardContent>
              <h4>Resumen de tu orden</h4>
              <p>
                Sub-total productos <span>$ {total}</span>
              </p>
              <Button variant="contained" size="large">
                Realizar Pago
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketView;
