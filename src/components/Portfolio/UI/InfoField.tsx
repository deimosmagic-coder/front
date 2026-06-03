import React, { ReactNode } from 'react';
import styles from './InfoField.module.scss';

interface InfoFieldProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export default function InfoField({ label, children, className = '' }: InfoFieldProps) {
  return (
    <div className={`${styles.infoField} ${className}`}>
      <p className={styles.label}>{label}</p>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
