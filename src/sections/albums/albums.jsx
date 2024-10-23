"use client";

import { useEffect, useRef } from "react";
import styles from "./albums.module.css";

const list = [
  {
    date: "23. mart 2024.",
    image: "./assets/images/albums_9.jpg",
    link: "https://drive.google.com/drive/folders/1ufmXpo1LlsieLdStER4juVPhpHdbpiPJ?usp=sharing",
  },
  {
    date: "16. mart 2024.",
    image: "./assets/images/albums_8.jpg",
    link: "https://drive.google.com/drive/folders/13a5gk5-yGb-qrNC7GmrEGDwF_BPiU7Gj?usp=sharing",
  },
  {
    date: "16. decembar 2023.",
    image: "./assets/images/albums_7.jpg",
    link: "https://drive.google.com/drive/folders/1IPXQ21i3liPVMdoJa0aHevv_TgU5QDw6?usp=sharing",
  },
  {
    date: "18. novembar 2023.",
    image: "./assets/images/albums_6.jpg",
    link: "https://drive.google.com/drive/folders/1YgZlowvFd_JBUFtsaG5LBOnW7fSG1wkv?usp=sharing",
  },
  {
    date: "9. septembar 2023.",
    image: "./assets/images/albums_5.jpg",
    link: "https://drive.google.com/drive/folders/1nge96sCj234Xz7ZZThtmKa0ICwS75nNp?usp=sharing",
  },
  {
    date: "1. april 2023.",
    image: "./assets/images/albums_4.jpg",
    link: "https://drive.google.com/drive/folders/1-wO4VnZtiILHD3pgGteoE1lFdXo9RY6e?usp=sharing",
  },
  {
    date: "11. mart 2023.",
    image: "./assets/images/albums_3.jpg",
    link: "https://drive.google.com/drive/folders/1-0gHjWgqc7GiNBBkapIP43rVra_SCz_h?usp=drive_link",
  },
  {
    date: "10. mart 2023.",
    image: "./assets/images/albums_2.jpg",
    link: "https://drive.google.com/drive/folders/116uBPfPHE-xlfmPHi9KVEiIQQlkkQYX0?usp=drive_link",
  },
  {
    date: "10. decembar 2022.",
    image: "./assets/images/albums_1.jpg",
    link: "https://drive.google.com/drive/folders/102dMB_4mC7Dh8LXMa0zDTGZsbnKqKjxk?usp=drive_link",
  },
];

const Albums = () => {
  return (
    <div id="albumi" className={styles.section}>
      <h2>Prethodne žurke</h2>

      <div className="container">
        <div className={styles.grid}>
          {list.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              style={{
                zIndex: list.length - index,
              }}
              key={index}
              className={styles.imageWrapper}
            >
              <img src={item.image} alt="" />

              <div className={styles.background}></div>
              <div className={styles.date}>
                <h3>{item.date}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
