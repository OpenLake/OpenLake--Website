import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Community from "./views/Community";
import Projects from "./views/Projects";
import ProjectPage from "./views/ProjectPage";
import Resource from "./views/Resource";
import Programs from "./views/Programs";
import Blogs from "./views/Blogs";
import Error from "./views/Error";
import { Navbar } from "./components";
import { Footer } from "./components";
import Past from "./views/Past";
// import GLOBE from "vanta/src/vanta.globe";
import BlogDetail from "./views/BlogDetail";
// import LoadingPage from "./components/LoadingPage";
import GettingStarted from "./views/GettingStarted"
import ContributorPathways from "./views/ContributorPathways"
import ExternalResources from "./views/ExternalResources"
import IssueHunting from "./views/IssueHunting"
import Glossary from "./views/Glossary"

function App() {
  // const [loading, setLoading] = useState(true);
  // const location = useLocation();
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       GLOBE({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         minHeight: 20.0,
  //         minWidth: 20.0,
  //         scale: 0.05,
  //         scaleMobile: 1.0,
  //         size: 0.5,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }
  return (
    <div>
      {/* <div className="overlay">
        <div ref={myRef} className="bg" id="vanta">
          {" "}
        </div>
      </div> */}
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPage />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<BlogDetail />}></Route>
          <Route path="/past-community" element={<Past />}></Route>
          <Route path="/Resource" element={<Resource />}></Route>
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/Contributor-pathways" element={<ContributorPathways />} />
          <Route path="/Issue-hunting" element={<IssueHunting />} />
          <Route path="/Curated-extrenal-resources" element={<ExternalResources/>} />
          <Route path="/Glossary" element={<Glossary />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

// homepage , projects ,project,blog, community,programs
