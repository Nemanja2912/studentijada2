import styles from "./navigation.module.css";

export const links = [
  {
    text: "O nama",
    link: "#o-nama",
  },
  {
    text: "Ambasadori",
    link: "#ambasadori",
  },
  {
    text: "Sponzori",
    link: "#sponzori",
  },
  {
    text: "Albumi",
    link: "#albumi",
  },
  {
    text: "Ispovesti",
    link: "#",
  },
];

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <div className="container">
        <p>Studentijada</p>

        <div>
          <ul>
            {links.map((item, index) => (
              <a href={item.link} key={index}>
                <li>
                  {item.text}
                  {item.text === "Ispovesti" && (
                    <svg viewBox="0 0 303 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <svg viewBox="0 0 382 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M155.559 1.7567C127.321 4.2193 102.981 8.61916 77.11 14.7019C49.1566 21.2742 13.5014 29.9566 4.28094 42.558C-3.35728 52.997 6.49475 66.3307 24.7527 72.861C35.6934 76.7742 49.5922 79.9329 64.9946 81.2344C98.03 84.0257 137.466 83.3273 172.656 81.5547C207.639 79.7924 244.629 75.9534 277.892 69.7642C307.199 64.3112 342.173 56.2381 362.593 46.0106C373.785 40.4051 380.749 32.5704 380.871 26.1034C381.035 17.4276 357.886 12.0533 340.405 8.79257C319.82 4.95274 295.746 4.52992 271.95 4.1322C236.825 3.54515 205.497 4.7681 170.042 9.05391C130.5 13.8337 91.4644 21.1764 60.2002 32.772C52.6629 35.5675 54.6715 36.7603 61.2797 38.3954"
                          stroke="#C3FF0B"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </svg>
                  )}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
