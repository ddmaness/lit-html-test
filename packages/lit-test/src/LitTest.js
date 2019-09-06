import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { Logo } from './logo.js';
import { Doctor } from '../../assets/doctor.js';
import { Glasses } from '../../assets/glasses.js';
import { Building } from '../../assets/building.js';

import { smoothScroll } from '../../util/smoothScroll.js';

import '../../page-main/page-main.js';
import '../../lit-hero/lit-hero.js';
import '../../lit-section/lit-section.js';
import '../../lit-header/lit-header.js';
import '../../content-triplet/content-triplet.js';
import '../../services-excerpt/services-excerpt.js'
import '../../portfolio-modal/portfolio-modal.js'

export class LitTest extends LitElement {
  static get properties() {
    return {
      scrolled: { type: Boolean },
      activeSection: { type: String }
    };
  }

  constructor() {
    super();
    
    const styles = getComputedStyle(document.documentElement);
    this.scrolled = false;
    this.sections = [];
    this.activeSection = null;
    this.headerHeight = 84;

    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 100
      this.sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= this.headerHeight + 10) {
          this.activeSection = section.id;
        }
      })
    })
  }

  firstUpdated() {
    this.sections = this.shadowRoot.querySelectorAll('lit-section');
  }

  __addActiveIf(href) {
    return classMap({ active: this.activeSection === href });
  }

  __scrollPage(e) {
    const targetSection = this.shadowRoot.querySelector(e.target.getAttribute('href'));
    smoothScroll(targetSection, {offset: this.headerHeight});
  }

  render() {
    return html`
      <header class="header ${classMap({scrolled : this.scrolled})}">
        <div class="header__inner">
          <a href='#' class='logo ${classMap({scrolled : this.scrolled})}'>
            ${Logo}
          </a>
          <nav>
            <ul>
              <li>
                <a href="#services" class=${this.__addActiveIf('services')} @click=${this.__scrollPage}
                  >Services</a
                >
              </li>
              <li>
                <a href="#portfolio" class=${this.__addActiveIf('portfolio')} @click=${this.__scrollPage}
                  >Portfolio</a
                >
              </li>
              <li>
                <a href="#about" class=${this.__addActiveIf('about')} @click=${this.__scrollPage}
                  >About</a
                >
              </li>
              <li>
                <a href="#Team" class=${this.__addActiveIf('team')} @click=${this.__scrollPage}
                  >Team</a
                >
              </li>
              <li>
                <a href="#Contact" class=${this.__addActiveIf('contact')} @click=${this.__scrollPage}
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <lit-hero
        .logo=${Logo}
      ></lit-hero>
      <main>
        <lit-section id='services'>
          
          <lit-header
            .heading=${'Services'}
            .subHeading=${'Lorem ipsum dolor sit amet consectetur.'} 
          ></lit-header>
          
          <content-triplet>

            <services-excerpt
              .icon=${Building}
              .heading= ${'Aliqua elit cillum sunt.'}
              .content= ${'Sed nulla cillum velit culpa tempor dolor exercitation nulla anim elit sint ad veniam commodo pariatur aute non.'}
            ></services-excerpt>

            <services-excerpt
              .icon=${Doctor}
              .heading=${'Deserunt ut.'}
              .content=${'Lorem ipsum fugiat et est occaecat adipisicing veniam cillum culpa quis ullamco id.'}
            ></services-excerpt>

            <services-excerpt
              .icon=${Glasses}
              .heading=${'Fugiat qui in.'}
              .content=${'Sit tempor dolor ut sunt ad amet eiusmod ut commodo ut reprehenderit et veniam irure quis ex dolor dolore esse dolore consequat minim laboris fugiat nisi deserunt ullamco.'}
            ></services-excerpt>
          
          </content-triplet>

        </lit-section>

        <lit-section id='portfolio'
        .isSecondary = ${true}>
          
          <lit-header
            .heading=${'Portfolio'}
            .subHeading=${'Lorem ipsum dolor sit amet consectetur.'} 
          ></lit-header>
          <content-triplet>
            
            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>
            
            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>

            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>
           
            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>

            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>

            <portfolio-modal
              .imageSrc=${'https://picsum.photos/200'}
              .title=${'Lorem'}
              .category=${'Lorem Ipsum Dolor'}
              ></portfolio-modal>
          
          </content-triplet>
        </lit-section>

        <lit-section>
          <lit-header
            .heading=${'About'}
            .subHeading=${'Lorem ipsum dolor sit amet consectetur.'} 
          ></lit-header>
        </lit-section>

        <lit-section
        .isSecondary = ${true}>
          <lit-header
            .heading=${'Team'}
            .subHeading=${'Lorem ipsum dolor sit amet consectetur.'} 
          ></lit-header>
        </lit-section>
        
        <lit-section
        .isTertiary = ${true}>
          <lit-header
            .heading=${'Team'}
            .subHeading=${'Lorem ipsum dolor sit amet consectetur.'} 
          ></lit-header>
        </lit-section>
      </main>

      <p class="app-footer">
        Bootstrapped from
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc's boilerplate code</a>. 
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a>
      </p>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
        }

        .header {
          position: fixed;
          display: block;
          z-index: var(--global-hero);
          width: 100%;
          background-color: transparent;
          padding: calc(var(--gutter) / 2);
          transition: all 0.2s ease-in-out;
        }

        .header.scrolled {
          background-color: var(--color-primary--dark);
          padding: 0 calc(var(--gutter) / 2);
        }

        .header svg{
          min-width: 80px;
          min-height: 80px;
        }

        .header .logo {
          transition: transform 0.2s ease-in-out;
        }

        .header.scrolled .logo {
          transform: scale(0.5);
        }

        .header ul {
          display: flex;
          justify-content: space-between;
          min-width: 400px;
        }

        .header ul li {
          display: flex;
        }

        .header ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          line-height: 36px;
          font-family: var(--sans-serif);
          font-weight: light;
          letter-spacing: .05em;
          opacity: 0.6;
        }

        .header ul li:not(:last-of-type) a {
          margin-right: calc(var(--gutter) / 2);
        }

        .header ul li a:hover,
        .header ul li a.active {
          opacity: 1;
        }

        .header__inner {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
        }

        .header nav {
          display: flex;
          align-items: center;
        }

        .app-footer {
          padding: var(--gutter);
          color: #a8a8a8;
          font-size: calc(12px + 0.5vmin);
        }

        .app-footer a {
          text-decoration: none;
          color: var(--color-primary);
          margin-left: 5px;
        }
      `,
    ];
  }
}
