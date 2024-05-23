import HorizontalRule from './HorizontalRule';
import volumeIcon from '../../assets/volume-icon.svg';
import arrowIcon from '../../assets/arrow-icon.svg';
import leftArrowIcon from '../../assets/nav-arrow.svg';
import { Link } from 'react-router-dom';

export default function WindowPane(props) {
  return (
    <div className={`${props.className} window-container`}>
      <div className="toolbar">
        <div className="quick-action-buttons">
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
        </div>

        {props.isNavigationButtons && (
          <div className="nav-buttons">
            <div className="nav-button nav-button-left boxed">
              <button>
                <img src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div className="nav-button nav-button-right boxed">
              <button>
                <img src={leftArrowIcon} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="content-windowpane-top">
        <div className="name">{props.title}</div>
        <div className="name-guide">
          <span>{props.subtitle}</span>
          {props.isIcon && (
            <button className="vol-icon">
              <img src={volumeIcon} alt="" />
            </button>
          )}
        </div>
      </div>
      <HorizontalRule />
      <div className="content-windowpane-bottom">
        <Link to={{ pathname: props.detailsName }}>
          {props.isView && `View `}
          {props.detailsName}
          <span className="arrow-icon">
            <img src={arrowIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
