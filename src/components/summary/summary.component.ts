import { personalInfo } from '../../types/personalInfo.type';
import summaryTemplate from './summary.template.html?raw';

export function renderSummary(): string {
    return summaryTemplate.replace("{content}", personalInfo.summary);
}