import { Link } from "react-router-dom";
import avalith_logo_white from "../assets/images/avalith-logo-white.svg";
import menu_icon from "../assets/images/menu.svg";
import close_menu_icon from "../assets/images/close.svg";
import { useState } from "react";

const Header = () => {
  const [menuopen, setMenuopen] = useState(false);

  return (
    <header className="header">
      <div>
        <Link to="/" title="Home">
          <img
            src={avalith_logo_white}
            alt="Logo de Avalith."
            className="logo"
          />
        </Link>
        <button
          onClick={() => setMenuopen(!menuopen)}
          className={`open-menu ${menuopen ? "open-menu-none" : ""}`}
          aria-label="Abrir menú"
        >
          <img src={menu_icon} alt="Abrir menú" />
        </button>
        <nav className={`navbar ${menuopen ? "navbar-block" : ""}`}>
          <button
            onClick={() => setMenuopen(!menuopen)}
            className="close-menu"
            aria-label="Cerrar menú"
          >
            <img src={close_menu_icon} alt="Cerrar menú" />
          </button>
          <Link onClick={() => setMenuopen(!menuopen)} to="/">
            Home
          </Link>
          <Link onClick={() => setMenuopen(!menuopen)} to="/users">
            Users
          </Link>
          <Link onClick={() => setMenuopen(!menuopen)} to="/rickandmorty">
            API Rick & Morty
          </Link>
          <Link onClick={() => setMenuopen(!menuopen)} to="/form">
            Form
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
