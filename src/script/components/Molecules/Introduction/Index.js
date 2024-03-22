import CreateCustomElement from "./../../../helper/CustomComponent.js";
import { IntroductionText } from "./../../../content.js";

export const Introduction = () => {
    const Container = CreateCustomElement("div", {
        class: "introduction"
    });
    const Headline = CreateCustomElement("h3", {
        class: "introduction-headline section-headline",
        innerHTML: "About Me",
    }); 
    const Text = CreateCustomElement("p", {
        class: "introduction-text",
        innerHTML: IntroductionText
    }); 

    Container.append(Headline, Text);

    return Container;
}