import CreateCustomElement from "../../../helper/CustomComponent.js";

export const SocialItem = (item) => {
    const ItemWrapper = CreateCustomElement("a", {
    class: "social-item",
        target: "_blank",
        href: item.text
    });
    const Icon = CreateCustomElement("img", {
        class: "social-icon",
        src: item.icon,
        height: "30"
    });

    ItemWrapper.append(Icon);
    return ItemWrapper;
}