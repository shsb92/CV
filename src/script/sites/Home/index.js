import {HomeStyles, LinkStyles, NavContainerStyles, TitleContainerStyles } from "./styles.js";
import { Typography } from "./../../components/Atoms/Typography/index.js";

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

        // append title section
        container.append(createTitleSection('RESUMAZING', 'create YOUR personal resume'));
        // append navigation section
        container.append(createNavSection());


        return {
            element: container,
        }
    }

    /**
     * Create the title section of the home page
     * @param {string} title 
     * @param {string} subtitle 
     * @returns HTMLDivElement
     */
    function createTitleSection (title, subtitle) {
        const titelContainer = document.createElement('div');
        for(let [key, value] of Object.entries(TitleContainerStyles)) {
            titelContainer.style[key] = value;
        }

        const titleElem = Typography('h1', 'home_title', title);
        titleElem.element.style.letterSpacing = '0.4em'
        titelContainer.append(titleElem.element);

        const subtitleElem = Typography('h4', 'home_subtitle', subtitle);
        subtitleElem.element.style.letterSpacing = '0.8em'
        titelContainer.append(subtitleElem.element);

        return titelContainer;
    }

    /**
     * Create the link section of the home page
     * @returns HTMLDivElement
     */
    function createNavSection () {
        const navContainer = document.createElement('div');
        for(let [key, value] of Object.entries(NavContainerStyles)) {
            navContainer.style[key] = value;
        }

        const firstLink = createPageLink('firstCV', 'First CV Template', 'first');
        navContainer.append(firstLink);

        const harvardLink = createPageLink('harvardCV', 'Harvard Style CV Template', 'harvard');
        navContainer.append(harvardLink);

        return navContainer;
    }

    /**
     * Create links for the home page
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