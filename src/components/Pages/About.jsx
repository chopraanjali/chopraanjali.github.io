import photo from '../../assets/photo.svg';
import Toolbar from '../Layout/Toolbar';

export default function Contact() {
  const contact = {
    email: 'anjalichopra1994@gmail.com',
    phone: +917471170517,
    linkedin: 'www.linkedin.com/in/chopraanjali',
    github: 'www.github.com/chopraanjali',
  };

  const favs = {
    book: 'Life of Pi',
    TV: 'Great British Bake-Off',
    music: 'Sitar by Rishabh Rikhiram',
    food: 'Laccha Paratha',
  };

  return (
    <div id="about" className="card">
      <div className="about window-container">
        <Toolbar />

        <div className="content-windowpane">
          <h1 className="content-windowpane-top header">About</h1>
          <div className="content">
            <p>
              I&apos;m a front-end developer with a strong background in
              scientific research and programming within the mechanical and
              aerospace industry.
            </p>
            <p>
              My passion lies in keeping up with the latest technological trends
              and creating visually appealing and user-friendly solutions. I
              derive immense joy from building meaningful relationships and
              providing support to others.
            </p>
            <p>
              When I&apos;m not working, I enjoy art, music, sports and hiking!
            </p>
          </div>
          <div className="photo">
            <img src={photo} alt="Anjali's profile photo" />
          </div>
          <div className="favs-container">
            <h2 className="content-windowpane-top header">CURRENT FAVORITES</h2>
            <div className="current-favs content">
              <div>
                <p className="favs-content">{favs.book}</p>
                <p className="favs-header">Book</p>
              </div>
              <div>
                <p className="favs-content">{favs.TV}</p>
                <p className="favs-header">TV Series</p>
              </div>
              <div>
                <p className="favs-content">{favs.music}</p>
                <p className="favs-header">Music</p>
              </div>
              <div>
                <p className="favs-content">{favs.food}</p>
                <p className="favs-header">Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
