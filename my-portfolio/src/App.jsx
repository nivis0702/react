import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Mywork from "./Mywork.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Skills from"./Myskills.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/myproject" element={<Mywork />} />
        <Route path="/myskills" element={<Skills/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
