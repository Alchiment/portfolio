class BaseComponent extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
    }

    disconnectedCallback() {
        this.remove();
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateStyle()}
            ${this.templateHTML()}
        `;
    }

    mapComponentAttributes() {
        const attributesMapping = [
            'content',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        });
    }

    templateHTML() {
        return `<div>${this.constructor.name}</div>`;
    }

    templateStyle() {
        return `<style></style>`
    }
}

export default BaseComponent;