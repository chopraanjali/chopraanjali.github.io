import HorizontalRule from './HorizontalRule';

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
      <div className="content-windowpane-top"></div>
      <HorizontalRule />
      <div className="content-windowpane-bottom"></div>
    </div>
  );
}
