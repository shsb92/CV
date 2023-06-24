import CreateCustomElement from "../../helper/CustomComponent.js";
import { Education } from "../Education/Index.js";
import { PersonalInformation } from "../PersonalInformation/Index.js";
import { Skills } from "../Skills/Index.js";
import { Socials } from "../Social/Index.js";

export const SideInformation = CreateCustomElement("div", {
    class: "side-information",
});

SideInformation.append(PersonalInformation);
SideInformation.append(Skills);
SideInformation.append(Education);
SideInformation.append(Socials);
