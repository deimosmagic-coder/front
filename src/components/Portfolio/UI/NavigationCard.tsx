import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './NavigationCard.module.scss';

interface NavigationCardProps {
  title: string;
  description: string | ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  isGrayBorder?: boolean;
}

export default function NavigationCard({ 
  title, 
  description, 
  onClick, 
  href, 
  className = '',
  isGrayBorder = false 
}: NavigationCardProps) {
  const content = (
    <>
      <div className={styles.border}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={`${styles.description} ${isGrayBorder ? styles.grayBorder : ''}`}>
        <p className={styles.descriptionText}>
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {content}
    </div>
  );
}
