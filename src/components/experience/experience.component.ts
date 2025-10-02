import sectionTemplate from "../section.template.html?raw";
import experienceTemplate from "./experience.template.html?raw";
import { Experience } from "../../types/experience.type";

const experience: Experience[] = [
    {
        company: "Enosis Solutions",
        role: "Senior Software Engineer",
        duration: "November, 2024 - Current",
        description: "As a key contributor to a large-scale Manufacturing & Quality Assurance Platform, I drove the modernization of the front-end by migrating critical components from AngularJS to modern Angular. My work spanned the full stack with over 1,000 commits across the Java Spring backend and multiple database layers, where I collaborated on crucial enterprise integrations with ERP and authentication systems. Throughout these projects, including leading a comprehensive migration of legacy popup components, I maintained high code quality through systematic refactoring and documentation."
    },
    {
        company: "Enosis Solutions",
        role: "Software Engineer",
        duration: "November, 2022 - October, 2024",
        description: "I delivered significant performance optimizations and architectural improvements across a full-stack enterprise manufacturing platform. With over 400 commits, I led the modernization of the reporting infrastructure to support rich text and images, and architected critical validation systems to enhance data integrity. My work also focused on resolving complex database integration challenges and refactoring the Java data access layer, which improved query efficiency and reduced algorithmic complexity for a 10x performance gain."
    }
];

export function renderExperience(): string {
    const experienceContent = experience.map(exp => {
        return experienceTemplate
            .replace("{company}", exp.company)
            .replace("{role}", exp.role)
            .replace("{duration}", exp.duration)
            .replace("{description}", exp.description ?? ""); 
    }).join("");

    return sectionTemplate
        .replace("{title}", '<i class="fa-solid fa-suitcase"></i> Work Experience')
        .replace("{section-class}", "timeline")
        .replace("{section-id}", "experience-container")
        .replace("{section-content}", experienceContent);
}