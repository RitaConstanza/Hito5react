const Profile = () => {
    const Email = "usuario@gmail.com";
  
    return (
      <div className="card mx-auto shadow" style={{ maxWidth: "1000px", height: "75vh" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Perfil de usuario</h2>
  
          <p className="text-muted">
            Email: {Email}
          </p>
          <button className="btn btn-dark mt-3">
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  };
  
  export default Profile;
  