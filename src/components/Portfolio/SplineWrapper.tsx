'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Portfolio.module.scss';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => (
    <div className={styles.splineWrapper}>
      <div className={styles.splineContainer} />
    </div>
  ),
});

export default function SplineWrapper() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!showSpline) {
    return (
      <div className={styles.splineWrapper}>
        <div className={styles.splineContainer} />
      </div>
    );
  }

  return (
    <div className={styles.splineWrapper}>
      <div className={styles.splineContainer}>
        <SplineScene scene="https://prod.spline.design/iT1-xH1Sl2pGUNHq/scene.splinecode" />
      </div>
    </div>
  );
}
