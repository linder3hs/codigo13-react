import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);

  // vamos a hacer una funcion la cual se encargue de cambiar el estado
  // Entra a la funcion
  // setea el valor setAbrir al valor contrario que tenga abrir
  // abrir = true
  // !abrir = false
  // abrir = false
  // !abrir = true
  const handleOpenDialog = () => setAbrir(!abrir);

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Detalle del pokemon
      </Button>
      <Dialog open={abrir} onClose={handleOpenDialog}>
        <DialogContent>
          <h4>Pokemon {props.nombre}</h4>
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
