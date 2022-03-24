import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const { user } = useContext(UserContext);

  // Estamos validando si el usuario no existe entonces hacemos
  // que auotmaticamente la pagina lo redirija al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Private;
