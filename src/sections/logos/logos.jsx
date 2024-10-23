"use client";
import styles from "./logos.module.css";

import { useEffect, useRef } from "react";

const logoList = [
  "./assets/images/logos/logo1.png",
  "./assets/images/logos/logo2.png",
  "./assets/images/logos/logo3.png",
  "./assets/images/logos/logo4.png",
  "./assets/images/logos/logo5.png",
  "./assets/images/logos/logo6.png",
  "./assets/images/logos/logo1.png",
  "./assets/images/logos/logo2.png",
  "./assets/images/logos/logo3.png",
  "./assets/images/logos/logo4.png",
  "./assets/images/logos/logo5.png",
  "./assets/images/logos/logo6.png",
];

const Logos = () => {
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();
  const line4 = useRef();

  useEffect(() => {
    setTimeout(() => {
      line1.current.classList.add("move-logo2");
      line2.current.classList.add("move-logo2");

      line3.current.classList.add("move-logo");
      line4.current.classList.add("move-logo");
    }, 1000);
  }, []);

  return (
    <section id="sponzori" className={`${styles.section}`}>
      <div className={styles.wrapper}>
        <div className={styles.logos}>
          <div className={styles.line} ref={line1}>
            {logoList.map((item, index) => (
              <img src={item} key={index} alt="" />
            ))}
          </div>
          <div className={styles.line} ref={line2}>
            {logoList.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
          </div>
        </div>

        <div className={styles.logos}>
          <div className={styles.line} ref={line3}>
            {logoList.map((item, index) => (
              <img src={item} key={index} alt="" />
            ))}
          </div>
          <div className={styles.line} ref={line4}>
            {logoList.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
