import headerTemplate from "./header.template.html?raw";
import { personalInfo } from "../../types/personalInfo.type";

export function renderHeader(): string {
    return headerTemplate
        .replace("{name}", personalInfo.name)
        .replace("{title}", personalInfo.title)
        .replace("{email}", personalInfo.email)
        .replace("{location}", personalInfo.location);
}