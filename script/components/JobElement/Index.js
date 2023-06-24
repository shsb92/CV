import CreateCustomElement from "../../helper/CustomComponent.js";

export const CreateJobElement = (job) => {
    const JobElement = CreateCustomElement("div", {
        class: "job-element",
    });
    const JobTitle = CreateCustomElement("h3", {
        class: "job-title",
        innerHTML: job.title,
    });
    const JobSubTitle = CreateCustomElement("b", {
        class: "job-subtitle",
        innerHTML: job.sub_title,
    });
    const JobDesription = CreateCustomElement("p", {
        class: "job-description",
        innerHTML: job.description,
    })
    const TaskList = CreateCustomElement("ul", {
        class: "job-tasklist",
    });
    

    job.tasks.forEach((task) => {
        const TaskItem = CreateCustomElement("li", {
            class: "job-task-item",
            innerHTML: task,
        });
        TaskList.append(TaskItem);
    });
    
    JobElement.append(JobTitle, JobSubTitle, JobDesription, TaskList);
    return JobElement;
}