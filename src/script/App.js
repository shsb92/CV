import Layout from "./layout/index.js";
import { route, router } from "./router/index.js";

const App = () => {
    Layout();
    router();
    window.addEventListener('popstate', () => {
        router();
    });
    document.body.addEventListener('click', (event) => {
        if (event.target.matches("[data-link]")){
            event.preventDefault();
            route(event.target.href);
        }
    });
};

App();