import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hi, I'm Anjali!</h1>
      <div className="card">
        <p>
          I'm a frontend developer based in Magdeburg, Germany. <br />I ensure
          the co-existence of function and beauty in my work and pay close
          attention to detail.
        </p>
      </div>
      <div id="workLinkIntro">
        Check out my work
        <span>
          <a href="/Users/anjali/FreshStart/UdemyCourse/Portfolio/projects.html">
            here
          </a>
        </span>
      </div>
    </>
  );
}

export default App;
