//react imports
import { Route, Routes } from "react-router-dom";

//app components import
import { MainWeb } from "@/features/main/MainWeb";
import { Panel } from "@/features/dashboard/Panel";

//export the routes function
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainWeb />} />
      <Route path="/dashboard" element={<Panel />} />
    </Routes>
  );
}
