"use client";

import * as React from "react";
import { useLenis } from "@/lib/LenisProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Brain, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function GSAPHeroSection() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const bgRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const subtitleRef = React.useRef<HTMLParagraphElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);
  const particlesRef = React.useRef<HTMLDivElement>(null);
  const imagesRef = React.useRef<HTMLDivElement>(null);
  const [maxBgShift, setMaxBgShift] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero entrance animation
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          }
        );

        // Title typing animation
        const titleText =
          "Hi, I'm Aksh 👋 – I build AI-driven apps & interactive experiences.";
        const titleElement = titleRef.current;

        if (titleElement) {
          titleElement.textContent = "";
          gsap.to(titleElement, {
            duration: 0.1,
            onComplete: () => {
              let i = 0;
              const typeWriter = () => {
                if (i < titleText.length) {
                  titleElement.textContent += titleText.charAt(i);
                  i++;
                  setTimeout(typeWriter, 50);
                }
              };
              typeWriter();
            },
          });
        }

        // Subtitle stagger animation
        gsap.fromTo(
          subtitleRef.current?.children || [],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 1.5,
            ease: "power2.out",
          }
        );

        // Buttons entrance animation
        gsap.fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            delay: 2,
            ease: "back.out(1.7)",
          }
        );

        // Floating particles animation
        if (particlesRef.current && particlesRef.current.children) {
          const particles = Array.from(particlesRef.current.children);
          gsap.set(particles, { opacity: 0 });

          gsap.to(particles, {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            delay: 2.5,
          });

          // Continuous floating animation
          particles.forEach((particle, index) => {
            gsap.to(particle, {
              y: "random(-20, 20)",
              x: "random(-10, 10)",
              rotation: "random(-180, 180)",
              duration: "random(3, 6)",
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.1,
            });
          });
        }

        // Background image chips animation (25 items)
        if (imagesRef.current && imagesRef.current.children) {
          const chips = Array.from(imagesRef.current.children);
          gsap.set(chips, { opacity: 0, scale: 0.9 });

          gsap.to(chips, {
            opacity: 1,
            duration: 1,
            stagger: 0.08,
            delay: 1.8,
            ease: "power1.inOut",
          });

          chips.forEach((chip, index) => {
            gsap.to(chip, {
              y: "random(-30, 30)",
              rotation: "random(-25, 25)",
              duration: "random(2, 4)",
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: index * 0.05,
            });
          });
        }

        // Scroll-triggered animations
        gsap.fromTo(
          ".scroll-indicator",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 3,
            ease: "power2.out",
          }
        );

        // Continuous scroll indicator animation
        gsap.to(".scroll-indicator", {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, heroRef);

      return () => ctx.revert();
    }, 100); // Small delay to ensure hydration is complete

    return () => clearTimeout(timer);
  }, []);
  const { scroll } = useLenis();

  // Measure background extra height vs section height to know how much we can scroll the bg
  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const measure = () => {
      const heroEl = heroRef.current;
      const bgEl = bgRef.current;
      if (!heroEl || !bgEl) return;
      const heroH = heroEl.offsetHeight;
      const bgH = bgEl.offsetHeight;
      setMaxBgShift(Math.max(0, bgH - heroH));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Pin hero and scrub background translate so background scrolls first
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const heroEl = heroRef.current;
    const bgEl = bgRef.current;
    if (!heroEl || !bgEl || maxBgShift <= 0) return;

    // Build timeline for background scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroEl,
        start: "top top",
        end: () => "+=" + maxBgShift,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });
    tl.fromTo(bgEl, { y: 0 }, { y: -maxBgShift, ease: "none" });

    // Refresh in case layout changed
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [maxBgShift]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Background */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 top-0 h-[300vh] bg-gradient-to-br from-background via-background to-primary/10 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]" />

        {/* Unicorn Studio Interactive Background */}
        <div
          data-us-project="94RDoqPkZNNZ0CXKBtM1"
          style={{ width: "1920px", height: "1080px" }}
        ></div>

        {/* Animated Particles */}
        <div ref={particlesRef} className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            // Use a seeded random function for consistent positioning
            const seededRandom = (seed: number) => {
              const x = Math.sin(seed) * 10000;
              return x - Math.floor(x);
            };
            // Format to 4 decimal places for hydration consistency
            const left = (seededRandom(i * 0.1) * 100).toFixed(4);
            const top = (seededRandom(i * 0.1 + 1) * 100).toFixed(4);
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
              />
            );
          })}
        </div>

        {/* Background Chips: 25 image divs that scroll with background */}
        <div ref={imagesRef} className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => {
            // seeded random for SSR-safe positions
            const seededRandom = (seed: number) => {
              const x = Math.sin(seed) * 10000;
              return x - Math.floor(x);
            };
            const left = (seededRandom(i * 0.37) * 100).toFixed(4);
            const top = (seededRandom(i * 0.37 + 2.17) * 100).toFixed(4);
            const size = 24 + Math.floor(seededRandom(i * 0.73) * 16); // 24-40px
            const imgs = [
              "/globe.svg",
              "/window.svg",
              "/vercel.svg",
              "/next.svg",
              "/file.svg",
            ];
            const src = imgs[i % imgs.length];
            return (
              <div
                key={`chip-${i}`}
                className="c-- r-- absolute"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                }}
              >
                <img
                  src={src}
                  alt=""
                  width={size}
                  height={size}
                  className="opacity-70"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
        >
          {/* Text will be populated by GSAP */}
        </motion.h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            B.Tech (Hons.) Computer Science (DS) Student at CSVTU UTD Bhilai
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Specializing in AI-driven applications and interactive experiences
          </p>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("resume")}
            variant="outline"
            size="lg"
            className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Brain className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20">
          <Sparkles className="h-8 w-8 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 text-accent/20">
          <Code
            className="h-6 w-6 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-40 left-20 text-primary/20">
          <Brain
            className="h-7 w-7 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute bottom-20 right-10 text-accent/20">
          <Sparkles
            className="h-6 w-6 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
    </section>
  );
}
