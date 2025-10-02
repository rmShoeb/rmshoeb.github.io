import sectionTemplate from "../section.template.html?raw";
import platformsTemplate from "./platforms.template.html?raw";
import { PlatformProfile } from "../../types/platformProfile.type";

const platforms: PlatformProfile[] = [
    {
        name: "LinkedIn",
        username: "",
        url: "https://www.linkedin.com/in/rmshoeb",
        icon: "fa-brands fa-linkedin"
    },
    {
        name: "GitHub",
        username: "",
        url: "https://github.com/rmshoeb",
        icon: "fa-brands fa-github"
    },
    {
        name: "HackerRank",
        username: "",
        url: "https://hackerrank.com/rmshoeb",
        icon: "fa-brands fa-hackerrank"
    },
    {
        name: "Kaggle",
        username: "",
        url: "https://www.kaggle.com/riyadmorshedshoeb",
        icon: "fa-brands fa-kaggle"
    },
    {
        name: "LeetCode",
        username: "",
        url: "https://leetcode.com/rmshoeb"
    },
    {
        name: "CodeChef",
        username: "",
        url: "https://www.codechef.com/users/rmshoeb",
    },
    {
        name: "Codeforces",
        username: "",
        url: "https://codeforces.com/profile/rmShoeb",
    }
]

export function renderPlatforms(): string {
    const platformContent = platforms.map(platform => {
        return platformsTemplate
            .replace("{url}", platform.url)
            .replace("{icon}", platform.icon || "fa-solid fa-user")
            .replace("{name}", platform.name)
            .replace("{username}", platform.username);
    }).join("");

    return sectionTemplate
        .replace("{title}", "Platforms")
        .replace("{section-class}", "platforms-list")
        .replace("{section-id}", "platforms-container")
        .replace("{section-content}", platformContent);
}