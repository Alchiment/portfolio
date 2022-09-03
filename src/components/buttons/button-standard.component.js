import BaseComponent from "../../core/base-component";

class ButtonStandardComponent extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        const that = this;
        setTimeout(() => {
            super.connectedCallback();
            this.addEventListener('click', this.onClick);
        }, 0);
    }

    templateHTML() {
        return `
            <button class="pr-button pr-button--standard">
                ${this.attributes?.content.value}
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
                  padding: 10px 50px;
                  margin: 5px;
                  cursor: pointer;
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

    initComponent() {
    }

    onClick() {
        console.log('clicked');
    }
}

export default ButtonStandardComponent;