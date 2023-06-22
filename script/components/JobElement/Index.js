import CreateCustomElement from "../../helper/CustomComponent.js";

export function CreateJobElement (job) {
    const JobElement = CreateCustomElement("div", {

    });
    const JobTitle = CreateCustomElement("h3", {
        innerHTML: job.title,
    });
    const JobSubTitle = CreateCustomElement("b", {
        innerHTML: job.sub_title,
    });
    const JobDesription = CreateCustomElement("p", {
        innerHTML: job.description,
    })
    const TaskList = CreateCustomElement("ul", {});
    
    for (let i = 0; i < job.tasks.length; i++) {
        let task = job.tasks[i];
        const TaskItem = CreateCustomElement("li", {
            innerHTML: task,
        });

        TaskList.append(TaskItem);
    }
    JobElement.append(JobTitle, JobSubTitle, JobDesription, TaskList);
    return JobElement;
}