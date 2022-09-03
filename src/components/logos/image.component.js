import BaseComponent from "../../core/base-component";
import {handleErrors} from "../../core/utils";

class ImageComponent extends BaseComponent {
    src = '';
    alt = '';
    attrs = {
        src: 'src',
        alt: 'alt',
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
            if (!this.attributes[this.attrs.src]) {
                throw `[${this.constructor.name}] You must send path image through ${this.attrs.src} `;
            }
            this.src = this.attributes[this.attrs.src]?.value;
            this.alt = this.attributes[this.attrs.alt]?.value;
            return `<img class="pr-image" src="${this.src}" alt="${(this.alt) ? this.alt : ''}"/>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
            .pr-image {
                display: block;
                width: 100%;
            }
          </style>
        `;
    }
}

export default ImageComponent;