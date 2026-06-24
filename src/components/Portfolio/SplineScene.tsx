'use client';

import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
}

export default function SplineScene({ scene }: SplineSceneProps) {
  return (
    <div style={{ 
      width: '490px', 
      height: '490px',  
    }}>
      <Spline scene={scene} />
    </div>
  );
}
