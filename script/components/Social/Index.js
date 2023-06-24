import { PersonalInforamtionItems } from "../../content.js";
import CreateCustomElement from "../../helper/CustomComponent.js";
import { SocialItem } from "./SocialItem.js";

export const Socials = CreateCustomElement("div", {
    class: "socials",
});

PersonalInforamtionItems.filter((item)=> { return item.type === "social" }).forEach((item) => {
    Socials.append(SocialItem(item));
});


