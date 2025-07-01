import { useState } from "react";
import { db } from "../../config/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";
import "./Posts.css";

export default function Posts() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  //Function to register a new post
  async function handleAdd() {
    await setDoc(doc(db, "posts", "3"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Post cadastrado com sucesso");
        setTitulo("");
        setAutor("");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar o post", error);
      });
  }

  return (
    <main className="container">
      <h1 className="titulo">Meus Posts</h1>
      <div className="formContainer">
        <label>Titulo: </label>
        <textarea
          className="input"
          type="text"
          placeholder="Digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>
        <label>Autor: </label>
        <input
          className="input"
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <button onClick={handleAdd}> cadastrar</button>
      </div>
    </main>
  );
}
