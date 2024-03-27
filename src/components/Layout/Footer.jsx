import { Link } from "react-router-dom";
import gitIcon from "../../assets/git-icon.svg";
import mailIcon from "../../assets/mail-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import HorizontalRule from "./HorizontalRule";

export default function Footer() {
  return (
    <div className="footer">
      {/* A Website by{" "}
      <a href="https://www.linkedin.com/in/chopraanjali/" target="_blank">
        Anjali Chopra
      </a> */}
      <div className="footer-container-top">
        <div className="footer-nav">
          <Link to="/projects">projects</Link>
          <Link to="/background">background</Link>
          <Link to="/art">art</Link>
          <Link to="/about">about</Link>
        </div>
        <div className="download-resume-link">
          <Link>
            <img src={downloadIcon} alt="Download resume icon" />
            <span>Résumé</span>
          </Link>
        </div>
      </div>

      <HorizontalRule />

      <div className="footer-links">
        <div className="copyright">&copy; Anjali Chopra 2024</div>
        <div className="quick-links">
          <a
            className="gitIcon"
            href="https://github.com/chopraanjali"
            target="_blank"
          >
            <img src={gitIcon} alt="GitHub profile link icon" />
          </a>
          <a
            className="linkedinIcon"
            href="https://www.linkedin.com/in/chopraanjali/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linked In profile link icon" />
          </a>
          <a className="mailIcon" href="mailto:anjalichopra1994@gmail.com">
            <img src={mailIcon} alt="Email link icon" />
          </a>
        </div>
      </div>
      <div className="footer-designer-credit">Designed by Sarthak Sachdeva</div>
    </div>
  );
}
