import { useState } from "react";

// Esto sera un componente el cual nos renderizara un formulario de registro
const FormRegister = () => {
  // como podemos capturar el valor de un input
  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");
  // En react la forma en la cual obtenemos el valor un input
  // es usando el onChange este evento nos va a permitir capturar el valor
  // de los inputs y guardarlos en una variable

  // Recordemos que con event podemos obtener el valor del input
  // event = event.target.value
  // vamos a hacer una funcion la cual cada vez que se ejecute el onChange se llame
  // y modifique el valor de la variable "nombre"

  // la palabra se usa mucho en React porque recordemos que estamos manejando el
  // estado de la variable
  // recordemos que event es solo un nombre este puede ser cambiado por ejemplo por e
  const handleInputName = (e) => {
    //  que debemos hacer para poder darle el valor nombre?
    // recordemos que el valor va dentro de los ()
    setNombre(e.target.value);
  };

  const handleInputLastname = (e) => setApellido(e.target.value);

  return (
    <div>
      <form action="">
        <h4>Formualario de registro</h4>
        <h4>Nombre {nombre}</h4>
        <h4>Apellido {apellido}</h4>
        <p>
          {/* Al ser un input se sobre entiende que el valor que se envia es event 
          por ende no hace falta pasarle un parametro */}
          <input
            type="text"
            onChange={handleInputName}
            placeholder="Ingrese su nombre"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={handleInputLastname}
            placeholder="Ingrese su apellido"
          />
        </p>
        <p>
          <input type="email" placeholder="Ingrese su email" />
        </p>
        <p>
          <input type="password" placeholder="Ingrese su password" />
        </p>
        <p>
          <button type="submit">Registar</button>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
