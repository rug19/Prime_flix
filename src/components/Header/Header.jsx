import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <nav className="navContainer">
        <Link className="favoritos" to="/favoritos">
          Meus filmes
        </Link>
        <Link className="Posts" to="/Posts">
          Meus Posts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
