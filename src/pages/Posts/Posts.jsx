import { useState } from "react";
import { db } from "../../config/firebaseConnection";
import { addDoc, collection, getDoc, doc } from "firebase/firestore";
import "./Posts.css";

export default function Posts() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  //Function to register a new post
  async function handleAdd() {
    try {
      await addDoc(collection(db, "posts"), {
        titulo: titulo,
        autor: autor,
      });

      console.log("Post cadastrado co sucesso");
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.log("Erro a o cadastrar o post", error);
    }
  }

  
  async function buscarPost() {
    const postRef = doc(db, "posts", "2");

    try {
      const snapshot = await getDoc(postRef);
      setAutor(snapshot.data().autor);
      setTitulo(snapshot.data().titulo);
      console.log("Post buscado com sucesso ");
    } catch (error) {
      console.log("Erro ao buscar o post", error);
    }
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
        <button onClick={buscarPost}> Buscar post</button>
      </div>
    </main>
  );
}
