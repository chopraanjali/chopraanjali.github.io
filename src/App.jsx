import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Layout/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="card">
        <h1>Hi, I'm Anjali!</h1>
        <p>
          I'm a frontend developer based in Magdeburg, Germany. <br />I ensure
          the co-existence of function and beauty in my work and pay close
          attention to detail.
        </p>
        <div id="workLinkIntro">
          Check out my work{" "}
          <span>
            <a href="/Users/anjali/FreshStart/UdemyCourse/Portfolio/projects.html">
              here
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
