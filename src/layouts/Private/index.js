import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const Private = () => {
  const { user } = useContext(UserContext);

  // Estamos validando si el usuario no existe entonces hacemos
  // que auotmaticamente la pagina lo redirija al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={1.5} className="border-right">
          <div className="m-5">
            <img
              src="https://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
              className="img-fluid img-logo"
              alt="logo"
            />
            <div className="mt-5">
              <h6>MENU</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-house"></i>&nbsp;Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-fire"></i>&nbsp;Trending
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-youtube"></i>&nbsp;Subscriptions
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-podcast"></i>&nbsp;Live
                  </a>
                </li>
              </ul>
              <h6 className="mt-5">LIBRARY</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-clock"></i>&nbsp;History
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-barcode"></i>&nbsp;Queue
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-heart"></i>&nbsp;Likes
                  </a>
                </li>
              </ul>

              <h6 className="mt-5">EXTRA</h6>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-circle-question"></i>
                    &nbsp;Settings
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-gear"></i>&nbsp;Help
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-comments"></i>&nbsp;Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Private;
