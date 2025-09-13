"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPScrollAnimationsProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeInDown" | "scaleIn" | "slideInLeft" | "slideInRight" | "rotateIn" | "bounceIn"
  delay?: number
  duration?: number
  stagger?: number
}

export function GSAPScrollAnimations({ 
  children, 
  className = "", 
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  stagger = 0
}: GSAPScrollAnimationsProps) {
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return

    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const element = elementRef.current
      if (!element) return
      
      const children = Array.from(element.children)

    // Set initial states based on animation type
    const setInitialState = () => {
      switch (animation) {
        case "fadeInUp":
          gsap.set(children, { opacity: 0, y: 50 })
          break
        case "fadeInLeft":
          gsap.set(children, { opacity: 0, x: -50 })
          break
        case "fadeInRight":
          gsap.set(children, { opacity: 0, x: 50 })
          break
        case "fadeInDown":
          gsap.set(children, { opacity: 0, y: -50 })
          break
        case "scaleIn":
          gsap.set(children, { opacity: 0, scale: 0.8 })
          break
        case "slideInLeft":
          gsap.set(children, { opacity: 0, x: -100 })
          break
        case "slideInRight":
          gsap.set(children, { opacity: 0, x: 100 })
          break
        case "rotateIn":
          gsap.set(children, { opacity: 0, rotation: -180, scale: 0.8 })
          break
        case "bounceIn":
          gsap.set(children, { opacity: 0, scale: 0.3 })
          break
        default:
          gsap.set(children, { opacity: 0, y: 50 })
      }
    }

    // Set initial state
    setInitialState()

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Add animation based on type
    switch (animation) {
      case "fadeInUp":
        tl.to(children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out"
        })
        break
      case "fadeInLeft":
        tl.to(children, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out"
        })
        break
      case "fadeInRight":
        tl.to(children, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out"
        })
        break
      case "fadeInDown":
        tl.to(children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out"
        })
        break
      case "scaleIn":
        tl.to(children, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: "back.out(1.7)"
        })
        break
      case "slideInLeft":
        tl.to(children, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out"
        })
        break
      case "slideInRight":
        tl.to(children, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out"
        })
        break
      case "rotateIn":
        tl.to(children, {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: "back.out(1.7)"
        })
        break
      case "bounceIn":
        tl.to(children, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: "bounce.out"
        })
        break
    }

      return () => {
        tl.kill()
      }
    }, 100) // Small delay to ensure hydration is complete

    return () => clearTimeout(timer)
  }, [animation, delay, duration, stagger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Pre-configured animation components for common use cases
export function FadeInUp({ children, className = "", delay = 0, stagger = 0.1 }) {
  return (
    <GSAPScrollAnimations 
      animation="fadeInUp" 
      className={className} 
      delay={delay} 
      stagger={stagger}
    >
      {children}
    </GSAPScrollAnimations>
  )
}

export function FadeInLeft({ children, className = "", delay = 0, stagger = 0.1 }) {
  return (
    <GSAPScrollAnimations 
      animation="fadeInLeft" 
      className={className} 
      delay={delay} 
      stagger={stagger}
    >
      {children}
    </GSAPScrollAnimations>
  )
}

export function FadeInRight({ children, className = "", delay = 0, stagger = 0.1 }) {
  return (
    <GSAPScrollAnimations 
      animation="fadeInRight" 
      className={className} 
      delay={delay} 
      stagger={stagger}
    >
      {children}
    </GSAPScrollAnimations>
  )
}

export function ScaleIn({ children, className = "", delay = 0, stagger = 0.1 }) {
  return (
    <GSAPScrollAnimations 
      animation="scaleIn" 
      className={className} 
      delay={delay} 
      stagger={stagger}
    >
      {children}
    </GSAPScrollAnimations>
  )
}

export function BounceIn({ children, className = "", delay = 0, stagger = 0.1 }) {
  return (
    <GSAPScrollAnimations 
      animation="bounceIn" 
      className={className} 
      delay={delay} 
      stagger={stagger}
    >
      {children}
    </GSAPScrollAnimations>
  )
}
