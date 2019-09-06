import { html, css, LitElement } from 'lit-element';
import '../../lit-button/lit-button.js'

export class LitHero extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        align-items: center;
        justify-content: center;
        min-height: var(--hero-height);
        position: relative;
        overflow: hidden;
        padding: 124px var(--gutter) 62px;
      }

      :host::after {
        content: '';
        top: 0;
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: var(--background);
      }

      :host > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .hero__inner {
        position:relative;
        height: 100%;
        z-index: var(--foreground);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h1 {
        color: #fff;
        font-size: 64px;
        font-family: var(--sans-serif);
      }

      svg {
        max-width: 240px;
        max-height: 240px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      logo: { type: Function },
    };
  }

  constructor() {
    super();
    this.title = 'Hello world!';
    this.logo = html``;
  }

  render() {
    return html`
      <img src="https://picsum.photos/1600/900/?blur"></img>
      <div class="hero__inner">
        ${this.logo}
        <h1>${this.title}</h1>
        <lit-button
          .isLink = ${true}
        >Lorem Ipsum</lit-button>
      </div>
      </a>
    `;
  }
}
