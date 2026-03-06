"use client";
import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({ value, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2, // 2 seconds to reach the target
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Number(latest.toFixed(decimals)));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return <span ref={ref}>{count}</span>;
}