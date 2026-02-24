import { Route, Routes } from "react-router-dom";
import { MainWeb } from "@features/Main/MainWeb";

//export the routes function
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainWeb />} />
    </Routes>
  );
}
