import BaseComponent from "../../core/base-component";
import {handleErrors} from "../../core/utils";
import DOMPurify from "isomorphic-dompurify";

class TitleStandardComponent extends BaseComponent {
    content = [];
    attrs = {
        content: 'content',
        color: 'color'
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
            if (!this.attributes[this.attrs.content]?.value) {
                throw `[${this.constructor.name}] You must send title through ${this.attrs.content}`;
            }
            this.content = this.attributes[this.attrs.content].value;
            const color = this.attributes[this.attrs.color]?.value || 'white';

            return `<h1 class="pr-title-standard standard--${color}">
                ${DOMPurify.sanitize(this.content)}
            </h1>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
            .pr-title-standard {
                font-size: 40px;
                font-weight: 500;
                margin-top: 15px;
                margin-bottom: 15px;
                color: var(--white);
                font-family: 'Montserrat-Bold', serif;
            }
            
            .standard--cian {
                color: var(--cian);   
            }
          </style>
        `;
    }
}

export default TitleStandardComponent;