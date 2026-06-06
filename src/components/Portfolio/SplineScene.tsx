'use client';

import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
}

export default function SplineScene({ scene }: SplineSceneProps) {
  return (
    <div style={{ 
      width: '600px', 
      height: '600px', 
      overflow: 'visible', 
      position: 'relative' 
    }}>
      <Spline scene={scene} />
    </div>
  );
}
