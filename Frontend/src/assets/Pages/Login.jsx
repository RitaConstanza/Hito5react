import { useState } from "react"

const LoginPage = () =>{
    const [dato, setDato] = useState({
        email:'',
        password:''
    });
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setDato({ ...dato, [e.target.name]: e.target.value });
      };
      
    const validarInput = (e) => {
        e.preventDefault();
    const { email, password } = dato;

        if (!email || !password ) {
          setMessage("Todos los campos son obligatorios");
          return;
        }
        
        if (password.length < 6) {
          setMessage("La contraseña debe tener al menos 6 caracteres.");
          return;
        }
        setMessage("Datos correctos");
      };
   
      return(
        <form className="formulario" onSubmit={validarInput}>
            <div className="container">
                <p>Email</p>
                <input type="email" 
                name="email"
                value={dato.email}
                onChange={handleChange}/>

                <p>Contraseña</p>
                <input type="password"
                name="password" 
                value={dato.password}
                onChange={handleChange}/>
                 <button type="submit">Enviar</button>
                 {message && <p>{message}</p>}

            </div>
        </form>
    )
}

export default LoginPage