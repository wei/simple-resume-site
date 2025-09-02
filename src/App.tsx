import siteData from "../site-data.json" with { type: "json" };
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import CertificationsSection from "./components/CertificationsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Sidebar from "./components/Sidebar";
import SiteFooter from "./components/SiteFooter";
import SiteHead from "./components/SiteHead";
import SkillsSection from "./components/SkillsSection";
import type { NavItem } from "./types";

export default function App() {
  const {
    personal: personalData,
    experience: experienceData = [],
    education: educationData = [],
    certifications: certificationsData = [],
    achievements: achievementsData = [],
    skills: skillsData = [],
  } = siteData;

  const navItems: NavItem[] = [
    ...(personalData?.about?.trim() ? [{ name: "About", href: "#about" } as NavItem] : []),
    ...(experienceData.length > 0 ? [{ name: "Experience", href: "#experience" } as NavItem] : []),
    ...(educationData.length > 0 ? [{ name: "Education", href: "#education" } as NavItem] : []),
    ...(skillsData.length > 0 ? [{ name: "Skills", href: "#skills" } as NavItem] : []),
    ...(certificationsData.length > 0 ? [{ name: "Certifications", href: "#certifications" } as NavItem] : []),
    ...(achievementsData.length > 0 ? [{ name: "Achievements", href: "#achievements" } as NavItem] : []),
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <SiteHead title={personalData.name} description={personalData.tagline} />
      <div className="lg:flex lg:justify-between lg:gap-16">
        <Sidebar personal={personalData} navItems={navItems} />
        <main className="cursor-default pt-24 lg:w-1/2 lg:py-24">
          {personalData?.about?.trim() && <AboutSection about={personalData.about} />}
          {experienceData.length > 0 && <ExperienceSection items={experienceData} />}
          {educationData.length > 0 && <EducationSection items={educationData} />}
          {skillsData.length > 0 && <SkillsSection items={skillsData} />}
          {certificationsData.length > 0 && <CertificationsSection items={certificationsData} />}
          {achievementsData.length > 0 && <AchievementsSection items={achievementsData} />}
          <SiteFooter name={personalData.name} />
        </main>
      </div>
    </div>
  );
}
