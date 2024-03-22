function CreateCustomElement(tag, attributes) {
    var element = document.createElement(tag);

    for (var attribute in attributes) {
        if (attribute === "className") {
            if (Array.isArray(attributes[attribute])) {
                element.className = attributes[attribute].join(" ");
            } else {
                element.className = attributes[attribute];
            }
        } else if (attribute === "innerHTML") {
            element.innerHTML = attributes[attribute];
        } else if (attribute.slice(0, 2) === "on") {
            element.addEventListener(attribute.slice(2), attributes[attribute]);
        } else {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    return element;
}

export default CreateCustomElement;
