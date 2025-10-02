import { Education } from "../../types/education.type";
import sectionTemplate from "../section.template.html?raw";
import educationTemplate from './education.template.html?raw';

const education: Education[] = [
    {
        institution: "Rajshahi University of Engineering and Technology",
        degree: "B.Sc. Engg. in Computer Science and Engineering",
        duration: "January, 2017 - August, 2023",
        location: "Rajshahi, Bangladesh"
    }
];

export function renderEducation(): string {
    const educationContent = education.map(educationItem => {
        return educationTemplate
            .replace("{institution}", educationItem.institution)
            .replace("{degree}", educationItem.degree)
            .replace("{duration}", educationItem.duration)
            .replace("{location}", educationItem.location ?? "");
    }).join("");

    return sectionTemplate
        .replace("{title}", '<i class="fa-solid fa-user-graduate"></i> Education')
        .replace("{section-class}", "timeline")
        .replace("{section-id}", "education-container")
        .replace("{section-content}", educationContent);
}