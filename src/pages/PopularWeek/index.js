import { useState } from "react";
import { Container, Grid } from "@mui/material";

const PopularWeek = () => {
  const [clothes, setClothes] = useState([
    {
      photo: "../../assets/foto1.png",
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 120.23,
      price_with_disscount: 120.23,
    },
    {
      photo: "../../assets/foto2.png",
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 100,
      price_with_disscount: 90,
    },
    {
      photo: "../../assets/foto3.png",
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 150.11,
      price_with_disscount: 140.24,
    },
    {
      photo: "../../assets/foto4.png",
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: 120.23,
      price_with_disscount: 105.23,
    },
  ]);
};
