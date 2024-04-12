/**
 * Create Text element by type
 * @param {'p' | 'b' | 'h1' | 'h2'| 'h3'| 'h4'| 'h5'} type 
 * @param {string} id 
 * @param {string} text 
 * @returns 
 */
const Typography = (type, id, text) => {
    function constructor () {
        const element = document.createElement(type);
        element.id = id;
        element.textContent = text;

        return {
            element,
        }
    }


    return constructor();
}
export default Typography;