// En material existe un tag llamando container
import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
// vamos a ver como pode ejecutar la funcion que se encargar de traer a los
// pokemones

const Home = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

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
      {/* es bueno validar que el array este lleno para que recien ejecute el map */}
      {/* && estamos simulando un if  */}
      {/* if (pokemons.lenght > 0) {
          "lleno"
      } */}
      {/* pokemons.lenght > 0 && "leno" */}
      {/* pokemons.lenght > 0 ? "lleno" : "vacio" */}

      {/*  Operador ternario => if {} else {}  */}
      {/* {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          // aca el codigo visual
          <p>{pokemon.name}</p>
        ))
      ) : (
        <h4>No hay datos</h4>
      )} */}
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            // aca el codigo visual
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card className="card-pokemon">
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={`${imgUrl}${index + 1}.svg`}
                />
                <CardContent>
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
