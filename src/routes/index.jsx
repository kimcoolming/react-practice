import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import ComponentsPage from "../pages/ComponentsPage";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Study from "../pages/Study";

function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/study" element={<Study />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </MainLayout>
  );
}

export default Router;