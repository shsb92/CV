import { EducationList } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";
import { EducationItem } from "./EducationItem.js";

export const Education = CreateCustomElement("div", {
    class: "education"
});

const EducationTitle = CreateCustomElement("h3", {
    class: "educations-title section-headline",
    innerHTML: "Education",
})
Education.append(EducationTitle);
EducationList.forEach((education) => {
    Education.append(EducationItem(education));
})