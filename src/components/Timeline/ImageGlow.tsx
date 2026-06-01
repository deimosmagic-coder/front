"use client";

import { useEffect, useRef } from "react";
import styles from "./ImageGlow.module.scss";

export default function ImageGlow() {
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

      const cx = W / 2;
      const cy = H / 2;
      const r = Math.max(W, H) * 0.55;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0,    "rgba(255,255,255,0.9)");
      grad.addColorStop(0.35, "rgba(255,255,255,0.5)");
      grad.addColorStop(0.72, "rgba(0,0,0,0)");     
      grad.addColorStop(1,    "rgba(0,0,0,0)");

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
