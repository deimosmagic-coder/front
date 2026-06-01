"use client";

import GlowCanvas from "@/components/GlowCanvas/GlowCanvas";
import styles from "./TitleSection.module.scss";

export default function TitleSection() {
  return (
    <section className={styles.title}>
      <GlowCanvas />
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Know exactly what<br />your users truly want
        </h2>
      </div>
    </section>
  );
}
