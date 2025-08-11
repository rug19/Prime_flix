import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { loginService, registerService } from "../service/authService";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function Login(email, password) {
    try {
      const userCredential = await loginService(email, password);
      setUser(userCredential.user);
      console.log("User logged in successfuly: ", userCredential.user);
    } catch (error) {
      console.error("Login error", error.message);
      throw error;
    }
  }

  async function Register(email, password) {
    try {
      const userCredential = await registerService(email, password);
      setUser(userCredential.user);
      console.log("Usuario cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar o usuario", error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, Login, Register }}>
      {children}
    </AuthContext.Provider>
  );
}
