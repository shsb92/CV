import { PersonalInforamtionItems } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";

export const SubTitle = CreateCustomElement("b", {
    class: "sub-title",
    innerHTML: PersonalInforamtionItems.filter((item) => { return item.type === "sub_title"})[0]?.text,
})