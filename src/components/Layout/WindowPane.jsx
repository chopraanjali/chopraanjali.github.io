import HorizontalRule from './HorizontalRule';
import volumeIcon from '../../assets/volume-icon.svg';
import arrowIcon from '../../assets/arrow-icon.svg';
import { Link } from 'react-router-dom';

export default function WindowPane({
  title,
  subtitle,
  isIcon = false,
  detailsLink,
  isNavigationButtons = false,
  className,
}) {
  return (
    <div className="window-container">
      <div className="toolbar">
        <div className="quick-action-buttons">
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
        </div>

        {isNavigationButtons && (
          <div className="nav-buttons">
            <div className="nav-button nav-button-left boxed">
              <span>{'<'}</span>
            </div>
            <div className="nav-button nav-button-right boxed">
              <span>{'>'}</span>
            </div>
          </div>
        )}
      </div>

      <div className={`${className} content-windowpane-top`}>
        <div className="name">{title}</div>
        <div className="name-guide">
          <span>{subtitle}</span>
          {isIcon && (
            <button className="vol-icon">
              <img src={volumeIcon} alt="" />
            </button>
          )}
        </div>
      </div>
      <HorizontalRule />
      <div className="content-windowpane-bottom">
        <Link to="/contact">
          {detailsLink}{' '}
          <span className="arrow-icon">
            <img src={arrowIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
