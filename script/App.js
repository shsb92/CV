import CreateCustomElement from "./helper/CustomComponent.js";
import { Heading } from "./components/Heading/Index.js";
import { Content } from "./components/Content/Index.js";

export const App = CreateCustomElement("div", {
    class: "app"
});


App.append(Heading);
App.append(Content);
