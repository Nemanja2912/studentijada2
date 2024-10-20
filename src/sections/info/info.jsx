"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./info.module.css";

const Info = () => {
  const [imageSrc, setImageSrc] = useState(0);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const gallerySection = document.querySelector(".gallery");

    const handleScroll = () => {
      const { top, bottom, height } = sectionRef.current.getBoundingClientRect();

      const percentage = ((window.innerHeight - top) / height) * 100;

      if (percentage < 0) {
        imageRef.current.style.transform = `translateY(-50%)`;
      } else if (percentage > 170) {
        imageRef.current.style.transform = `translateY(120%)`;
      } else {
        imageRef.current.style.transform = `translateY(${-50 + percentage}%)`;
      }

      if (percentage >= 0 && percentage < 40) {
        setImageSrc(0);
      } else if (percentage >= 50 && percentage < 70) {
        setImageSrc(1);
      } else if (percentage >= 70 && percentage < 90) {
        setImageSrc(2);
      } else if (percentage >= 90 && percentage <= 110) {
        setImageSrc(3);
      } else if (percentage >= 110) {
        setImageSrc(4);
      }

      if (top < 0) {
        gallerySection.style.zIndex = 5;
      } else {
        gallerySection.style.zIndex = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef, imageRef]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.textWrapper}>
          <div className={styles.firstLine}>
            <p className={styles.label}>Garantovano</p>
            <h2>Mi stvaramo</h2>
          </div>
          <h2>
            žurke za pamćenje <br /> koje traju
          </h2>
          <p className={styles.description}>
            Najveća studentska žurka, uspomena koja jedino ostaje upisana u indeks. Mnogi kažu da je
            studiranje najlepši period života, ali uz Studentijadu on postaje još bolji. Uz
            festivalski osmišljen program, zagarantovan je dobar provod i mnogo zabave! Ulaznice za
            ovu nezaboravnu žurku studenti mogu kupiti online ili kod ambasadora projekta.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <div ref={imageRef} className={styles.imageBox}>
            <img
              src={"/assets/images/section1_1.jpg"}
              alt=""
              style={{ opacity: imageSrc === 0 ? 1 : 0 }}
            />
            <img
              src={"/assets/images/section1_2.jpg"}
              alt=""
              style={{ opacity: imageSrc === 1 ? 1 : 0 }}
            />
            <img
              src={"/assets/images/section1_4.jpg"}
              alt=""
              style={{ opacity: imageSrc === 2 ? 1 : 0 }}
            />
            <img
              src={"/assets/images/section1_5.jpg"}
              alt=""
              style={{ opacity: imageSrc === 3 ? 1 : 0 }}
            />
            <img
              src={"/assets/images/section1_3.jpg"}
              alt=""
              style={{ opacity: imageSrc === 4 ? 1 : 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
