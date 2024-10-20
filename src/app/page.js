import Albums from "@/components/albums/albums";
import Logos from "@/components/logos/logos";
import Gallery from "@/sections/gallery/gallery";
import Hero from "@/sections/hero/hero";
import Info from "@/sections/info/info";
import Section4 from "@/sections/section4/section4";

export default function Home() {
  return (
    <div>
      <Hero />

      <Info />
      <Gallery />

      <Section4 />

      <Logos />

      <Albums />
    </div>
  );
}
