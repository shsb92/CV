import CreateCustomElement from "../../helper/CustomComponent.js";
import { Title } from "./Title.js";
import { SubTitle } from "./SubTitle.js";
import { Portrait } from "./Portrait.js";

export const Heading = CreateCustomElement("div", {
    class: "title-section"
});


const Text = CreateCustomElement("div", {
    class: "title-textbox"
});
Text.append(Title);
Text.append(SubTitle);

Heading.append(Text);
Heading.append(Portrait);