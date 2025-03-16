import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));


  const logout = () => {
    setToken(false);
    localStorage.removeItem("token"); 
  };

  const login = (userToken) => {
    setToken(true);
    localStorage.setItem("token", userToken); 
  };

  
  const value = useMemo(() => ({ token, logout, login }), [token]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider };
