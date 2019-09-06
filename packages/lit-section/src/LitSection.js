import { html, css, LitElement } from 'lit-element';
import {classMap} from 'lit-html/directives/class-map.js';

export class LitSection extends LitElement {
  static get styles() {
    return css`
      .section {
        padding: var(--v-space) calc(var(--gutter) / 2);
        background-color: #fff;
        position: relative;
        overflow: hidden;
      }

      .section__inner {
        max-width: 1200px;
        margin: auto;
      }

      .section--secondary {
        background-color: #efefef;
      }

      .section--tertiary {
        background-color: #000;
        background-image: url('https://picsum.photos/1600/900');
        background-size: cover;
        color: #fff;
      }

      .section--tertiary::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0, 0.8);
        z-index: var(--background);
      }
    `;
  }

  constructor() {
    super();
    this.isSecondary = false;
    this.isTertiary = false
  }

  render() {
    return html`
      <section class='section ${classMap({'section--secondary': this.isSecondary, 'section--tertiary': this.isTertiary})}'>
        <div class='section__inner'>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
