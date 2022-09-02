import template from './home.page.hbs';
import tplBigTitle from '../../templates/titles/big-title.hbs'
import tplHomeWelcomeSection from './sections/home-welcome.section.hbs';
import NavbarListComponent from "../../components/navbars/navbar-list/navbar-list.component";
import NavbarComponent from "../../components/navbars/navbar/navbar.component";
import '../../core/scss/root.scss';
import SectionLeftRightComponent from "../../components/sections/section-left-right.component";
import ButtonStandard from "../../components/buttons/button-standard";


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
    const navbarListComponent = new NavbarListComponent(document.querySelector('.pr-cls-navbar'));
    navbarListComponent.setMenuItems(menu);
    // Setting up DOM elements after render .hbs
    navbarListComponent.setDOMElement({
        containerList: document.querySelector('.pr-navbar__box-menu--horizontal'),
    })
    navbarListComponent.renderListItems();
}

const renderWelcomeSection = () => {
    new SectionLeftRightComponent(document.querySelector('.pr-welcome'), {
        // sectionLeft: tplBigTitle({title: 'Hola, <strong>Soy Richard</strong> Freelance web & UI Developer'}),
        sectionLeft: tplHomeWelcomeSection(),
        sectionRight: 'right'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Rendering page template
    const body = document.querySelector('body');
    body.innerHTML = template();
    renderHeaderSection();
    renderWelcomeSection();
});

const btn = window.customElements.define('pr-button-standard', ButtonStandard);
