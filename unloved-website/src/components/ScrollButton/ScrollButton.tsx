import arrowSvg from "/arrow.svg";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

interface ScrollButtonProps {
  bottomInView: boolean;
}

const ScrollButton = ({ bottomInView }: ScrollButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollBtn}>
        <p className={styles.scrollTitle}>scroll</p>
        <motion.img
          animate={{
            transform: bottomInView ? `rotate(-180deg)` : `rotate(0deg)`,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src={arrowSvg}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
