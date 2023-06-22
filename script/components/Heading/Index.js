import CreateCustomElement from "../../helper/CustomComponent.js";
import { Title } from "./Title.js";
import { SubTitle } from "./SubTitle.js";

export const Heading = CreateCustomElement("div", {
    class: "title-section"
});

Heading.append(Title);
Heading.append(SubTitle);
