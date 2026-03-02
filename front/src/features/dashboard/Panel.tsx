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

            {/*esta lista aplicara como botones de muestreo de elementos, no como enlaces*/}
            <ul className="aside-list">
              <li className="aside-item">Item1</li>
              <li className="aside-item">Item2</li>
              <li className="aside-item">Item3</li>
              <li className="aside-item">Item4</li>
              <li className="aside-item">Item5</li>
            </ul>
          </div>
        </aside>
        <main className="main">main</main>
      </div>
    </Fragment>
  );
}
