import { useState } from "react";
import "./Register.css";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const { handleRegister } = useAuth();

  const onSubmit = () => {
    handleRegister(email, password);
    setEmail("");
    setPasword("");
  };

  return (
    <div className="registerContainer">
      <div className="cardRegister">
        <h1 className="title">Cadastro</h1>
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
          onChange={(e) => setPasword(e.target.value)}
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
