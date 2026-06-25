import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TitleSection from "@/components/TitleSection/TitleSection";
import ElapseIntuition from "@/components/ElapseIntuition/ElapseIntuition";
import Timeline from "@/components/Timeline/Timeline";
import styles from "./Landing.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TitleSection />
        <ElapseIntuition />
        <Timeline />
      </main>
    </div>
  );
}
