import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConnection";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  async function handleRegister() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPasword("");
      console.log("Usuario cadastrado com sucesso");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("Senha muito fraca");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Email já existe!");
      }
    }
  }

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
        <button onClick={handleRegister} className="registerButton">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
