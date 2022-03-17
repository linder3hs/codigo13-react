// En material existe un tag llamando container
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { getDataFromPokemon } from "../../service";
// vamos a ver como pode ejecutar la funcion que se encargar de traer a los
// pokemones

const Home = () => {
  // vamos a crear una variable la cual se encargue de guardar la lista de pokemones
  const [pokemons, setPokemon] = useState([]);

  // debemos crear una funcion la cual se encargue de ejecutar a getDataFromPokemon y
  // la data que retorne esa funcion guardarla usnado setPokemon
  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    // ahora como ya recuperamos la lista de los pokemons hay usar
    // la funcion setPokemon para poder guardar esa lista en pokemons
    console.log("listPokemones.results", listPokemones.results);
    setPokemon(listPokemones.results);
  };

  // en react existe una funcion llamada useEffect la cual se ejecuta cuando la pagina
  // esta iniciando, vamos a usar useEffect si queremos ejecutar algo al
  // inicio de la aplicacion
  // La estructura de useEffect es la siguiente
  useEffect(() => {
    // aca llamamos a la funcion que queremos ejecutar
    fetchPokemonList();
    //!IMPORTANTE por ahora en los useEffect debemos colocar un array vacio
    //! esto se hace para evitar un bucle infinio, si no colocamos el array vacio
    //! la funcion que este dentro de useEffect se llamada n veces de forma infinita
  }, []);

  return (
    <Container>
      <h1>Pokedex</h1>
    </Container>
  );
};

export default Home;
