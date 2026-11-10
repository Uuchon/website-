import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const SPECTRUM_VARS = [
  "--spectrum-aqua",
  "--spectrum-blue",
  "--spectrum-violet",
  "--spectrum-magenta",
  "--spectrum-amber",
];

type WaveFieldProps = {
  className?: string;
};

/**
 * Decorative waveform field for the hero. Reads the design-system spectrum
 * tokens from CSS so the canvas follows the palette; it does not analyze audio.
 */
export const WaveField = ({ className }: WaveFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const palette = SPECTRUM_VARS.map(
      (name) => `hsl(${rootStyles.getPropertyValue(name).trim()})`,
    );
    const lastColorIndex = palette.length - 1;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (time: number) => {
      const t = reduceMotion.matches ? 0 : time / 1000;
      ctx.clearRect(0, 0, width, height);

      const lineCount = 30;
      for (let i = 0; i < lineCount; i += 1) {
        const p = i / (lineCount - 1);
        const baseY = height * 0.1 + p * height * 0.8;
        const lift = Math.sin(Math.PI * p) ** 1.2;
        const amp =
          (8 + 48 * lift) * (0.72 + 0.28 * Math.sin(t * 0.7 + i * 0.31));

        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const nx = x / width;
          const envelope = Math.sin(Math.PI * nx) ** 0.6;
          const y =
            baseY +
            Math.sin(nx * Math.PI * 2.1 + t * 1.05 + i * 0.16) *
              amp *
              envelope +
            Math.sin(nx * Math.PI * 5.3 - t * 0.72 + p * 5.2) *
              amp *
              0.26 *
              envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = palette[Math.round(p * lastColorIndex)];
        ctx.globalAlpha = 0.05 + 0.42 * lift;
        ctx.lineWidth = Math.abs(p - 0.5) < 0.09 ? 1.3 : 0.8;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      render(time);
      if (!reduceMotion.matches) frame = window.requestAnimationFrame(loop);
    };

    resize();
    render(0);
    if (!reduceMotion.matches) frame = window.requestAnimationFrame(loop);

    const observer = new ResizeObserver(() => {
      resize();
      render(performance.now());
    });
    observer.observe(canvas);

    const onMotionPreferenceChange = () => {
      window.cancelAnimationFrame(frame);
      if (reduceMotion.matches) {
        render(0);
      } else {
        frame = window.requestAnimationFrame(loop);
      }
    };
    reduceMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      reduceMotion.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("block h-full w-full", className)}
    />
  );
};
