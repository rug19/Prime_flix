import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const { user, Login, Register } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(email, password) {
    try {
      await Login(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer o login", error);
    }
  }

  async function handleRegister(email, password) {
    try {
      await Register(email, password);
    } catch (error) {
      console.error("Erro ao cadastrar um usuario", error);
    }
  }

  return { handleLogin, handleRegister, user };
}
