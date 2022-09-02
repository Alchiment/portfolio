import tplNavbarList from './navbar-list.component.hbs';
import tplButtonMenuLink from '../../../templates/buttons/button-menu-link.hbs';
import BaseClass from "../../../core/base-class";

class NavbarListComponent extends BaseClass {
    listItems = null;

    constructor(container) {
        super();
        this.setRootContainer(container);
        this.setTemplate({
            template: tplNavbarList,
        });
        this.render();
    }

    renderListItems() {
        try {
            if (!this.listItems) {return}
            this.listItems.forEach((item, inx) => {
                const liElement = document.createElement('li');
                liElement.innerHTML = tplButtonMenuLink({
                    content: item.content,
                    path: item.path,
                });
                if (item.active) {
                    liElement.classList.add('pr-navbar__box-menu__item--active');
                } else {
                    liElement.classList.add('pr-navbar__box-menu__item');
                }
                this.DOMElements.containerList.appendChild(liElement);
            });
        } catch(e) {
            console.error(e);
        }
    }

    setMenuItems(items) {
        this.listItems = items;
    }
}

export default NavbarListComponent;