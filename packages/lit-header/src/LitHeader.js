import { html, css, LitElement} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map.js';

export class LitHeader extends LitElement {
  static get styles() {
    return css`
      header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: calc(var(--v-space) / 2);
        position: relative;
        z-index: var(--foreground);
      }

      .heading,
      .sub-heading {
        font-family: var(--sans-serif);
        text-align: center;
        margin: 0;
      }

      .heading {
        line-height: 1em;
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      .sub-heading {
        max-width: 400px;
        color: #777;
      }
    `;
  }

  constructor() {
    super();
    this.heading = null;
    this.subHeading = null;
  }

  render() {
    return html`
      <header>
      	<h2 class="heading">${this.heading}</h2>
        <p class="sub-heading">${this.subHeading}</p>
      </button>
    `;
  }
}
