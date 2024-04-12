import PageLink from "../components/Atoms/PageLink/index.js";
import { homeLinkStyles } from "./styles.js";

const Layout = () => {
    const layoutContainer = document.createElement('div');
    layoutContainer.style.width = 'calc(100% - 2rem)';
    layoutContainer.style.height = 'calc(100vh - 2rem)';
    layoutContainer.style.display = 'flex';
    layoutContainer.style.flexDirection = 'column';
    layoutContainer.style.flexWrap = 'wrap';
    layoutContainer.style.padding = '1rem';

    const homeLink = PageLink('home_link', '', '/', 'text', homeLinkStyles);
    layoutContainer.appendChild(homeLink.element);

    const contentContainer = document.createElement('div');
    contentContainer.id = 'content';
    contentContainer.style.width = '100%';
    contentContainer.style.height = 'calc(100% - 3rem)';
    contentContainer.style.flex = '1';
    layoutContainer.appendChild(contentContainer);

    document.querySelector('#app').append(layoutContainer);
}

export default Layout;