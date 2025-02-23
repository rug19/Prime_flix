import axios from "axios";

//Base da URL
//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=fc47ea96c9537915c286567e9f5efb27

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;