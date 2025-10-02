import { renderCertifications } from "../certifications/certifications.component";
import { renderEducation } from "../education/education.component";
import { renderExperience } from "../experience/experience.component";
import { renderHeader } from "../header/header.component";
import { renderLanguages } from "../languages/langauges.component";
import { renderPlatforms } from "../platforms/platforms.component";
import { renderSkills } from "../skills/skills.component";
import { renderSummary } from "../summary/summary.component";
import portfolioRendererTemplate from "./portfolio-renderer.template.html?raw";

export class PortfolioRenderer {
    initialize(): string {
        return portfolioRendererTemplate
            .replace("{header}", renderHeader())
            .replace("{skills}", renderSkills())
            .replace("{platforms}", renderPlatforms())
            .replace("{languages}", renderLanguages())
            .replace("{summary}", renderSummary())
            .replace("{experience}", renderExperience())
            .replace("{education}", renderEducation())
            .replace("{certifications}", renderCertifications());
    }
}