import {handleErrors} from "../../core/utils";
import BaseComponent from "../../core/base-component";
import DOMPurify from "isomorphic-dompurify";

class BoxPictureInfoComponent extends BaseComponent {
    content = {
        title: '',
        subtitle: '',
        text: '',
    };
    image = {
        src: '',
        dir: ''
    }
    attrs = {
        imageSrc: 'imageSrc',
        imageDir: 'dir',
        contentTitle: 'contentTitle',
        contentSubTitle: 'contentSubTitle',
        contentText: 'contentText',
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
            this.image.src = this.attributes[this.attrs.imageSrc]?.value;
            this.image.dir = this.attributes[this.attrs.imageDir]?.value || 'img-txt';
            this.content.title = this.attributes[this.attrs.contentTitle]?.value;
            this.content.subtitle = this.attributes[this.attrs.contentSubTitle]?.value;
            this.content.text = this.attributes[this.attrs.contentText]?.value;
            
            if (!this.image.src) {
                handleErrors(`[${this.constructor.name}] You must send path image through ${this.attrs.imageSrc} `);
                return;
            }
            if(!this.content.title) {
                handleErrors(`[${this.constructor.name}] You must send title through ${this.attrs.contentTitle} `);
                return;
            }
            if(!this.content.text) {
                handleErrors(`[${this.constructor.name}] You must send content text through ${this.attrs.contentText} `);
                return;
            }
            
            return `<div class="pr-box-pic-info ${DOMPurify.sanitize(this.image.dir)}">
                        <div class="pr-box-pic-info__image" 
                             style="background-image: url(${this.image.src})"></div>
                        <div class="pr-box-pic-info__content">
                            <div class="pr-box-pic-info__content--wrapper">
                                <h3 class="pr-box-pic-info__content--subtitle">${(this.content.subtitle) ? DOMPurify.sanitize(this.content.subtitle) : ''}</h3>
                                <h1 class="pr-box-pic-info__content--title">${DOMPurify.sanitize(this.content.title)}</h1>
                                <p class="pr-box-pic-info__content--text">
                                    ${DOMPurify.sanitize(this.content.text)}
                                </p>
                            </div>
                        </div>
                    </div>`;
        } catch(e) {
            handleErrors(e);
        }
    }

    templateStyle() {
        return `
          <style>
              a.pr-link {
                color: var(--cian) !important;
              }
              .pr-box-pic-info {
                position: relative;
                display: flex;
                width: 100%;
                height: 250px;
                font-family: 'Montserrat-Regular', serif;  
              }
              .pr-box-pic-info.img-txt {
                flex-direction: row;              
              }
              .pr-box-pic-info.txt-img {
                flex-direction: row-reverse;              
              }
              .pr-box-pic-info__image {
                width: 50%;
                height: 100%;
                display: block;
                /*background-image: url('/static/assets/images/code.svg');*/
                background-repeat: no-repeat;
                background-size: cover;
              }
              .pr-box-pic-info__image img{
                width: 100%;
                display: block;
              }
              .pr-box-pic-info__content {
                width: 50%;
                display: block;
                background-color: var(--blackBlue);
                overflow-y: auto;
                height: 100%;
              }
              .pr-box-pic-info__content--wrapper {
                padding: 30px;
              }
              .pr-box-pic-info__content--title {
                font-size: 30px;
                font-weight: 500;
                margin: 0;
                padding: 0;
                color: var(--cian);
                font-family: 'Montserrat-Bold', serif;
              }
              .pr-box-pic-info__content--subtitle {
                font-size: 18px;
                margin: 0;
                color: var(--white);
              }
              .pr-box-pic-info__content--text {
                display: block;
              }
              @media (max-width: 768px) {
                .pr-box-pic-info {
                    flex-direction: column;
                    height: 600px;
                }
                .pr-box-pic-info__content, .pr-box-pic-info__image {
                    width: 100%;
                }
                .pr-box-pic-info.img-txt {
                    flex-direction: column;              
                }
                  .pr-box-pic-info.txt-img {
                    flex-direction: column-reverse;              
                  }
              }
          </style>
        `;
    }
}

export default BoxPictureInfoComponent;