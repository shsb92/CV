import { PersonalInforamtionItems } from "./../../../content.js";
import CreateCustomElement from "./../../../helper/CustomComponent.js";

export const Title = CreateCustomElement("h1", {
    class: "title",
    innerHTML: PersonalInforamtionItems.filter((item) => { return item.type === "title"})[0]?.text
})