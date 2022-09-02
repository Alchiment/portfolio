import BaseComponent from "../../../core/base-component";

class HorizontalMenuComponent extends BaseComponent {
    menuItems = [];
    attrs = {
        menuItems: 'menuitems'
    };

    constructor() {
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            super.connectedCallback();
        }, 0);
    }

    templateHTML() {
        try {
            if (!this.attributes.menuitems) {
                throw `[${this.constructor.name}] You must sent items menu through ${this.attrs.menuItems} `;
            }
            this.menuItems = JSON.parse(this.attributes[this.attrs.menuItems].value) || [];
            let liElements = '';
            for (let item of this.menuItems) {
                liElements += `<li class="pr-navbar__box-menu__item${(item.active) ? '--active': ''}">
                        <a href="${item.path || '#'}">${item.content}</a>
                    </li>`;
            }
            return `<ul class="pr-navbar__box-menu">
                ${liElements}
            </ul>`;
        } catch(e) {
            console.error(e);
        }
    }

    templateStyle() {
        return `
          <style>
            .pr-navbar__box-menu {
                display: flex;
                align-content: center;
            }
            .pr-navbar__box-menu li {
                text-decoration: none;
                list-style: none;
            }
            
            .pr-navbar__box-menu li a {
                text-decoration: none;
                display: block;
                padding: 10px 20px;
            }
            .pr-navbar__box-menu--horizontal {
                display: flex;
                align-content: center;
            }
            .pr-navbar__box-menu__item {
                padding: 0 5px;
            }
            .pr-navbar__box-menu__item a {
                color: #fff;
            }
            .pr-navbar__box-menu__item a :hover {
                background: #00FFFF;
                color: #1D1C24;
                border-radius: 5px;
                transition: 0.2s all ease-in-out;
            }
            .pr-navbar__box-menu__item--active a {
              background: #00FFFF;
              color: #1D1C24;
              border-radius: 5px;
            }
          </style>
        `;
    }
}

export default HorizontalMenuComponent;