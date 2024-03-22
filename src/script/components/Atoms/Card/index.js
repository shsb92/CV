import { CardStyles } from "./styles.js";

export const Card = (id, head_content, body_content, styles) => {
    function constructor() {
        const container = document.createElement('div');
        container.id = id ?? '';
        container.classList.add('card');

        for(let [key, value] of Object.entries(CardStyles)) {
            container.style[key] = value;
        }

        // apply head
        if(head_content) {
            const head = document.createElement('div');
            container.classList.add('card_head');
            // apply default styles
            
            head.appendChild(head_content)
            container.appendChild(head);
        }
        // apply body
        if(body_content) {
            const body = document.createElement('div');
            container.classList.add('card_body');
            // apply default styles
            
            body.appendChild(body_content)
            container.appendChild(head);
        }

        if (styles) {
            for(let [key, value] of Object.entries(styles)) {
                container.style[key] = value;
            }
        }

        return { 
            element: container,
        }
    }

    return constructor();
}