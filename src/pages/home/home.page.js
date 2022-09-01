import template from './home.page.hbs';
import NavbarListComponent from "../../components/navbar/navbar-list/navbar-list.component";
import '../root.scss';
const renderHeaderSection = () => {
    const menu = [
        {
            id: 1,
            content: 'Home',
            active: true
        },
        {
            id: 2,
            content: 'Proyectos'
        },
        {
            id: 3,
            content: 'Tecnologías'
        },
        {
            id: 4,
            content: 'Contacto'
        },
    ];
    const navbarListComponent = new NavbarListComponent(document.querySelector('.pr-navbar'));
    navbarListComponent.setMenuItems(menu);
    // Setting up DOM elements after render .hbs
    navbarListComponent.setDOMElement({
        containerList: document.querySelector('.pr-navbar__box-menu--horizontal'),
    })
    navbarListComponent.renderListItems();
}

document.addEventListener("DOMContentLoaded", function () {
    // Rendering page template
    const body = document.querySelector('body');
    body.innerHTML = template();
    renderHeaderSection();
});