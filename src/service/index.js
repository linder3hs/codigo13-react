/**
 * Sera nuestro archivo donde vamos a almancenar las paticiones
 */

// Una buena practica es tener la URL del api en una variable
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=700";
// comentario de prueba

// podemos crear una funcion generica la cual se encargue de hacer una peticion
// como parametro vamos a recibir la URL que puede ser la que lista o la
// que nos el detalle
// * url sera el parametro que reciba la url hacia donde se hara la peticion
// * url = BASE_URL Significa que si url esta vacio, es decir cuando llamemos
// * a la funcion no le pasamos el valor por defecto sera BASE_URL
// url tomara el valor de BASE_URL
// getDataFromPokemon();

// url toma el valor https://link.com
// getDataFromPokemon("https://link.com");
export const getDataFromPokemon = async (url = BASE_URL) => {
  try {
    // ahora debemos ejecutar el fetch para poder traer la informacion
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// export const storePokemon = async () => {};

// export const updatePokemon = async () => {};

// export const deletePokemon = async () => {};
