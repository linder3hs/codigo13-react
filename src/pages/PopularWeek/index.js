import { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import "./index.css";

const PopularWeek = () => {
  const [clothes, setClothes] = useState([
    {
      photo: foto1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 120.23,
      price_with_disscount: 120.23,
    },
    {
      photo: foto2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 100,
      price_with_disscount: 90,
    },
    {
      photo: foto3,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 150.11,
      price_with_disscount: 140.24,
    },
    {
      photo: foto4,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 120.23,
      price_with_disscount: 105.23,
    },
  ]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h2 className="center">POPULAR WEEK</h2>
        </Grid>
        {clothes.length > 0 &&
          clothes.map((clothe) => (
            <Grid item md={3}>
              <img width={297} src={clothe.photo} alt="" />
              <div className="description">
                <p>{clothe.name}</p>
                <p className="container-buttons">
                  <span className="price">$ {clothe.price_with_disscount}</span>
                  <span className="price-tacched">$ {clothe.price}</span>
                  <Button className="button-basket">+ Add to Basket</Button>
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularWeek;
