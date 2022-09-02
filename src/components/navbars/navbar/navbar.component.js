class NavbarComponent extends HTMLElement {
  tag = '';

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
    this.initComponent();
  }

  disconnectedCallback() {
    this.remove();
  }

  initComponent(elements) {
    this.tag = elements?.tag;
  }

  render() {
    this.shadowDOM.innerHTML = `
     ${this.templateCSS()}
     ${this.templateHTML()}
    `;
  }

  mapComponentAttributes() {
    const attributesMapping = [
      'text',
    ];
    attributesMapping.forEach(key => {
      if (!this.attributes[key]) {
        this.attributes[key] = {value: ''};
      }
    });
  }

  templateHTML() {
    return `<div class="text">Holi</div>`;
  }

  templateCSS() {
    return `
      <style>
        div {
          color: blue;
          background: red;
        }
      </style>
    `
  }
}

window.customElements.define('pr-navbar', NavbarComponent);