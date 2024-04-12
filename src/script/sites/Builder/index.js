const Builder = () => {

    function constructor() {
        const container = document.createElement('div');
        container.id = 'build_container';
        container.textContent = 'Builder View'
        return {
            element: container,
        }
    }


    return constructor();
}

export default Builder;