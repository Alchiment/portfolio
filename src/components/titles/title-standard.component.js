import BaseComponent from "../../core/base-component";
import {handleErrors} from "../../core/utils";

class TitleStandardComponent extends BaseComponent {
    content = [];
    attrs = {
        content: 'content'
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

            return `<h1 class="pr-title-standard--cian">
                ${this.content}
            </h1>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
            h1.pr-title-standard--cian {
                font-size: 40px;
                font-weight: 500;
                margin-top: 15px;
                margin-bottom: 15px;
                color: var(--cian);
                font-family: 'Montserrat-Bold', serif;
            }
          </style>
        `;
    }
}

export default TitleStandardComponent;