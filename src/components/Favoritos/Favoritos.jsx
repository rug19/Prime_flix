import { useState, useEffect } from "react";
import "./Favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filme, setFilme] = useState([]);

  //Ao carregar pagina ira buscar todos os filmes que estao no localStorage
  useEffect(() => {
    const meusFilmes = localStorage.getItem("@primeflix"); //Pegando os filmes que esta salvo dentro do localStorage
    setFilme(JSON.parse(meusFilmes) || []); //Passando para setFilme as infromacoes convertido em array
  }, []);

  //Funcao para excluir o filme
  function excluirFilme(id) {
    let filtroFilmes = filme.filter((item) => {
      return item.id !== id;
    });

    setFilme(filtroFilmes); 
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso ");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filme.length === 0 && <span>Você não possui nenhum filme :( </span>}
      <ul>
        {filme.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
