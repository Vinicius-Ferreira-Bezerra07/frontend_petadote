import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register/registerPage";
import { Login } from "../pages/Login/loginPage";
import { Home } from "../pages/Home/homePage.jsx";
import { Perfil } from "../pages/Perfil/perfilPage.jsx";
import {Footer} from "../components/Footer/index.jsx";
import {Header} from "../components/Header/index.jsx";




export const AppRouter = () => {
  return (
   

    <Router>
      <Footer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
       
      </Routes>
    </Router>
    
   
    
  );
  
};
