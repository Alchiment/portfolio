import template from './home.page.hbs';
import '../../core/scss/root.scss';
// Custom components
import ButtonStandardComponent from "../../components/buttons/button-standard.component";
import HorizontalMenuComponent from "../../components/navbars/navbar/horizontal-menu.component";
import ImageComponent from "../../components/logos/image.component";
import TitleBigComponent from "../../components/titles/title-big.component";
import ParagraphStandardComponent from "../../components/paragraphs/paragraph-standard.component";
import TitleStandardComponent from "../../components/titles/title-standard.component";
import BoxPictureInfoComponent from "../../components/boxes/box-picture-info.component";
import FeatureItemComponent from "../../components/features/feature-item.component";
import FeatureListComponent from "../../components/features/feature-list.component";
import ParagraphBigComponent from "../../components/paragraphs/paragraph-big.component";
import ButtonLinkComponent from "../../components/buttons/button-link.component";
import VerticalMenuComponent from "../../components/navbars/navbar/vertical-menu.component";


const menu = [
    {
        id: 1,
        content: 'Home',
        path: '#section-welcome',
    },
    {
        id: 2,
        content: 'Proyectos',
        path: '#section-projects'
    },
    {
        id: 3,
        content: 'Tecnologías',
        path: '#section-tech'
    },
    {
        id: 4,
        content: 'Contacto',
        path: '#section-contact'
    },
];
window.customElements.define('pr-button-standard', ButtonStandardComponent);
window.customElements.define('pr-button-link', ButtonLinkComponent);
window.customElements.define('pr-horizontal-menu', HorizontalMenuComponent);
window.customElements.define('pr-vertical-menu', VerticalMenuComponent);
window.customElements.define('pr-image', ImageComponent);
window.customElements.define('pr-title-big', TitleBigComponent);
window.customElements.define('pr-title-standard', TitleStandardComponent);
window.customElements.define('pr-paragraph-standard', ParagraphStandardComponent);
window.customElements.define('pr-paragraph-big', ParagraphBigComponent);
window.customElements.define('pr-box-picture-info', BoxPictureInfoComponent);
window.customElements.define('pr-feature-item', FeatureItemComponent);
window.customElements.define('pr-feature-list', FeatureListComponent);


const frameworksFront = ['Angular', 'AngularJS', 'VueJS', 'ReactJS', 'jQuery', 'UnderscoreJS', 'BackboneJS'];
const frameworksBack = ['Laravel', 'ExpressJS', 'NextJS'];
const cms = ['Wordpress'];
const frameworksDB = ['MySQL', 'PostgreSQL', 'Firebase', 'MondoDB'];
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    body.innerHTML = template({
        menuItems: JSON.stringify(menu),
        itemFrameworksFront: JSON.stringify(frameworksFront),
        itemFrameworksBack: JSON.stringify(frameworksBack),
        itemFrameworksDB: JSON.stringify(frameworksDB),
        itemCms: JSON.stringify(cms),
    });
    window.onresize = function() {
        showOrHideMenu();
    }
    document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
        classStickyMenu();
        classActiveMenu();
    });
    showOrHideMenu();
    openCloseListenersMenu();
    actionsMobileMenu();
});

function actionsMobileMenu() {
    const shadowDom = document.querySelector('pr-vertical-menu').shadowRoot;
    setTimeout(() => {
        console.log('click', shadowDom.querySelector('.pr-navbar__box-menu__item'));
        const items = shadowDom.querySelectorAll('.pr-navbar__box-menu__item')

        items.forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelector('.menu--close').click();
                console.log('click');
            });
        })
    }, 2000)
}

function openCloseListenersMenu() {
    document.querySelector('.menu--open').addEventListener('click', () => {
        document.querySelector('.pr-sidebar_menu').classList.add('sidebar--open');
    });
    const btnCloseMenu = document.querySelector('.menu--close');
    btnCloseMenu.addEventListener('click', () => {
        document.querySelector('.pr-sidebar_menu').classList.remove('sidebar--open');
    });
}

function showOrHideMenu() {
    const menuElem = document.querySelector('pr-horizontal-menu');
    const menuMobileElem = document.querySelector('pr-vertical-menu');
    const buttonMenu = document.querySelector('.menu--open');
    if (window.outerWidth < 768) {
        menuElem.classList.add('d-none');
        menuMobileElem.classList.remove('d-none');
        buttonMenu.classList.remove('d-none');
    } else {
        menuElem.classList.remove('d-none');
        menuMobileElem.classList.add('d-none');
        buttonMenu.classList.add('d-none');
    }
}

function classStickyMenu() {
    const navbar = document.querySelector('.pr-navbar--fixed');
    const topScrollPx = document.documentElement.scrollTop;
    if (topScrollPx > navbar.clientHeight) {
        document.querySelector('.pr-navbar--fixed').classList.add('navbar--sticky');
    } else {
        document.querySelector('.pr-navbar--fixed').classList.remove('navbar--sticky');
    }
}

function classActiveMenu() {
    const headings = document.querySelectorAll('[id^="section-"]');
    headings.forEach(element => {
        const rect = element.getBoundingClientRect();
        // top position is affecting by negative padding header (-100px).
        if(rect.top > -100 && rect.top < 300) {
            const location = window.location.toString().split('#')[0];
            history.replaceState(null, null, location + '#' + element.getAttribute('id'));
            toggleClassActiveItem();
        }
    });
}

function toggleClassActiveItem() {
    // Getting hash section
    const url = window.location.href;
    const hashPosition = url.indexOf('#');
    const lengthURL = url.length;
    // Getting ID section name
    const section = url.substring(hashPosition, lengthURL);
    const shadowDoms = document.querySelectorAll('pr-horizontal-menu, pr-vertical-menu');
    shadowDoms?.forEach((dom) => {
        const shadowDomNav = dom.shadowRoot
        // Changing only visible menu
        if (!dom.classList.contains('d-none')) {
            // Getting all list items
            const elementsList = shadowDomNav?.querySelectorAll('li');
            elementsList?.forEach((element) => {
                // Remove all active items
                element.classList.remove('pr-navbar__box-menu__item--active');
            });
            // Find items by href
            const elementBySection = shadowDomNav.querySelector(`[href="${section}"]`);
            // Adding the class active
            elementBySection?.parentElement?.classList?.add('pr-navbar__box-menu__item--active');
        }
    })
}

