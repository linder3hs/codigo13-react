// para poder evitar el erro de cy is not defined vamos a definir a cy como global
/* global cy */

// Este archivo sera el que contenga nuestras pruebas
// Para poder iniciar una prueba necesitamos darle un titulo
// en este caso usamos describe para darle un titulo
describe("Mi primera prueba con cypress", () => {
  // dentro de nuestro arrow function vamos a escribir las pruebas
  // que haremos ejemplo
  it("prueba home pokemon", () => {
    // aca vamos a verificar si es que nuestro home funciona o no
    //cy => cypress
    // Esto va a entrar a localhost:3000 y decirno si funciona o no
    cy.visit("http://localhost:3000/");
    // contains
    // Esto sirve para poder buscar algun texto en nuestra pagina
    // que busque la palabra pokedex
    cy.contains("Pokedex");
    // ahora vamos a buscar el boton que diga Detalle del pokemon
    cy.contains("Detalle del pokemon").click();
    // Reto quiero que despues de abrir el modal busque la palabra Habilidades
    cy.contains("Habilidades");
    // Como cierro el modal?
    // Nota recuerden que el texto debe ser el mismo que esta nuestro codigo
    // cy.contains("CERRAR").click();
    cy.contains("Cerrar").click();
  });

  // vamos a crear a otra prueba para /flags
  it("pruebas para banderas", () => {
    cy.visit("http://localhost:3000/flags");
    // vamos a ver como podemos escribir en un input
    // Estamos buscando el primero input y luego de encontrarlos
    // estamos escribiendo peru en dicho input
    cy.wait(5000).then(() => {
      cy.get("input:first").type("peru");
      cy.contains("Republic of Peru").click();
      cy.contains("Lima");
    });
  });

  // Creeen una prueba para http://localhost:3000/youtube y
  // verifiquen si que existe un titulo NAME 33
});
