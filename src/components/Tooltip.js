import React from "react";
import styles from "../styles/tooltip.module.css";
class Tooltip extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <div className={styles.tooltipContainer}>
          <div className={styles.tooltipTarget}>
            Press
            <div className={styles.tooltipTextTop}>Information</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tooltip;
