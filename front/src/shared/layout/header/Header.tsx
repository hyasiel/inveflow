import { Link } from "react-router-dom";
import "./header.css";
import logo from "./assets/logo.png";
export function Header() {
  return (
    <>
      <header>
        {/* Nav section*/}

        <nav>
          <a href=""><img src={logo} alt="Inveflow" /></a>

          <ul className="header-list">
            <li className="header-item">
              <Link to="/dashboard">Mi Inventario</Link>
            </li>
            <li className="header-item">
              <Link to="/login">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
