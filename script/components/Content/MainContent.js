import CreateCustomElement from "../../helper/CustomComponent.js";
import { CreateJobElement } from "../JobElement/Index.js";

export const MainContent = CreateCustomElement("div", {
    class: "main-content",
    innerHTML: "Main Content"
})


const jobs = [
    {
        title: "Webdeveloper - Infiinitt Healthcare",
        sub_title: "Web Development DoseM - Dose Management Platform",
        description: "Being part of the Development team of the DoseM Plattform developt by Infinitt Healthcare South Korea",
        tasks: [
            "Development of DIP",
            "Development of <a target='_blank' href='https://diz.med.uni-giessen.de/'>Website </a>",
        ]
    },
    {
        title: "Scientific Research Assitant - JLU",
        sub_title: "Web Development for Universital Medical Research Institution ",
        description: "Supporting the local DIC at the Justus Liebig University Giessen",
        tasks: [
            "Development of DIP",
            "Development of <a target='_blank' href='https://diz.med.uni-giessen.de/'>Website </a>",
        ]
    },
]

jobs.forEach((job) => {
    MainContent.append(CreateJobElement(job));
})