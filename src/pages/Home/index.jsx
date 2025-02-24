import { useEffect, useState } from "react";
import api from "../../service/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

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
      console.log(response.data);
      setFilmes(response.data.results.slice(0, 10));
    }
    laodFilmes();
  }, []);
  return (
    <div>
      <div>
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
