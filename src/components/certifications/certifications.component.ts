import { Certification } from "../../types/certification.type";
import sectionTemplate from "../section.template.html?raw";
import certificationsTemplate from './certifications.template.html?raw';

const certifications: Certification[] = [
    {
        name: "Java Foundations Professional - Jetbrains",
        platform: "LinkedIn Learning",
        year: "2025",
        link: "https://www.linkedin.com/learning/certificates/3145939194a6303872097f6161280bf69200436a9ff2fc8b472714a8cd532af4?trk=share_certificate"
    },
    {
        name: "Deep Learning Specialization - DeepLearning.AI",
        platform: "Coursera",
        link: "https://coursera.org/share/3f6d5aa6644d75a7a99479763c557ee3",
        year: "2020"
    },
    {
        name: "Version Control with Git - Atlassian",
        platform: "Coursera",
        link: "https://coursera.org/share/b3a8c88c38245e10854bfeb52dfc5b0e",
        year: "2020"
    },
    {
        name: "Using Databases with Python - University of Michigan",
        platform: "Coursera",
        link: "https://coursera.org/share/4ecad7f7becb6bbcfd7be776df94e9dd",
        year: "2021"
    },
    {
        name: "Natural Language Processing in Python",
        platform: "Datacamp",
        link: "https://www.datacamp.com/statement-of-accomplishment/track/c37f5380b493232d2feb249f9e86b39b5e99316b"
    },
    {
        name: "Deep Learning for NLP in Python",
        platform: "Datacamp",
        link: "https://www.datacamp.com/statement-of-accomplishment/track/a23bc7ac58a1a17f2fb9e2aaa682f9c22f0f7d88"
    }
]

export function renderCertifications(): string {
    const certificationContent = certifications.map(certificate => {
        return certificationsTemplate
            .replace("{name}", certificate.name)
            .replace("{platform}", certificate.platform)
            .replace("{year}", certificate.year || "N/A")
            .replace("{link}", certificate.link || "#");
    }).join("");

    return sectionTemplate
        .replace("{title}", '<i class="fa-solid fa-certificate"></i> Certifications')
        .replace("{section-class}", "certifications-grid")
        .replace("{section-id}", "certifications-container")
        .replace("{section-content}", certificationContent);
}