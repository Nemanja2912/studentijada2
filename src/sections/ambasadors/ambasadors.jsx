"use client";

import Button from "@/components/button/button";
import styles from "./ambasadors.module.css";
import { useEffect, useRef, useState } from "react";

const promotes = [
  { faculty: "EKOF", name: "GZS", phone: "0611677585" },
  { faculty: "Pravni fakultet", name: "Momčilo", phone: "0692285340" },
  { faculty: "Učiteljski fakultet", name: "Maja", phone: "0631270656" },
  { faculty: "Fakultet bezbednosti", name: "Nevena", phone: "0643850391" },
  { faculty: "FASPER", name: "Ignjat", phone: "0645234893" },
  { faculty: "FPN", name: "Miloš", phone: "0665845618" },
  { faculty: "DIF", name: "Nikola", phone: "0613434353" },
  { faculty: "Filološki fakultet", name: "Uroš", phone: "0642268545" },
  { faculty: "Medicinski fakultet", name: "Ahmed", phone: "0637655206" },
  { faculty: "Stomatološki fakultet", name: "Mladen", phone: "0691032296" },
  { faculty: "FVM", name: "Nemanja", phone: "0644324441" },
  { faculty: "Biološki fakultet", name: "Edvin", phone: "0603422253" },
  { faculty: "Geografski fakultet", name: "Saša", phone: "0691882681" },
  { faculty: "Matematički", name: "Stefan", phone: "0642748470" },
  { faculty: "Fizički fakultet", name: "Milica", phone: "063377236" },
  { faculty: "Fizička hemija", name: "Sonja", phone: "066111900" },
  { faculty: "TMF", name: "Stefan", phone: "0692695111" },
  { faculty: "Arhitektura", name: "Nikola", phone: "0606868780" },
  { faculty: "Mašinski fakultet", name: "Đorđe", phone: "062268242" },
  { faculty: "ETF", name: "Mihailo", phone: "0649297671" },
  { faculty: "Poljoprivredni fakultet", name: "Mihajlo", phone: "0694170298" },
  { faculty: "RGF", name: "Petar", phone: "0612450759" },
  { faculty: "Saobraćajni fakultet", name: "Rastko", phone: "066204694" },
  { faculty: "FON", name: "Stefan", phone: "0653680011" },
  { faculty: "Šumarski fakultet", name: "Toma", phone: "0649282226" },
  { faculty: "KPA", name: "Milica", phone: "0653153913" },
  { faculty: "Univerzitet odbrane", name: "Tijana", phone: "0646742622" },
  { faculty: "ITS", name: "Vanja", phone: "0695014351" },
  { faculty: "Singidunum", name: "Vladimir", phone: "0645636095" },
  { faculty: "Savremene umetnosti", name: "Isidora", phone: "0604041411" },
  { faculty: "UNION", name: "Miljan", phone: "0637255803" },
  { faculty: "FMK", name: "Minja", phone: "0601693990" },
  { faculty: "MEF", name: "Lazar", phone: "069668549" },
  {
    faculty: "VŠ za poslovnu ekonomiju",
    name: "Tamara",
    phone: "0655554856",
  },
  { faculty: "BAPUSS", name: "Pavle", phone: "0616898308" },
  { faculty: "VISAN", name: "Filip", phone: "0692860300" },
  { faculty: "ICEPS", name: "Milica", phone: "0628822541" },
  { faculty: "Milutin Milanković", name: "Anđela", phone: "0692328749" },
  { faculty: "ATSSB", name: "Jelena", phone: "0640214606" },
  { faculty: "ATUSS", name: "Aleksa", phone: "062245077" },
  { faculty: "VZŠ", name: "Aleksandra", phone: "0691601200" },
  { faculty: "DOM 4. april", name: "Aleksandra", phone: "0642620033" },
  { faculty: "Košutnjak", name: "Toma", phone: "0649282226" },
  { faculty: "Karaburma", name: "Ljubomir", phone: "0649018797" },
  { faculty: "Patris", name: "Marko", phone: "0605281925" },
  { faculty: "DOM Slobodan Penezić", name: "Toma", phone: "0649282226" },
  { faculty: "DOM Kralj Aleksandar I", name: "David", phone: "0659093232" },
  { faculty: "Studenjak 1 Blok", name: "Miodrag", phone: "0653713416" },
  { faculty: "Studenjak 2 Blok", name: "Milan", phone: "0628334157" },
  { faculty: "Studenjak 3 Blok", name: "Dušan", phone: "0654658001" },
  { faculty: "Studenjak 4 Blok", name: "Vukašin", phone: "0653733305" },
  { faculty: "Vera Blagojević", name: "Tamara", phone: "0641367342" },
  { faculty: "Mika Mitrović", name: "", phone: "0603033255" },
  { faculty: "Srednje škole", name: "Dušan", phone: "0605151121" },
];

const promotes2 = [
  {
    faculty: "Ekonomski Fakultet",
    name: "Stefan",
    phone: "0631739070",
  },
  {
    faculty: "Pravni Fakultet",
    name: "Borislav",
    phone: "0612896989",
  },
  {
    faculty: "Medicinski Fakultet",
    name: "Jovan",
    phone: "062726528",
  },
  {
    faculty: "Tehnološki Fakultet",
    name: "Nikola",
    phone: "0647065826",
  },
  {
    faculty: "DIF",
    name: "Aleksa",
    phone: "0659994465",
  },
  {
    faculty: "Poljoprivredni Fakultet",
    name: "Ljubiša",
    phone: "0668642027",
  },
  {
    faculty: "PMF",
    name: "Dragana",
    phone: "0616250017",
  },
  {
    faculty: "Filozofski Fakultet",
    name: "Nemanja",
    phone: "0600421137",
  },
  {
    faculty: "FTN E1",
    name: "Aleksandar",
    phone: "0656073367",
  },
  {
    faculty: "FTN E2",
    name: "Nikola",
    phone: "0645595082",
  },
  {
    faculty: "FTN E3",
    name: "Dejan",
    phone: "0649127659",
  },
  {
    faculty: "Dep. za arhitekturu",
    name: "Anđela",
    phone: "062319641",
  },
  {
    faculty: "Dep. za građ. i geod.",
    name: "Žarko",
    phone: "0606057965",
  },
  {
    faculty: "Ostali dep. FTN-a",
    name: "Dušan",
    phone: "0601538251",
  },
  {
    faculty: "FLV",
    name: "Luna",
    phone: "0616336100",
  },
  {
    faculty: "VSŠ Iceps",
    name: "Milica",
    phone: "0628822541",
  },
  {
    faculty: "VTŠ strukovnih studija",
    name: "Nikola",
    phone: "0658837370",
  },
];

const startTranslate = 5;
const startScale = 0.8;

