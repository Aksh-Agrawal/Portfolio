"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, FileText, User, Code, Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "github-activity", label: "Activity", icon: Github },
    { id: "projects", label: "Projects", icon: Code },
    { id: "resume", label: "Resume", icon: FileText },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-lg rounded-b-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-primary font-serif tracking-wide cursor-pointer px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.07, color: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            transition={{ duration: 0.2 }}
          >
            Aksh Agrawal
          </motion.div>

          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <NavigationMenuItem key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <NavigationMenuLink
                        onClick={() => scrollToSection(item.id)}
                        className="cursor-pointer px-6 py-3 text-base font-medium group relative overflow-hidden rounded-lg transition-all duration-300"
                      >
                        <motion.div
                          className="flex items-center"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="mr-2 h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                          </motion.div>
                          <span className="group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </motion.div>
                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0, opacity: 0 }}
                          whileHover={{
                            width: "calc(100% - 2rem)",
                            opacity: 1,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Background glow effect */}
                        <motion.div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </motion.nav>
  );
}
