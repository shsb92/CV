import CreateCustomElement from "../../helper/CustomComponent.js"

export const SkillItem = (item) => {
    const ItemContainer = CreateCustomElement("div", {
        class: "skill-item",
    });

    const ItemBackgroundBox = CreateCustomElement("div", {
        class: "skill-box",
        style: ``
    });
    const ItemProgress = CreateCustomElement("div", {
        class: "skill-progress",
        style: `width: calc(${item.level * 10}% - 5px);`
    }); 
    const ItemProgressArrow = CreateCustomElement("div", {
        class: "skill-progress-arrow",
    })
    const ItemTitle = CreateCustomElement("p", {
        class: "skill-title",
        innerHTML: item.title,
    });

    ItemContainer.append(ItemBackgroundBox);
    ItemContainer.append(ItemTitle);
    ItemBackgroundBox.append(ItemProgress);
ItemProgress.append(ItemProgressArrow);

    return ItemContainer;
} 