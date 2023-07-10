import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Community from "./pages/Community";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Programs from "./pages/Programs";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";

function App() {


  const [numberOfColorBoxes, setNumberOfColorBoxes] = useState(200);

  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.appendChild(colorBox);
    }
  }, [numberOfColorBoxes]);

  return (
    <div>
      
        <div className="bgAnimation" id="bgAnimation">
          <div className="backgroundAmim">

          </div>
        </div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPage />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

// homepage , projects ,project,blog, community,programs
