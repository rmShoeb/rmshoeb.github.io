import { Certification } from "./certification.type";
import { Education } from "./education.type";
import { Experience } from "./experience.type";
import { PersonalInfo } from "./personalInfo.type";
import { PlatformProfile } from "./platformProfile.type";
import { Reference } from "./reference.type";
import { Skill } from "./skill.type";

export interface PortfolioData {
    personal: PersonalInfo;
    skills: Skill[];
    platforms: PlatformProfile[];
    languages: string[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    references: Reference[];
}