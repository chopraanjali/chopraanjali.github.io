import { Link } from 'react-router-dom';
import DarkLightToggle from './DarkLightToggle';

export default function Navbar() {
  return (
    <nav className="sticky">
      <ul>
        <li>
          <Link to="/">Anjali</Link>
        </li>
        <li>
          <Link to="/education">Background</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <DarkLightToggle />
    </nav>
  );
}
