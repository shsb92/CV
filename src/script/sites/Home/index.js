import {HomeStyles, LinkStyles } from "./styles.js";

/**
 * Home View file
 * 
 * @returns function to construct the View
 */
const Home = () => {

    /**
     * construct home view
     */
    function constructor () {
        const container = document.createElement('div');
        container.id = 'container';
        for(let [key, value] of Object.entries(HomeStyles)) {
            container.style[key] = value;
        }

        const firstLink = createPageLink('firstCV', 'First CV Template', 'first');
        container.append(firstLink);

        const harvardLink = createPageLink('harvardCV', 'Harvard Style CV Template', 'harvard');
        container.append(harvardLink);

        return {
            element: container,
        }
    }

    /**
     * Create Links for the Home Page
     * @param {string} id 
     * @param {string} text 
     * @param {string} href 
     * @returns 
     */
    function createPageLink (id, text, href) {
        const link = document.createElement('a');
        link.id = id;
        link.innerText = text;
        link.href = href;
        link.classList.add("nav_link");
        link.dataset.link = '';

        for(let [key, value] of Object.entries(LinkStyles)) {
            link.style[key] = value;
        }

        return link;
    }
    
    return constructor();
}
export default Home;