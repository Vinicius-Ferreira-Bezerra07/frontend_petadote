import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register/registerPage";
import { Login } from "../pages/Login/loginPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
