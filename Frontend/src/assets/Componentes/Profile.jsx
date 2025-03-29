import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import ritaImagen from "../Img/rita.jpg";

const Profile = () => {
  const { getProfile, logout } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!getProfile || !localStorage.getItem("token")) return;
    
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error al obtener perfil:", error);
        setProfile(null);
      }
    };

    fetchProfile();
  }, [getProfile]);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="profilecard">
      <div className="tarjeta">
        <div className="card-body text-center">
          <h2 className="card-title">Perfil de usuario</h2>
          <img className="rita-img" src={ritaImagen} alt="Rita" />

          <input
            type="email"
            className="form-control mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu email"
          />

          <button className="btn btn-dark mt-3" onClick={() => { logout(); navigate("/login"); }}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;


  