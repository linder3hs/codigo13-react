/**
 * Para poder crear nuestras debemos importar lo siguiente
 * BrowsRouter: Va a envolver todas las rutas que creemos
 * Routes: Es el child de BrowsRouter el cual nos va a permitir crear las rutas pon
 * componente
 * Route: Es el encargado de recibir el paht y el element y renderizar el element
 * el el path creado
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flags from "../pages/Flags";
import Detail from "../pages/Detail";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrator";
import MovieUpdate from "../pages/MovieUpdate";
import Login from "../pages/Login";
import PopularWeek from "../pages/PopularWeek";
import BasketView from "../pages/BasketView";
import CreateProduct from "../pages/CreateProduct";
// Layout
import Main from "../layouts/Main";
import Private from "../layouts/Private";
import Ecommerce from "../layouts/Ecommerce";

// Nuestro Router va a ser un componente el cual se encargue de retornar
// las rutas con su respectiva vista
const Router = () => {
  // como esto es un componente tenemos que usar return para poder crear las rutas
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE DEL MAIN (PUBLICAS) */}
        <Route path="login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/flags" element={<Flags />} />
          <Route path="/flag/detail/:name" element={<Detail />} />
          <Route path="/youtube" element={<Youtube />} />
        </Route>
        {/* ROUTE para ecommerce */}
        <Route element={<Ecommerce />}>
          <Route path="ecommerce" element={<PopularWeek />} />
          <Route path="ecommerce/basket" element={<BasketView />} />
        </Route>
        {/* ROUTE DEL ADMIN (PRIVADAS) */}
        <Route element={<Private />}>
          <Route
            path="/youtube/administrador"
            element={<YoutubeAdministrator />}
          />
          <Route
            path="/youtube/administrador/editar/:id"
            element={<MovieUpdate />}
          />
          <Route path="/ecommerce/create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
