import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Components/Template/Template";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
