import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./assets/Componentes/Footer";
import Home from "./assets/Pages/Home";
import Navbar from "./assets/Componentes/Navbar";
import Register from "./assets/Pages/Registro";
import LoginPage from "./assets/Pages/Login";
import Cart from "./assets/Pages/Cart";
import Pizza from "./assets/Pages/Pizza";
import NotFound from "./assets/Componentes/NotFound"
import Profile from "./assets/Componentes/Profile"



const App = () => {
  return(
    <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/login' element={ <LoginPage />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/cart' element={ <Cart />}/>
      <Route path='/pizza/p001' element={ <Pizza />}/>
      <Route path='/404' element={ <NotFound />}/>
      <Route path='/profile' element={ <Profile />}/>
      <Route path='*' element={ <NotFound />}/>
    </Routes>
    <Footer />
    
  </BrowserRouter>

)
}

export default App