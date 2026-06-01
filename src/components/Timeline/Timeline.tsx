"use client";

import { useEffect, useRef } from "react";
import ImageGlow from "./ImageGlow";
import ImageFade from "./ImageFade";
import styles from "./Timeline.module.scss";

interface TimelineItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  paddingClass: string;
}

const items: TimelineItem[] = [
  {
    id: "shared",
    title: "Share docs and past \nconversations with Elapse",
    desc: "Upload all supporting documentation and insert all supporting web pages to \nhelp the chatbot answer questions based on your data.",
    image: "/images/image.svg",
    paddingClass: styles.pad1,
  },
  {
    id: "support",
    title: "Elapse will instantly solve \nover 70% of your customer \nsupport",
    desc: "Elapse AI typically starts at 70% and can reach full 100% self-sufficiency. \nNever worry about hiring more if Elapse is active.",
    image: "/images/image2.png",
    paddingClass: styles.pad2,
  },
  {
    id: "forwards",
    title: "Elapse forwards \nunknown \nqueries to your team and \nlearns from their answers",
    desc: "Upon receiving a response from your team, Elapse learns and enhances \nyour company's knowledge base. This ensures that your support team never \nanswers similar questions twice.",
    image: "/images/image3.svg",
    paddingClass: styles.pad3,
  },
  {
    id: "data",
    title: "Begin truth-seeking using \nyour customers' data.",
    desc: "Elapse helps you prioritize product updates and features based on real user \nneeds, leading to a product that better serves your audience.",
    image: "/images/image4.svg",
    paddingClass: styles.pad4,
  },
  {
    id: "analyze",
    title: "Elapse will analyze your \ntopics to reveal key insights",
    desc: "By accumulating feedback over time, our AI model offers decision-makers a \nmore holistic understanding of their users' needs and provides an objective \nrecord of how often specific issues and features were requested.",
    image: "/images/image5.svg",
    paddingClass: styles.pad5,
  },
];

const glowIds = new Set(["shared", "forwards", "data", "analyze"]);

export default function Timeline() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        const sectionH = rect.height;

        const scrolledOut = -rect.top;
        const progress = scrolledOut / sectionH; // 0..1

        let opacity: number;
        let translateY: number;

        if (rect.bottom < 0 || rect.top > windowH) {
          opacity = 0;
          translateY = rect.top > windowH ? 40 : -40;
        } else if (rect.top > 0) {
          opacity = 1;
          translateY = 0;
        } else {
          const fadeStart = 0.4;
          if (progress < fadeStart) {
            opacity = 1;
            translateY = 0;
          } else {
            const t = (progress - fadeStart) / (1 - fadeStart);
            opacity = Math.max(0, 1 - t);
            translateY = -30 * t;
          }
        }

        el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        el.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timeline}>
      <div className={styles.containerLine}>
        {items.map((item, index) => (
          <section
            key={item.id}
            className={styles.section}
            ref={(el) => { sectionRefs.current[index] = el; }}
          >
            <div className={styles.dot} />
            <div className={styles.leftContent}>
              <h2 className={styles.title}>
                {item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
            <div className={styles.rightContent}>
              <p className={styles.desc}>
                {item.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className={`${styles.imgWrapper} ${item.paddingClass} ${styles.imgWrapperGlow}`}>
                {glowIds.has(item.id) && <ImageGlow />}
                {item.id === "support" && <ImageFade />}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title.split("\n")[0]} className={styles.img} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
