import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { loginService, registerService } from "../service/authService";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../config/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    });
    return unsubscribe;
  });

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

  async function Register(email, password, userData) {
    try {
      const userCredential = await registerService(email, password, userData);
      setUser(userCredential.user);
      console.log("Usuario cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar o usuario", error);
      throw error;
    }
  }

  async function Logout() {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      console.log("Usuario saiu")
    } catch (error) {
      console.log("Erro ao fazer logout: ", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, userData, Login, Register, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
