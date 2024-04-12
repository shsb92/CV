import { Heading } from "./../../components/Organisms/Heading/Index.js";
import { Content } from "./../../components/Organisms/Content/Index.js";
import { FirstContainerStyles, FirstStyles } from "./styles.js";


const First = () => {
    
    function constructor() {
        const container = document.createElement('div');
        container.id = 'first_container' 
        for(let [key, value] of Object.entries(FirstContainerStyles)) {
            container.style[key] = value;
        }

        const head = Heading;
        container.appendChild(head);

        const content = Content;
        container.appendChild(content);

        addStyles(container);

        return {
            element: container
        }
    }

    /**
     * @param {HTMLDivElement} container 
     * @returns 
     */
    function addStyles (container) {
        if(document.querySelector('.first_styles')) return;

        const styleContainer = document.createElement('style');
        styleContainer.classList.add('first_styles');
        styleContainer.textContent = FirstStyles;

        container.appendChild(styleContainer);
    }
    return constructor();
}



export default First;