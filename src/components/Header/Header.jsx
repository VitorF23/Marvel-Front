import logo from "../../img/Marvel-Logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/allpersonnages">
        <img src={logo} alt="Marvel" />
      </Link>
      <div className="header-link">
        <Link to="/allpersonnages">
          <span>Personnages</span>
        </Link>
        <Link to="/allcomic">
          <span>Comics</span>
        </Link>
        <Link to="/favorits">
          <span>Favorits</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
