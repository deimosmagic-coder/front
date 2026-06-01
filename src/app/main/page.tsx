import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TitleSection from "@/components/TitleSection/TitleSection";
import ElapseIntuition from "@/components/ElapseIntuition/ElapseIntuition";
import Timeline from "@/components/Timeline/Timeline";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TitleSection />
        <ElapseIntuition />
        <Timeline />
      </main>
    </>
  );
}
