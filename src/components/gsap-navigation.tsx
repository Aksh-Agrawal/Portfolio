"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, FileText, User, Code, Home, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function GSAPNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);
  const logoRef = React.useRef<HTMLDivElement>(null);
  const navItemsRef = React.useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "github-activity", label: "Activity", icon: Github },
    { id: "projects", label: "Projects", icon: Code },
    { id: "resume", label: "Resume", icon: FileText },
  ];

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Navbar entrance animation
        gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        // Logo animation
        gsap.fromTo(
          logoRef.current,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.7)",
          }
        );

        // Nav items stagger animation
        gsap.fromTo(
          navItemsRef.current?.children || [],
          { opacity: 0, y: -20, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: "power2.out",
          }
        );

        // Navbar background blur effect on scroll (keep transparent, no color change)
        ScrollTrigger.create({
          trigger: "body",
          start: "top -100",
          end: "bottom bottom",
          onUpdate: () => {
            if (navRef.current) {
              gsap.to(navRef.current, {
                backgroundColor: "rgba(0,0,0,0)",
                backdropFilter: "blur(15px)",
                borderColor: "rgba(0,0,0,0.1)",
                duration: 0.3,
              });
            }
          },
        });
      }, navRef);

      return () => ctx.revert();
    }, 100); // Small delay to ensure hydration is complete

    return () => clearTimeout(timer);
  }, []);

  const handleNavItemHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleNavItemLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      scale: 1.1,
      rotation: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg  border-primary/10 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* <motion.div 
            ref={logoRef}
            className="text-2xl font-bold text-primary font-serif tracking-wide cursor-pointer group"
            onClick={() => scrollToSection("home")}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Aksh Agrawal 
            </span>
          </motion.div> */}

          {/* Desktop Navigation */}
          <div ref={navItemsRef} className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <NavigationMenuItem key={item.id}>
                      <NavigationMenuLink
                        onClick={() => scrollToSection(item.id)}
                        onMouseEnter={handleNavItemHover}
                        onMouseLeave={handleNavItemLeave}
                        className="cursor-pointer px-4 py-2 text-sm font-medium group relative overflow-hidden rounded-lg hover:bg-primary/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                          </motion.div>
                          <span className="group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>

                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2 py-4 border-t border-primary/10">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
