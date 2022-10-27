import BaseComponent from "../../core/base-component";
import DOMPurify from "isomorphic-dompurify";

class ButtonStandardLinkComponent extends BaseComponent {
    constructor() {
        super();
    }

    templateHTML() {
        const target = this.attributes?.target?.value;
        const style = this.attributes?.stl?.value || '';
        const id = this.attributes?.id?.value || new Date().getTime();
        return `
            <a href="${this.attributes?.path?.value}"
               target="${target ? target : '_self'}"
               class="pr-button pr-button--standard ${style}" id="${id}">
               <slot name="link-icon"></slot>
           </a>
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
                  margin: 4px;
                  cursor: pointer;
                  text-decoration: none;
                  font-family: 'Montserrat-Regular', serif;
                  font-size: 12px;
                  display: block;
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

export default ButtonStandardLinkComponent;