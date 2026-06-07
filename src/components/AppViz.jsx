import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

// Drifting bar / trend-line data-viz that fills the "Build" feature panel.
// Faithful port of the design's vanilla-JS animation.
export default function AppViz() {
  const ref = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const css = getComputedStyle(document.documentElement);
    const neutral = css.getPropertyValue("--viz-neutral").trim() || "180,196,180";
    const barCol = css.getPropertyValue("--viz-bar").trim() || "120,140,124";
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;
    let raf;
    const bars = 12;

    function resize() {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      t += 0.018;
      const pad = w * 0.12;
      const bw = (w - pad * 2) / bars;
      const base = h * 0.78;
      // baseline
      ctx.strokeStyle = "rgba(" + neutral + ",.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, base);
      ctx.lineTo(w - pad, base);
      ctx.stroke();
      // bars
      for (let i = 0; i < bars; i++) {
        const val = (Math.sin(t + i * 0.55) * 0.5 + 0.5) * 0.62 + 0.12;
        const bh = val * (h * 0.6);
        const x = pad + i * bw + bw * 0.2;
        const bw2 = bw * 0.6;
        const hot =
          i === Math.floor((Math.sin(t * 0.6) * 0.5 + 0.5) * (bars - 1));
        ctx.fillStyle = hot
          ? "rgba(76,134,232,.85)"
          : "rgba(" + barCol + ",.5)";
        ctx.fillRect(x, base - bh, bw2, bh);
      }
      // trend line
      ctx.strokeStyle = "rgba(76,134,232,.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < bars; i++) {
        const val = (Math.sin(t * 0.8 + i * 0.42) * 0.5 + 0.5) * 0.5 + 0.2;
        const x = pad + i * bw + bw * 0.5;
        const y = base - val * (h * 0.62);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      // moving dot on trend
      const di = (Math.sin(t * 0.8) * 0.5 + 0.5) * (bars - 1);
      const ii = Math.floor(di);
      const v = (Math.sin(t * 0.8 + ii * 0.42) * 0.5 + 0.5) * 0.5 + 0.2;
      const dx = pad + ii * bw + bw * 0.5;
      const dy = base - v * (h * 0.62);
      ctx.beginPath();
      ctx.arc(dx, dy, 4, 0, 6.2832);
      ctx.fillStyle = "#4C86E8";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(dx, dy, 9, 0, 6.2832);
      ctx.strokeStyle = "rgba(76,134,232,.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      raf = requestAnimationFrame(step);
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize();
    if (reduce) {
      step();
      cancelAnimationFrame(raf);
    } else {
      step();
    }

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  return <canvas id="appviz" ref={ref} aria-hidden="true" />;
}
