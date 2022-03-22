import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, TextField, Button } from "@mui/material";
import { getMovieDetail, updateMovie } from "../../service/movies";

const MovieUpdate = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    director: "",
    gender: "",
    video_link: "",
    wallpaper: "",
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchDetailMovie = async () => {
    const response = await getMovieDetail(id);
    // cuando hacemos la peticion podemos llenar a values usando setValues
    setValues({
      name: response.name,
      director: response.director,
      gender: response.gender,
      video_link: response.video_link,
      wallpaper: response.wallpaper,
    });
  };

  const fetchUpdateMovie = async () => {
    await updateMovie(id, values);

    window.location.href = "/youtube/administrador";
  };

  useEffect(() => {
    fetchDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h4>Actualizar Pelicula</h4>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            label="Nombre de la peli"
            name="name"
            fullWidth
            value={values.name}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Nombre del director"
            name="director"
            fullWidth
            value={values.director}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Genero"
            name="gender"
            fullWidth
            value={values.gender}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Link del video"
            name="video_link"
            fullWidth
            value={values.video_link}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Link de la portada"
            name="wallpaper"
            fullWidth
            value={values.wallpaper}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" onClick={fetchUpdateMovie}>
            Actualizar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieUpdate;
