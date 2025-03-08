import { useEffect, useState } from "react";
import api from "../../service/api";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  //Ao carregar a pagina, faz uma requisição para API
  useEffect(() => {
    async function laodFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "fc47ea96c9537915c286567e9f5efb27",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));//Carrega apenas 10 objetos cotendo os dados
      setLoading(false);//Caso encontre o objeto loading ira sair da tela
    }
    laodFilmes();
  }, []);

  //Mostra que esta esperando carregar o objeto
  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
