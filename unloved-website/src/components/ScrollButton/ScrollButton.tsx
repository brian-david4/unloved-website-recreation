import arrowSvg from "/arrow.svg";
import styles from "./styles.module.css";

const ScrollButton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollBtn}>
        <p className={styles.scrollTitle}>scroll</p>
        <img src={arrowSvg} />
      </div>
    </div>
  );
};

export default ScrollButton;
