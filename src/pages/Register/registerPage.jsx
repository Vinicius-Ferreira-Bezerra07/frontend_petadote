import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"
import petIMG from '../../assets/pet.svg'
import { IMaskInput } from "react-imask";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
})

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cpf, setCpf] = useState("")
  const [datan, setDatan] = useState("")
  const [telefone, setTelefone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nome: name,
      email,
      endereco,
      cpf,
      data_nascimento: datan,
      telefone,
      senha: password,
    };

    api.post("/user", JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // Processar a resposta do servidor, se necessário
        console.log('res', response.data);
      })
      .catch(error => {
        // Tratar erros de requisição, se necessário
        console.error('erro', error);
      });
  };

  return (
    <LayoutComponents >
      <form className="login-form" onSubmit={handleSubmit}>


        <span className="login-form-title"> Cadastre-se </span>

        <span className="login-form-title">
          <img src={petIMG} alt="Pet Adote" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={endereco !== "" ? "has-val input" : "input"}
            type="endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Endereço"></span>
        </div>
        <div className="wrap-input">
          <IMaskInput
            className={cpf !== "" ? "has-val input" : "input"}
            mask="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <span className="focus-input" data-placeholder="CPF"></span>
        </div>
        <div className="wrap-input">
          <input
            className={datan !== "" ? "has-val input" : "input"}
            type="date"
            value={datan}
            onChange={(e) => setDatan(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Data de Nascimento"></span>
        </div>
        <div className="wrap-input">
          <IMaskInput
            className={cpf !== "" ? "has-val input" : "input"}
            mask="(00)00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Telefone"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">Cadastrar</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}