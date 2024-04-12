import { DividerStyles } from "./styles.js";

/**
 * Returns divider element
 * @param {string} color 
 * @returns 
 */
const Divider = (color) => {
    function constructor () {
        const element = document.createElement('div');

        for(let [key, value] of Object.entries(DividerStyles)) {
            element.style[key] = value;
        }
        if(color) {
            element.style.borderColor = color;
        }
        return {
            element,
        }
    }

    return constructor();
}

export default Divider;