import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);


  const login = async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }
  
      const { token, email } = await response.json(); 
      setToken(token);
      setEmail(email);
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } catch (error) {
      console.error("Error en el login:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  
  const register = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", userData);
      const { email } = response.data;
      return email;
    } catch (error) {
      console.error("Error al registrar al usuario:", error);
      throw error;
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error para obtener el perfil");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  const value = useMemo(() => ({ token, email, login, register, logout, getProfile, }));

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider };
