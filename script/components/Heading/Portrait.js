import CreateCustomElement from "../../helper/CustomComponent.js";

export const Portrait = CreateCustomElement("div", {
    class: "title-portrait",
    style: `background-image: url(/assets/images/portrait.png)`,
});