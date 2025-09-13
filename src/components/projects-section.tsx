"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Goggles for Blind People",
      description:
        "A terminal-based assistive technology prototype featuring obstacle detection, face recognition, object identification, navigation assistance, OCR, and emergency SOS alerts.",
      technologies: [
        "Python",
        "YOLO",
        "OpenCV",
        "Speech Recognition",
        "Text-to-Speech",
        "Iot Integrartion",
        "Twilo",
      ],
      features: [
        "Real-time Obstacle Detection",
        "Known Person Recognition",
        "Voice Command Interaction",
        "Navigation Assistance (Google Maps) to be added",
        "OCR-based Text Reading",
        "Emergency SOS/Buzzer",
      ],
      github: "https://github.com/Aksh-Agrawal/smart_goggles_prototype", // adjust if repo exists
      demo: "https://github.com/Aksh-Agrawal/smart_goggles_prototype", // placeholder
      status: "In Progress",
    },
    {
      title: "Event Report Generator",
      description:
        "AI-powered LaTeX report generator that creates professional event reports from minimal input, supporting images, logos, and standardized templates.",
      technologies: ["Streamlit", "LangChain", "Gemini API", "LaTeX", "Flask"],
      features: [
        "Dynamic LaTeX Report Generation",
        "Image & Logo Integration",
        "External PDF Compilation",
        "Downloadable Reports",
      ],
      github: "https://github.com/aksh-agrawal/event-report-generator", // adjust
      demo: "https://github.com/aksh-agrawal/event-report-generator", // placeholder
      status: "Completed",
    },
    {
      title: "Easy OpenCV Wrapper",
      description:
        "A Python wrapper that simplifies working with OpenCV, making computer vision tasks like image processing, face detection, and object tracking easier for beginners and rapid prototyping.",
      technologies: ["Python", "OpenCV"],
      features: [
        "Simplified OpenCV Functions",

        "Image & Video Processing",
        "Face & Object Detection Utilities",
      ],
      github: "https://github.com/Aksh-Agrawal/easy-opencv-wrapper",
      demo: "https://pypi.org/project/easy-opencv-wrapper/", // placeholder if published
      status: "Completed",
    },
    {
      title: "Unified Ranking System",
      description:
        "A Python-based system that normalizes and ranks user data—competitive programming ratings, course completions, and activity participation—into a unified, configurable score.",
      technologies: [
        "Python",
        "BeautifulSoup",
        "Logging",
        "Pandas",
        "YAML/JSON",
      ],
      features: [
        "Robust Data Normalization",
        "Platform Rating Integration",
        "Detailed Score Reports",
        "Persistent Scoring Database",
        "Batch & Real-Time Processing",
        "CLI Interface",
      ],
      github: "https://github.com/Aksh-Agrawal/normalization_main",
      demo: "https://github.com/Aksh-Agrawal/normalization_main", // placeholder
      status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 no-scrollbar"
          style={{
            overflow: "visible",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my AI-driven applications and interactive experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "In Progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="default" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
