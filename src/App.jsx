import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import WorkExperience from "./components/Pages/WorkExperience";
import Education from "./components/Pages/Education";
import Art from "./components/Pages/Art";
import WindowPane from "./components/Layout/WindowPane";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="workExperience" element={<WorkExperience />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="art" element={<Art />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
