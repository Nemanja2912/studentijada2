import styles from "./button.module.css";

const Button = ({ children, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.button}>{children}</div>
      </a>
    );
  }

  return <div className={styles.button}>{children}</div>;
};

export default Button;
