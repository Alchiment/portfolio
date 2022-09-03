import BaseComponent from "../../core/base-component";

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
                throw `[${this.constructor.name}] You must sent title through ${this.attrs.content}`;
            }
            this.content = this.attributes[this.attrs.content].value;

            return `<h1 class="pr-title--big pr-strong--block">
                ${this.content}
            </h1>`;
        } catch(e) {
            console.error(e);
        }
    }

    templateStyle() {
        return `
          <style>
            h1.pr-title--big {
                font-size: 40px;
                font-weight: 500;
                margin-top: 15px;
                margin-bottom: 15px;
            }
            
            h1.pr-title--big strong {
                color: var(--cian);
                font-family: 'Montserrat-Bold', serif;
                font-size: 64px;
                font-weight: 900;
            }
            
            .pr-strong--block strong {
                display: block;
            }
          </style>
        `;
    }
}

export default TitleBigComponent;