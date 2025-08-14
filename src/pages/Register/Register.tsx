import { useState } from "react";
import "./Register.css";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister } = useAuth();

  const onSubmit = () => {
    const userData = { name, lastName };
    handleRegister(email, password, userData);
    setEmail("");
    setPassword("");
    setName("");
    setLastName("");
  };

  return (
    <div className="registerContainer">
      <div className="cardRegister">
        <h1 className="title">Cadastro</h1>
        <label htmlFor="name">Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          type="text"
        />
        <label htmlFor="lastName">Sobrenome</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Sobrenome"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={onSubmit} className="registerButton">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
