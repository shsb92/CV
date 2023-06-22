import CreateCustomElement from "../../helper/CustomComponent.js";

export const MainContent = CreateCustomElement("div", {
    class: "main-content",
    innerHTML: "Main Content"
})


// var jobs = [
//     {
//         title: "",
//         sub_title: "",
//         desription: "",
//         tasks: [
//             "",
//             "",
//         ]
//     }
// ]

// jobs.forEach((job) => {
//     MainContent.append(JobElement(job));
// })