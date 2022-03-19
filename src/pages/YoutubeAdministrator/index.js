import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { getMovies, deleteItem } from "../../service/movies";
import swal from "sweetalert";

const YoutubeAdministrator = () => {
  const [movies, setMovies] = useState([]);
  // reto deben completar el codigo para poder traer las peliculas
  // cuando la pagina de inicie
  // solo la parte del codigo
  const fetchMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  };

  const fetchDeleteItem = async (id) => {
    console.log(id);
    const response = await swal({
      title: "Esta seguro de eliminar?",
      text: "Recuerda que una vez eliminado no hay vuelta atras",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (response) {
      await deleteItem(id);
      // despues de eliminar la pelicula debemos recargar la tabla
      // despues de elimniar la pelicula vamos a llamar a fetchMovies
      // para que basicamente actualice la tabla y muestro los datos actualizados
      await fetchMovies();
    }
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
                  <TableCell>
                    <a href={movie.video_link}>Ver video</a>
                  </TableCell>
                  <TableCell>
                    <Button color="info">
                      <EditRoundedIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => fetchDeleteItem(movie.id)}
                    >
                      <DeleteForeverRoundedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default YoutubeAdministrator;
