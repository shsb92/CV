import CreateCustomElement from "./../../../helper/CustomComponent.js";

import { Education } from "./../../Molecules/Education/Index.js";
import { PersonalInformation } from "./../../Molecules/PersonalInformation/Index.js";
import { Skills } from "./../../Molecules/Skills/Index.js";
import { Socials } from "./../../Molecules/Social/Index.js";

export const SideInformation = CreateCustomElement("div", {
    class: "side-information",
});

SideInformation.append(PersonalInformation);
SideInformation.append(Skills);
SideInformation.append(Education);
SideInformation.append(Socials);
