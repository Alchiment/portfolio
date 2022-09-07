import {handleErrors} from "../../core/utils";
import BaseComponent from "../../core/base-component";
import DOMPurify from "isomorphic-dompurify";

class FeatureListComponent extends BaseComponent {
    content = {
        title: '',
        items: [],
    };
    attrs = {
        contentTitle: 'title',
        contentItems: 'items',
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

            if(!this.content.title) {
                handleErrors(`[${this.constructor.name}] You must send title through ${this.attrs.contentTitle} `);
                return;
            }
            if(!this.attributes[this.attrs.contentItems]?.value) {
                handleErrors(`[${this.constructor.name}] You must send items through ${this.attrs.contentItems} `);
                return;
            }

            this.content.items = JSON.parse(this.attributes[this.attrs.contentItems]?.value);

            let tplItems = '<ul>';
            this.content.items.forEach((item) => {
                tplItems += `<li>${item}</li>`;
            });
            tplItems += `</ul>`;
            return `<div class="pr-feature">
                        <h2 class="pr-feature__title">${DOMPurify.sanitize(this.content.title)}</h2>
                        <div class="pr-feature__list_items">
                            ${DOMPurify.sanitize(tplItems)}
                        </div>
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
            .pr-feature__list_items {
                color: var(--cian);
            }
            .pr-feature__list_items ul {
                columns: 2
            }
          </style>
        `;
    }
}

export default FeatureListComponent;