import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Navbar() {
  const [token, setToken] = useState(null);
  const totalAmount = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
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
                  <a className="nav-link" href="#" onClick={() => setToken(null)}>🔒Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setToken("user_token")}>🔐Login</a>
                </li>
                <li className="nav-item">
                  <Link to="/Profile" className="nav-link">🔐Register</Link>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">🛒Total: ${totalAmount.toLocaleString("de-DE")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
