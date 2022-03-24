import { useState } from "react";
import { Container, Grid } from "@mui/material";
import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";

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
    <Container>
      <Grid container spacing={3}>
        {clothes.length > 0 &&
          clothes.map((clothe) => (
            <Grid item md={3}>
              <img width={300} src={clothe.photo} alt="" />
              <p>{clothe.name}</p>
              <p>
                <span>
                  {clothe.price_with_disscount} {clothe.price}
                </span>
                <span>+ Add to Basket</span>
              </p>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularWeek;