const Ambasadors = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const sectionRef = useRef(null);

  const [transform, setTransform] = useState(
    "translate3d(0px, 5%, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(5deg) skew(0deg, 0deg)"
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const { top } = sectionRef.current.getBoundingClientRect();

      const breakPoint = windowHeight * 0.5;
      const startPoint = top - windowHeight;

      const percentage = (startPoint / breakPoint) * -100;

      if (startPoint < 0) {
        let translate = startTranslate - (startTranslate * percentage) / 100;
        let scale = startScale + ((1 - startScale) * percentage) / 100;

        translate = translate < 0 ? 0 : translate;
        scale = scale > 1 ? 1 : scale;

        setTransform(
          `translate3d(0px, ${translate}%, 0px) scale3d(${scale},${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(${translate}deg) skew(0deg, 0deg)`
        );
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <>
      <section
        id="ambasadori"
        ref={sectionRef}
        className={styles.section}
        style={{
          transform: transform,
        }}
      >
        <svg className={styles.smile} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#SoldOut_svg__a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.668 20.456 2.68 2.68L23.137 9.349l-2.68-2.68c-.45.296-.963.441-1.538.436-.576-.006-1.055-.2-1.439-.584a2.015 2.015 0 0 1-.617-1.455 2.663 2.663 0 0 1 .453-1.538L14.652.863.863 14.652l2.664 2.664c.45-.296.957-.442 1.521-.436.565.005 1.05.21 1.455.617.384.383.582.86.592 1.43.011.57-.131 1.08-.427 1.53ZM8 11h3V8h2v3h3v2h-3v3h-2v-3H8v-2Z"
              fill="#C3FF0B"
            ></path>
          </g>
          <defs>
            <clipPath id="SoldOut_svg__a">
              <path fill="#C3FF0B" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>

        <div className={styles.content}>
          <p>Svi fakulteti i domovi imaju svoje predstavnike</p>
          <h2>Nabavite karte preko ambasadora</h2>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            onClick={() => setOpenPopup(true)}
          >
            <Button>Klikni za listu</Button>
          </div>
        </div>

        <svg
          className={styles.qr}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_119_566)">
            <path d="M500 0H0V500H500V0Z" fill="#C3FF0B" />
            <mask
              id="mask0_119_566"
              maskUnits="userSpaceOnUse"
              x="28"
              y="28"
              width="444"
              height="444"
            >
              <path d="M40 124H28V136H40V124Z" fill="white" />
              <path d="M40 160H28V172H40V160Z" fill="white" />
              <path d="M40 184H28V196H40V184Z" fill="white" />
              <path d="M40 196H28V208H40V196Z" fill="white" />
              <path d="M40 220H28V232H40V220Z" fill="white" />
              <path d="M40 268H28V280H40V268Z" fill="white" />
              <path d="M40 292H28V304H40V292Z" fill="white" />
              <path d="M40 304H28V316H40V304Z" fill="white" />
              <path d="M40 316H28V328H40V316Z" fill="white" />
              <path d="M40 364H28V376H40V364Z" fill="white" />
              <path d="M52 136H40V148H52V136Z" fill="white" />
              <path d="M52 172H40V184H52V172Z" fill="white" />
              <path d="M52 220H40V232H52V220Z" fill="white" />
              <path d="M52 292H40V304H52V292Z" fill="white" />
              <path d="M52 328H40V340H52V328Z" fill="white" />
              <path d="M52 340H40V352H52V340Z" fill="white" />
              <path d="M52 352H40V364H52V352Z" fill="white" />
              <path d="M64 196H52V208H64V196Z" fill="white" />
              <path d="M64 232H52V244H64V232Z" fill="white" />
              <path d="M64 256H52V268H64V256Z" fill="white" />
              <path d="M64 268H52V280H64V268Z" fill="white" />
              <path d="M64 280H52V292H64V280Z" fill="white" />
              <path d="M64 340H52V352H64V340Z" fill="white" />
              <path d="M64 364H52V376H64V364Z" fill="white" />
              <path d="M76 208H64V220H76V208Z" fill="white" />
              <path d="M76 256H64V268H76V256Z" fill="white" />
              <path d="M76 292H64V304H76V292Z" fill="white" />
              <path d="M76 304H64V316H76V304Z" fill="white" />
              <path d="M76 316H64V328H76V316Z" fill="white" />
              <path d="M76 340H64V352H76V340Z" fill="white" />
              <path d="M88 124H76V136H88V124Z" fill="white" />
              <path d="M88 136H76V148H88V136Z" fill="white" />
              <path d="M88 160H76V172H88V160Z" fill="white" />
              <path d="M88 172H76V184H88V172Z" fill="white" />
              <path d="M88 184H76V196H88V184Z" fill="white" />
              <path d="M88 196H76V208H88V196Z" fill="white" />
              <path d="M88 208H76V220H88V208Z" fill="white" />
              <path d="M88 220H76V232H88V220Z" fill="white" />
              <path d="M88 244H76V256H88V244Z" fill="white" />
              <path d="M88 256H76V268H88V256Z" fill="white" />
              <path d="M88 280H76V292H88V280Z" fill="white" />
              <path d="M88 304H76V316H88V304Z" fill="white" />
              <path d="M88 328H76V340H88V328Z" fill="white" />
              <path d="M88 340H76V352H88V340Z" fill="white" />
              <path d="M100 124H88V136H100V124Z" fill="white" />
              <path d="M100 160H88V172H100V160Z" fill="white" />
              <path d="M100 184H88V196H100V184Z" fill="white" />
              <path d="M100 196H88V208H100V196Z" fill="white" />
              <path d="M100 208H88V220H100V208Z" fill="white" />
              <path d="M100 220H88V232H100V220Z" fill="white" />
              <path d="M100 232H88V244H100V232Z" fill="white" />
              <path d="M100 244H88V256H100V244Z" fill="white" />
              <path d="M100 268H88V280H100V268Z" fill="white" />
              <path d="M100 280H88V292H100V280Z" fill="white" />
              <path d="M100 328H88V340H100V328Z" fill="white" />
              <path d="M100 340H88V352H100V340Z" fill="white" />
              <path d="M100 352H88V364H100V352Z" fill="white" />
              <path d="M100 364H88V376H100V364Z" fill="white" />
              <path d="M112 124H100V136H112V124Z" fill="white" />
              <path d="M112 148H100V160H112V148Z" fill="white" />
              <path d="M112 172H100V184H112V172Z" fill="white" />
              <path d="M112 196H100V208H112V196Z" fill="white" />
              <path d="M112 220H100V232H112V220Z" fill="white" />
              <path d="M112 244H100V256H112V244Z" fill="white" />
              <path d="M112 268H100V280H112V268Z" fill="white" />
              <path d="M112 292H100V304H112V292Z" fill="white" />
              <path d="M112 316H100V328H112V316Z" fill="white" />
              <path d="M112 340H100V352H112V340Z" fill="white" />
              <path d="M112 364H100V376H112V364Z" fill="white" />
              <path d="M124 172H112V184H124V172Z" fill="white" />
              <path d="M124 184H112V196H124V184Z" fill="white" />
              <path d="M124 268H112V280H124V268Z" fill="white" />
              <path d="M124 280H112V292H124V280Z" fill="white" />
              <path d="M124 304H112V316H124V304Z" fill="white" />
              <path d="M124 364H112V376H124V364Z" fill="white" />
              <path d="M136 40H124V52H136V40Z" fill="white" />
              <path d="M136 52H124V64H136V52Z" fill="white" />
              <path d="M136 64H124V76H136V64Z" fill="white" />
              <path d="M136 76H124V88H136V76Z" fill="white" />
              <path d="M136 88H124V100H136V88Z" fill="white" />
              <path d="M136 100H124V112H136V100Z" fill="white" />
              <path d="M136 112H124V124H136V112Z" fill="white" />
              <path d="M136 172H124V184H136V172Z" fill="white" />
              <path d="M136 232H124V244H136V232Z" fill="white" />
              <path d="M136 244H124V256H136V244Z" fill="white" />
              <path d="M136 256H124V268H136V256Z" fill="white" />
              <path d="M136 304H124V316H136V304Z" fill="white" />
              <path d="M136 328H124V340H136V328Z" fill="white" />
              <path d="M136 340H124V352H136V340Z" fill="white" />
              <path d="M136 400H124V412H136V400Z" fill="white" />
              <path d="M136 412H124V424H136V412Z" fill="white" />
              <path d="M136 460H124V472H136V460Z" fill="white" />
              <path d="M148 28H136V40H148V28Z" fill="white" />
              <path d="M148 40H136V52H148V40Z" fill="white" />
              <path d="M148 52H136V64H148V52Z" fill="white" />
              <path d="M148 64H136V76H148V64Z" fill="white" />
              <path d="M148 88H136V100H148V88Z" fill="white" />
              <path d="M148 112H136V124H148V112Z" fill="white" />
              <path d="M148 124H136V136H148V124Z" fill="white" />
              <path d="M148 160H136V172H148V160Z" fill="white" />
              <path d="M148 172H136V184H148V172Z" fill="white" />
              <path d="M148 184H136V196H148V184Z" fill="white" />
              <path d="M148 220H136V232H148V220Z" fill="white" />
              <path d="M148 304H136V316H148V304Z" fill="white" />
              <path d="M148 328H136V340H148V328Z" fill="white" />
              <path d="M148 364H136V376H148V364Z" fill="white" />
              <path d="M148 400H136V412H148V400Z" fill="white" />
              <path d="M148 436H136V448H148V436Z" fill="white" />
              <path d="M148 448H136V460H148V448Z" fill="white" />
              <path d="M160 28H148V40H160V28Z" fill="white" />
              <path d="M160 52H148V64H160V52Z" fill="white" />
              <path d="M160 88H148V100H160V88Z" fill="white" />
              <path d="M160 100H148V112H160V100Z" fill="white" />
              <path d="M160 112H148V124H160V112Z" fill="white" />
              <path d="M160 124H148V136H160V124Z" fill="white" />
              <path d="M160 136H148V148H160V136Z" fill="white" />
              <path d="M160 184H148V196H160V184Z" fill="white" />
              <path d="M160 196H148V208H160V196Z" fill="white" />
              <path d="M160 208H148V220H160V208Z" fill="white" />
              <path d="M160 220H148V232H160V220Z" fill="white" />
              <path d="M160 256H148V268H160V256Z" fill="white" />
              <path d="M160 268H148V280H160V268Z" fill="white" />
              <path d="M160 280H148V292H160V280Z" fill="white" />
              <path d="M160 328H148V340H160V328Z" fill="white" />
              <path d="M160 340H148V352H160V340Z" fill="white" />
              <path d="M160 352H148V364H160V352Z" fill="white" />
              <path d="M160 364H148V376H160V364Z" fill="white" />
              <path d="M160 388H148V400H160V388Z" fill="white" />
              <path d="M160 400H148V412H160V400Z" fill="white" />
              <path d="M160 424H148V436H160V424Z" fill="white" />
              <path d="M160 436H148V448H160V436Z" fill="white" />
              <path d="M160 448H148V460H160V448Z" fill="white" />
              <path d="M160 460H148V472H160V460Z" fill="white" />
              <path d="M172 76H160V88H172V76Z" fill="white" />
              <path d="M172 88H160V100H172V88Z" fill="white" />
              <path d="M172 148H160V160H172V148Z" fill="white" />
              <path d="M172 160H160V172H172V160Z" fill="white" />
              <path d="M172 184H160V196H172V184Z" fill="white" />
              <path d="M172 196H160V208H172V196Z" fill="white" />
              <path d="M172 208H160V220H172V208Z" fill="white" />
              <path d="M172 220H160V232H172V220Z" fill="white" />
              <path d="M172 232H160V244H172V232Z" fill="white" />
              <path d="M172 244H160V256H172V244Z" fill="white" />
              <path d="M172 280H160V292H172V280Z" fill="white" />
              <path d="M172 304H160V316H172V304Z" fill="white" />
              <path d="M172 340H160V352H172V340Z" fill="white" />
              <path d="M172 352H160V364H172V352Z" fill="white" />
              <path d="M172 388H160V400H172V388Z" fill="white" />
              <path d="M172 400H160V412H172V400Z" fill="white" />
              <path d="M172 412H160V424H172V412Z" fill="white" />
              <path d="M172 424H160V436H172V424Z" fill="white" />
              <path d="M184 28H172V40H184V28Z" fill="white" />
              <path d="M184 40H172V52H184V40Z" fill="white" />
              <path d="M184 64H172V76H184V64Z" fill="white" />
              <path d="M184 88H172V100H184V88Z" fill="white" />
              <path d="M184 100H172V112H184V100Z" fill="white" />
              <path d="M184 112H172V124H184V112Z" fill="white" />
              <path d="M184 148H172V160H184V148Z" fill="white" />
              <path d="M184 172H172V184H184V172Z" fill="white" />
              <path d="M184 196H172V208H184V196Z" fill="white" />
              <path d="M184 232H172V244H184V232Z" fill="white" />
              <path d="M184 268H172V280H184V268Z" fill="white" />
              <path d="M184 292H172V304H184V292Z" fill="white" />
              <path d="M184 304H172V316H184V304Z" fill="white" />
              <path d="M184 316H172V328H184V316Z" fill="white" />
              <path d="M184 328H172V340H184V328Z" fill="white" />
              <path d="M184 340H172V352H184V340Z" fill="white" />
              <path d="M184 376H172V388H184V376Z" fill="white" />
              <path d="M184 388H172V400H184V388Z" fill="white" />
              <path d="M184 412H172V424H184V412Z" fill="white" />
              <path d="M184 424H172V436H184V424Z" fill="white" />
              <path d="M184 436H172V448H184V436Z" fill="white" />
              <path d="M196 28H184V40H196V28Z" fill="white" />
              <path d="M196 40H184V52H196V40Z" fill="white" />
              <path d="M196 64H184V76H196V64Z" fill="white" />
              <path d="M196 76H184V88H196V76Z" fill="white" />
              <path d="M196 136H184V148H196V136Z" fill="white" />
              <path d="M196 184H184V196H196V184Z" fill="white" />
              <path d="M196 208H184V220H196V208Z" fill="white" />
              <path d="M196 220H184V232H196V220Z" fill="white" />
              <path d="M196 256H184V268H196V256Z" fill="white" />
              <path d="M196 268H184V280H196V268Z" fill="white" />
              <path d="M196 280H184V292H196V280Z" fill="white" />
              <path d="M196 304H184V316H196V304Z" fill="white" />
              <path d="M196 316H184V328H196V316Z" fill="white" />
              <path d="M196 340H184V352H196V340Z" fill="white" />
              <path d="M196 352H184V364H196V352Z" fill="white" />
              <path d="M196 364H184V376H196V364Z" fill="white" />
              <path d="M196 376H184V388H196V376Z" fill="white" />
              <path d="M196 400H184V412H196V400Z" fill="white" />
              <path d="M196 424H184V436H196V424Z" fill="white" />
              <path d="M196 436H184V448H196V436Z" fill="white" />
              <path d="M196 448H184V460H196V448Z" fill="white" />
              <path d="M208 28H196V40H208V28Z" fill="white" />
              <path d="M208 52H196V64H208V52Z" fill="white" />
              <path d="M208 76H196V88H208V76Z" fill="white" />
              <path d="M208 88H196V100H208V88Z" fill="white" />
              <path d="M208 100H196V112H208V100Z" fill="white" />
              <path d="M208 124H196V136H208V124Z" fill="white" />
              <path d="M208 136H196V148H208V136Z" fill="white" />
              <path d="M208 160H196V172H208V160Z" fill="white" />
              <path d="M208 184H196V196H208V184Z" fill="white" />
              <path d="M208 196H196V208H208V196Z" fill="white" />
              <path d="M208 220H196V232H208V220Z" fill="white" />
              <path d="M208 256H196V268H208V256Z" fill="white" />
              <path d="M208 280H196V292H208V280Z" fill="white" />
              <path d="M208 292H196V304H208V292Z" fill="white" />
              <path d="M208 328H196V340H208V328Z" fill="white" />
              <path d="M208 352H196V364H208V352Z" fill="white" />
              <path d="M208 388H196V400H208V388Z" fill="white" />
              <path d="M208 400H196V412H208V400Z" fill="white" />
              <path d="M208 412H196V424H208V412Z" fill="white" />
              <path d="M208 424H196V436H208V424Z" fill="white" />
              <path d="M208 448H196V460H208V448Z" fill="white" />
              <path d="M208 460H196V472H208V460Z" fill="white" />
              <path d="M220 28H208V40H220V28Z" fill="white" />
              <path d="M220 52H208V64H220V52Z" fill="white" />
              <path d="M220 172H208V184H220V172Z" fill="white" />
              <path d="M220 268H208V280H220V268Z" fill="white" />
              <path d="M220 280H208V292H220V280Z" fill="white" />
              <path d="M220 304H208V316H220V304Z" fill="white" />
              <path d="M220 340H208V352H220V340Z" fill="white" />
              <path d="M220 352H208V364H220V352Z" fill="white" />
              <path d="M220 364H208V376H220V364Z" fill="white" />
              <path d="M220 448H208V460H220V448Z" fill="white" />
              <path d="M232 28H220V40H232V28Z" fill="white" />
              <path d="M232 52H220V64H232V52Z" fill="white" />
              <path d="M232 76H220V88H232V76Z" fill="white" />
              <path d="M232 100H220V112H232V100Z" fill="white" />
              <path d="M232 112H220V124H232V112Z" fill="white" />
              <path d="M232 124H220V136H232V124Z" fill="white" />
              <path d="M232 148H220V160H232V148Z" fill="white" />
              <path d="M232 160H220V172H232V160Z" fill="white" />
              <path d="M232 172H220V184H232V172Z" fill="white" />
              <path d="M232 184H220V196H232V184Z" fill="white" />
              <path d="M232 196H220V208H232V196Z" fill="white" />
              <path d="M232 208H220V220H232V208Z" fill="white" />
              <path d="M232 256H220V268H232V256Z" fill="white" />
              <path d="M232 268H220V280H232V268Z" fill="white" />
              <path d="M232 280H220V292H232V280Z" fill="white" />
              <path d="M232 328H220V340H232V328Z" fill="white" />
              <path d="M232 340H220V352H232V340Z" fill="white" />
              <path d="M232 376H220V388H232V376Z" fill="white" />
              <path d="M232 388H220V400H232V388Z" fill="white" />
              <path d="M232 400H220V412H232V400Z" fill="white" />
              <path d="M232 412H220V424H232V412Z" fill="white" />
              <path d="M232 436H220V448H232V436Z" fill="white" />
              <path d="M232 460H220V472H232V460Z" fill="white" />
              <path d="M244 28H232V40H244V28Z" fill="white" />
              <path d="M244 52H232V64H244V52Z" fill="white" />
              <path d="M244 64H232V76H244V64Z" fill="white" />
              <path d="M244 76H232V88H244V76Z" fill="white" />
              <path d="M244 148H232V160H244V148Z" fill="white" />
              <path d="M244 220H232V232H244V220Z" fill="white" />
              <path d="M244 232H232V244H244V232Z" fill="white" />
              <path d="M244 268H232V280H244V268Z" fill="white" />
              <path d="M244 304H232V316H244V304Z" fill="white" />
              <path d="M244 316H232V328H244V316Z" fill="white" />
              <path d="M244 400H232V412H244V400Z" fill="white" />
              <path d="M256 40H244V52H256V40Z" fill="white" />
              <path d="M256 76H244V88H256V76Z" fill="white" />
              <path d="M256 88H244V100H256V88Z" fill="white" />
              <path d="M256 100H244V112H256V100Z" fill="white" />
              <path d="M256 136H244V148H256V136Z" fill="white" />
              <path d="M256 160H244V172H256V160Z" fill="white" />
              <path d="M256 172H244V184H256V172Z" fill="white" />
              <path d="M256 196H244V208H256V196Z" fill="white" />
              <path d="M256 244H244V256H256V244Z" fill="white" />
              <path d="M256 280H244V292H256V280Z" fill="white" />
              <path d="M256 316H244V328H256V316Z" fill="white" />
              <path d="M256 328H244V340H256V328Z" fill="white" />
              <path d="M256 340H244V352H256V340Z" fill="white" />
              <path d="M256 352H244V364H256V352Z" fill="white" />
              <path d="M256 364H244V376H256V364Z" fill="white" />
              <path d="M256 388H244V400H256V388Z" fill="white" />
              <path d="M256 400H244V412H256V400Z" fill="white" />
              <path d="M256 412H244V424H256V412Z" fill="white" />
              <path d="M256 424H244V436H256V424Z" fill="white" />
              <path d="M256 448H244V460H256V448Z" fill="white" />
              <path d="M256 460H244V472H256V460Z" fill="white" />
              <path d="M268 28H256V40H268V28Z" fill="white" />
              <path d="M268 40H256V52H268V40Z" fill="white" />
              <path d="M268 76H256V88H268V76Z" fill="white" />
              <path d="M268 112H256V124H268V112Z" fill="white" />
              <path d="M268 148H256V160H268V148Z" fill="white" />
              <path d="M268 184H256V196H268V184Z" fill="white" />
              <path d="M268 196H256V208H268V196Z" fill="white" />
              <path d="M268 220H256V232H268V220Z" fill="white" />
              <path d="M268 232H256V244H268V232Z" fill="white" />
              <path d="M268 244H256V256H268V244Z" fill="white" />
              <path d="M268 256H256V268H268V256Z" fill="white" />
              <path d="M268 280H256V292H268V280Z" fill="white" />
              <path d="M268 292H256V304H268V292Z" fill="white" />
              <path d="M268 316H256V328H268V316Z" fill="white" />
              <path d="M268 352H256V364H268V352Z" fill="white" />
              <path d="M268 364H256V376H268V364Z" fill="white" />
              <path d="M268 376H256V388H268V376Z" fill="white" />
              <path d="M268 400H256V412H268V400Z" fill="white" />
              <path d="M280 28H268V40H280V28Z" fill="white" />
              <path d="M280 64H268V76H280V64Z" fill="white" />
              <path d="M280 88H268V100H280V88Z" fill="white" />
              <path d="M280 100H268V112H280V100Z" fill="white" />
              <path d="M280 136H268V148H280V136Z" fill="white" />
              <path d="M280 148H268V160H280V148Z" fill="white" />
              <path d="M280 172H268V184H280V172Z" fill="white" />
              <path d="M280 196H268V208H280V196Z" fill="white" />
              <path d="M280 244H268V256H280V244Z" fill="white" />
              <path d="M280 292H268V304H280V292Z" fill="white" />
              <path d="M280 304H268V316H280V304Z" fill="white" />
              <path d="M280 328H268V340H280V328Z" fill="white" />
              <path d="M280 340H268V352H280V340Z" fill="white" />
              <path d="M280 376H268V388H280V376Z" fill="white" />
              <path d="M280 388H268V400H280V388Z" fill="white" />
              <path d="M280 400H268V412H280V400Z" fill="white" />
              <path d="M280 412H268V424H280V412Z" fill="white" />
              <path d="M280 424H268V436H280V424Z" fill="white" />
              <path d="M280 436H268V448H280V436Z" fill="white" />
              <path d="M292 40H280V52H292V40Z" fill="white" />
              <path d="M292 64H280V76H292V64Z" fill="white" />
              <path d="M292 112H280V124H292V112Z" fill="white" />
              <path d="M292 124H280V136H292V124Z" fill="white" />
              <path d="M292 160H280V172H292V160Z" fill="white" />
              <path d="M292 196H280V208H292V196Z" fill="white" />
              <path d="M292 208H280V220H292V208Z" fill="white" />
              <path d="M292 232H280V244H292V232Z" fill="white" />
              <path d="M292 244H280V256H292V244Z" fill="white" />
              <path d="M292 256H280V268H292V256Z" fill="white" />
              <path d="M292 304H280V316H292V304Z" fill="white" />
              <path d="M292 316H280V328H292V316Z" fill="white" />
              <path d="M292 376H280V388H292V376Z" fill="white" />
              <path d="M292 388H280V400H292V388Z" fill="white" />
              <path d="M292 400H280V412H292V400Z" fill="white" />
              <path d="M304 28H292V40H304V28Z" fill="white" />
              <path d="M304 52H292V64H304V52Z" fill="white" />
              <path d="M304 88H292V100H304V88Z" fill="white" />
              <path d="M304 100H292V112H304V100Z" fill="white" />
              <path d="M304 112H292V124H304V112Z" fill="white" />
              <path d="M304 124H292V136H304V124Z" fill="white" />
              <path d="M304 148H292V160H304V148Z" fill="white" />
              <path d="M304 160H292V172H304V160Z" fill="white" />
              <path d="M304 196H292V208H304V196Z" fill="white" />
              <path d="M304 208H292V220H304V208Z" fill="white" />
              <path d="M304 220H292V232H304V220Z" fill="white" />
              <path d="M304 232H292V244H304V232Z" fill="white" />
              <path d="M304 292H292V304H304V292Z" fill="white" />
              <path d="M304 340H292V352H304V340Z" fill="white" />
              <path d="M304 352H292V364H304V352Z" fill="white" />
              <path d="M304 376H292V388H304V376Z" fill="white" />
              <path d="M304 388H292V400H304V388Z" fill="white" />
              <path d="M304 424H292V436H304V424Z" fill="white" />
              <path d="M304 448H292V460H304V448Z" fill="white" />
              <path d="M304 460H292V472H304V460Z" fill="white" />
              <path d="M316 40H304V52H316V40Z" fill="white" />
              <path d="M316 64H304V76H316V64Z" fill="white" />
              <path d="M316 148H304V160H316V148Z" fill="white" />
              <path d="M316 160H304V172H316V160Z" fill="white" />
              <path d="M316 208H304V220H316V208Z" fill="white" />
              <path d="M316 220H304V232H316V220Z" fill="white" />
              <path d="M316 256H304V268H316V256Z" fill="white" />
              <path d="M316 280H304V292H316V280Z" fill="white" />
              <path d="M316 292H304V304H316V292Z" fill="white" />
              <path d="M316 304H304V316H316V304Z" fill="white" />
              <path d="M316 376H304V388H316V376Z" fill="white" />
              <path d="M316 400H304V412H316V400Z" fill="white" />
              <path d="M316 424H304V436H316V424Z" fill="white" />
              <path d="M316 448H304V460H316V448Z" fill="white" />
              <path d="M316 460H304V472H316V460Z" fill="white" />
              <path d="M328 52H316V64H328V52Z" fill="white" />
              <path d="M328 64H316V76H328V64Z" fill="white" />
              <path d="M328 76H316V88H328V76Z" fill="white" />
              <path d="M328 88H316V100H328V88Z" fill="white" />
              <path d="M328 100H316V112H328V100Z" fill="white" />
              <path d="M328 112H316V124H328V112Z" fill="white" />
              <path d="M328 136H316V148H328V136Z" fill="white" />
              <path d="M328 172H316V184H328V172Z" fill="white" />
              <path d="M328 184H316V196H328V184Z" fill="white" />
              <path d="M328 196H316V208H328V196Z" fill="white" />
              <path d="M328 268H316V280H328V268Z" fill="white" />
              <path d="M328 280H316V292H328V280Z" fill="white" />
              <path d="M328 292H316V304H328V292Z" fill="white" />
              <path d="M328 304H316V316H328V304Z" fill="white" />
              <path d="M328 316H316V328H328V316Z" fill="white" />
              <path d="M328 328H316V340H328V328Z" fill="white" />
              <path d="M328 340H316V352H328V340Z" fill="white" />
              <path d="M328 376H316V388H328V376Z" fill="white" />
              <path d="M328 388H316V400H328V388Z" fill="white" />
              <path d="M328 412H316V424H328V412Z" fill="white" />
              <path d="M328 436H316V448H328V436Z" fill="white" />
              <path d="M328 448H316V460H328V448Z" fill="white" />
              <path d="M328 460H316V472H328V460Z" fill="white" />
              <path d="M340 28H328V40H340V28Z" fill="white" />
              <path d="M340 40H328V52H340V40Z" fill="white" />
              <path d="M340 52H328V64H340V52Z" fill="white" />
              <path d="M340 88H328V100H340V88Z" fill="white" />
              <path d="M340 112H328V124H340V112Z" fill="white" />
              <path d="M340 160H328V172H340V160Z" fill="white" />
              <path d="M340 172H328V184H340V172Z" fill="white" />
              <path d="M340 184H328V196H340V184Z" fill="white" />
              <path d="M340 196H328V208H340V196Z" fill="white" />
              <path d="M340 208H328V220H340V208Z" fill="white" />
              <path d="M340 220H328V232H340V220Z" fill="white" />
              <path d="M340 232H328V244H340V232Z" fill="white" />
              <path d="M340 244H328V256H340V244Z" fill="white" />
              <path d="M340 268H328V280H340V268Z" fill="white" />
              <path d="M340 304H328V316H340V304Z" fill="white" />
              <path d="M340 316H328V328H340V316Z" fill="white" />
              <path d="M340 364H328V376H340V364Z" fill="white" />
              <path d="M340 376H328V388H340V376Z" fill="white" />
              <path d="M340 388H328V400H340V388Z" fill="white" />
              <path d="M340 400H328V412H340V400Z" fill="white" />
              <path d="M340 448H328V460H340V448Z" fill="white" />
              <path d="M352 28H340V40H352V28Z" fill="white" />
              <path d="M352 76H340V88H352V76Z" fill="white" />
              <path d="M352 88H340V100H352V88Z" fill="white" />
              <path d="M352 100H340V112H352V100Z" fill="white" />
              <path d="M352 112H340V124H352V112Z" fill="white" />
              <path d="M352 160H340V172H352V160Z" fill="white" />
              <path d="M352 172H340V184H352V172Z" fill="white" />
              <path d="M352 184H340V196H352V184Z" fill="white" />
              <path d="M352 196H340V208H352V196Z" fill="white" />
              <path d="M352 220H340V232H352V220Z" fill="white" />
              <path d="M352 244H340V256H352V244Z" fill="white" />
              <path d="M352 268H340V280H352V268Z" fill="white" />
              <path d="M352 280H340V292H352V280Z" fill="white" />
              <path d="M352 292H340V304H352V292Z" fill="white" />
              <path d="M352 328H340V340H352V328Z" fill="white" />
              <path d="M352 340H340V352H352V340Z" fill="white" />
              <path d="M352 352H340V364H352V352Z" fill="white" />
              <path d="M352 364H340V376H352V364Z" fill="white" />
              <path d="M352 388H340V400H352V388Z" fill="white" />
              <path d="M352 400H340V412H352V400Z" fill="white" />
              <path d="M352 424H340V436H352V424Z" fill="white" />
              <path d="M352 436H340V448H352V436Z" fill="white" />
              <path d="M352 448H340V460H352V448Z" fill="white" />
              <path d="M352 460H340V472H352V460Z" fill="white" />
              <path d="M364 28H352V40H364V28Z" fill="white" />
              <path d="M364 64H352V76H364V64Z" fill="white" />
              <path d="M364 76H352V88H364V76Z" fill="white" />
              <path d="M364 112H352V124H364V112Z" fill="white" />
              <path d="M364 124H352V136H364V124Z" fill="white" />
              <path d="M364 160H352V172H364V160Z" fill="white" />
              <path d="M364 172H352V184H364V172Z" fill="white" />
              <path d="M364 184H352V196H364V184Z" fill="white" />
              <path d="M364 196H352V208H364V196Z" fill="white" />
              <path d="M364 208H352V220H364V208Z" fill="white" />
              <path d="M364 256H352V268H364V256Z" fill="white" />
              <path d="M364 268H352V280H364V268Z" fill="white" />
              <path d="M364 280H352V292H364V280Z" fill="white" />
              <path d="M364 340H352V352H364V340Z" fill="white" />
              <path d="M364 364H352V376H364V364Z" fill="white" />
              <path d="M364 376H352V388H364V376Z" fill="white" />
              <path d="M364 412H352V424H364V412Z" fill="white" />
              <path d="M364 448H352V460H364V448Z" fill="white" />
              <path d="M376 28H364V40H376V28Z" fill="white" />
              <path d="M376 52H364V64H376V52Z" fill="white" />
              <path d="M376 100H364V112H376V100Z" fill="white" />
              <path d="M376 124H364V136H376V124Z" fill="white" />
              <path d="M376 136H364V148H376V136Z" fill="white" />
              <path d="M376 196H364V208H376V196Z" fill="white" />
              <path d="M376 232H364V244H376V232Z" fill="white" />
              <path d="M376 244H364V256H376V244Z" fill="white" />
              <path d="M376 256H364V268H376V256Z" fill="white" />
              <path d="M376 268H364V280H376V268Z" fill="white" />
              <path d="M376 304H364V316H376V304Z" fill="white" />
              <path d="M376 328H364V340H376V328Z" fill="white" />
              <path d="M376 340H364V352H376V340Z" fill="white" />
              <path d="M376 364H364V376H376V364Z" fill="white" />
              <path d="M376 376H364V388H376V376Z" fill="white" />
              <path d="M376 388H364V400H376V388Z" fill="white" />
              <path d="M376 400H364V412H376V400Z" fill="white" />
              <path d="M376 412H364V424H376V412Z" fill="white" />
              <path d="M376 424H364V436H376V424Z" fill="white" />
              <path d="M376 436H364V448H376V436Z" fill="white" />
              <path d="M376 460H364V472H376V460Z" fill="white" />
              <path d="M388 124H376V136H388V124Z" fill="white" />
              <path d="M388 184H376V196H388V184Z" fill="white" />
              <path d="M388 196H376V208H388V196Z" fill="white" />
              <path d="M388 208H376V220H388V208Z" fill="white" />
              <path d="M388 220H376V232H388V220Z" fill="white" />
              <path d="M388 232H376V244H388V232Z" fill="white" />
              <path d="M388 244H376V256H388V244Z" fill="white" />
              <path d="M388 256H376V268H388V256Z" fill="white" />
              <path d="M388 292H376V304H388V292Z" fill="white" />
              <path d="M388 304H376V316H388V304Z" fill="white" />
              <path d="M388 328H376V340H388V328Z" fill="white" />
              <path d="M388 340H376V352H388V340Z" fill="white" />
              <path d="M388 352H376V364H388V352Z" fill="white" />
              <path d="M388 364H376V376H388V364Z" fill="white" />
              <path d="M388 412H376V424H388V412Z" fill="white" />
              <path d="M388 448H376V460H388V448Z" fill="white" />
              <path d="M400 124H388V136H400V124Z" fill="white" />
              <path d="M400 136H388V148H400V136Z" fill="white" />
              <path d="M400 148H388V160H400V148Z" fill="white" />
              <path d="M400 172H388V184H400V172Z" fill="white" />
              <path d="M400 184H388V196H400V184Z" fill="white" />
              <path d="M400 196H388V208H400V196Z" fill="white" />
              <path d="M400 208H388V220H400V208Z" fill="white" />
              <path d="M400 232H388V244H400V232Z" fill="white" />
              <path d="M400 244H388V256H400V244Z" fill="white" />
              <path d="M400 256H388V268H400V256Z" fill="white" />
              <path d="M400 292H388V304H400V292Z" fill="white" />
              <path d="M400 328H388V340H400V328Z" fill="white" />
              <path d="M400 340H388V352H400V340Z" fill="white" />
              <path d="M400 352H388V364H400V352Z" fill="white" />
              <path d="M400 364H388V376H400V364Z" fill="white" />
              <path d="M400 388H388V400H400V388Z" fill="white" />
              <path d="M400 412H388V424H400V412Z" fill="white" />
              <path d="M400 424H388V436H400V424Z" fill="white" />
              <path d="M400 448H388V460H400V448Z" fill="white" />
              <path d="M400 460H388V472H400V460Z" fill="white" />
              <path d="M412 124H400V136H412V124Z" fill="white" />
              <path d="M412 160H400V172H412V160Z" fill="white" />
              <path d="M412 172H400V184H412V172Z" fill="white" />
              <path d="M412 196H400V208H412V196Z" fill="white" />
              <path d="M412 208H400V220H412V208Z" fill="white" />
              <path d="M412 220H400V232H412V220Z" fill="white" />
              <path d="M412 232H400V244H412V232Z" fill="white" />
              <path d="M412 244H400V256H412V244Z" fill="white" />
              <path d="M412 256H400V268H412V256Z" fill="white" />
              <path d="M412 304H400V316H412V304Z" fill="white" />
              <path d="M412 340H400V352H412V340Z" fill="white" />
              <path d="M412 364H400V376H412V364Z" fill="white" />
              <path d="M412 412H400V424H412V412Z" fill="white" />
              <path d="M424 124H412V136H424V124Z" fill="white" />
              <path d="M424 160H412V172H424V160Z" fill="white" />
              <path d="M424 172H412V184H424V172Z" fill="white" />
              <path d="M424 196H412V208H424V196Z" fill="white" />
              <path d="M424 208H412V220H424V208Z" fill="white" />
              <path d="M424 244H412V256H424V244Z" fill="white" />
              <path d="M424 268H412V280H424V268Z" fill="white" />
              <path d="M424 280H412V292H424V280Z" fill="white" />
              <path d="M424 292H412V304H424V292Z" fill="white" />
              <path d="M424 328H412V340H424V328Z" fill="white" />
              <path d="M424 340H412V352H424V340Z" fill="white" />
              <path d="M424 352H412V364H424V352Z" fill="white" />
              <path d="M424 364H412V376H424V364Z" fill="white" />
              <path d="M424 376H412V388H424V376Z" fill="white" />
              <path d="M424 388H412V400H424V388Z" fill="white" />
              <path d="M424 400H412V412H424V400Z" fill="white" />
              <path d="M424 412H412V424H424V412Z" fill="white" />
              <path d="M424 436H412V448H424V436Z" fill="white" />
              <path d="M424 448H412V460H424V448Z" fill="white" />
              <path d="M436 124H424V136H436V124Z" fill="white" />
              <path d="M436 136H424V148H436V136Z" fill="white" />
              <path d="M436 160H424V172H436V160Z" fill="white" />
              <path d="M436 304H424V316H436V304Z" fill="white" />
              <path d="M436 328H424V340H436V328Z" fill="white" />
              <path d="M436 352H424V364H436V352Z" fill="white" />
              <path d="M436 364H424V376H436V364Z" fill="white" />
              <path d="M436 388H424V400H436V388Z" fill="white" />
              <path d="M436 400H424V412H436V400Z" fill="white" />
              <path d="M436 412H424V424H436V412Z" fill="white" />
              <path d="M436 424H424V436H436V424Z" fill="white" />
              <path d="M436 448H424V460H436V448Z" fill="white" />
              <path d="M448 124H436V136H448V124Z" fill="white" />
              <path d="M448 136H436V148H448V136Z" fill="white" />
              <path d="M448 148H436V160H448V148Z" fill="white" />
              <path d="M448 160H436V172H448V160Z" fill="white" />
              <path d="M448 184H436V196H448V184Z" fill="white" />
              <path d="M448 196H436V208H448V196Z" fill="white" />
              <path d="M448 208H436V220H448V208Z" fill="white" />
              <path d="M448 232H436V244H448V232Z" fill="white" />
              <path d="M448 244H436V256H448V244Z" fill="white" />
              <path d="M448 268H436V280H448V268Z" fill="white" />
              <path d="M448 280H436V292H448V280Z" fill="white" />
              <path d="M448 292H436V304H448V292Z" fill="white" />
              <path d="M448 340H436V352H448V340Z" fill="white" />
              <path d="M448 352H436V364H448V352Z" fill="white" />
              <path d="M448 364H436V376H448V364Z" fill="white" />
              <path d="M448 376H436V388H448V376Z" fill="white" />
              <path d="M448 460H436V472H448V460Z" fill="white" />
              <path d="M460 124H448V136H460V124Z" fill="white" />
              <path d="M460 172H448V184H460V172Z" fill="white" />
              <path d="M460 184H448V196H460V184Z" fill="white" />
              <path d="M460 196H448V208H460V196Z" fill="white" />
              <path d="M460 220H448V232H460V220Z" fill="white" />
              <path d="M460 232H448V244H460V232Z" fill="white" />
              <path d="M460 244H448V256H460V244Z" fill="white" />
              <path d="M460 280H448V292H460V280Z" fill="white" />
              <path d="M460 292H448V304H460V292Z" fill="white" />
              <path d="M460 340H448V352H460V340Z" fill="white" />
              <path d="M460 352H448V364H460V352Z" fill="white" />
              <path d="M460 364H448V376H460V364Z" fill="white" />
              <path d="M460 388H448V400H460V388Z" fill="white" />
              <path d="M460 400H448V412H460V400Z" fill="white" />
              <path d="M460 412H448V424H460V412Z" fill="white" />
              <path d="M460 460H448V472H460V460Z" fill="white" />
              <path d="M472 172H460V184H472V172Z" fill="white" />
              <path d="M472 196H460V208H472V196Z" fill="white" />
              <path d="M472 208H460V220H472V208Z" fill="white" />
              <path d="M472 220H460V232H472V220Z" fill="white" />
              <path d="M472 232H460V244H472V232Z" fill="white" />
              <path d="M472 244H460V256H472V244Z" fill="white" />
              <path d="M472 292H460V304H472V292Z" fill="white" />
              <path d="M472 316H460V328H472V316Z" fill="white" />
              <path d="M472 328H460V340H472V328Z" fill="white" />
              <path d="M472 376H460V388H472V376Z" fill="white" />
              <path d="M472 388H460V400H472V388Z" fill="white" />
              <path d="M472 400H460V412H472V400Z" fill="white" />
              <path d="M472 424H460V436H472V424Z" fill="white" />
              <path d="M472 436H460V448H472V436Z" fill="white" />
              <path d="M472 448H460V460H472V448Z" fill="white" />
              <path d="M472 460H460V472H472V460Z" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 28V112H112V28H28ZM40 40H100V100H40V40Z"
                fill="white"
              />
              <path d="M88 52H52V88H88V52Z" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M472 28L388 28V112H472V28ZM460 40V100H400V40H460Z"
                fill="white"
              />
              <path d="M448 88V52H412V88H448Z" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 472H112V388H28L28 472ZM40 460V400H100V460H40Z"
                fill="white"
              />
              <path d="M52 412V448H88V412H52Z" fill="white" />
            </mask>
            <g mask="url(#mask0_119_566)">
              <path d="M500 0H0V500H500V0Z" fill="#080708" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_119_566">
              <rect width="500" height="500" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>

      <Popup status={openPopup} close={() => setOpenPopup(false)} />
    </>
  );
};

