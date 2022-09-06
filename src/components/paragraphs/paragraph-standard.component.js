import BaseComponent from "../../core/base-component";
import {handleErrors} from "../../core/utils";

class ParagraphStandardComponent extends BaseComponent {
  content = '';
  attrs = {
    content: 'content',
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
      if (!this.attributes[this.attrs.content]) {
        throw `[${this.constructor.name}] You must send the text through ${this.attrs.content} `;
      }
      this.content = this.attributes[this.attrs.content]?.value;
      return `
        <p>
            ${this.content}
        </p>
      `;
    } catch(e) {
      handleErrors(e);
    }
  }

  templateStyle() {
    return `
          <style>
          </style>
        `;
  }
}

export default ParagraphStandardComponent;