import avalith_logo_white from "../assets/images/avalith-logo-white.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main>
      <h1 className="title-landing">
        React Skill Factory 2022 by
        <img src={avalith_logo_white} alt="Logo de Avalith." />
      </h1>
      <h2 className="checkpoint-landing">Checkpoint #2</h2>
      <div className="links-container-landing">
        <Link to="/users">Users</Link>
        <Link to="/rickandmorty">API Rick & Morty</Link>
        <Link to="/form">Formulario de Contacto</Link>
      </div>
    </main>
  );
};

export default Landing;
