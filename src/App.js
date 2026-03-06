import "./App.css";
import Downhome from "./components/Downhome";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Project from "./components/Project";
// import Skill from "./components/Skill";
// import Contact from "./components/Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact1 from "./components/contac/Contact1";
import Project1 from "./components/projec/Project1";
import About1 from "./components/abou/About1";
import Skill1 from "./components/skil/Skill1";
import Home1 from "./components/hom/Home1";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="cofd">
          <Routes>
            <Route path="/" element={
                <>
                  <Home1 />
                  <Downhome />
                  <Footer />
                </>
              }/>

            <Route path="/about" element={<About1 />} />
            <Route path="/projects" element={<Project1 />} />
            <Route path="/skill" element={<Skill1 />} />
            <Route path="/contact" element={<Contact1 />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
