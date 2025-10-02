import sectionTemplate from '../section.template.html?raw';
import languageItemTemplate from './languages.template.html?raw';

const languages: string[] = ["Bengali", "English"];

export function renderLanguages(): string {
    return sectionTemplate
        .replace("{title}", "Languages")
        .replace("{section-class}", "languages-list")
        .replace("{section-id}", "languages-container")
        .replace("{section-content}", languages.map(lang => languageItemTemplate.replace("{language}", lang)).join(""));
}