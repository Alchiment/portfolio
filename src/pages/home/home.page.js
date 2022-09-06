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
});

window.customElements.define('pr-button-standard', ButtonStandardComponent);
window.customElements.define('pr-button-link', ButtonLinkComponent);
window.customElements.define('pr-horizontal-menu', HorizontalMenuComponent);
window.customElements.define('pr-image', ImageComponent);
window.customElements.define('pr-title-big', TitleBigComponent);
window.customElements.define('pr-title-standard', TitleStandardComponent);
window.customElements.define('pr-paragraph-standard', ParagraphStandardComponent);
window.customElements.define('pr-paragraph-big', ParagraphBigComponent);
window.customElements.define('pr-box-picture-info', BoxPictureInfoComponent);
window.customElements.define('pr-feature-item', FeatureItemComponent);
window.customElements.define('pr-feature-list', FeatureListComponent);
