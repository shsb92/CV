import { SkillList } from "./../../../content.js";
import CreateCustomElement from "./../../../helper/CustomComponent.js";
import { SkillItem } from "./SkillItem.js";

export const Skills = CreateCustomElement("div", {
    class: "skills",
});

const Title = CreateCustomElement("h5", {
    class: "skills-title section-headline",
    innerHTML: "Development",
});

Skills.append(Title);

SkillList.forEach((skill) => {
    Skills.append(SkillItem(skill));
});