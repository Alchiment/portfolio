import {handleErrors} from "../../core/utils";
import BaseComponent from "../../core/base-component";

class FeatureItemComponent extends BaseComponent {
    content = {
        title: '',
        subtitle: '',
    };
    attrs = {
        contentTitle: 'title',
        contentSubTitle: 'subtitle',
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
            this.content.title = this.attributes[this.attrs.contentTitle]?.value;
            this.content.subtitle = this.attributes[this.attrs.contentSubTitle]?.value;

            if(!this.content.title) {
                handleErrors(`[${this.constructor.name}] You must send title through ${this.attrs.contentTitle} `);
                return;
            }
            if(!this.content.subtitle) {
                handleErrors(`[${this.constructor.name}] You must send subtitle through ${this.attrs.contentSubTitle} `);
                return;
            }

            return `<div class="pr-feature">
                        <span class="pr-feature__subtitle">${this.content.subtitle}</span>
                        <p class="pr-feature__title">${this.content.title}</p>
                    </div>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
            .pr-feature {
                padding: 10px 5px;
            }
            .pr-feature__title {
                font-size: 24px;
                line-height: 1;
                margin: 0;
                padding: 0
            }
            .pr-feature__subtitle {
                color: var(--cian);
                font-weight: 500;
                font-family: 'Montserrat-Regular', serif;
            }
            .pr-feature__subtitle strong {
                font-weight: 900;
                font-family: 'Montserrat-Bold', serif;
            }
          </style>
        `;
    }
}

export default FeatureItemComponent;