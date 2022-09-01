// import templateHbs from "../components/navbar/navbar-list/navbar-list.component.hbs";

class BaseClass {
    DOMElements = {};
    rootContainer = null;
    template = (params) => '';
    templateParams = {};

    render() {
        try {
            if (!this.rootContainer) {
                throw `[${this.constructor.name}] You must indicate the rootContainer element`;
            }
            this.rootContainer.innerHTML = this.template(this.templateParams);
        } catch(e) {
            console.error(e);
        }
    }

    setDOMElement(elements) {
        try {
            console.log('this.rootContainer', this.rootContainer);
            if (!(this.rootContainer instanceof HTMLElement)) {
                throw `[${this.constructor.name}] You must render HTML template before setting DOM elements`;
            }
            this.DOMElements = elements;
        } catch(e) {
            console.error(e);
        }
    }

    setRootContainer(rootContainer) {
        try {
            if (!(rootContainer instanceof HTMLElement)) {
                throw `[${this.constructor.name}] Container is not a HTMLElement`;
            }
            this.rootContainer = rootContainer;
        } catch(e) {
            console.error(e);
        }
    }

    setTemplate({template, params = null}) {
        try {
            if (typeof template !== 'function') {
                throw `[${this.constructor.name}] Template should be a handlebar instance`;
            }
            this.template = template;
            if (params) {
                this.templateParams = params;
            }
        } catch(e) {
            console.error(e);
        }
    }
}

export default BaseClass;