import CreateCustomElement from "../../helper/CustomComponent.js"

export const EducationItem = (item) => {
    const EducationContainer = CreateCustomElement("div", {
        class: "education-item"
    });
    const Title = CreateCustomElement("p", {
        class: "education-title",
        innerHTML: item.title
    });
    const University = CreateCustomElement("p", {
        class: "education-univ",
        innerHTML: item.university
    });
    const Duration = CreateCustomElement("p", {
        class: "education-duration",
        innerHTML: item.duration
    });

    EducationContainer.append(Title, University, Duration)

    return EducationContainer; 
}