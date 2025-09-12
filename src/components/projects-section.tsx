"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Chat Assistant",
      description: "An intelligent chatbot built with OpenAI API, featuring natural language processing and context-aware responses.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      features: ["Natural Language Processing", "Context Awareness", "Real-time Chat", "User Analytics"],
      github: "https://github.com/akshagrawal/ai-chat-assistant",
      demo: "https://ai-chat-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "Computer Vision Object Detector",
      description: "Real-time object detection system using YOLO and TensorFlow, capable of identifying and tracking multiple objects.",
      technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "Flask"],
      features: ["Real-time Detection", "Multi-object Tracking", "Web Interface", "API Integration"],
      github: "https://github.com/akshagrawal/object-detector",
      demo: "https://object-detector-demo.vercel.app",
      status: "In Progress"
    },
    {
      title: "Interactive Data Visualization Dashboard",
      description: "A comprehensive dashboard for data analysis with interactive charts, real-time updates, and machine learning insights.",
      technologies: ["React", "D3.js", "Python", "Pandas", "Scikit-learn"],
      features: ["Interactive Charts", "Real-time Updates", "ML Insights", "Export Functionality"],
      github: "https://github.com/akshagrawal/data-dashboard",
      demo: "https://data-dashboard-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation system with AI-powered energy optimization and voice control integration.",
      technologies: ["Python", "Arduino", "MQTT", "TensorFlow", "React Native"],
      features: ["Voice Control", "Energy Optimization", "Mobile App", "IoT Integration"],
      github: "https://github.com/akshagrawal/smart-home",
      demo: "https://smart-home-demo.vercel.app",
      status: "Planning"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
                      variant={project.status === "Completed" ? "default" : 
                              project.status === "In Progress" ? "secondary" : "outline"}
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
                          <Badge key={tech} variant="outline" className="text-xs">
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
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="default" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
  )
}
