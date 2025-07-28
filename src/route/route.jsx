import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Filme from "../pages/Filme/Filme";
import Error from "../components/Error/Error";
import Favoritos from "../components/Favoritos/Favoritos";
import Posts from "../pages/Posts/Posts";
import Login from "../pages/Login/Login";

function RoutesApp() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesApp;
