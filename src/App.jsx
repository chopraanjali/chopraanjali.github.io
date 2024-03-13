import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="card">
        <h1>Hi, I'm Anjali!</h1>
        <p>
          I'm a frontend developer based in Magdeburg, Germany. <br />I ensure
          the co-existence of function and beauty in my work and love to create
          engaging user experiences.
        </p>
        <div>
          <p>
            Tech stack: HTML5, CSS3, SASS, JavaScript, TypeScript, ReactJS,
            NodeJS, MongoDB, Python
          </p>
        </div>
        <div id="workLinkIntro">
          Check out my work{" "}
          <span>
            <a href="/Users/anjali/FreshStart/UdemyCourse/Portfolio/projects.html">
              here
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
