import { useEffect, useState } from "react";
import api from "../../service/api";

function Home() {
  const [filmes, setFilmes] = useState();

  useEffect(() => {
    async function laodFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "fc47ea96c9537915c286567e9f5efb27",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response);
    }
    laodFilmes();
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
