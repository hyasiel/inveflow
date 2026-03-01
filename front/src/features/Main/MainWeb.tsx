import { Fragment } from "react";
import {Link} from "react-router-dom"

import { Header } from "@/shared/layout/header/Header";
import "./mainweb.css"
//import {Footer}from "@shared/layout/Footer"

//first page route " / "

export function MainWeb() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="hero-section">
          <h1>TU ALIADO PARA LA GESTION DE RECURSOS</h1>
          <h3>EL ORDEN ES FUNDAMENTAL PARA EL CRECIMIENTO DE TU NEGOCIO</h3>
          <button><Link to="/dashboard">COMENZAR</Link></button>
        </section>
      </main>
      <footer></footer>
    </Fragment>
  );
}
