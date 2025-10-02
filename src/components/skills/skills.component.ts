
import sectionTemplate from "../section.template.html?raw";
import skillsTemplate from "./skills.template.html?raw";
import { Skill } from "../../types/skill.type";

const skills: Skill[] = [
    { name: "Java", category: "programming", icon: "☕" },
    { name: "JavaScript", category: "programming" },
    { name: "TypeScript", category: "programming" },
    { name: "Python", category: "programming", icon: "🐍" },
    { name: "Angular", category: "framework", icon: "🅰️" },
    { name: "Spring", category: "framework", icon: "🟢" },
    { name: "MS SQL Server", category: "database" },
    { name: "Oracle", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "SqLite", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "VS Code", category: "tool", icon: "🔧" },
    { name: "Intellij IDEA", category: "tool", icon: "🔧" },
    { name: "Jasper Report", category: "tool", icon: "🔧" },
    { name: "Git", category: "tool", icon: "🔧" },
    { name: "Azure DevOps", category: "tool", icon: "🔧" },
    { name: "Jira", category: "tool", icon: "🔧" },
    { name: "Latex", category: "other" },
    { name: "Natural Language Processing", category: "other" },
    { name: "Malware", category: "other" },
];

export function renderSkills(): string {
    const skillsContent = skills.map(skill => skillsTemplate
            .replace("{name}", skill.name)
            .replace("{icon}", skill.icon || "🛠️")
        ).join("");

    return sectionTemplate
        .replace("{title}", 'Technical Skills and Interests')
        .replace("{section-class}", "skills-grid")
        .replace("{section-id}", "skills-container")
        .replace("{section-content}", skillsContent);
}