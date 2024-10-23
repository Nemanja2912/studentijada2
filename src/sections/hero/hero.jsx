"use client";

import EventsBox from "@/components/eventsBox/eventsBox";
import styles from "./hero.module.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 600) return;

      const currentOpacity = 0.8;

      const { bottom, height } = sectionRef.current.getBoundingClientRect();

      const percentage = 200 - (bottom / (height / 2)) * 100;

      backgroundRef.current.style.opacity = currentOpacity - percentage / 100;
      titleRef.current.style.transform = `translateX(${0 - percentage}%) rotate(-${
        0 + percentage
      }deg)`;
      titleRef.current.style.opacity = 1 - percentage / 100;

      boxRef.current.style.transform = `translateX(${0 + percentage}%) rotate(${
        0 + percentage
      }deg)`;
      boxRef.current.style.opacity = 1 - percentage / 100;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundRef, sectionRef, titleRef, boxRef]);

  return (
    <section ref={sectionRef} className={`${styles.section}`}>
      <div className={styles.video}>
        <div ref={backgroundRef} className={styles.background}></div>
        <video muted loop autoPlay playsInline>
          <source src={"/assets/video/hero.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={`${styles.content} container`}>
        <h1 ref={titleRef}>
          <div className={styles.titleLine}>
            <p className="showOnLoad showFadeUp">
              <span>50</span> Fakulteta
            </p>
          </div>
          <div className={styles.titleLine}>
            <p className="showOnLoad showFadeUp">
              <span>Svi</span> Domovi
            </p>
          </div>
          <div className={styles.titleLine}>
            <p className="showOnLoad showFadeUp">
              <span>Sve</span> Akademije
            </p>
          </div>
        </h1>

        <div className={styles.boxWrapper} ref={boxRef}>
          <EventsBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
