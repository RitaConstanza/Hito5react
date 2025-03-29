import { useState, useContext } from "react"; 
import "./Login.css";
import { UserContext } from "../Context/UserContext"; 
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="container">
          <p>Email</p>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingrese su correo"
            value={credentials.email}
            onChange={handleChange}
          />

          <p>Contraseña</p>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
