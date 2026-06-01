"use client";

import GlowCanvas from "@/components/GlowCanvas/GlowCanvas";
import styles from "./ElapseIntuition.module.scss";

export default function ElapseIntuition() {
  return (
    <section className={styles.section}>
      <GlowCanvas />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.circle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.ascii}
              src="/images/ascii.svg"
              alt="ASCII art"
            />
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>Elapse Intuition</h2>
            <p className={styles.desc}>
              Gain an accurate understanding of what your users truly want, based on a{" "}
              <br />comprehensive and representative set of feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
