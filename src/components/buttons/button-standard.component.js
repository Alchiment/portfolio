import BaseComponent from "../../core/base-component";
import DOMPurify from "isomorphic-dompurify";

class ButtonStandardComponent extends BaseComponent {
    constructor() {
        super();
    }

    templateHTML() {
        const style = this.attributes?.stl?.value || '';
        const id = this.attributes?.id?.value || new Date().getTime();
        return `
            <button class="pr-button pr-button--standard ${style}" id="${id}">
                ${DOMPurify.sanitize(this.attributes?.content.value)}
            </button>
        `;
    }

    templateStyle() {
        return `
            <style>
                .pr-button {
                  border-radius: 5px;
                  color: #1D1C24;
                  background-color: #fff;
                  border: 1px solid #fff;
                  padding: 10px 14px;
                  margin: 5px;
                  cursor: pointer;
                  font-family: 'Montserrat-Regular', serif;
                }
                .pr-button--block {
                  width: 100%;
                }
                .pr-button:hover {
                  color: #fff;
                  border: 1px solid #fff;
                  background-color: #1D1C24;
                  transition: 0.2s all ease-in-out;
                }
                .pr-button--standard {
                   color: #1D1C24;
                   background-color: #00FFFF;
                   border: 1px solid #00FFFF;
                }
                .pr-button--standard:hover {
                   color: #00FFFF;
                   border: 1px solid #00FFFF;
                   background-color: #1D1C24;
                   transition: 0.2s all ease-in-out;
                 }
             </style>
        `;
    }
}

export default ButtonStandardComponent;