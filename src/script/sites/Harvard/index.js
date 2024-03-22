import { Heading } from "./../../components/Organisms/Heading/Index.js";
import { Content } from "./../../components/Organisms/Content/Index.js";
const Harvard = () => {

    function constructor() {
        const container = document.createElement('div');
        container.id = 'first_container' 
        const head = Heading;
        const content = Content;

        container.appendChild(head);
        container.appendChild(content);

        return {
            element: container,
        }
    }


    return constructor();
}

export default Harvard;