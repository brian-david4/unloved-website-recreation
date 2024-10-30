import styles from "./styles.module.css";

interface ScrollSectionProps {
  children?: React.ReactNode;
}

const ScrollSection = ({ children }: ScrollSectionProps) => {
  return <section className={styles.section}>{children}</section>;
};

export default ScrollSection;
