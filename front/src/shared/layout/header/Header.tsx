import { Link } from "react-router-dom";
import "./header.css";
import logo from "./assets/logo.png";
export function Header() {
  return (
    <>
      <header>
        {/* Nav section*/}

        <nav>
          <Link to="/">
            <img src={logo} alt="Inveflow" />
          </Link>

          <ul className="header-list">
            <Link to="/dashboard">
              <li className="header-item">Mi Inventario</li>
            </Link>
            <Link to="/dashboard">
              <li className="header-item">Ingresar</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
