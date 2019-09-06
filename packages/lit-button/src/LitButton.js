import { html, css, LitElement} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map.js';

export class LitButton extends LitElement {
  static get styles() {
    return css`
      a, button {
      	display: inline-block;
      	color: #fff;
      	border: none;
        background-color: var(--color-primary);
        transition: background-color var(--transition-time) ease-in-out;
        text-decoration: none;
        font-family: var(--sans-serif);
        font-weight: bold;
        font-size: 20px;
        padding: 20px 40px;
        border-radius: 5px;
      }

      a:hover, button:hover {
      	background-color: var(--color-primary--dark);
      	cursor: pointer;
      }

      .secondary {
      	background-color: var(--color-secondary)
      }

      .secondary:hover {
      	background-color: var(--color-secondary--dark)
      }
    `;
  }
  
  constructor() {
    super();
    this.isLink = false;
    this.href = '#'
    this.isSecondary = false;
  }

  render() {
  	if (this.isLink) {
  		return html`
  		<a class=${classMap({secondary: this.isSecondary})} href = ${this.href}>
  			<slot></slot>
  		</a>
  	`;
  	}
    return html`
      <button class=${classMap({secondary: this.isSecondary})}>
      	<slot></slot>
      </button>
    `;
  }
}
