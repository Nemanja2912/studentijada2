import styles from "./loader.module.css";

const Loader = ({ currentScreen, isDone, screens = [] }) => {
  return (
    <div
      className={styles.loader}
      style={{
        transform: isDone ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: isDone ? "none" : "initial",
      }}
    >
      {screens.map(
        (item, index) =>
          index === currentScreen && (
            <div key={index} style={{ backgroundColor: item.backgroundColor, color: item.color }}>
              {item.text}
            </div>
          )
      )}
    </div>
  );
};

export default Loader;
