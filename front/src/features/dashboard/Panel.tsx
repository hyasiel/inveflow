import { Fragment } from "react";
//import { Header } from "@shared/layout/header/Header";
//import { Footer } from "@shared/layout/footer/Footer";
import "./panel.css";
export function Panel() {
  return (
    <Fragment>
      <div className="panel-box">
        <aside className="aside">
          <div className="aside-profile">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt=""
            />
          </div>

          {/*esta lista aplicara como botones de muestreo de elementos, no como enlaces*/}
          <ul className="aside-list">
            <li className="aside-item item-almacen">almacenes</li>
            <li className="aside-item item-products">productos</li>
            <li className="aside-item item-analytics">analisis detallado</li>
          </ul>
          <ul className="aside-list-action">
            <li className="aside-item item-exit">salir</li>
          </ul>
        </aside>
        <main className="main panel-general">
          <div className="main-item main-products">total de productos</div>
          <div className="main-item main-edit">editar productos</div>
          <div className="main-item main-categories">categorias actuales</div>
          <div className="main-item main-suppliers">proveedores</div>
          <div className="main-item main-actual">almacen actual</div>
          <div className="main-item main-analytics">analisis</div>
        </main>
      </div>
    </Fragment>
  );
}
