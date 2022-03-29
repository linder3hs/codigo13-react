import { useContext, useState } from "react";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";
import { UserContext } from "../../Context/UserContext";
// si tenemos 2 funciones con el mismo nombre podemos usar un alias en el import
import {
  storeUser as storeUserFirebase,
  loginUser,
} from "../../service/firestore";
import swal from "sweetalert";

const Login = () => {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    // vamos hacer una funcion que se encargue de poder hacer login
    // ahora si el usuario con el que estamos login no existe lo creamos
    // como nuevo usuario
    /**
     * Primero vamos a intentar hacer login el usuario
     */
    const { email, password } = userData;
    let response = await loginUser(email, password);
    console.log(response);
    if (!response.ok) {
      // si esto es falso el usuario no existe por ende lo vamos a crear
      response = await storeUserFirebase(email, password);

      if (!response.ok) {
        swal({
          title: "Error",
          text: response.data,
          icon: "error",
        });

        return;
      }
    }
    // recuerden que despues del login o el createUser debemos guardar al usuario
    //  en userContext
    storeUser(response.data.user);
    window.location.href = "/youtube/administrador";
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#FFD885" }}
    >
      <Grid item md={6}>
        <img src={bgLogin} width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Tecsup - Codigo</h3>
            <p>
              Bienvenido a la comunidad de CodiGo, juntos aprenderemos a
              programas paginas web.
            </p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Password"
                  fullWidth
                  type="password"
                  name="password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
