import { FaUserCircle } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">Prime Flix</h1>
      <nav className="navContainer">
        <Link to="/home">Home</Link>
        <Link to="/favoritos">Meus filmes</Link>
        <Link to="/Posts">Meus Posts</Link>
      </nav>
      <div>
        <Link>
          <FaUserCircle color="white" size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
