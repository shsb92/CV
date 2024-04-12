import PageLink from "../../components/Atoms/PageLink/index.js";
import { Card } from "./../../components/Atoms/Card/index.js";
import { NotFoundStyles, NotFoundCardStyles } from "./styles.js";

const NotFound = () => {

    function constructor() {
        const container = document.createElement('div');
        container.id = '404';

        for (let [key, value] of Object.entries(NotFoundStyles)) {
            container.style[key] = value;
        }

        const card = Card('404-content', null, null, {backgroundColor: 'lightGray', color: 'black'}).element;
        card.textContent = '404 - Page not found!';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        
        const homeButton = PageLink('home_btn', 'Home Page', '/').element;
        homeButton.style.width = 'fit-content';
        homeButton.style.marginTop = '1em';
        homeButton.style.backgroundColor = 'darkGray';
        homeButton.style.color = 'white';
        card.appendChild(homeButton);

        for (let [key, value] of Object.entries(NotFoundCardStyles)) {
            card.style[key] = value;
        }

        container.appendChild(card);

        return {
            element: container
        }
    }



    return constructor();
}

export default NotFound;