import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";

const Private = () => {
  const { user } = useContext(UserContext);

  // Estamos validando si el usuario no existe entonces hacemos
  // que auotmaticamente la pagina lo redirija al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Link to="/perfil">
        <Button variant="outlined">Perfil</Button>
      </Link>
      <Outlet />
    </>
  );
};

export default Private;
