import moonIcon from "../../assets/moon-icon.svg";
import sunIcon from "../../assets/sun-icon.svg";

export default function DarkLightToggle() {
  return (
    <div className="dark-light-toggle">
      <div className="toggle-child">
        <img src={sunIcon} alt="" />
      </div>
      <div className="toggle-child toggle-switch">
        <input type="checkbox" name="toggle" id="toggle" />
        <label htmlFor="toggle" />
      </div>
      <div className="toggle-child">
        <img src={moonIcon} alt="" />
      </div>
    </div>
  );
}
