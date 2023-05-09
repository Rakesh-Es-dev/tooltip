import React from "react";
import styles from "../styles/tooltip.module.css";
class Tooltip extends React.Component {
  render() {
    const { position, text } = this.props;
    let className = "";
    if (position === "Right") {
      className = "tooltipTextRight";
    } else if (position === "Bottom") {
      className = "tooltipTextBottom";
    } else if (position === "Left") {
      className = "tooltipTextLeft";
    } else {
      className = "tooltipTextTop";
    }
    return (
      <div className={styles.tooltipTarget}>
        Press
        <div className={className}>{text}</div>
      </div>
    );
  }
}
export default Tooltip;
