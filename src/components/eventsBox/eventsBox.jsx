import events from "@/events/events";
import Button from "../button/button";
import styles from "./eventsBox.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("sr-Latn-RS", { month: "long" });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const weekday = date.toLocaleString("sr-Latn-RS", { weekday: "long" });

  return `${day}. ${month} ${year}, ${weekday} ${hours}:${minutes}`;
};

const defaultLink = "https://tickets.rs/search?filter=Text:studentijada;DateFrom:;DateTo:";

const EventsBox = () => {
  return (
    <div className={`${styles.box} showOnLoad showFadeLeft`}>
      <h4>Sledeći događaji:</h4>

      <div className={styles.items}>
        {events.map((event, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.itemMain}>
              <span>{event.location.split(" - ")[0]}</span> - {event.location.split(" - ")[1]}
            </div>
            <div className={styles.itemDate}>{formatDate(event.date)}</div>
            <Button link={event.link ? event.link : defaultLink}>Kupi kartu</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsBox;
