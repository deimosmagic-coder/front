"use client";

import AboutGlow from "./AboutGlow";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutInfo}>
          <div className={styles.glowWrapper}>
            <AboutGlow />
            <div className={styles.chatBubble}>
              <div className={styles.chatSmile}></div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              A chatbot that gets smarter<br />with every chat
            </h2>
            <p className={styles.desc}>
              Elapse AI learns every detail about your company, including past and<br />
              future support tickets, paving the way for a stress-free, self-sufficient, and<br />
              fully autonomous support system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
