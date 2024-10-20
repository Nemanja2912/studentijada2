import Button from "../button/button";
import styles from "./eventsBox.module.css";

const events = [
  {
    main: (
      <>
        <span>Novosadski sajam</span> - Hala Master,
      </>
    ),
    date: "16. novembar 2024, subota 21:00",
    link: "#",
  },
  {
    main: (
      <>
        <span>Beogradski sajam </span> - Hala 4,
      </>
    ),
    date: "21. decembar 2024, subota 21:00",
    link: "#",
  },
];

const EventsBox = () => {
  return (
    <div className={`${styles.box} showOnLoad showFadeLeft`}>
      <h4>Sledeći događaji:</h4>

      <div className={styles.items}>
        {events.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.itemMain}>{item.main}</div>
            <div className={styles.itemDate}>{item.date}</div>
            <Button>Kupi kartu</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsBox;
