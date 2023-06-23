import CreateCustomElement from "../../helper/CustomComponent.js";
import { PersonalInformation } from "../PersonalInformation/Index.js";
import { Skills } from "../Skills/Index.js";

export const SideInformation = CreateCustomElement("div", {
    class: "side-information",
});

SideInformation.append(PersonalInformation);
SideInformation.append(Skills);