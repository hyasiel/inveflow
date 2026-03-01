import { Fragment } from "react";
import { Header } from "@shared/layout/header/Header";

export function Panel() {
  return (
    <Fragment>
      <div className="panel-box">
        <Header />
        <aside className="aside">aside</aside>
        <main className="main">main</main>
      </div>
    </Fragment>
  );
}
