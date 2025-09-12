import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { GitHubActivity } from "@/components/github-activity";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GitHubActivity />
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
}
