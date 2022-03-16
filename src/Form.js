// Esto sera un componente el cual nos renderizara un formulario de registro
const FormRegister = () => {
  return (
    <div>
      <form action="">
        <h4>Formualario de registro</h4>
        <p>
          <input type="text" placeholder="Ingrese su nombre" />
        </p>
        <p>
          <input type="text" placeholder="Ingrese su apellido" />
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
