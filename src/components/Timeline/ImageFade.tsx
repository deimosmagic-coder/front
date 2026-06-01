"use client";

import { useEffect, useRef } from "react";
import styles from "./ImageFade.module.scss";

export default function ImageFade() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      ctx.clearRect(0, 0, W, H);

      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0,    "rgba(255,255,255,0)");
      grad.addColorStop(0.98, "rgba(0,0,0,1)");
      grad.addColorStop(1,    "rgba(0,0,0,1)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  );
}
