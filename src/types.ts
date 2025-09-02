import siteData from "../site-data.json" with { type: "json" };

export type SiteData = typeof siteData;
export type Personal = SiteData["personal"];
export type Experience = SiteData["experience"][number];
export type Education = SiteData["education"][number];
export type Skill = SiteData["skills"][number];
export type Certification = SiteData["certifications"][number];
export type Achievement = SiteData["achievements"][number];

export type NavItem = {
  name: string;
  href: `#${string}`;
};
