"use client";

import { useEffect, useRef } from "react";
import styles from "./AboutGlow.module.scss";

export default function AboutGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const S = canvas.offsetWidth;
      canvas.width = S;
      canvas.height = S;
      ctx.clearRect(0, 0, S, S);

      const cx = S * 0.5;
      const cy = S * 0.5;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.5);
      grad.addColorStop(0,    "rgba(2,24,208,1)");
      grad.addColorStop(0.15,    "rgba(2,24,208,1)");
      grad.addColorStop(0.30, "rgba(2,24,208,1)");
      grad.addColorStop(0.52, "rgba(255,255,255,0.95)");
      grad.addColorStop(0.62, "rgba(255,255,255,1)");
      grad.addColorStop(0.70, "rgba(255,255,255,0.7)");
      grad.addColorStop(0.85, "rgba(2,24,208,0.4)");
      grad.addColorStop(0.92, "rgba(2,24,208,0.15)");
      grad.addColorStop(1,    "rgba(2,24,208,0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, S, S);
      
      ctx.globalCompositeOperation = "destination-in";
      const mask = ctx.createRadialGradient(cx, cy, S * 0.1, cx, cy, S * 0.5);
      mask.addColorStop(0,    "rgba(0,0,0,1)");
      mask.addColorStop(0.65, "rgba(0,0,0,1)");
      mask.addColorStop(0.85, "rgba(0,0,0,0.4)");
      mask.addColorStop(1,    "rgba(0,0,0,0)");

      ctx.fillStyle = mask;
      ctx.fillRect(0, 0, S, S);
      ctx.globalCompositeOperation = "source-over";
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
