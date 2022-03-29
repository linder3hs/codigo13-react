import { Container, Grid, Button } from "@mui/material";

const Profile = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <img src="" alt="" />
        </Grid>
        <Grid item md={4}>
          <h4>Nombre</h4>
          <p>email.com</p>
          <Button variant="contained">Actualizar perfil</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
