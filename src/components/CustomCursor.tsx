"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.closest(".card-glow")
      ) {
        setHovering(true);
      }
    };

    const handleOut = () => {
      setHovering(false);
    };

    const handleDown = () => {
      setClicking(true);
    };

    const handleUp = () => {
      setClicking(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: clicking ? 0.75 : 1,
      }}
    >
      <motion.div
        className="cursor-ring"
        animate={{
          width: hovering ? 58 : 34,
          height: hovering ? 58 : 34,
          x: hovering ? -29 : -17,
          y: hovering ? -29 : -17,
          borderColor: hovering
            ? "rgba(251, 191, 36, 0.9)"
            : "rgba(251, 191, 36, 0.45)",
          backgroundColor: hovering
            ? "rgba(251, 191, 36, 0.08)"
            : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
      />

      <motion.div
        className="cursor-dot"
        animate={{
          scale: hovering ? 0.65 : 1,
        }}
      />

      <motion.div
        className="cursor-glow"
        animate={{
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 0.8 : 0.45,
        }}
      />
    </motion.div>
  );
}