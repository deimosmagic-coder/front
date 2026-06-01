"use client";

import { useEffect, useRef } from "react";
import styles from "./GlowCanvas.module.scss";

export default function GlowCanvas() {
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
      const cy = 0; 

      const rx = W*1.5;
      const ry = H;

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      grad.addColorStop(0,    "rgba(0,0,0,0)");
      grad.addColorStop(0.40, "rgba(0,0,0,0)");
      grad.addColorStop(0.80, "rgba(102,51,238,1)");
      grad.addColorStop(1,    "rgba(255, 255, 255, 1)");

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(rx, ry);

      ctx.fillStyle = grad;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
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
