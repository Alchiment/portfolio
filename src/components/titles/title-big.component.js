import BaseComponent from "../../core/base-component";
import {handleErrors} from "../../core/utils";
import DOMPurify from "isomorphic-dompurify";

class TitleBigComponent extends BaseComponent {
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

            return `<h1 class="pr-title--big pr-strong--block">
                ${DOMPurify.sanitize(this.content)}
            </h1>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
            .pr-title--big {
                font-size: 40px;
                font-weight: 500;
                margin-top: 15px;
                margin-bottom: 15px;
            }
            
            .pr-title--big strong {
                color: var(--cian);
                font-family: 'Montserrat-Bold', serif;
                font-size: 64px;
                font-weight: 900;
            }
            
            .pr-strong--block strong {
                display: block;
            }
            
            @media (max-width: 768px) {
                .pr-title--big {
                    font-size: 25px;
                }
                .pr-title--big strong {
                    font-size: 49px;
                }
            }
            
            @media (max-width: 576px) {
                .pr-title--big {
                    font-size: 20px;
                }
                .pr-title--big strong {
                    font-size: 39px;
                }
            }
          </style>
        `;
    }
}

export default TitleBigComponent;