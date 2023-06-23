import { EducationList } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";
import { EducationItem } from "./EducationItem.js";

export const Education = CreateCustomElement("div", {
    class: "education"
});

EducationList.forEach((education) => {
    Education.append(EducationItem(education));
})