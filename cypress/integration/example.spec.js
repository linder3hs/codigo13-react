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
  });
});
