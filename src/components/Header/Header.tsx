"use client";

import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/Vector-1.svg" alt="Logo mark" width={22} height={25} />
          <Image src="/images/Vector.svg" priority  alt="Logo text" width={38} height={25} />
        </div>
        <button className={styles.joinButton}>Join Waitlist</button>
      </div>
    </header>
  );
}
