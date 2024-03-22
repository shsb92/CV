import { Card } from "./../../components/Atoms/Card/index.js";
import { NotFoundStyles } from "./styles.js";

const NotFound = () => {

    function constructor() {
        const container = document.createElement('div');
        container.id = '404';

        for (let [key, value] of Object.entries(NotFoundStyles)) {
            container.style[key] = value;
        }

        const card = Card('404-content', null, null, {backgroundColor: 'lightGray', color: 'red'}).element;
        card.textContent = '404 - Page not found!';


        container.appendChild(card);

        return {
            element: container
        }
    }


    return constructor();
}

export default NotFound;