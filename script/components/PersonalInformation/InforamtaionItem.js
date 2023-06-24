import CreateCustomElement from "../../helper/CustomComponent.js";

export const InformationItem = (item) => {
    const ItemWrapper = CreateCustomElement("div", {
        class: "info-item"
    });
    const Icon = CreateCustomElement("object", {
        class: "info-icon",
        type: "image/svg+xml",
        data: item.icon,
    });
    // Get the SVG elements you want to change the color
    const targetElements = Icon.querySelectorAll("g"); // Adjust the selector as needed

    targetElements.forEach((element) => {
        element.setAttribute("fill", "red"); // Replace "red" with the desired color
    });


    const Text = CreateCustomElement("span", {
        class: "info-text",
        innerHTML: item.text,
    });

    ItemWrapper.append(Icon);
    ItemWrapper.append(Text);
    return ItemWrapper;
}