export default Ambasadors;

const Popup = ({ status, close }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (status) {
      document.body.style.overflowY = "hidden"; // Onemogućavanje skrolovanja
      document.body.style.paddingRight = "0.5rem"; // Dodaj širinu scrollbara
    } else {
      document.body.style.overflowY = "auto"; // Ponovno omogućavanje skrolovanja
      document.body.style.paddingRight = "0"; // Ukloni padding
    }

    return () => {
      document.body.style.overflowY = "auto"; // Ponovno omogućavanje skrolovanja
      document.body.style.paddingRight = "0"; // Ukloni padding
    };
  }, [status]);

  return (
    <div
      className={styles.popupWrapper}
      style={{ opacity: status ? 1 : 0, pointerEvents: status ? "initial" : "none" }}
    >
      <div className={styles.popupBackground} onClick={close}></div>
      <div className={styles.popupBoxWrapper}>
        <div className={styles.popupBox}>
          <div className={styles.close} onClick={close}>
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0612 18.939C21.343 19.2208 21.5013 19.603 21.5013 20.0015C21.5013 20.4 21.343 20.7822 21.0612 21.064C20.7794 21.3458 20.3972 21.5041 19.9987 21.5041C19.6002 21.5041 19.218 21.3458 18.9362 21.064L10.9999 13.1252L3.0612 21.0615C2.7794 21.3433 2.39721 21.5016 1.9987 21.5016C1.60018 21.5016 1.21799 21.3433 0.936196 21.0615C0.654403 20.7797 0.496094 20.3975 0.496094 19.999C0.496094 19.6005 0.654403 19.2183 0.936196 18.9365L8.87495 11.0002L0.938695 3.06147C0.656903 2.77968 0.498594 2.39748 0.498594 1.99897C0.498594 1.60045 0.656903 1.21826 0.938695 0.936469C1.22049 0.654677 1.60268 0.496367 2.0012 0.496367C2.39971 0.496367 2.7819 0.654677 3.0637 0.936469L10.9999 8.87522L18.9387 0.935219C19.2205 0.653426 19.6027 0.495117 20.0012 0.495117C20.3997 0.495117 20.7819 0.653426 21.0637 0.935219C21.3455 1.21701 21.5038 1.5992 21.5038 1.99772C21.5038 2.39623 21.3455 2.77843 21.0637 3.06022L13.1249 11.0002L21.0612 18.939Z" />
            </svg>
          </div>

          <div className={styles.popupHeader}>
            <h3>Ambasadori</h3>

            <div className={styles.switch}>
              <div style={{ color: active ? "#C3FF0B" : "" }}>Beograd</div>
              <div
                className={styles.toggle}
                onClick={() => setActive((prev) => !prev)}
                style={{
                  backgroundColor: active ? "#C3FF0B" : "transparent",
                }}
              >
                <div className={styles.circleWrapper}>
                  <div
                    className={styles.circle}
                    style={{
                      left: active ? "0%" : "100%",
                      transform: active ? "translateX(0)" : "translateX(-100%)",
                      backgroundColor: active ? "#080708" : "#C3FF0B",
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  color: !active ? "#C3FF0B" : "",
                }}
              >
                Novi Sad
              </div>
            </div>
          </div>
          <div className={styles.table}>
            {(active ? promotes : promotes2).map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.bar}>{item.faculty}</div>

                <div className={styles.cardInfo}>
                  <p className={styles.cardTitle}>{item.name}</p>
                </div>
                <a href={`tel:${item.phone} `}>
                  <p className={styles.name}>{item.phone}</p>
                </a>
              </div>
            ))}
          </div>

          <div className={styles.shadow}></div>
        </div>
      </div>
    </div>
  );
};
