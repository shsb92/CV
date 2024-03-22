import CreateCustomComponent from "./../../../helper/CustomComponent.js";

import PersonalInformation from "./../PersonalInformation/Index.js";
import Skills from "./../Skills/Index.js";
import Education from "./../Education/Index.js";
import Socials from "./../Social/Index.js";

export const SideInformation = CreateCustomComponent("div", {
    class: "side-information",
});

SideInformation.append(PersonalInformation);
SideInformation.append(Skills);
SideInformation.append(Education);
SideInformation.append(Socials);
