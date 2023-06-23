import { PersonalInforamtionItems } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";
import { InformationItem } from "./InforamtaionItem.js";
import { SocialItem } from "./SocialItem.js";

export const PersonalInformation = CreateCustomElement("div", {
    class: "personal-information",
})

PersonalInforamtionItems.filter((item)=> { return item.type === "info" }).forEach((item) => {
    PersonalInformation.append(InformationItem(item));
});
PersonalInforamtionItems.filter((item)=> { return item.type === "social" }).forEach((item) => {
    PersonalInformation.append(SocialItem(item));
});