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
import FeatureItemComponent from "../../components/feature-item/feature-item.component";


const menu = [
    {
        id: 1,
        content: 'Home',
        active: true
    },
    {
        id: 2,
        content: 'Proyectos',
        path: '/'
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
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    body.innerHTML = template({
        menuItems: JSON.stringify(menu)
    });
});

window.customElements.define('pr-button-standard', ButtonStandardComponent);
window.customElements.define('pr-horizontal-menu', HorizontalMenuComponent);
window.customElements.define('pr-image', ImageComponent);
window.customElements.define('pr-title-big', TitleBigComponent);
window.customElements.define('pr-title-standard', TitleStandardComponent);
window.customElements.define('pr-paragraph-standard', ParagraphStandardComponent);
window.customElements.define('pr-box-picture-info', BoxPictureInfoComponent);
window.customElements.define('pr-feature-item', FeatureItemComponent);
