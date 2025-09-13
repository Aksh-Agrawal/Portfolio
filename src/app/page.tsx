import { GSAPNavigation } from "@/components/gsap-navigation";
import { GSAPHeroSection } from "@/components/gsap-hero-section";
import { AboutSection } from "@/components/about-section";
import { GitHubActivity } from "@/components/github-activity";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
} from "@/components/gsap-scroll-animations";

export default function Home() {
  return (
    <div className="min-h-screen">
      <GSAPNavigation />
      <GSAPHeroSection />
      <FadeInUp>
        <AboutSection />
      </FadeInUp>
      <FadeInLeft>
        <GitHubActivity />
      </FadeInLeft>
      <FadeInRight>
        <ProjectsSection />
      </FadeInRight>
      <ScaleIn>
        <ResumeSection />
      </ScaleIn>
    
    </div>
  );
}
