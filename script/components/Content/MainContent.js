import CreateCustomElement from "../../helper/CustomComponent.js";
import { CreateJobElement } from "../JobElement/Index.js";
import { Jobs } from "../../content.js";
import { Introduction } from "../Introduction/Index.js";

export const MainContent = CreateCustomElement("div", {
    class: "main-content",
})

MainContent.append(Introduction());

const experienceTitle = CreateCustomElement("h3", {
    innerHTML: "Experience",
    class: "experience-title section-headline",
})
MainContent.append(experienceTitle);
Jobs.forEach((job) => {
    MainContent.append(CreateJobElement(job));
})