import { useState } from "react";

const Register = () => {
  const [datos, setDatos] = useState({
    email: '',
    contraseña: '',
    confirmar: ''
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleResult = () => {
    console.log('Los datos son:', datos);
  };

  const validarInput = (e) => {
    e.preventDefault();

    const { email, contraseña, confirmar } = datos;

    if (!email || !contraseña || !confirmar) {
      setMessage("Todos los campos son obligatorios");
      return;
    }
    
    if (contraseña.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (contraseña !== confirmar) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    setMessage("Registro exitoso");
  };

  return (
    <div className="formulario">
      <form onSubmit={validarInput}>
        <div className="card">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={datos.email}
            onChange={handleChange}
          />

          <p>Contraseña</p>
          <input
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            value={datos.contraseña}
            onChange={handleChange}
          />

          <p>Confirmar contraseña</p>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmar"
            value={datos.confirmar}
            onChange={handleChange}
          />

          <button type="submit">Enviar</button>
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
