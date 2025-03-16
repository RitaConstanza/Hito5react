import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext"; 
import { UserContext } from "../Context/UserContext";

function Navbar() {
  const { totalPrice } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mía!</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">🍕Home</Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/Profile" className="nav-link">🔓Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logout}>
                    🔒Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔐Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Register" className="nav-link">🔐Register</Link>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">
                🛒Total: ${totalPrice ? totalPrice.toLocaleString("de-DE") : "0"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

