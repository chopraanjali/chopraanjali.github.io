import moonIcon from "../../assets/moon-icon.svg";
import sunIcon from "../../assets/sun-icon.svg";
import toggleIcon from "../../assets/toggle-button-icon.svg";

export default function DarkLightToggle() {
  return (
    <div className="dark-light-toggle">
      <button>
        <img src={sunIcon} alt="" />
      </button>
      <button>
        <img src={toggleIcon} alt="" />
      </button>
      <button>
        <img src={moonIcon} alt="" />
      </button>
    </div>
  );
}
