import {BuilderButtonStyles, HomeStyles, NavContainerStyles, } from "./styles.js";
import PageLink from "./../../components/Atoms/PageLink/index.js";

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
        container.id = 'home_container';
        for(let [key, value] of Object.entries(HomeStyles)) {
            container.style[key] = value;
        }

        // append navigation section
        container.append(templateSection());
        // append Create CV
        container.append(builderButton());


        return {
            element: container,
        }
    }

    /**
     * Create the link section for viewing templates
     * @returns HTMLDivElement
     */
    function templateSection() {
        const templateContainer = document.createElement('div');
        for(let [key, value] of Object.entries(NavContainerStyles)) {
            templateContainer.style[key] = value;
        }

        const firstLink = PageLink('firstCV', 'First CV Template', 'first', 'text');
        templateContainer.append(firstLink.element);

        const harvardLink = PageLink('harvardCV', 'Harvard Style CV Template', 'harvard', 'text');
        templateContainer.append(harvardLink.element);

        return templateContainer;
    }

    /**
     * Create the link to the builder page
     * @returns HTMLDivElement
     */
    function builderButton () {

        const button = PageLink('cvbuilder', 'Build Your Own CV', 'builder', 'text').element;
        for(let [key, value] of Object.entries(BuilderButtonStyles)) {
            button.style[key] = value;
        }

        return button;
    }
    
    return constructor();
}
export default Home;