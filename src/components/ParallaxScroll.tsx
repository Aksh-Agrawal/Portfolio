"use client";
import React, { useEffect, useRef } from "react";
import lenis from "@/lib/lenis";

export const ParallaxScroll: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function animate(time: number) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    const handleScroll = ({ scroll }: { scroll: number }) => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
      }
    };
    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax w-full h-64 bg-gradient-to-r from-pink-500 to-purple-700 rounded-xl shadow-xl flex items-center justify-center text-white text-3xl font-bold"
      style={{ willChange: "transform" }}
    >
      Parallax Scroll Demo
    </div>
  );
};
