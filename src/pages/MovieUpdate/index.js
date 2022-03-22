import { useState } from "@mui/material";
import { Grid, TextField, Button } from "@mui/material";

const MovieUpdate = () => {
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

  return (
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
        <Button variant="contained">Crear</Button>
      </Grid>
    </Grid>
  );
};

export default MovieUpdate;
