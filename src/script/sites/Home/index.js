import {BuilderButtonStyles, HomeStyles, NavContainerStyles, } from "./styles.js";
import PageLink from "./../../components/Atoms/PageLink/index.js";
import Divider from "../../components/Atoms/Divider/index.js";
import Typography from "../../components/Atoms/Typography/index.js";

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
        const title = Typography('h3', 'template_title', 'Samples').element;
        title.style.padding = '0 1rem'
        templateContainer.append(title);

        for(let [key, value] of Object.entries(NavContainerStyles)) {
            templateContainer.style[key] = value;
        }

        const templates = [
            { id: 'firstCV', text: 'Modern', href: 'first'},
            { id: 'harvardCV', text: 'Harvard', href: 'harvard'},
        ];

        templates.forEach((templ, idx)  => {
            const link = PageLink(templ.id, templ.text, templ.href, 'text', {width: '100%'});
            if(idx > 0) {
                templateContainer.append(Divider().element);
            }
            templateContainer.append(link.element);
        });


        return templateContainer;
    }

    /**
     * Create the link to the builder page
     * @returns HTMLDivElement
     */
    function builderButton () {

        const button = PageLink('cvbuilder', 'Build Your Own CV', 'builder', 'block').element;
        for(let [key, value] of Object.entries(BuilderButtonStyles)) {
            button.style[key] = value;
        }

        return button;
    }
    
    return constructor();
}
export default Home;