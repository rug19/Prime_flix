import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../service/api";
import "./Filme.css";
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilm() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "fc47ea96c9537915c286567e9f5efb27",
            language: "pt-BR",
          },
        });
        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Filme nao encontrado", error);
        navigation("/", { replace: true });
        return;
      }
    }

    loadFilm();

    return () => {
      console.log("COMPONENTE DESMONTADO");
    };
  }, [id, navigation]);


  //Funcao para salvar o filme no local storage
  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando filme...</h1>
      </div>
    );
  }

  return (
    
    <div className="filme-info">
  
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong> Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
