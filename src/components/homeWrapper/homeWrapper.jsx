"use client";

import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import Hero from "@/sections/hero/hero";
import Info from "@/sections/info/info";
import Gallery from "@/sections/gallery/gallery";
import Ambasadors from "@/sections/ambasadors/ambasadors";
import Logos from "@/sections/logos/logos";
import Albums from "@/sections/albums/albums";
import Footer from "@/sections/footer/footer";

let interval;

const color_red = "#E02525";
const color_green = "#C3FF0B";
const color_blue = "#0C3ED4";
const color_white = "#ffffff";
const color_black = "#080708";
const color_purple = "#D2BBEE";

const screens = [
  {
    text: "Najveća studentska žurka",
    backgroundColor: color_black,
    color: color_white,
  },
  {
    text: "Najbolji provod",
    backgroundColor: color_red,
    color: color_purple,
  },
  {
    text: "Mesto gde svi dolaze",
    backgroundColor: color_black,
    color: color_white,
  },
  {
    text: "Neprekidna zabava",
    backgroundColor: color_green,
    color: color_blue,
  },
  {
    text: "Veče koje ne propuštaš",
    backgroundColor: color_black,
    color: color_white,
  },
  {
    text: "Događaj koji se pamti",
    backgroundColor: color_blue,
    color: color_green,
  },
  {
    text: "Studentski bit",
    backgroundColor: color_black,
    color: color_white,
  },
  {
    text: "Uspomena koja ostaje",
    backgroundColor: color_purple,
    color: color_blue,
  },
  {
    text: "Neka počne studentijada",
    backgroundColor: color_black,
    color: color_white,
  },
];

const HomeWrapper = () => {
  const [load, setLoad] = useState(false);

  const [currentScreen, setCurrentScreen] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoad(true);

        interval = setInterval(() => {
          setCurrentScreen((prev) => {
            if (prev === screens.length - 1) {
              clearInterval(interval);

              setIsDone(true);

              setTimeout(() => {
                const fadeUpElements = document.querySelectorAll(".showOnLoad.showFadeUp");
                fadeUpElements.forEach((element) => {
                  element.classList.add("fadeUp");
                });

                const fadeLeftElements = document.querySelectorAll(".showOnLoad.showFadeLeft");
                fadeLeftElements.forEach((element) => {
                  element.classList.add("fadeLeft");
                });
              }, 500);

              return prev;
            } else {
              return ++prev;
            }
          });
        }, 300);
      }, 0);
    };

    handleLoad();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Loader currentScreen={currentScreen} isDone={isDone} screens={screens} />

      {load && (
        <>
          <Hero />

          <Info />
          <Gallery />

          <Ambasadors />

          <Logos />

          <Albums />

          <Footer />
        </>
      )}
    </>
  );
};

export default HomeWrapper;
