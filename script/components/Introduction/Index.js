import CreateCustomElement from "../../helper/CustomComponent.js";
import { IntroductionText } from "../../content.js";

export const Introduction = CreateCustomElement("p", {
    class: "introduction",
    innerHTML: IntroductionText
})