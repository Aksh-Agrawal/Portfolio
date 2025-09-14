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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Brain,
  Award,
  Trophy,
  Users,
  GitBranch,
  ExternalLink,
  User,
  Eye,
  FileText,
} from "lucide-react";

export function ResumeSection() {
  const [showPreview, setShowPreview] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState<string | null>(null);

  const resumeData = {
    personalInfo: {
      name: "Aksh Agrawal",
      title: "AI Developer & Interactive Experiences",
      location: "Raipur, Chhattisgarh, India",
      email: "akshagr10@gmail.com",
      phone: "+91 7647988651",
      // website: "akshagrawal.dev",
      linkedin: "linkedin.com/in/akshagr10",
      github: "github.com/aksh-agrawal",
    },
    education: [
      {
        degree: "Bachelor of Technology Hons.",
        field: "Computer Science (DS) Engineering",
        institution: "CSVTU UTD Bhilai",
        duration: "2024 - 2028",
        location: "Bhilai, Chhattisgarh",
        gpa: "7.19/10",
        achievements: [
          "Active member of AI/ML Research Club",
          "Organized multiple tech events and hackathons",
          "Created a python Wrapper",
        ],
      },
    ],
    // experience: [
    //   {
    //     title: "AI Research Intern",
    //     company: "Tech Innovation Lab",
    //     duration: "2024 - Present",
    //     location: "Remote",
    //     type: "Full-time",
    //     description: "Working on cutting-edge AI research projects, focusing on natural language processing and computer vision applications.",
    //     achievements: [
    //       "Developed ML models with 95% accuracy for sentiment analysis",
    //       "Published research paper on advanced NLP techniques",
    //       "Led team of 3 developers in AI project implementation",
    //       "Reduced model inference time by 40% through optimization"
    //     ],
    //     technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Docker", "Kubernetes"]
    //   },
    //   {
    //     title: "Full Stack Developer",
    //     company: "StartupXYZ",
    //     duration: "2023 - 2024",
    //     location: "Bhilai, India",
    //     type: "Part-time",
    //     description: "Built scalable web applications using modern technologies, focusing on user experience and performance optimization.",
    //     achievements: [
    //       "Increased application performance by 40% through code optimization",
    //       "Implemented CI/CD pipeline reducing deployment time by 60%",
    //       "Mentored 2 junior developers and conducted code reviews",
    //       "Built responsive web applications serving 10K+ users"
    //     ],
    //     technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    //   },
    //   {
    //     title: "Freelance Developer",
    //     company: "Various Clients",
    //     duration: "2022 - 2023",
    //     location: "Remote",
    //     type: "Freelance",
    //     description: "Provided web development and AI consulting services to various clients across different industries.",
    //     achievements: [
    //       "Delivered 15+ successful projects with 100% client satisfaction",
    //       "Specialized in AI-powered web applications",
    //       "Built custom chatbots and recommendation systems",
    //       "Maintained 4.9/5 average client rating"
    //     ],
    //     technologies: ["Python", "JavaScript", "React", "FastAPI", "MongoDB", "OpenAI"]
    //   }
    // ],
    projects: [
      {
        name: "AI-Powered Healthcare Assistant",
        description:
          "Developed an intelligent healthcare assistant using NLP and computer vision for symptom analysis and preliminary diagnosis.",
        duration: "2024",
        status: "Completed",
        achievements: [
          "Achieved 92% accuracy in symptom classification",
          "Integrated with multiple medical databases",
          "Built responsive web interface with real-time chat",
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "React",
          "FastAPI",
          "PostgreSQL",
        ],
        github: "github.com/aksh-agrawal/healthcare-ai",
        demo: "healthcare-ai-demo.vercel.app",
      },
      {
        name: "Smart Learning Platform",
        description:
          "Created an adaptive learning platform that personalizes content based on student performance and learning patterns.",
        duration: "2023",
        status: "Completed",
        achievements: [
          "Implemented ML-based content recommendation system",
          "Built interactive learning modules with progress tracking",
          "Served 500+ students with 85% completion rate",
        ],
        technologies: [
          "Next.js",
          "TypeScript",
          "Python",
          "Scikit-learn",
          "MongoDB",
        ],
        github: "github.com/aksh-agrawal/smart-learning",
        demo: "smart-learning.vercel.app",
      },
      {
        name: "Real-time Object Detection System",
        description:
          "Developed a real-time object detection system using YOLO and OpenCV for security and surveillance applications.",
        duration: "2023",
        status: "Completed",
        achievements: [
          "Achieved 15 FPS processing speed on standard hardware",
          "Implemented multi-object tracking with 90% accuracy",
          "Built web dashboard for monitoring and alerts",
        ],
        technologies: ["Python", "OpenCV", "YOLO", "Flask", "WebRTC"],
        github: "github.com/aksh-agrawal/object-detection",
        demo: "object-detection-demo.herokuapp.com",
      },
    ],
    skills: {
      programming: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C++",
        "C",
        "R",
      ],
      frameworks: ["React", "Next.js", "ShadCN"],
      ai_ml: ["Scikit-learn", "OpenCV", "Numpy", "Pandas"],
      tools: ["Git", "Docker"],
      soft_skill: [
        "Leadership",
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Project Management",
      ],
    },
    certifications: [
      {
        name: "AWS Certified Machine Learning - Specialty",
        issuer: "Amazon Web Services",
        date: "2024",
        credential: "AWS-ML-2024-001",
      },
      {
        name: "Google Cloud Professional Data Engineer",
        issuer: "Google Cloud",
        date: "2023",
        credential: "GCP-DE-2023-002",
      },
      {
        name: "TensorFlow Developer Certificate",
        issuer: "TensorFlow",
        date: "2023",
        credential: "TF-DEV-2023-003",
      },
      {
        name: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "2023",
        credential: "AZ-900-AI-2023-004",
      },
    ],
    hackathons: [
      {
        name: "AI Innovation Challenge 2023",
        position: "1st Place",
        description:
          "Built an AI-powered healthcare assistant with real-time symptom analysis",
        duration: "48 hours",
        participants: "200+",
        technologies: ["Python", "TensorFlow", "React", "FastAPI"],
        prize: "₹50,000 + Internship Opportunity",
      },
      {
        name: "TechFest Hackathon 2024",
        position: "Top 5",
        description:
          "Developed a real-time object detection system for security applications",
        duration: "36 hours",
        participants: "150+",
        technologies: ["OpenCV", "YOLO", "React", "WebRTC"],
        prize: "₹25,000 + Mentorship",
      },
      {
        name: "CodeFest 2023",
        position: "2nd Place",
        description:
          "Created a smart learning platform with adaptive content delivery",
        duration: "24 hours",
        participants: "100+",
        technologies: ["Next.js", "Python", "MongoDB", "ML"],
        prize: "₹15,000 + Job Interview",
      },
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Hindi", proficiency: "Native" },
    ],
  };

  // Function to get the PDF file URL
  const loadPDF = async () => {
    // Use public path for PDF
    const url = "/Aksh_Agrawal_Resume.pdf";
    setPdfUrl(url);
    return url;
  };

  const downloadResume = async () => {
    try {
      const url = await loadPDF();
      const link = document.createElement("a");
      link.href = url;
      link.download = "Aksh_Agrawal_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback download method
      const link = document.createElement("a");
      link.href = "/Aksh_Agrawal_Resume.pdf";
      link.download = "Aksh_Agrawal_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const previewResume = async () => {
    try {
      const url = await loadPDF();
      window.open(url, "_blank", "width=800,height=600");
    } catch (error) {
      console.error("Error previewing resume:", error);
      // Fallback preview method
      window.open("/Aksh_Agrawal_Resume.pdf", "_blank");
    }
  };

  const openResumeModal = async () => {
    const url = await loadPDF();
    setShowPreview(true);
  };

  const closePreviewModal = () => {
    setShowPreview(false);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
  };

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Award className="h-10 w-10 text-primary" />
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            My professional journey, skills, and achievements in AI development
            and interactive experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={previewResume}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <Eye className="h-5 w-5 mr-2" />
              Preview PDF
            </Button>
            <Button
              onClick={openResumeModal}
              variant="ghost"
              className="text-primary hover:bg-primary/10 transition-all duration-300"
              size="lg"
            >
              <FileText className="h-5 w-5 mr-2" />
              View Inline
            </Button>
          </div>
        </motion.div>

        {/* PDF Preview Modal */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={closePreviewModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-background rounded-lg shadow-2xl w-full max-w-full sm:max-w-3xl h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Resume Preview</h3>
                <div className="flex gap-2">
                  <Button onClick={downloadResume} size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button onClick={closePreviewModal} size="sm" variant="ghost">
                    ×
                  </Button>
                </div>
              </div>
              <div className="h-full p-4">
                {pdfUrl ? (
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full rounded border"
                    title="Resume Preview"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Loading PDF preview...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="w-full max-w-full mx-auto">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {resumeData.personalInfo.name}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {resumeData.personalInfo.title}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{resumeData.personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{resumeData.personalInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{resumeData.personalInfo.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {/* <div className="flex items-center gap-3">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href={`https://${resumeData.personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {resumeData.personalInfo.website}
                      </a>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <GitBranch className="h-4 w-4 text-primary" />
                      <a
                        href={`https://${resumeData.personalInfo.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {resumeData.personalInfo.github}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <a
                        href={`https://${resumeData.personalInfo.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {resumeData.personalInfo.linkedin}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {resumeData.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary pl-4 mb-6 last:mb-0"
                    >
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                      <ul className="mt-3 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Object.entries(resumeData.skills).map(
                      ([category, skills], index) => (
                        <div key={category}>
                          <h4 className="font-semibold text-sm text-primary mb-2 capitalize">
                            {category.replace("_", " ")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Experience section commented out */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <Badge variant="outline" className="w-fit">{exp.type}</Badge>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                      <ul className="text-sm space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          */}

          {/* Projects */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Key Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {resumeData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{project.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <div className="text-xs text-muted-foreground mb-3">
                        Duration: {project.duration}
                      </div>
                      <ul className="text-sm space-y-1 mb-4">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={`https://${project.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1"
                          >
                            <GitBranch className="h-3 w-3" />
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={`https://${project.demo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* Hackathons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Hackathon Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {resumeData.hackathons.map((hackathon, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
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
                      <p className="text-sm text-muted-foreground mb-3">
                        {hackathon.description}
                      </p>
                      <div className="text-xs text-muted-foreground mb-3">
                        Duration: {hackathon.duration}
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {hackathon.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        Prize: {hackathon.prize}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* Certifications */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {resumeData.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div>
                        <div className="font-medium text-sm">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </div>
                        <div className="text-xs text-primary">
                          {cert.credential}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
