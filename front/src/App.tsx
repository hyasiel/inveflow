import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { AppRoutes } from "@core/routes/AppRoutes";

//this is the first app component
//import the routes
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
