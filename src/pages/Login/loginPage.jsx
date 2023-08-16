import { Link } from "react-router-dom";
import { useState } from "react";
import petIMG from "../../assets/pet.svg";
import { LayoutComponents } from "../../components/LayoutComponents";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
})

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      usuario: email,
      password,
    };

    api.post("/user/validate", JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // Processar a resposta do servidor, se necessário
        if (response.data.validation == "true") {
          console.log(response.data.id_user);
          localStorage.setItem('idUser', response.data.id_user)
          console.log(localStorage.getItem('idUser'));
          window.location.href = "/"
        } else {
          console.log('res', response.data);
        }
      })
      .catch(error => {
        // Tratar erros de requisição, se necessário
        console.error('erro', error);
      });
  };

  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="login-form-title"> PetAdote </span>

        <span className="login-form-title">
          <img src={petIMG} alt="Pet Adote" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
