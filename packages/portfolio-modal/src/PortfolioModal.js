import { html, css, LitElement } from 'lit-element';
import { Glasses } from '../../assets/glasses.js';

export class PortfolioModal extends LitElement {
  static get styles() {
    return css`
      .portfolio-modal__trigger {
        display: flex;
        flex-direction: column;
        min-height: 400px;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        flex: 1;
      }

      button:hover {
        cursor: pointer;
      }

      button::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0; 
        background-color: var(--color-primary);
        z-index: 2;
        transition: opacity 0.2s ease-in-out;
      }

      button:hover::after {
        opacity: 0.8;
      }

      svg {
        fill: #fff;
        position: absolute;
        display: inline-block;
        max-height: 100px;
        max-width: 100px;
        z-index: 3;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }

      button:hover svg {
        opacity: 1;
      }

      button img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      .portfolio-modal__trigger__content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: calc(var(--gutter) / 2);
      }

      .portfolio-modal__trigger__content h2 {
        font-family: var(--sans-serif);
        margin: 0;
        margin-bottom: 16px;
      }

      .portfolio-modal__trigger__content span {
        font-style: italic;
        font-weight: light;
        opacity: 0.6;
      }

      .portfolio-modal {
        display: block;
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: auto;
        background-color: rgba(0,0,0,0.1);
        padding: var(--gutter);
        z-index: 5;
      }

      .portfolio-modal__inner {
        background-color: #efefef;
      }
    `;
  }

  static get properties() {
    return {
      modalOpen: { type: Boolean },
      // imageSrc: { type: String }
    };
  }

  constructor() {
    super();
    this.imageSrc = '';
    this.title = '';
    this.projectName = '';
    this.category = '';
    this.subheading = '';
    this.modalOpen = false;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <div class='portfolio-modal__trigger'>
      <button aria-label = ${this.projectName}>
        <img src=${this.imageSrc}></img>
        <svg viewBox="0 0 39 25" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 25a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM28.5 25a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"/><path d="M4.034 12a1 1 0 0 1 0 2H1c-.872 0-1.326-1.038-.734-1.679l11.094-12a1 1 0 0 1 .915-.304c.265.048.586.175.904.435.864.705 1.08 1.916.48 3.487a1 1 0 1 1-1.868-.714c.091-.24.15-.446.181-.62L3.286 12h.748zM21.337 16.045a1 1 0 0 1-.877 1.797 2.797 2.797 0 0 0-2.44 0 1 1 0 1 1-.877-1.797 4.797 4.797 0 0 1 4.194 0zM27.21 3.225a1 1 0 1 1-1.869.714c-.6-1.571-.384-2.782.48-3.487.318-.26.639-.387.904-.435a1 1 0 0 1 .915.304l11.094 12c.592.64.138 1.679-.734 1.679h-3.034a1 1 0 0 1 0-2h.748l-8.686-9.395c.031.174.09.38.181.62z"/></svg>
      </button>
      <div class='portfolio-modal__trigger__content'>
        <h2>${this.title}</h2>
        <span>${this.category}</span>
      </div>
    </div>
    <div class='portfolio-modal'>
      <div class='portfolio-modal__inner'>
        <h2>${this.projectName}</h2>
        <span>${this.subheading}</span>
        <img src=${this.imageSrc} alt=${this.projectName}></img>
        <p>${this.description}</p>
        <span>Date: ${this.date}</span>
        <span>Client: ${this.client}</span>
        <span>Category: ${this.category}</span>
      </div>
    </div>
     
    `;
  }
}
