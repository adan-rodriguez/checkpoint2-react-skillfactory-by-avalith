import { Link } from "react-router-dom";
import avalith_logo_white from "../assets/images/avalith-logo-white.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" title="Home">
        <img src={avalith_logo_white} alt="Logo de Avalith." className="logo" />
      </Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/rickandmorty">API Rick & Morty</Link>
        <Link to="/form">Form</Link>
      </nav>
    </header>
  );
};

export default Header;
