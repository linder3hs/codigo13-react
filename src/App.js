// El primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en mayuscula
// ahora el componente basicamente es una funcion, por ende podemos crearlo
// usando function o arrow function
const PrimerComponente = () => {
  // esta funcion retornar una vista
  // en react usamos return () para inidicar que lo que este dentro de los
  // parentesis sera el objeto visual que vamos a retornar
  // algo importante es que react solo puede retornar un componente a la vez
  // retorna solo un div
  return (
    <div>
      <h1>Hola mundo</h1>
      <div>
        <h4>Hola desde el componente</h4>
      </div>
    </div>
  );
};

// Luego de crear el componente debemos exportarlo
// Esto es como decir que este archivo unicamente esta exportando este componete
export default PrimerComponente;
