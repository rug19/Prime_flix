import { FiLogOut } from "react-icons/fi";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { userData, handleLogout } = useAuth();
  return (
    <header>
      <h1 className="logo">Prime Flix</h1>
      <nav className="navContainer">
        <Link to="/home">Home</Link>
        <Link to="/favoritos">Meus filmes</Link>
        <Link to="/Posts">Meus Posts</Link>
      </nav>
      <div className="userContainer">
        <span className="user">Olá, {userData?.nome}</span>
        <button className="Headerbutton" onClick={handleLogout}>
          <FiLogOut  size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
