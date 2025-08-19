import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";

export async function loginService(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Erro no login", error.code, error.message);
    throw error;
  }
}

export async function registerService(email, password, userData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      nome: userData.name,
      sobrenome: userData.lastName,
      email: email,
    });
    console.log("Dados salvos com sucesso", user);
    return user;
  } catch (error) {
    console.error("Erro ao criar usuario", error);
    throw error;
  }
}

export async function logOutService() {}
