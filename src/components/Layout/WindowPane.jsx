import HorizontalRule from './HorizontalRule';
import volumeIcon from '../../assets/volume-icon.svg';
import arrowIcon from '../../assets/arrow-icon.svg';
import leftArrowIcon from '../../assets/nav-arrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function WindowPane({ cards }) {
  const [card, setCard] = useState(cards);

  function handleBackwardNav() {
    card.title === 'Visual Artist'
      ? setCard({
          ...card,
          title: 'Front End Developer',
          subtitle:
            'HTML, CSS, JS, React, Nodejs, Express, Bootstrap, Python, C',
          isIcon: false,
          detailsName: 'Projects',
          isNavigationButtons: true,
          className: 'professionCard',
          isView: true,
        })
      : '';
  }

  function handleForwardNav() {
    card.title === 'Front End Developer'
      ? setCard({
          ...card,
          title: 'Visual Artist',
          subtitle: 'Digital, Aquarell, Acrylic, Sketches',
          isIcon: false,
          detailsName: 'Art',
          isNavigationButtons: true,
          className: 'artistCard',
          isView: true,
          isDisplay: false,
        })
      : '';
  }

  return (
    <div className={`${card.className} window-container`}>
      <div className="toolbar">
        <div className="quick-action-buttons">
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
          <div className="quick-action-button"></div>
        </div>

        {card.isNavigationButtons && (
          <div className="nav-buttons">
            <div className="nav-button nav-button-left boxed nav-button-light">
              <button onClick={handleBackwardNav}>
                <img src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div className="nav-button nav-button-right boxed nav-button-light">
              <button onClick={handleForwardNav}>
                <img src={leftArrowIcon} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="content-windowpane-top">
        <div className="name">{card.title}</div>
        <div className="name-guide">
          <span>{card.subtitle}</span>
          {card.isIcon && (
            <button className="vol-icon">
              <img src={volumeIcon} alt="" />
            </button>
          )}
        </div>
      </div>
      <HorizontalRule />
      <div className="content-windowpane-bottom">
        <Link to={{ pathname: card.detailsName }}>
          {card.isView && `View `}
          {card.detailsName}
          <span className="arrow-icon">
            <img src={arrowIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
