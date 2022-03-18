import { useState } from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  Grid,
  Slider,
} from "@mui/material";
import { getDataFromPokemon } from "../../service";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);

  const [pokemonData, setPokemonData] = useState({});

  // como se lee un atributo que estamos recibiendo del componente
  // padre
  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  // vamos a hacer una funcion la cual se encargue de cambiar el estado
  // Entra a la funcion
  // setea el valor setAbrir al valor contrario que tenga abrir
  // abrir = true
  // !abrir = false
  // abrir = false
  // !abrir = true
  const handleOpenDialog = async () => {
    // cuando se abre el modal abrir es true o es false?

    // primero hace el console de abrir que es false y luego reciend pasa a true
    if (!abrir) {
      // ejecutamos la funcion fetchDetailFromPokemon
      await fetchDetailFromPokemon();
    }

    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Detalle del pokemon
      </Button>
      <Dialog
        open={abrir}
        onClose={handleOpenDialog}
        fullWidth={"md"}
        maxWidth={"md"}
      >
        <DialogContent>
          {/* Esto extrar los keys de un objeto */}
          {Object.keys(pokemonData).length > 0 && (
            <div className="center">
              <h2 className="name-pokemon">{props.nombre}</h2>
              <Grid container>
                <Grid item md={6}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <h4>Especie</h4>
                  <Chip
                    label={pokemonData.species.name}
                    color="success"
                    sx={{ marginRight: 2 }}
                  />
                  <h4>Puntos de base</h4>
                  {pokemonData.stats.map((stat) => (
                    <div>
                      <h5>{stat.stat.name}</h5>
                      <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}
                </Grid>
                <Grid item md={6}>
                  <img
                    width={350}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
