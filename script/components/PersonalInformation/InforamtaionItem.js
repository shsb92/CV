import CreateCustomElement from "../../helper/CustomComponent.js";

export const InformationItem = (item) => {
    const ItemWrapper = CreateCustomElement("div", {
        class: "info-item"
    });
    const Icon = CreateCustomElement("img", {
        class: "info-icon",
        src: item.icon,
        height: "20"
    });
    
    const Text = CreateCustomElement("span", {
        class: "info-text",
        innerHTML: item.text,
    });

    ItemWrapper.append(Icon);
    ItemWrapper.append(Text);
    return ItemWrapper;
}