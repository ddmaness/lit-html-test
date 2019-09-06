import { html, css, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

export class ServicesExcerpt extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .icon {
        height: 140px;
        width: 140px;
        background-color: var(--color-secondary--dark);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg {
        stroke: #fff;
        fill: #fff;
        height: 80px;
        width: 80px;
      }
    `;
  }

  static get properties() {
    return {
      icon: { type: Object },
      heading: { type: String },
      content: { type: String },
    };
  }
  
  constructor() {
    super();
    this.heading = null;
    this.content = null;
    this.icon = {};
  }

  render() {
    return html`
        <div class='icon'>
          ${this.icon}
        </div>
        <h2>${this.heading}</h2>
        <p>${this.content}</p>
        ${this.icon.test2}
    `;
  }
}
