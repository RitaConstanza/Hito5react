import { useState, useContext } from "react";
import "./Login.css";
import { UserContext } from "../Context/UserContext"; 
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const [dato, setDato] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  const { login } = useContext(UserContext); 

  const handleChange = (e) => {
    setDato({ ...dato, [e.target.name]: e.target.value });
  };

  const validarInput = (e) => {
    e.preventDefault();
    const { email, password } = dato;

    const validEmail = "usuario@gmail.com";
    const validPassword = "123456";

    if (email !== validEmail || password !== validPassword) {
      setMessage("Email o contraseña incorrectos");
      return;
    }

    setMessage("Datos correctos");
    login("user_token"); 
    navigate("/cart");   
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={validarInput}>
        <div className="container">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={dato.email}
            onChange={handleChange}
          />

          <p>Contraseña</p>
          <input
            type="password"
            name="password"
            value={dato.password}
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