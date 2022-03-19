import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getMovies } from "../../service/movies";

const YoutubeAdministrator = () => {
  const [movies, setMovies] = useState([]);

  // reto deben completar el codigo para poder traer las peliculas
  // cuando la pagina de inicie
  // solo la parte del codigo 
  return (
    <Container>
      <h4>Lista de Peliculas</h4>
    </Container>
  );
};

export default YoutubeAdministrator;
