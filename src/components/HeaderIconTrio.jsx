import unionIcon from "../assets/union-icon.svg";
import venturesIcon from "../assets/Ventures.svg";
import smileIcon from "../assets/smile.svg";
import "./HeaderIconTrio.css";

export function HeaderIconTrio({
  className = "",
  style,
  gap,
  venturesOpacity = 1,
  trioOpacity = 1,
  unionShift = 0,
  smileShift = 0,
}) {
  return (
    <div
      className={`icon-trio ${className}`.trim()}
      style={{
        ...style,
        gap: gap !== undefined ? `${gap}px` : undefined,
        opacity: trioOpacity,
      }}
      aria-hidden
    >
      <img
        src={unionIcon}
        alt=""
        className="icon-trio__union"
        style={{ transform: `translateX(${unionShift}%)` }}
      />
      <img
        src={venturesIcon}
        alt=""
        className="icon-trio__ventures"
        style={{ opacity: venturesOpacity }}
      />
      <img
        src={smileIcon}
        alt=""
        className="icon-trio__smile"
        style={{ transform: `translateX(${smileShift}%)` }}
      />
    </div>
  );
}
