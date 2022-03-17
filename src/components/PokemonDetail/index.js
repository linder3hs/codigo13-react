import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const PokemonDetail = () => {
  const [abrir, setAbrir] = useState(false);

  // vamos a hacer una funcion la cual se encargue de cambiar el estado
  const openDialog = () => {
    setAbrir(true);
  };

  const closeDialog = () => {
    setAbrir(false);
  };

  return (
    <div>
      <Button onClick={openDialog} variant="contained" color="primary">
        Detalle del pokemon
      </Button>
      <Dialog open={abrir} onClose={closeDialog}>
        <DialogContent>
          <h4>Pokemon name</h4>
          <Button onClick={closeDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
