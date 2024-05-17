import HorizontalRule from './HorizontalRule';
import volumeIcon from '../../assets/volume-icon.svg';
import arrowIcon from '../../assets/arrow-icon.svg';
import { Link } from 'react-router-dom';

export default function WindowPane() {
  return (
    <div className="window-container">
      <div className="toolbar">
        <div className="quick-action-buttons">
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
        </div>
        <div className="nav-buttons">
          <div className="nav-button nav-button-left boxed">
            <span>{'<'}</span>
          </div>
          <div className="nav-button nav-button-right boxed">
            <span>{'>'}</span>
          </div>
        </div>
      </div>
      <div className="content-windowpane-top">
        <div className="name">Anjali Chopra</div>
        <div className="name-guide">
          <span>/un-juh-lee cho-pra/ </span>
          <button className="vol-icon">
            <img src={volumeIcon} alt="" />
          </button>
        </div>
      </div>
      <HorizontalRule />
      <div className="content-windowpane-bottom">
        <Link to="/contact">
          About{' '}
          <span className="arrow-icon">
            <img src={arrowIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
