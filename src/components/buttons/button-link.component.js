import BaseComponent from "../../core/base-component";

class ButtonLinkComponent extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            super.connectedCallback();
        }, 0);
    }

    templateHTML() {
        const target = this.attributes?.target?.value;
        return `
            <a href="${this.attributes?.path?.value}"
               target="${target ? target : '_self'}"
               class="pr-button--link">
               <slot name="link-icon"></slot>
           </a>
        `;
    }

    templateStyle() {
        return `
            <style>
                .pr-button--link {
                   color: var(--white);
                   text-decoration: none;
                   transition: 0.2s all ease-in-out;
                }
                .pr-button--link:hover {
                   color: #00FFFF;
                 }
             </style>
        `;
    }
}

export default ButtonLinkComponent;