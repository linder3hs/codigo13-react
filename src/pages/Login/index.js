import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";

const Login = () => {
  return (
    <Grid container spacing={3} alignItems="center" sx={{ height: "100vh" }}>
      <Grid item md={6}>
        <img src={bgLogin} width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Tecsup - Codigo</h3>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
