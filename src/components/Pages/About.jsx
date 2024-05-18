import { Link } from 'react-router-dom';

export default function Contact() {
  const contact = {
    email: 'anjalichopra1994@gmail.com',
    phone: +4915238998631,
    linkedin: 'www.linkedin.com/in/chopraanjali',
    github: 'www.github.com/chopraanjali',
  };
  return (
    <div className="card">
      <h1>Hi, Im Anjali!</h1>
      <p>
        Im a frontend developer based in Magdeburg, Germany. <br />I ensure the
        co-existence of function and beauty in my work and love to create
        engaging user experiences.
      </p>
      <div>
        <p>
          Tech stack: HTML5, CSS3, SASS, JavaScript, TypeScript, ReactJS,
          NodeJS, MongoDB, Python
        </p>
      </div>
      <div id="workLinkIntro">
        Check out my work{' '}
        <span>
          <Link to="/projects">here</Link>
        </span>
      </div>
    </div>
  );
}
