"use client";

import Image from "next/image";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Know exactly what<br />your customers want
          </h1>
          <p className={styles.desc}>
            Elapse AI handles your customer support questions and turns them into<br />
            comprehensive, structured feedback.
          </p>
          <button className={styles.joinButton}>Join Waitlist</button>
        </div>
        <div className={styles.contentInfo}>
          <div className={styles.borderImg}>
            <Image src="/images/SVG.svg" alt="Trusted users" width={40} height={40} />
          </div>
          <div className={styles.infoText}>
            <p className={styles.infoTitle}>Trusted by</p>
            <p className={styles.infoDesc}>5,000+ users</p>
          </div>
        </div>
      </div>
    </section>
  );
}
