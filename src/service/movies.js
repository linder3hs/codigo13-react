/**
 * Este archivo se va a ecargar de gestionar mi servios GET POST PUT DELETE
 */
const URL = "https://622ab12714ccb950d222bd2f.mockapi.io/api/v1/movies";
//const URL = "http://localhost:3000/movies";
/**
 * Funcion para listar las peliculas
 */
export const getMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const storeMovie = async (movie) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    await response.json();
    // Falta limpiar los inputs
    document.querySelector("form").reset();

    console.log("success");
  } catch (error) {
    console.log(error.message);
  }
};

// Sera para poder obtener el detalle de una pelicula
export const getMovieDetail = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Para poder actualizar las peliculas
// recibe el id para buscar que pelicula actualizar
// recibe que es el objeto con la informacion que actualizara
export const updateMovie = async (id, movie) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// Para poder eliminas un registro solo necesito el ID de este
export const deleteItem = async (id) => {
  try {
    //  ahoara debemos hacer un fetch usando el metodo DELETE
    // profe y donde va el id?
    // el id va en la url
    // ejemplo: "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies/1";
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    await response.json();

    console.log("success");
  } catch (error) {
    console.log(error.message);
  }
};
