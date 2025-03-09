import { useState } from "react";

const Profile = () => {
    const [email, setEmail] = useState("usuario@gmail.com");

    return (
      <div className="profilecard">
        <div className="tarjeta">
          <div className="card-body text-center">
            <h2 className="card-title">Perfil de usuario</h2>
            
            <input
              type="email"
              className="form-control mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu email"
            />

            <button className="btn btn-dark mt-3">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
};

export default Profile;

  