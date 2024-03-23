import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
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
            <Link to="/projects">here</Link>
          </span>
        </div>
      </div>
    </>
  );
}
