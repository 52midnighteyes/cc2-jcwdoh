import AboutMeSection from "./sections/aboutme-section";
import ContactSection from "./sections/contact-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/herosection";
import ReviewSection from "./sections/honest-review";
import PortfolioSection from "./sections/portofolio";
import ProjectSection from "./sections/portofolio";
import SkillsSection from "./sections/skills-section";

export default function HomeView() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <ReviewSection />
      <ContactSection />
    </div>
  );
}
