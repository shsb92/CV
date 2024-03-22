import { PersonalInforamtionItems } from "./../../../content.js";
import CreateCustomElement from "./../../../helper/CustomComponent.js";

import { SocialItem } from "./SocialItem.js";

export const Socials = CreateCustomElement("div", {
    class: "socials",
});

const SocialsTitle = CreateCustomElement("h3", {
    class: "section-headline socials-title",
    innerHTML: "Socials"
})

Socials.append(SocialsTitle);

PersonalInforamtionItems.filter((item)=> { return item.type === "social" }).forEach((item) => {
    Socials.append(SocialItem(item));
});


