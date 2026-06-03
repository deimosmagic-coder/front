import React, { ReactNode } from 'react';
import styles from './CornerBorder.module.scss';

interface CornerBorderProps {
  children: ReactNode;
  className?: string;
  showCorners?: boolean;
}

export default function CornerBorder({ children, className = '', showCorners = true }: CornerBorderProps) {
  return (
    <div className={`${styles.cornerBorder} ${className}`}>
      {showCorners && (
        <>
          <span className={`${styles.corner} ${styles.topLeft}`}></span>
          <span className={`${styles.corner} ${styles.topRight}`}></span>
          <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
          <span className={`${styles.corner} ${styles.bottomRight}`}></span>
        </>
      )}
      {children}
    </div>
  );
}
