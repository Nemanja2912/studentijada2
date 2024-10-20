import styles from "./button.module.css";

const Button = ({ children, link }) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
