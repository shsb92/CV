import CreateCustomElement from "./../../../helper/CustomComponent.js";

import { MainContent } from "./MainContent.js";
import { SideInformation } from "./SideInformation.js";

export const Content = CreateCustomElement("div", {
    class: 'content-section'
})

Content.append(MainContent, SideInformation)
