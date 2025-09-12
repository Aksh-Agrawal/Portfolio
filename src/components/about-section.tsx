"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Brain, Award, Trophy, Users, GitBranch, Calendar, MapPin, Star } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "OpenAI API",
    "Computer Vision", "NLP", "Data Analysis", "Git", "Docker"
  ]

  const timeline = [
    {
      year: "2022",
      title: "Started B.Tech Journey",
      description: "Began Computer Science Engineering at CSVTU UTD Bhilai",
      icon: <GraduationCap className="h-5 w-5" />,
      type: "education"
    },
    {
      year: "2023",
      title: "First Hackathon Win",
      description: "Won 1st place in AI Innovation Challenge",
      icon: <Trophy className="h-5 w-5" />,
      type: "achievement"
    },
    {
      year: "2023",
      title: "Open Source Contributions",
      description: "Started contributing to ML libraries and frameworks",
      icon: <GitBranch className="h-5 w-5" />,
      type: "contribution"
    },
    {
      year: "2024",
      title: "AI Research Intern",
      description: "Working on cutting-edge NLP research projects",
      icon: <Brain className="h-5 w-5" />,
      type: "work"
    },
    {
      year: "2024",
      title: "Tech Community Leader",
      description: "Leading AI/ML workshops and mentoring juniors",
      icon: <Users className="h-5 w-5" />,
      type: "leadership"
    }
  ]

  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "B.Tech Computer Science",
      description: "CSVTU UTD Bhilai",
      status: "Pursuing",
      year: "2022-2026"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "AI/ML Enthusiast",
      description: "Building intelligent applications",
      status: "Active",
      projects: "15+ Projects"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Interactive Experiences",
      description: "Creating engaging user interfaces",
      status: "Passionate",
      impact: "500+ Users"
    }
  ]

  const hackathons = [
    {
      name: "AI Innovation Challenge 2023",
      position: "1st Place",
      description: "Built an AI-powered healthcare assistant",
      tech: ["Python", "TensorFlow", "Flask"],
      participants: "200+"
    },
    {
      name: "TechFest Hackathon 2024",
      position: "Top 5",
      description: "Developed a real-time object detection system",
      tech: ["OpenCV", "YOLO", "React"],
      participants: "150+"
    },
    {
      name: "Startup Weekend Bhilai",
      position: "Finalist",
      description: "Created a smart home automation prototype",
      tech: ["IoT", "Arduino", "Node.js"],
      participants: "100+"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions and interactive experiences that make a difference.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    As a B.Tech Computer Science student at CSVTU UTD Bhilai, I'm deeply passionate about 
                    artificial intelligence and machine learning. I specialize in building AI-driven applications 
                    that solve real-world problems while creating engaging user experiences.
                  </p>
                  <p className="text-muted-foreground">
                    My focus areas include developing intelligent systems, creating interactive web applications, 
                    and exploring the latest advancements in AI technology. I believe in the power of technology 
                    to transform ideas into impactful solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-primary mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {achievement.status}
                          </Badge>
                          {achievement.year && (
                            <Badge variant="outline" className="text-xs">
                              {achievement.year}
                            </Badge>
                          )}
                          {achievement.projects && (
                            <Badge variant="outline" className="text-xs">
                              {achievement.projects}
                            </Badge>
                          )}
                          {achievement.impact && (
                            <Badge variant="outline" className="text-xs">
                              {achievement.impact}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                My Journey Timeline
              </CardTitle>
              <CardDescription>
                Key milestones in my academic and professional journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                        <div className="text-primary-foreground">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.year}
                          </Badge>
                          <Badge 
                            variant={item.type === 'achievement' ? 'default' : 
                                   item.type === 'education' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Hackathon Achievements
              </CardTitle>
              <CardDescription>
                Competitive programming and innovation challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {hackathons.map((hackathon, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default" className="text-xs">
                        {hackathon.position}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {hackathon.participants}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2">{hackathon.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{hackathon.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {hackathon.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Technologies and tools I work with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
