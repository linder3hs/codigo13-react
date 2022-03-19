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
  const fetchMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <h4>Lista de Peliculas</h4>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Genero</TableCell>
              <TableCell>Link del video</TableCell>
              <TableCell>Botones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.length > 0 &&
              movies.map((movie) => (
                <TableRow>
                  <TableCell>{movie.name}</TableCell>
                  <TableCell>{movie.director}</TableCell>
                  <TableCell>{movie.gender}</TableCell>
                  <TableCell>{movie.video_link}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default YoutubeAdministrator;
