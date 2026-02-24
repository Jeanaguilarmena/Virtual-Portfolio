import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import HeaderPage from "./pages/headerPage/headerPage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import SkillsPage from "./pages/skillsPage/skillsPage";
import FunPage from "./pages/funPage/funPage";
import ContactPage from "./pages/contactPage/contactPage";
import CurriculumPage from "./pages/curriculumPage/curriculumPage";
import TryOnDetailsPage from "./pages/tryOnDetailsPage/tryOnDetailsPage";
import CVDetailsPage from "./pages/CVDetailsPage/CVDetailsPage";
import TrustPage from "./pages/trustPage/trustPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPage />}>
          <Route index element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/fun" element={<FunPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/tryon" element={<TryOnDetailsPage />} />
          <Route path="/virtualcv" element={<CVDetailsPage />} />
          <Route path="/trust" element={<TrustPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
