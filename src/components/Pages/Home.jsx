import { Link } from "react-router-dom";
import WindowPane from "../Layout/WindowPane";
export default function Home() {
  return (
    <>
      <div className="card">
        <WindowPane />

        <h1>Hi, Im Anjali!</h1>
        <p>
          Im a frontend developer based in Magdeburg, Germany. <br />I ensure
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
            <Link to="/projects">here</Link>
          </span>
        </div>
      </div>
    </>
  );
}
