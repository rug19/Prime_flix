import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  async function handleRegister() {
    alert("Teste");
  }

  return (
    <div className="loginContainer">
      <div className="card">
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="emailInput">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="emailInput"
            placeholder="Digite seu email"
            type="email"
          />
          <label htmlFor="passwordInput">Senha</label>
          <input
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            id="passwordInput"
            placeholder="Digite a sua senha"
            type="password"
          />
          <button onClick={handleRegister} className="button">
            Enviar
          </button>
          <Link to="/cadastro">Não tem conta? Cadastre-se aqui</Link>
        </div>
      </div>
    </div>
  );
}
