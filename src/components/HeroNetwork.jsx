import React, { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

// Live node-network canvas behind the hero. Nodes drift, link when close, and
// react to the pointer. Faithful port of the design's vanilla-JS animation.
export default function HeroNetwork() {
  const ref = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const neutral =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--viz-neutral")
        .trim() || "180,196,180";
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let MX = -999;
    let MY = -999;
    let raf;

    function resize() {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(26, Math.min(64, Math.floor((w * h) / 26000)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.6 + 0.7,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        const dxm = a.x - MX;
        const dym = a.y - MY;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 150) {
          a.x += (dxm / dm) * 0.5;
          a.y += (dym / dm) * 0.5;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 128) {
            const o = (1 - d / 128) * 0.5;
            ctx.strokeStyle = "rgba(76,134,232," + o * 0.5 + ")";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const dm = Math.hypot(a.x - MX, a.y - MY);
        const near = dm < 150;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, 6.2832);
        ctx.fillStyle = near
          ? "rgba(76,134,232,.9)"
          : "rgba(" + neutral + ",.4)";
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const parent = cv.parentElement;
    const onResize = () => resize();
    const onMove = (e) => {
      const r = cv.getBoundingClientRect();
      MX = e.clientX - r.left;
      MY = e.clientY - r.top;
    };
    const onLeave = () => {
      MX = -999;
      MY = -999;
    };

    window.addEventListener("resize", onResize);
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    resize();
    if (reduce) {
      step();
      cancelAnimationFrame(raf);
    } else {
      step();
    }

    return () => {
      window.removeEventListener("resize", onResize);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  return <canvas id="net" ref={ref} aria-hidden="true" />;
}
