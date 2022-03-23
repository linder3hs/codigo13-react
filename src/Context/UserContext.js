import { createContext, useState } from "react";

export const UserContext = createContext();

// TODO Context necista un Provider el cual se encargue de poder
// guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
  const [user, setUser] = useState({
    name: "Pepe",
    last_name: "Zapata",
  });

  const [pedidos, setPedidos] = useState(["pedido1", "pedido2"]);

  return (
    <UserContext.Provider value={{ user, setUser, pedidos, setPedidos }}>
      {props.children}
    </UserContext.Provider>
  );
};
