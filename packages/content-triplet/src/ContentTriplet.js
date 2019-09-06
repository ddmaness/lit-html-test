import { html, css, LitElement} from 'lit-element';

export class ContentTriplet extends LitElement {
  static get styles() {
    return css`
    	/* takes n number of 'display: block' elements */
    	.content-triplet {
    		display: block;
    	}

    	@media screen and (min-width: 900px) {
    		.content-triplet {
    			display: grid;
                grid-gap: var(--gutter);
    			grid-template-columns: repeat(3, 1fr);
    		}
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
    return html`
    	<div class="content-triplet">
    		<slot></slot>
    	</div>
    `;
  }
}
