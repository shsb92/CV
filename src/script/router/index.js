import NotFound from "../sites/404/index.js";
import First from "../sites/First/index.js";
import Harvard from "../sites/Harvard/index.js";
import Home from "../sites/Home/index.js";

export const route = url => {
    document.body
    history.pushState(null, null, url);
    router();
}

export const router = async () => {
    const routes = [
        {
            path: '/',
            title: 'Home',
            view: Home
        },
        {
            path: '/first',
            title: 'First Template',
            view: First,
        },
        {
            path: '/harvard',
            title: 'Harvard Template',
            view: Harvard
        },
        {
            path: '/404',
            title: '404 - Not found',
            view: NotFound
        }
    ];


    let current_route = routes.map(route => {
        return {
            route: route,
            current_page: location.pathname === route.path,
        }
    }).find(route => route.current_page);

    if(!current_route) {
        current_route = {
            route: routes[routes.length - 1],
            current_page: true,
        }
    }

    const view = current_route.route.view();

    document.querySelector('#app').innerHTML = null;
    document.querySelector('#app').appendChild(view.element);

    document.title = current_route.route.title;
};