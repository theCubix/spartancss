import { html } from 'lit-html'
import "@webcomponents/template"

const heroSection = () => html`
  <section class="section is-fullheight is-center">
    <div class="container">
      <h1 class="title is-1 has-margin">SpartanCSS.io</h1>
      <ul class="list">
        <li>a css collection</li>
        <li>reduced to the minimum</li>
        <li>with little <span class="underlined">sparks of colour</span></li>
      </ul>
    </div>
  </section>
`

export default heroSection;
