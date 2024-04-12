import { LinkStyles, blockTypeStyle, textTypeStyle } from "./styles.js";

/**
 * Create links for the home page
 * @param {string} id 
 * @param {string} text 
 * @param {string} href 
 * @returns 
 */
const PageLink = (id, text, href, type, styles) => {
    function constructor() {
        const link = document.createElement('a');
        link.id = id;
        link.innerText = text;
        link.href = href;
        link.classList.add("nav_link");
        link.dataset.link = '';

        for (let [key, value] of Object.entries(LinkStyles)) {
            link.style[key] = value;
        }

        switch(type) {
            case 'block': 
                for (let [key, value] of Object.entries(blockTypeStyle)) {
                    link.style[key] = value;
                }
                break;
            case 'text':
                for (let [key, value] of Object.entries(textTypeStyle)) {
                    link.style[key] = value;
                }
                break;
        }

        if(styles) {
            for (let [key, value] of Object.entries(styles)) {
                link.style[key] = value;
            }
        }


        return {
            element: link, 
        }
    }

    return constructor();
}

export default PageLink;