"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  scroll: number;
  scrollTo: (target: string | number, options?: any) => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export const useLenis = () => {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error("useLenis must be used within LenisProvider");
  return ctx;
};

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2 });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = ({ scroll }: { scroll: number }) => setScroll(scroll);
    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (target: string | number, options?: any) => {
    lenisRef.current?.scrollTo(target, options);
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scroll, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};
