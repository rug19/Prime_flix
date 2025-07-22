import { useState } from "react";
import { db } from "../../config/firebaseConnection";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import "./Posts.css";

export default function Posts() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [post, setPost] = useState([]);
  const [idPost, setIdPost] = useState("");

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

  async function buscarTodos() {
    const postsRef = collection(db, "posts");

    try {
      const snapshot = await getDocs(postsRef);
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          autor: doc.data().autor,
          titulo: doc.data().titulo,
        });
        setPost(lista);
      });
    } catch (error) {
      console.log("Erro ao carregar os posts", error);
    }
  }

  async function atualizarPost() {
    const postRef = doc(db, "posts", idPost);

    try {
      await updateDoc(postRef, {
        titulo: titulo,
        autor: autor,
      });
      setIdPost("");
      setAutor("");
      setTitulo("");
    } catch (error) {
      console.log("Erro ao autualizar post", error);
    }
  }

  async function excluirPost(id) {
    alert(id);
  }

  return (
    <main className="container">
      <h1 className="titulo">Meus Posts</h1>
      <div className="formContainer">
        <label>Id do post: </label>
        <input
          type="text "
          placeholder="Digite o id do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />
        <br />
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
        <button onClick={buscarTodos}> Buscar todos os Posts</button>
        <button onClick={atualizarPost}> Atualizar Post</button>
      </div>

      <ul style={{ marginTop: 10 }}>
        {post.map((data) => {
          return (
            <li key={data.id}>
              <p>Id: {data.id}</p>
              <p>Titulo:{data.titulo}</p>
              <p>Autor:{data.autor}</p>
              <button onClick={() => excluirPost(data.id)}>Excluir</button>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
