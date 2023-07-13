import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Community from "./pages/Community";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Programs from "./pages/Programs";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import { Navbar } from "./components";
import { Footer } from "./components";
import Past from "./pages/Past";
import GLOBE from "vanta/src/vanta.globe";
import AdvancedCarousel from "./components/AdvancedCarousel";
import BlogDetail from "./pages/BlogDetail";



function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 20.0,
          minWidth: 20.0,
          scale: 0.05,
          scaleMobile: 1.0,
          size: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <div className="overlay">
        <div ref={myRef} className="bg" id="vanta">
          {" "}
        </div>
      </div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/car" element={<AdvancedCarousel />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPage />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<BlogDetail />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/past-community" element={<Past />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

// homepage , projects ,project,blog, community,programs
