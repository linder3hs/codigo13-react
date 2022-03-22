import { useState } from "react";
import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material";
import { storeMovie } from "../../service/movies";

const MovieCreate = (props) => {
  const [open, setOpen] = useState(false);

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

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  const fetchStoreMovie = async () => {
    await storeMovie(values);
    await props.fetchMovies();
    handleOpenDialog();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Crear Pelicula
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                label="Nombre de la peli"
                name="name"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Nombre del director"
                name="director"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Genero"
                name="gender"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Link del video"
                name="video_link"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Link de la portada"
                name="wallpaper"
                fullWidth
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" onClick={fetchStoreMovie}>
                Crear
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MovieCreate;
