import React from 'react';
import { NavigationCard } from '../UI';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  level: number;
}

export default function MobileMenu({ isOpen, onClose, level }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>NAVIGATION</h2>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>

      <div className={styles.levelInfo}>
        <div className={styles.levelBlock}>
          <span className={styles.levelNumber}>{level}</span>
          <span className={styles.levelLabel}>LEVEL</span>
        </div>
      </div>

      <div className={styles.menuContent}>
        <NavigationCard
          title="BEGGINNING"
          description={
            <>
              Suscipit est consequatur
              <br />
              nemo voluptatem est
              <br />
              labore saepe.
            </>
          }
          isGrayBorder
        />

        <NavigationCard
          title="LOGS"
          description={
            <>
              Suscipit est consequatur
              <br />
              nemo voluptatem est
              <br />
              labore saepe.
            </>
          }
          isGrayBorder
        />

        <NavigationCard
          title="CREATIONS"
          description={
            <>
              Suscipit est consequatur
              <br />
              nemo voluptatem est
              <br />
              labore saepe.
            </>
          }
          href="/main"
          isGrayBorder
        />
      </div>

      <div className={styles.mobileButtons}>
        <button className={styles.navButton} onClick={onClose}>
          NAVIGATION
        </button>
        <button className={styles.aboutButton}>ABOUT</button>
      </div>
    </div>
  );
}
