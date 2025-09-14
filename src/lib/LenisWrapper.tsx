"use client";
import React, { useRef, useEffect } from "react";
import Lenis from "lenis";

export const LenisWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      wrapper: wrapperRef.current || undefined,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div ref={wrapperRef} style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};
