import { useState, useEffect } from "react";
import "./Favoritos.css";
import { Link } from "react-router-dom";

function Favoritos() {
  const [filme, setFilme] = useState([]);

  //Ao carregar pagina ira buscar todos os filmes que estao no localStorage
  useEffect(() => {
    const meusFilmes = localStorage.getItem("@primeflix"); //Pegando os filmes que esta salvo dentro do localStorage
    setFilme(JSON.parse(meusFilmes) || []); //Passando para setFilme as infromacoes convertido em array
  }, []);

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
      <ul>
        {filme.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
