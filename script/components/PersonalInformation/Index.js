import { PersonalInforamtionItems } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";
import { InformationItem } from "./InforamtaionItem.js";

export const PersonalInformation = CreateCustomElement("div", {
    class: "personal-information",
})

PersonalInforamtionItems.filter((item)=> { return item.type === "info" }).forEach((item) => {
    PersonalInformation.append(InformationItem(item));
});